# Flux1 - Management Portal

Internal management dashboard for **Flux Technologies**, an IT managed services provider. Built for managers and co-CEOs to oversee clients, tickets, projects, team performance, and external service integrations from a single command center.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict, no `any`)
- **Styling:** Tailwind CSS 4, utility-first
- **Components:** Radix UI primitives, shadcn/ui, class-variance-authority
- **Charts:** Recharts (area, bar, radar, pie, composed)
- **Icons:** Phosphor Icons
- **Animation:** Framer Motion
- **State:** useState (local), Zustand (global client), React Query (server)
- **Validation:** Zod
- **Fonts:** Aptos (headings), Roboto (body)

## Pages

| Route | Description |
|---|---|
| `/dashboard` | Snapshot panels (revenue, tickets/SLA, projects/team), charts, recent tickets, active projects |
| `/clients` | Client list with health scores, contracts, revenue |
| `/clients/[id]` | Client detail |
| `/tickets` | Ticket management with filtering and slide-over detail |
| `/projects` | Project list with cards, list, and timeline views |
| `/projects/[id]` | Project detail with Tasks (Kanban), Timeline, Files, Tech Stack, Overview tabs |
| `/connectors` | External service integrations (Atera, Planner, SharePoint, Azure AD, Intune, Teams) |
| `/team` | Team members, utilization, performance |
| `/reports` | Report hub linking to 4 report types |
| `/reports/[type]` | Revenue, Team Performance, SLA Compliance, Ticket Analytics |
| `/ai-assistant` | AI chat interface |
| `/settings` | General, Team, Integrations, Notifications, Security |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app redirects to `/login` then `/dashboard`.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

## Project Structure

```
src/
  app/
    (portal)/          # Authenticated portal routes
      dashboard/       # Main dashboard
      clients/         # Client management
      tickets/         # Ticket management
      projects/        # Project management
      connectors/      # External integrations
      team/            # Team management
      reports/         # Analytics & reports
      ai-assistant/    # AI chat
      settings/        # App settings
    login/             # Login page
  components/
    layout/            # Sidebar, top bar, mobile nav
    overlays/          # Command palette, notifications, toasts
    shared/            # Reusable components (KPI cards, badges, tables)
    ui/                # shadcn/ui primitives
  data/                # Mock data and TypeScript types
  lib/                 # Utility functions
  stores/              # Zustand stores
```

## Design System

- **Brand colors:** Navy (#002B4D), Blue (#15549D), Blue Light (#1A6BC4)
- **Semantic:** Success (#0D7C5F), Warning (#B8860B), Error (#C53030)
- **4 shadow levels** for depth hierarchy
- **Responsive:** Mobile-first with collapsible sidebar, bottom nav on mobile
