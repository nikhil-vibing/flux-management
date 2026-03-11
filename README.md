# Flux Technologies — Client Portal

A premium client portal dashboard for Flux Technologies, an IT managed services provider. Gives clients real-time visibility into support tickets, projects, documents, tech stack, and an AI assistant.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Phosphor Icons
- **Charts**: Recharts
- **Animations**: Framer Motion
- **State**: Zustand

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/login` | Authentication screen with SSO + email/password |
| `/dashboard` | KPI overview, charts, recent tickets, active projects |
| `/helpdesk` | Ticket management with filters, charts, and detail slide-over |
| `/projects` | Project tracking with card/list views |
| `/projects/[id]` | Project detail with task breakdown |
| `/documents` | Document library with folder navigation |
| `/tech-stack` | Software inventory and license tracking |
| `/ai-assistant` | AI chat interface with suggested queries |
| `/connectors` | Third-party service integrations |
| `/settings` | Account and portal preferences |
| `/help` | Help center and support resources |

## Design System

- **Palette**: Navy (#002B4D), Blue (#15549D), Ice (#DDE0E6)
- **Fonts**: Aptos (headings) + Roboto (body)
- **Cards**: Rounded-2xl with layered dual-shadow system
- **Layout**: 260px sidebar, 60px frosted-glass top bar, 1200px content max-width

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # Run ESLint
```
