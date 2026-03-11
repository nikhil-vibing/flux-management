# Flux1 - Management Portal

## Project Overview
Internal management dashboard for Flux Technologies (IT managed services provider). Managers and co-CEOs use this to oversee clients, tickets, projects, team, connectors, and reports. Currently uses mock data — ready for API integration via React Query.

See `product.md` for the full design specification.

## Tech Stack
- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript (strict, no `any` types)
- **Styling:** Tailwind CSS 4, utility-first
- **Components:** Radix UI + shadcn/ui + class-variance-authority
- **Charts:** Recharts (area, bar, radar, pie, composed, line)
- **Icons:** Phosphor Icons (`@phosphor-icons/react`)
- **Animation:** Framer Motion
- **State:** useState (local) / React Query (server) / Zustand (global client)
- **Validation:** Zod
- **Fonts:** Aptos (headings via `--font-aptos`), Roboto (body)

## Key Conventions
- **Max 150 lines per component** — refactor into separate files if larger
- **Commit format:** `type(scope): description` (e.g., `feat(auth): add login`)
- **Color tokens:** Use CSS variables from `globals.css` (e.g., `text-navy`, `bg-blue-10`, `text-success`)
- **Shadow levels:** `shadow-level-1` through `shadow-level-4`
- **Card pattern:** `bg-white rounded-2xl shadow-level-1 border border-ice/40 p-6`
- **Heading font:** `font-[family-name:var(--font-aptos)]`
- **Page headers:** Use `<PageHeader>` component from `src/components/shared/page-header.tsx`
- **Navigation:** Update sidebar, mobile bottom bar, AND command palette when adding pages

## Architecture
```
src/app/(portal)/     # All authenticated routes (layout group)
src/components/shared/ # Reusable: KpiCard, StatusBadge, PriorityIndicator, DataTable, PageHeader
src/components/layout/ # Sidebar, TopBar, MobileBottomBar
src/components/overlays/ # CommandPalette, NotificationDropdown, UserDropdown, Toast
src/data/             # Types (types.ts) and mock data (mock-*.ts)
src/stores/           # Zustand stores (sidebar-store, notification-store)
src/lib/              # Utilities (utils.ts with cn() helper)
```

## Data Layer
All data is in `src/data/mock-*.ts`. Types are in `src/data/types.ts`. Key types:
- `Client`, `Ticket`, `Project`, `ProjectTask`, `ProjectSubscription`
- `Connector`, `TeamMember`, `SoftwareItem`, `Notification`
- Status types: `TicketStatus`, `ProjectStatus`, `TaskStatus`, `ConnectorStatus`

## Pre-Commit Checks
- `npm run type-check` passes
- `npm run lint` passes
- No `console.log` statements in production code
- No hardcoded secrets

## Accessibility Standards
- Interactive elements must be `<button>` or `<a>`, not `div` with `onClick`
- Focus indicators: `focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2`
- Decorative elements (sparklines, icons): `aria-hidden="true"`
- Trend indicators: Use `role="img"` with descriptive `aria-label`
- Dot separators (`·`): Use `aria-hidden="true"` or replace with commas for SR
- Landmark regions: `role="region"` with `aria-label` on key sections
