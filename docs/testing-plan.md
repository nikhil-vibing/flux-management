# Flux Management Portal — Testing Plan

> **Every step must be verified before moving to the next.**
> After each phase, run the full phase test suite before proceeding.
>
> **Reference docs:**
> - `backend-plan.md` (BP) — Architecture, schema, API routes, test strategy (§10)
> - `security-and-operations.md` (SO) — Security rules, test data isolation (§11)
> - `external-api-safety.md` (EA) — External API rules
> - `implementation-plan.md` (IP) — Step-by-step build plan

---

## CRITICAL: Test Data Isolation

> **This database contains real client data from a production IT firm.**
> Read SO §11 (all 13 rules) before writing any test. No exceptions.

### The Test Organization

All tests operate within a single test org. Real client data is NEVER touched.

| Constant | Value | Purpose |
|----------|-------|---------|
| `TEST_ORG_ID` | `00000000-0000-0000-0000-000000000099` | Test organization UUID |
| `TEST_CEO_ID` | `00000000-0000-0000-0000-000000000001` | Test co-ceo user |
| `TEST_DIRECTOR_ID` | `00000000-0000-0000-0000-000000000002` | Test director user |
| `TEST_EMPLOYEE_ID` | `00000000-0000-0000-0000-000000000003` | Test employee user |
| `TEST_CLIENT_ID` | `00000000-0000-0000-0000-000000000004` | Test client user |
| `TEST_EMAIL_DOMAIN` | `@test.flux.internal` | Test email domain |

### Golden Rules for Every Test

1. **ONLY write to test org** — every INSERT uses `organization_id = TEST_ORG_ID`
2. **ONLY use test users** — every user reference uses `TEST_*_ID` constants
3. **ONLY use test emails** — every email uses `@test.flux.internal`
4. **Use `assertTestOrg()` guard** before any write operation
5. **NEVER reference real org IDs, user IDs, or emails in test code**
6. **NEVER use `TRUNCATE`** — always `DELETE WHERE organization_id = TEST_ORG_ID`
7. **Read real data is OK** — tests can SELECT from real orgs to verify cross-org queries work

### Test Lifecycle

```
npm test
├── Global Setup
│   ├── cleanup() — remove any leftover test data from previous run
│   └── seed()   — insert test org + users + seed data
├── All Tests Run
│   └── Full CRUD freedom within test org scope
└── Global Teardown
    └── cleanup() — remove all test data, leave database clean
```

---

## Test File Structure

```
src/__tests__/
├── test-constants.ts              # UUIDs, email domain (import in every test)
├── seed-test-data.ts              # Creates test org + all test data
├── cleanup.ts                     # Deletes all test data (FK order)
├── guards.ts                      # assertTestOrg(), assertTestUser(), assertTestEmail()
├── setup.ts                       # Global: cleanup → seed
├── teardown.ts                    # Global: cleanup
├── helpers.ts                     # createAuthRequest(), createTestJWT()
├── phase-1/
│   ├── db-connection.test.ts
│   ├── migrations.test.ts
│   └── seed.test.ts
├── phase-2/
│   ├── azure-ad.test.ts
│   ├── session.test.ts
│   ├── middleware.test.ts
│   └── auth-routes.test.ts
├── phase-3/
│   ├── clients.test.ts
│   ├── tickets.test.ts
│   ├── projects.test.ts
│   ├── team.test.ts
│   ├── reports.test.ts
│   ├── ai.test.ts
│   ├── notifications.test.ts
│   ├── contact-submissions.test.ts
│   └── activity-log.test.ts
├── phase-4/
│   ├── dashboard-api.test.ts
│   ├── clients-api.test.ts
│   ├── tickets-api.test.ts
│   ├── projects-api.test.ts
│   ├── team-api.test.ts
│   ├── reports-api.test.ts
│   ├── ai-api.test.ts
│   ├── notifications-api.test.ts
│   ├── contact-submissions-api.test.ts
│   └── settings-api.test.ts
├── phase-5/
│   ├── planner-write.test.ts
│   ├── claude-context.test.ts
│   ├── mail-sender.test.ts
│   └── contact-webhook.test.ts
├── phase-7/
│   ├── rate-limiting.test.ts
│   ├── role-access.test.ts
│   ├── input-validation.test.ts
│   ├── audit-logging.test.ts
│   └── is-active-filter.test.ts
└── integration/
    └── cross-portal.test.ts
```

---

## Phase 0 — Pre-Implementation Setup

### Step 0.1–0.4: Environment Checks
```bash
# Branch
git branch --show-current  # → feat/backend-implementation

# Dependencies
node -e "require('pg'); require('jose'); require('zod'); console.log('OK')"

# .env.local exists and gitignored
test -f .env.local && git check-ignore .env.local && echo "OK"

# Folder structure
for dir in src/lib/db src/lib/auth src/lib/api src/lib/validators src/__tests__; do
  test -d "$dir" && echo "OK: $dir" || echo "MISSING: $dir"
done

# Build passes
npm run build
```

### Step 0.5: Types
```bash
# New types exported
grep "AuthUser\|ClientProfile\|ActivityLogEntry" src/types/index.ts
npm run build
```

### Step 0.6: Test Infrastructure
```
[ ] test-constants.ts has all 6 constants
[ ] seed-test-data.ts creates test org with is_active = false
[ ] seed-test-data.ts creates 4 test users with correct roles and @test.flux.internal emails
[ ] seed-test-data.ts uses ON CONFLICT DO NOTHING (idempotent)
[ ] cleanup.ts deletes in correct FK order (SO §11 Rule 10)
[ ] cleanup.ts NEVER deletes the test org row itself
[ ] cleanup.ts NEVER uses TRUNCATE
[ ] guards.ts throws on non-test org ID
[ ] guards.ts throws on non-test user ID
[ ] guards.ts throws on non-test email
[ ] npm run test:seed → test data created
[ ] npm run test:cleanup → test data removed, test org remains
[ ] npm test → setup/teardown cycle works
[ ] Real data unaffected after test run (spot check: SELECT COUNT(*) FROM tickets WHERE organization_id != TEST_ORG_ID)
```

### Phase 0 Checklist
```
[ ] Branch, deps, env, scaffold, types all verified
[ ] Test infrastructure fully functional
[ ] Seed creates test org + users + data
[ ] Cleanup removes all test data
[ ] Guards catch non-test org/user/email references
[ ] Real data verified intact after test run
[ ] npm run build passes
```

---

## Phase 1 — Database Foundation

### Step 1.1: DB Connection
```typescript
// phase-1/db-connection.test.ts — all reads, no writes to real data

describe('Database Connection', () => {
  it('connects successfully', async () => {
    const result = await pool.query('SELECT 1 AS ok');
    expect(result.rows[0].ok).toBe(1);
  });

  it('can read existing tables', async () => {
    const result = await pool.query("SELECT COUNT(*) FROM organizations WHERE is_active = true");
    expect(parseInt(result.rows[0].count)).toBeGreaterThan(0);
  });

  it('does not export withOrgScope', async () => {
    const mod = await import('@/lib/db/client');
    expect(mod).not.toHaveProperty('withOrgScope');
  });
});
```

### Step 1.2: Migrations
```typescript
// phase-1/migrations.test.ts — schema verification only (no writes)

describe('Management Tables', () => {
  const TABLES = ['client_profiles', 'team_members', 'internal_notes',
    'activity_log', 'report_snapshots', 'contact_form_submissions', 'management_notifications'];

  it.each(TABLES)('table "%s" exists', async (table) => {
    const r = await pool.query(
      "SELECT 1 FROM information_schema.tables WHERE table_name = $1", [table]);
    expect(r.rows.length).toBe(1);
  });

  it('CHECK constraints enforce valid values', async () => {
    // Test using TEST_ORG_ID — write only to test org
    await expect(pool.query(
      "INSERT INTO client_profiles (organization_id, contract_status) VALUES ($1, 'invalid')",
      [TEST_ORG_ID]
    )).rejects.toThrow();
  });

  it('existing client portal tables unaffected', async () => {
    const r = await pool.query("SELECT COUNT(*) FROM tickets WHERE organization_id != $1", [TEST_ORG_ID]);
    expect(parseInt(r.rows[0].count)).toBeGreaterThan(0); // Real tickets still exist
  });
});
```

### Step 1.3: Extended Roles
```typescript
it('users table accepts co-ceo role', async () => {
  const r = await pool.query(
    "SELECT pg_get_constraintdef(oid) FROM pg_constraint WHERE conrelid = 'users'::regclass AND conname = 'users_role_check'");
  expect(r.rows[0].pg_get_constraintdef).toContain('co-ceo');
});
```

### Step 1.4: Production Seed
```
[ ] Production seed creates real management users (Brandon Devier, etc.)
[ ] Production seed does NOT contain test org or @test.flux.internal emails → SO §11 Rule 12
[ ] npm run db:seed works
```

### Step 1.5: Test Infrastructure + New Tables
```
[ ] Test seed creates data in all 7 new management tables
[ ] Test cleanup removes data from all 7 new tables
[ ] Real seed data NOT deleted by test cleanup
[ ] npm test passes with new tables
```

### Phase 1 Checklist
```
[ ] DB connection works, no withOrgScope
[ ] All 7 management tables exist with correct columns
[ ] CHECK constraints enforced
[ ] Indexes created
[ ] Users table accepts co-ceo role
[ ] Production seed has real users, NO test data
[ ] Test seed has test data, NO real users
[ ] Existing client portal tables unaffected
[ ] npm run build passes
```

---

## Phase 2 — Authentication

### Step 2.1–2.2: Azure AD + JWT
```typescript
// phase-2/session.test.ts

describe('JWT Session', () => {
  it('creates valid token with management fields', async () => {
    const token = await createSession({
      userId: TEST_CEO_ID, email: 'test-ceo@test.flux.internal',
      name: 'Test CEO', role: 'co-ceo'
    });
    const payload = await verifySession(token);
    expect(payload.role).toBe('co-ceo');
    expect(payload).not.toHaveProperty('organizationId'); // No org in management JWT
  });

  it('cookie name is flux-management-session', () => {
    expect(COOKIE_NAME).toBe('flux-management-session');
  });

  it('expires after 24h', async () => {
    const token = await createSession({ userId: TEST_CEO_ID, email: 'test-ceo@test.flux.internal', name: 'Test CEO', role: 'co-ceo' });
    const p = await verifySession(token);
    expect(p.exp! - p.iat!).toBe(86400);
  });

  it('rejects tampered tokens', async () => {
    const token = await createSession({ userId: TEST_CEO_ID, email: 'test-ceo@test.flux.internal', name: 'Test CEO', role: 'co-ceo' });
    await expect(verifySession(token + 'tampered')).rejects.toThrow();
  });
});
```

### Step 2.3: Middleware
```typescript
// phase-2/middleware.test.ts
// Uses test user IDs for auth tokens — NEVER real user IDs

describe('withManagementAuth', () => {
  it('allows co-ceo', async () => {
    const req = await createAuthRequest(TEST_CEO_ID, 'co-ceo');
    const res = await withManagementAuth(req, async (ctx) => {
      expect(ctx.user.role).toBe('co-ceo');
      return new Response('OK');
    });
    expect(res.status).toBe(200);
  });

  it('blocks client role', async () => {
    const req = await createAuthRequest(TEST_CLIENT_ID, 'client');
    const res = await withManagementAuth(req, async () => new Response('OK'));
    expect(res.status).toBe(403);
  });

  it('returns 401 without cookie', async () => {
    const req = new NextRequest('http://localhost/api/test');
    const res = await withManagementAuth(req, async () => new Response('OK'));
    expect(res.status).toBe(401);
  });

  it('error messages are generic (no role details)', async () => {
    const req = await createAuthRequest(TEST_CLIENT_ID, 'client');
    const res = await withManagementAuth(req, async () => new Response('OK'));
    const body = await res.json();
    expect(body.error.message).not.toContain('client');
    expect(body.error.message).not.toContain('co-ceo');
  });
});

describe('withRole', () => {
  it('co-ceo passes co-ceo/director gate', async () => { /* 200 */ });
  it('director passes co-ceo/director gate', async () => { /* 200 */ });
  it('employee blocked from co-ceo/director gate', async () => { /* 403 */ });
});
```

### Step 2.4–2.6: Routes + Login
```
[ ] /api/auth/login redirects to Azure AD
[ ] /api/auth/logout clears flux-management-session cookie
[ ] /api/auth/me returns user info (no organizationId)
[ ] /api/auth/me returns 401 without cookie
[ ] Portal routes redirect to /login without session
[ ] Security headers present (5 headers)
```

### Phase 2 Checklist
```
[ ] Azure AD URL valid with PKCE, management app client ID
[ ] JWT has userId, email, name, role — NO organizationId
[ ] Cookie name is flux-management-session
[ ] withManagementAuth: allows co-ceo/director/employee, blocks client
[ ] withRole: blocks employees from restricted routes
[ ] Error messages generic (no internal details)
[ ] Auth routes work end-to-end
[ ] Route protection redirects to /login
[ ] Security headers present
[ ] All tests use TEST_*_ID constants — no real user IDs
```

---

## Phase 3 — Database Query Modules

> **All query tests write to test org only.** Every INSERT uses `TEST_ORG_ID`.
> Cross-org reads are allowed (proves management queries see all orgs).

### Standard Test Pattern
```typescript
import { TEST_ORG_ID, TEST_CEO_ID } from '../test-constants';
import { assertTestOrg } from '../guards';

describe('{Module} Queries', () => {
  // Write tests: always scope to test org
  it('creates record in test org', async () => {
    assertTestOrg(TEST_ORG_ID); // Guard
    await createSomething({ organizationId: TEST_ORG_ID, ... });
  });

  // Read tests: can verify cross-org visibility
  it('cross-org query returns test org + real orgs', async () => {
    const result = await listAll();
    const orgIds = [...new Set(result.map(r => r.organizationId))];
    expect(orgIds.length).toBeGreaterThan(1); // Sees multiple orgs
    expect(orgIds).toContain(TEST_ORG_ID); // Including test org
  });
});
```

### Per-Module Test Checklist

#### 3.1: clients.ts
```
[ ] listClients() returns real + test orgs (cross-org works)
[ ] listClients() filters by industry, health, contractStatus, search
[ ] listClients() includes WHERE o.is_active = true → test org excluded from filtered list
[ ] getClient(TEST_ORG_ID) returns test org detail
[ ] updateClientProfile(TEST_ORG_ID, data) updates and returns
[ ] updateClientProfile() — only writes to test org (guard check)
[ ] getClientStats(TEST_ORG_ID, '30d') returns time-range data
```

#### 3.2: tickets.ts
```
[ ] listTickets() returns tickets from multiple orgs (cross-org)
[ ] listTickets({ clientId: TEST_ORG_ID }) filters to test org
[ ] listTickets() filters: status, priority, assignee, search, sort
[ ] listTickets() pagination: page, limit, total, totalPages correct
[ ] getTicket(testTicketId) returns ticket with activity + internal_notes
[ ] getTicketStats() cross-org with is_active filter
[ ] getTicketChartData(TEST_ORG_ID, '30d') returns chart data
```

#### 3.3: projects.ts
```
[ ] listProjects() returns projects from multiple orgs
[ ] getProject(testProjectId) returns detail with tasks
[ ] getProjectStats() cross-org with is_active filter
[ ] createTask(testProjectId, data) — inserts with TEST_ORG_ID
[ ] createTask() — assertTestOrg() guard prevents non-test org writes
[ ] updateTask(testTaskId, data) — updates status, assignee
[ ] deleteTask(testTaskId) — removes task
```

#### 3.4: team.ts
```
[ ] listTeamMembers() returns team with computed metrics
[ ] Computed: tickets resolved, active tasks, avg resolution — values are numbers
[ ] getTeamMember(TEST_CEO_ID) returns detail
[ ] updateTeamMember(TEST_CEO_ID, data) — updates capacity, utilization
```

#### 3.5: reports.ts
```
[ ] getRevenueReport() — aggregates with is_active filter
[ ] getTeamPerformanceReport() — per-member stats
[ ] getSlaComplianceReport() — per-client with is_active filter
[ ] getTicketAnalyticsReport() — volume, resolution with is_active filter
[ ] All report queries exclude test org in aggregate totals
```

#### 3.6–3.9: ai, notifications, contact-submissions, activity-log
```
[ ] AI: CRUD conversations scoped to test user IDs
[ ] Notifications: CRUD scoped to test user IDs
[ ] Contact submissions: CRUD with @test.flux.internal emails
[ ] Activity log: writes with test user ID and TEST_ORG_ID
[ ] Activity log: reads filter correctly
```

### Phase 3 Checklist
```
[ ] All query modules use parameterized SQL
[ ] No SELECT * in any query
[ ] Cross-org queries work (management sees multiple orgs)
[ ] is_active = true filter present in: listClients, ticketStats, projectStats, all reports
[ ] All write tests scoped to TEST_ORG_ID
[ ] assertTestOrg() guard used in write test helpers
[ ] No real org IDs or emails in test code
[ ] Pagination works (page, limit, total)
[ ] Empty results handled gracefully
[ ] npm test passes
```

---

## Phase 4 — API Routes

> **All API tests authenticate with test user JWTs.** Never real Azure AD tokens.
> **All mutation tests write to test org only.**

### Standard API Test Pattern
```typescript
import { TEST_ORG_ID, TEST_CEO_ID, TEST_EMPLOYEE_ID } from '../test-constants';

// Helper: create request with test user JWT
async function authRequest(method: string, path: string, role: string, body?: object) {
  const userId = role === 'co-ceo' ? TEST_CEO_ID : role === 'director' ? TEST_DIRECTOR_ID : TEST_EMPLOYEE_ID;
  const token = await createSession({ userId, email: `test-${role}@test.flux.internal`, name: `Test ${role}`, role });
  // ... create NextRequest with cookie and optional body
}

describe('API Route', () => {
  it('returns 401 without auth', async () => { /* no cookie */ });
  it('returns 403 for insufficient role', async () => { /* employee on restricted route */ });
  it('validates input with Zod', async () => { /* invalid body → 400 */ });
  it('returns correct response shape', async () => { /* { data: ... } */ });
  it('writes audit log on mutation', async () => { /* check activity_log */ });
  it('error messages are generic', async () => { /* no table names, SQL, stack traces */ });
});
```

### Per-Route Test Checklist

#### 4.2: Dashboard
```
[ ] GET /api/dashboard — returns KPIs
[ ] KPI aggregations exclude test org (is_active filter)
[ ] Returns 401 without auth
```

#### 4.3: Clients
```
[ ] GET /api/clients — list with filters, is_active filter
[ ] GET /api/clients/:TEST_ORG_ID — detail
[ ] PUT /api/clients/:TEST_ORG_ID — co-ceo: 200, writes audit log
[ ] PUT /api/clients/:TEST_ORG_ID — employee: 403
[ ] PUT — rejects invalid contract_status (400)
[ ] GET /api/clients/:TEST_ORG_ID/stats — time-range data
```

#### 4.4: Tickets
```
[ ] GET /api/tickets — cross-org list with filters
[ ] GET /api/tickets/:testTicketId — detail with internal notes
[ ] POST /api/tickets/:testTicketId/notes — adds note, audit log
[ ] POST — rejects empty content (400)
[ ] GET /api/tickets/stats — cross-org metrics, is_active filter
```

#### 4.5: Projects
```
[ ] GET /api/projects — cross-org list
[ ] GET /api/projects/:testProjectId — detail with tasks
[ ] POST /api/projects/:testProjectId/tasks — creates task in TEST_ORG_ID, audit log
[ ] PUT /api/projects/:testProjectId/tasks/:testTaskId — updates, audit log
[ ] PUT — employee can update own task, cannot update others'
[ ] DELETE — co-ceo: 200 (any task), employee: 200 (own task), employee: 403 (other's task), audit log
```

#### 4.6: Team
```
[ ] GET /api/team — all members with computed metrics
[ ] PUT /api/team/:TEST_CEO_ID — co-ceo: 200, employee: 403, audit log
```

#### 4.7: Reports
```
[ ] All 4 report endpoints — co-ceo: 200, employee: 403
[ ] All reports use is_active filter (test org excluded from totals)
[ ] Range filter works (30d, 90d, 6m)
```

#### 4.8: AI
```
[ ] POST /api/ai/chat — returns response, rate limited 20/min
[ ] Conversations scoped to test user
[ ] DELETE removes conversation
```

#### 4.9: Notifications
```
[ ] GET /api/notifications — returns test user's notifications only
[ ] GET /api/notifications/unread-count — correct count
[ ] PUT /api/notifications/mark-read — marks read
```

#### 4.10: Contact Submissions
```
[ ] GET — co-ceo: 200, employee: 403
[ ] PUT — updates status, audit log
[ ] POST webhook — valid X-API-Secret: 200, invalid: 401
[ ] POST webhook — creates notification for test co-ceo/director users
[ ] POST webhook — rate limited 10/min
[ ] POST webhook — uses @test.flux.internal email in test data
```

#### 4.11: Settings
```
[ ] GET /api/settings/profile — returns test user profile
[ ] PUT — updates name, phone
```

### Phase 4 Checklist
```
[ ] All 38 endpoints respond correctly
[ ] All return 401 without auth
[ ] Role-restricted endpoints return 403 for employees
[ ] All mutations write to activity_log
[ ] All inputs validated by Zod — invalid returns 400
[ ] All error responses generic (no internals)
[ ] All write operations scoped to test org
[ ] All auth tokens use test user IDs
[ ] is_active filter present in aggregation endpoints
[ ] Response format: { data } / { error } / { data, total, page, limit, totalPages }
[ ] npm test passes
```

---

## Phase 5 — Integrations

> **External APIs (Planner, Claude, Outlook) are MOCKED in tests.**
> Tests never call real external APIs. → SO §11 Rule 9

### 5.1: Planner Write-Back
```
[ ] createPlannerTask — sends POST (mocked Graph API)
[ ] updatePlannerTask — sends PATCH (mocked Graph API)
[ ] deletePlannerTask — sends DELETE (mocked Graph API)
[ ] Failures are non-blocking — function logs error, does NOT throw → EA §Error Handling
[ ] Never modifies plans or buckets — only tasks → EA rule 5
```

### 5.2: Claude Context Builder
```
[ ] buildManagementContext() includes client data
[ ] Context includes ticket stats, revenue, team metrics
[ ] Context does NOT contain API keys or secrets → EA §Claude API rule 1
[ ] Context excludes test org (is_active filter) → BP §10
[ ] System prompt uses management persona, includes disclaimer
```

### 5.3: Email Sender
```
[ ] Sends ticket escalation (mocked Graph API)
[ ] Sends contact form alert (mocked Graph API)
[ ] Failures are non-blocking → EA §Error Handling
[ ] Only sends to @test.flux.internal in tests
```

### 5.4: Contact Webhook
```
[ ] Webhook creates DB row with @test.flux.internal email
[ ] Webhook creates notification for test co-ceo/director
[ ] Authenticated by X-API-Secret
[ ] Rate limited 10/min
```

### Phase 5 Checklist
```
[ ] All external API calls mocked — never real
[ ] Planner write-back non-blocking
[ ] Claude context excludes test org, excludes secrets
[ ] Email sender non-blocking
[ ] Contact webhook end-to-end works
[ ] All test data uses test org / test emails
[ ] npm test passes
```

---

## Phase 6 — Frontend Integration

> Frontend tests are primarily **manual verification**.
> The dev server runs against the real database — test data from `npm test` is cleaned up.
> Manual testing uses the app normally with real data (read-only) + dev-login bypass.

### Per-Page Manual Test

#### Dashboard
```
[ ] KPIs load from API (not hardcoded)
[ ] Revenue, ticket counts, SLA reflect real data
[ ] Test org NOT visible in any KPI (is_active filter working)
```

#### Clients
```
[ ] Client list shows real clients (Armada, OnPoint), NOT test org
[ ] Search, filter work
[ ] Client detail loads
[ ] Edit form saves (test with dev-login as co-ceo)
```

#### Tickets
```
[ ] Ticket list shows real tickets (cross-org)
[ ] Filters, pagination work
[ ] Slide-over shows detail + internal notes
[ ] Add internal note works
```

#### Projects
```
[ ] Real projects load
[ ] Task CRUD works (create → update → delete)
[ ] Planner sync (if connected)
```

#### Team, Reports, AI, Settings, Notifications
```
[ ] Each page loads with real data
[ ] Reports exclude test org from totals
[ ] AI responds with cross-org context
[ ] Settings profile loads and saves
[ ] Notifications bell shows count
```

#### Mock Data Removal
```
[ ] All src/data/mock-*.ts files deleted
[ ] grep -r "mock-" src/data/ → no results
[ ] npm run build passes
```

### Phase 6 Checklist
```
[ ] All pages load with real API data
[ ] Test org invisible in all aggregate views (is_active filter)
[ ] Task CRUD works end-to-end
[ ] Mock data completely removed
[ ] npm run build passes
```

---

## Phase 7 — Security Hardening

### 7.1: Rate Limiting
```
[ ] Default: 100/min, Auth: 10/min, AI: 20/min, Reports: 30/min, Webhook: 10/min
[ ] 429 response has generic message
[ ] Rate limit keyed by user ID (auth) or IP (public)
```

### 7.2: Error Handling
```
[ ] 404 page renders
[ ] Error boundary catches React errors
[ ] No stack traces, table names, or SQL in any error response
```

### 7.3: Audit Logging
```
[ ] ALL 7 mutation endpoints write to activity_log (verify each)
[ ] Read operations do NOT write to activity_log
[ ] Audit entries have: user_id, action, entity_type, entity_id, created_at
```

### 7.4: Security Test Suites

#### Role Access Matrix (SO §4)
```
Employee BLOCKED from:
[ ] PUT /api/clients/:id → 403
[ ] DELETE /api/projects/:id/tasks/:taskId (other's task) → 403
[ ] DELETE /api/projects/:id/tasks/:taskId (own task) → 200
[ ] PUT /api/team/:id → 403
[ ] GET /api/reports/revenue → 403
[ ] GET /api/reports/team-performance → 403
[ ] GET /api/reports/sla-compliance → 403
[ ] GET /api/reports/ticket-analytics → 403
[ ] GET /api/contact-submissions → 403
[ ] PUT /api/contact-submissions/:id → 403

Employee ALLOWED:
[ ] GET /api/dashboard → 200
[ ] GET /api/clients → 200
[ ] GET /api/tickets → 200
[ ] POST /api/tickets/:id/notes → 200
[ ] POST /api/projects/:id/tasks → 200
[ ] PUT own task → 200
[ ] GET /api/ai/chat → 200

Co-CEO: all endpoints → 200
Client role: all endpoints → 403
```

#### Input Validation
```
[ ] Invalid contract_status → 400
[ ] Invalid health_score → 400
[ ] Empty internal note content → 400
[ ] Task without name → 400
[ ] Invalid UUID → 400
[ ] SQL injection in search param → safe result (empty, not executed)
```

#### is_active Filter Audit (NEW — critical for test data isolation)
```typescript
// phase-7/is-active-filter.test.ts

describe('is_active Filter Verification', () => {
  // Verify test org (is_active=false) is excluded from all aggregate queries

  it('GET /api/clients excludes test org', async () => {
    const res = await authGet('/api/clients');
    const clients = res.data;
    const orgIds = clients.map(c => c.id);
    expect(orgIds).not.toContain(TEST_ORG_ID);
  });

  it('GET /api/dashboard KPIs exclude test org revenue', async () => {
    // Test org has $5000 revenue in seed data
    // Dashboard total should NOT include it
  });

  it('GET /api/reports/revenue excludes test org', async () => {
    const res = await authGet('/api/reports/revenue');
    const clientNames = res.data.clients.map(c => c.name);
    expect(clientNames).not.toContain('Flux QA Internal');
  });

  it('GET /api/tickets/stats excludes test org tickets', async () => {
    const res = await authGet('/api/tickets/stats');
    // Ticket counts should not include test org's 20 tickets
  });

  it('AI context excludes test org', async () => {
    const context = await buildManagementContext();
    expect(context).not.toContain('Flux QA Internal');
    expect(context).not.toContain('flux-qa-internal');
  });
});
```

### 7.5: Security Checklist
```
[ ] grep -r "SELECT \*" src/lib/db/ → no results
[ ] grep -r "dangerouslySetInnerHTML" src/ → no results
[ ] Every route has withManagementAuth or withRole
[ ] Every mutation has logActivity()
[ ] Every query uses $1, $2 params (no concatenation)
[ ] All 5 security headers present
[ ] Rate limits active
[ ] .env.local not in git history
[ ] All cross-org queries have WHERE o.is_active = true
[ ] All tests use TEST_ORG_ID — no real org IDs (grep to verify)
[ ] npm test passes twice consecutively (no state leakage)
```

### Phase 7 Checklist
```
[ ] Rate limits enforced (5 tiers)
[ ] Error responses generic everywhere
[ ] Audit logging complete on all mutations
[ ] Full role access matrix verified
[ ] Input validation rejects invalid data
[ ] is_active filter verified on all aggregate endpoints
[ ] Test org invisible in all production queries
[ ] No SELECT *, no SQL injection, no secrets in code
[ ] npm test passes twice consecutively
```

---

## Phase 8 — Deployment

### Post-Deployment Verification
```
[ ] Azure AD SSO login works
[ ] Dashboard loads with real data
[ ] Test org NOT visible anywhere (is_active filter)
[ ] Client list shows real clients only
[ ] Tickets show real tickets (cross-org)
[ ] Task CRUD → appears in Planner
[ ] Reports show accurate numbers
[ ] AI responds with real cross-org context
[ ] Email notifications send
[ ] Activity log records actions
[ ] Client portal still works (unaffected)
[ ] Dashboard loads < 5 seconds
[ ] Merge to main
```

---

## Test Summary

| Phase | Tests | Key Verification |
|-------|-------|-----------------|
| 0 | 15 | Infrastructure + test org setup |
| 1 | 25 | Schema, constraints, seed isolation |
| 2 | 30 | Auth, JWT, middleware, role blocking |
| 3 | 50 | Query modules, cross-org, is_active filter |
| 4 | 70 | All 38 endpoints, auth, validation, audit |
| 5 | 20 | Mocked externals, context safety |
| 6 | 40 | Manual: all pages with real data |
| 7 | 45 | Role matrix, is_active audit, security checklist |
| 8 | 15 | Production end-to-end |
| **Total** | **~310** | |

### Critical Tests That Must Never Be Skipped

1. **is_active filter audit** — verifies test org invisible in production
2. **Role access matrix** — verifies employee restrictions
3. **Audit logging completeness** — verifies all mutations logged
4. **Test data isolation** — verifies no real data referenced in tests
5. **Consecutive test runs** — verifies no state leakage between runs
