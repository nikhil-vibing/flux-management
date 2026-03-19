# Flux Management Portal — External API Safety Guidelines

> Mandatory reading before writing any integration code.

---

## The Golden Rule

**The management portal is a READ-ONLY consumer of all external APIs, with two exceptions:**

1. **Microsoft Planner** — `Tasks.ReadWrite.All` for task create/update/delete
2. **Outlook Mail** — `Mail.Send` for notification emails

Everything else is read-only. External systems (Atera, SharePoint) are the source of truth. Data flows **one way** into PostgreSQL via existing sync jobs.

---

## Atera API

### Permissions
- **READ ONLY** — `GET` requests only
- The management portal does NOT write to Atera
- All ticket data comes from the shared database (populated by existing sync jobs)

### The Management Portal Does NOT Call Atera Directly
- Tickets are already in PostgreSQL (synced every 5 minutes by client portal's Azure Functions)
- Management portal reads from the `tickets`, `ticket_activities`, `ticket_attachments` tables
- No Atera API client needed in the management portal codebase

---

## Microsoft Graph API

### Read Operations (via existing sync jobs)
- `Tasks.Read.All` → Projects and tasks (Planner) — already synced to DB
- `Sites.Read.All` → Documents (SharePoint) — already synced to DB
- `Group.Read.All` → M365 Groups for Planner plan discovery

### Write Operations (NEW for management portal)

**Planner Task Write-Back:**
- `POST /planner/tasks` — Create task
- `PATCH /planner/tasks/{id}` — Update task (status, assignee, due date)
- `DELETE /planner/tasks/{id}` — Delete task
- Requires: `Tasks.ReadWrite.All` permission

**Rules for Planner writes:**
1. Always write to PostgreSQL FIRST (immediate visibility)
2. Push to Planner in background (non-blocking)
3. If Planner write fails: log error, do NOT rollback the DB write
4. Next sync cycle (15 min) will reconcile any drift
5. Never modify Planner plans, buckets, or plan metadata — only tasks
6. Never delete plans or buckets — only individual tasks

**Outlook Mail:**
- `POST /users/{userId}/sendMail` — Send notification emails
- Requires: `Mail.Send` permission
- Only send to Flux employees and known client contacts
- Never send bulk/marketing emails via this channel

---

## Claude API

### Usage
- Per-request calls — no background sync
- Context injected from database queries (cross-org)
- Responses are NOT stored as source of truth — only in conversation history

### Safety Rules
1. Never send raw database credentials or API keys in the prompt
2. Sanitize data before injection — remove any PII beyond what's needed for context
3. AI responses include disclaimer: "Verify critical information"
4. Rate limit: 20 requests/min per user
5. Never execute code or SQL suggested by Claude — it's a conversation tool only

---

## Contact Form Webhook (Inbound)

### From flux-app → Management Portal
- `POST /api/contact-submissions/webhook`
- Authenticated via `X-API-Secret` header
- The management portal RECEIVES data — it does not push to flux-app

### Safety Rules
1. Validate all fields with Zod schema
2. Sanitize text inputs (name, company, message)
3. Rate limit: 10/min per API key
4. Store raw submission — do not modify or enhance
5. Never send acknowledgment emails to the submitter from this webhook (that's flux-app's job)

---

## Data Flow Summary

```
EXTERNAL → DATABASE (via existing sync jobs):
  Atera tickets → tickets table (every 5 min)
  Planner tasks → project_tasks table (every 15 min)
  SharePoint docs → documents table (every 30 min)

DATABASE → EXTERNAL (new for management portal):
  Task create/update/delete → Planner (background, non-blocking)
  Notification emails → Outlook (on trigger)

EXTERNAL → DATABASE (new webhook):
  flux-app contact form → contact_form_submissions table

DATABASE → CLAUDE → DATABASE:
  DB context → Claude API → ai_messages table (conversation history only)
```

---

## Error Handling for External API Calls

### Planner Write-Back
```typescript
try {
  await createPlannerTask(planId, taskData);
} catch (error) {
  // Log error but do NOT throw — DB write already succeeded
  console.error('Planner write-back failed:', error.message);
  // Optionally: create a system notification for admins
}
```

### Mail Send
```typescript
try {
  await sendNotificationEmail(recipient, subject, body);
} catch (error) {
  // Log error but do NOT throw — notification is best-effort
  console.error('Email send failed:', error.message);
}
```

### General Rules
1. External API failures should NEVER block user actions
2. Always log failures with enough context to debug
3. Never retry in a tight loop — use exponential backoff or let the next sync handle it
4. Never expose external API error details to the user
