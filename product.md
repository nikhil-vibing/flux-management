# FLUX TECHNOLOGIES — CLIENT PORTAL DASHBOARD
## Complete Figma Design Prompt (Single Prompt — All Pages, States & Behaviors)

---

## DESIGN BRIEF & BRAND PHILOSOPHY

Design a complete, production-ready Client Portal Dashboard system for **Flux Technologies**, an IT managed services provider. The portal gives clients real-time visibility into their IT environment — tickets, projects, documents, tech stack, and an AI assistant.

**Brand Essence:** The dashboard must feel like a luxury automotive cockpit — every element purposeful, every interaction precise, every surface refined. Think Porsche's digital dashboard meets Bloomberg Terminal's density, wrapped in Flux's deep navy identity. This is NOT a generic SaaS dashboard. This is a premium, bespoke command center for enterprise IT clients.

**Core Design Pillars:**
1. **Luxury** — Premium surfaces, refined typography, deliberate negative space, subtle depth through layered shadows
2. **Snappy** — Every interaction feels instant and intentional; micro-animations that confirm actions, not decorate
3. **Intuitive** — Usable in first glance; information hierarchy so clear that zero onboarding is needed
4. **Immersive** — The deep navy palette creates a focused, distraction-free environment
5. **Clean** — Surgical precision in alignment, spacing, and visual weight distribution

---

## BRAND IDENTITY (STRICT ADHERENCE)

### Color Palette

**Primary Palette (use these exclusively — no off-brand colors):**

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Navy Core | #002B4D | 0, 43, 77 | Sidebar, primary headings, dark surfaces, tooltips |
| Royal Blue | #15549D | 21, 84, 157 | Primary buttons, links, active indicators, chart hero color, interactive accents |
| Cloud Silver | #DDE0E6 | 221, 224, 230 | Page canvas background, dividers, disabled states, input resting borders |
| Pure White | #FFFFFF | 255, 255, 255 | Card surfaces, text on dark, modal backgrounds |

**Derived Palette (mathematically derived from brand colors — maintain family consistency):**

| Token | Hex | Usage |
|-------|-----|-------|
| Navy 90 | #0A3A5E | Sidebar hover states, secondary dark surfaces |
| Navy 80 | #1A4A6E | Sidebar active background |
| Royal Light | #1E6ABF | Button hover state |
| Royal Lighter | #3B82F6 | Info badges, tertiary chart color |
| Royal Wash | #EBF2FA | Selected row backgrounds, light highlight areas |
| Silver Light | #F0F2F5 | Table header backgrounds, subtle section dividers |
| Silver Dark | #B8BCC4 | Placeholder text, muted icons |
| Text Primary | #0A1929 | Main body text (near-black derived from navy for readability) |
| Text Secondary | #4A5E73 | Supporting text, labels, captions |
| Text Tertiary | #7A8DA0 | Timestamps, metadata, inactive breadcrumbs |

**Semantic Colors:**

| Token | Hex | Background Tint | Usage |
|-------|-----|-----------------|-------|
| Success | #0D9C5C | #E6F7EF | Closed tickets, healthy status, completed tasks, online |
| Warning | #D4880F | #FDF5E6 | Pending tickets, at-risk, expiring licenses |
| Danger | #CC3333 | #FCE8E8 | Open/critical tickets, errors, offline, overdue |

**Strict Rules:**
- NEVER use pure black (#000000) anywhere — always use Navy Core or Text Primary
- NEVER use gradients on functional UI elements (buttons, cards, badges)
- Subtle linear gradients ONLY permitted on the sidebar background: `linear-gradient(180deg, #002B4D 0%, #001A33 100%)`
- All color pairings must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Navy Core on White = 12.6:1 ✓. Royal Blue on White = 5.8:1 ✓. White on Royal Blue = 5.8:1 ✓.

---

### Typography

**Font Stack:**

| Role | Font | Weight | Size | Line Height | Letter Spacing | Color |
|------|------|--------|------|-------------|----------------|-------|
| Page Title | DM Sans | 700 | 26px | 34px | -0.02em | Text Primary |
| Section Title | DM Sans | 600 | 18px | 26px | -0.01em | Text Primary |
| Card Title | DM Sans | 600 | 15px | 22px | 0 | Text Primary |
| KPI Value | DM Sans | 700 | 30px | 38px | -0.02em | Navy Core |
| KPI Label | DM Sans | 500 | 12px | 18px | 0.04em (uppercase) | Text Secondary |
| Body | Inter | 400 | 14px | 22px | 0 | Text Primary |
| Body Small | Inter | 400 | 13px | 20px | 0 | Text Secondary |
| Caption | Inter | 400 | 11px | 16px | 0.02em | Text Tertiary |
| Table Header | Inter | 600 | 12px | 18px | 0.06em (uppercase) | Text Secondary |
| Table Cell | Inter | 400 | 13px | 20px | 0 | Text Primary |
| Button | Inter | 500 | 13px | 20px | 0.01em | Per button variant |
| Nav Item | Inter | 500 | 13px | 20px | 0.01em | White (80% opacity) |
| Nav Item Active | Inter | 600 | 13px | 20px | 0.01em | White (100% opacity) |
| Input Text | Inter | 400 | 14px | 22px | 0 | Text Primary |
| Input Placeholder | Inter | 400 | 14px | 22px | 0 | Silver Dark |
| Code / ID | JetBrains Mono | 400 | 12px | 18px | 0 | Royal Blue |

**Figma Setup:** Import DM Sans from Google Fonts. Import Inter from Google Fonts. Import JetBrains Mono from Google Fonts. Create all as Figma text styles with the exact specifications above.

---

### Icon System

**Icon Set: Phosphor Icons (Regular weight)**
- Source: phosphoricons.com — use the "Regular" variant (1.5px stroke) throughout
- Why Phosphor: Refined, balanced, premium feel with excellent optical consistency. Superior to Lucide/Feather for luxury dashboard aesthetics. Extensive coverage for IT/tech concepts.

**Icon Sizing:**

| Context | Size | Stroke | Optical Padding |
|---------|------|--------|-----------------|
| Sidebar Navigation | 22px | 1.5px | 1px internal |
| KPI Card Icon | 20px | 1.5px | Inside 36px circle |
| Table Inline | 16px | 1.5px | — |
| Button Icon (leading) | 16px | 1.5px | 6px gap to text |
| Action Icon (standalone) | 18px | 1.5px | Inside 32px hit area |
| Breadcrumb Separator | 14px | 1.5px | Chevron right |
| Status Dot | 8px | — | Filled circle |
| Empty State | 64px | 1px | Centered |

**Icon Colors:**
- Sidebar: White at 70% opacity, active White at 100%
- On white surfaces: Text Secondary (#4A5E73) default, Navy Core on hover
- Inside colored badges: inherit badge text color
- KPI card icon circles: Royal Wash (#EBF2FA) background with Royal Blue (#15549D) icon

**Specific Icon Mapping (Phosphor names):**
- Dashboard: SquaresFour
- Helpdesk/Tickets: Ticket
- Projects: Kanban
- Documents: FolderOpen
- Tech Stack: CircuitBoard
- AI Assistant: Robot
- Settings: GearSix
- Notifications: Bell
- Search: MagnifyingGlass
- Filter: Funnel
- Calendar: CalendarBlank
- Clock: Clock
- Download: DownloadSimple
- Upload: UploadSimple
- External Link: ArrowSquareOut
- Close: X
- Chevron Down: CaretDown
- Chevron Right: CaretRight
- Check: Check
- Warning: Warning
- Info: Info
- User/Avatar: UserCircle
- Refresh: ArrowsClockwise
- More/Overflow: DotsThreeVertical
- Sort Ascending: SortAscending
- Sort Descending: SortDescending
- Open Ticket: CircleDashed (red)
- Pending Ticket: Clock (amber)
- Closed Ticket: CheckCircle (green)
- High Priority: ArrowUp (red)
- Medium Priority: Equals (amber)
- Low Priority: ArrowDown (gray)
- Online: Circle filled (green, 8px)
- Offline: Circle filled (red, 8px)

---

### Spacing System (4px base grid)

| Token | Value | Usage |
|-------|-------|-------|
| 2xs | 2px | Icon optical adjustments |
| xs | 4px | Tight gaps, badge padding vertical |
| sm | 8px | Inline spacing, icon-to-text, compact gaps |
| md | 12px | Form field internal padding, list item gaps |
| base | 16px | Default card padding sides, standard spacing |
| lg | 20px | Card padding top/bottom, section title margin-bottom |
| xl | 24px | Between card groups, column gutters |
| 2xl | 32px | Major section separation |
| 3xl | 48px | Page-level top/bottom padding |

**Grid System:**
- Sidebar: Fixed 256px wide (collapsed: 72px)
- Content area: Fluid, max-width 1440px, center-aligned with 32px horizontal padding
- Card grid: 12-column with 24px gutters
- Minimum content width: 768px before mobile layout triggers

---

### Elevation & Shadows

| Level | Shadow | Usage |
|-------|--------|-------|
| Level 0 | None | Flat elements, table rows, sidebar |
| Level 1 | `0 1px 2px rgba(0,43,77,0.04), 0 1px 3px rgba(0,43,77,0.06)` | Cards at rest, dropdowns at rest |
| Level 2 | `0 4px 12px rgba(0,43,77,0.08)` | Cards on hover, active dropdowns, popovers |
| Level 3 | `0 8px 24px rgba(0,43,77,0.10)` | Modals, slide-over panels, floating elements |
| Level 4 | `0 16px 48px rgba(0,43,77,0.14)` | Command palette, top-level overlays |

**Rules:**
- Shadow color is ALWAYS derived from Navy Core (rgba of #002B4D), never pure black
- Cards float at Level 1, elevate to Level 2 on hover (200ms ease)
- Modals use Level 3 + dark overlay
- Command palette / AI Assistant expanded uses Level 4

---

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| none | 0px | Table cells, sidebar |
| sm | 4px | Small badges, input inner elements |
| md | 8px | Cards, buttons, inputs, dropdowns |
| lg | 12px | Modals, larger cards, image containers |
| xl | 16px | Slide-over panels, feature cards |
| full | 9999px | Status pills, avatar circles, toggle thumbs |

---

## GLOBAL LAYOUT STRUCTURE

### Desktop (≥1280px)

```
┌─────────┬──────────────────────────────────────────────────┐
│         │  Top Bar (64px height)                           │
│         ├──────────────────────────────────────────────────┤
│ Sidebar │                                                  │
│ (256px) │  Content Area                                    │
│         │  (fluid, 32px padding, max 1440px centered)      │
│         │                                                  │
│         │                                                  │
│         │                                                  │
│         │                                                  │
└─────────┴──────────────────────────────────────────────────┘
```

### Laptop (1024–1279px)

```
┌─────┬───────────────────────────────────────────────────────┐
│     │  Top Bar (64px)                                       │
│ 72px├───────────────────────────────────────────────────────┤
│icons│  Content Area (fluid, 24px padding)                   │
│only │                                                       │
└─────┴───────────────────────────────────────────────────────┘
```
Sidebar collapses to 72px showing only icons. Hover on sidebar shows tooltip with label. Click sidebar icon navigates. Hover on collapsed sidebar does NOT expand it (too disruptive) — only tooltip appears.

### Tablet (768–1023px)

```
┌──────────────────────────────────────────────────────────────┐
│  Top Bar (56px) — hamburger icon left, logo center, actions  │
├──────────────────────────────────────────────────────────────┤
│  Content Area (fluid, 20px padding)                          │
│  Cards stack to 2-column grid                                │
│  Charts full width                                           │
└──────────────────────────────────────────────────────────────┘
```
Sidebar hidden. Hamburger opens sidebar as an overlay (slide from left, 280px, Level 3 shadow, dark overlay behind). Tap overlay to close.

### Mobile (<768px)

```
┌──────────────────────────────────────────────────────────────┐
│  Top Bar (52px) — hamburger, logo, avatar                    │
├──────────────────────────────────────────────────────────────┤
│  Content Area (fluid, 16px padding)                          │
│  Cards stack to single column                                │
│  Tables become scrollable cards                              │
│  Charts simplified (hide secondary axes)                     │
├──────────────────────────────────────────────────────────────┤
│  Bottom Tab Bar (56px + safe area)                           │
│  [Dashboard] [Tickets] [Projects] [More]                     │
└──────────────────────────────────────────────────────────────┘
```
Bottom tab bar appears: 4 items with Phosphor icons + labels. "More" opens a bottom sheet with Documents, Tech Stack, AI Assistant, Settings.

---

## COMPONENT: SIDEBAR (Desktop + Laptop)

**Container:**
- Width: 256px (desktop) / 72px (laptop collapsed)
- Height: 100vh, position fixed left
- Background: `linear-gradient(180deg, #002B4D 0%, #001F3A 100%)`
- No border-right (shadow creates separation naturally at Level 1)
- Z-index: 40

**Logo Area (top):**
- Height: 80px
- Center-aligned Flux logo mark (the swirl icon from brand identity) — white version, 36px
- Below: "FLUX" in DM Sans 700, 14px, letter-spacing 0.2em, white 90% opacity
- Below: "TECHNOLOGIES" in Inter 400, 9px, letter-spacing 0.3em, white 50% opacity
- Collapsed state: Only swirl icon, 28px, centered in 72px width
- Subtle 1px bottom divider: white at 8% opacity

**Navigation Items:**
- Padding: 10px 20px (desktop), centered icon in 72px (collapsed)
- Icon: 22px Phosphor Regular, white at 65% opacity
- Label: Inter 500, 13px, white at 75% opacity, 14px gap after icon
- Hover: background `rgba(255,255,255,0.06)`, border-radius 6px applied to the item with 8px horizontal margin. Icon and text opacity both rise to 90%. Transition: 150ms ease.
- Active: background `rgba(21,84,157,0.25)`, left border 3px solid #15549D (inset, not extending width), icon white 100%, text white 100% weight 600. The active background has a subtle glow effect.
- Collapsed hover: same background, plus floating tooltip right (8px gap): Navy Core bg, white text, 12px Inter 500, 6px 10px padding, radius 4px, Level 2 shadow, appears after 200ms delay, fade-in 100ms.

**Navigation Order:**
1. SquaresFour — Dashboard
2. Ticket — Helpdesk
3. Kanban — Projects
4. FolderOpen — Documents
5. CircuitBoard — Tech Stack
6. Robot — AI Assistant

**Divider before bottom section:** 1px solid white at 8% opacity, 24px horizontal margin

**Bottom Section:**
- Settings (GearSix icon + "Settings") — same hover/active styles
- Help & Support (Question icon + "Help") — same styles
- User Block: 48px section with 32px avatar circle (initials on Navy 80 bg, white text, DM Sans 600 14px), name (Inter 500 13px white 85%), role (Inter 400 11px white 50%). Collapsed: just avatar circle. Click opens account popover.

---

## COMPONENT: TOP BAR

**Container:**
- Height: 64px (desktop/laptop), 56px (tablet), 52px (mobile)
- Background: #FFFFFF
- Bottom border: 1px solid #DDE0E6
- Position: sticky top:0, z-index: 30
- Padding: 0 32px (desktop), 0 24px (laptop), 0 20px (tablet), 0 16px (mobile)
- Display: flex, align-items: center, justify-content: space-between

**Left Section:**
- Breadcrumb: "Dashboard" or "Helpdesk > Ticket #1234". Text Tertiary for inactive segments (clickable, hover underline), Text Primary for current segment. CaretRight 14px separator in Text Tertiary. Inter 400 13px.
- Mobile/Tablet: Hamburger icon (List Phosphor, 24px) replaces breadcrumb. Tap opens sidebar overlay.

**Center Section (mobile only):**
- Flux swirl logo, 24px, Navy Core color

**Right Section (flex, gap 8px):**
- Search trigger: Pill-shaped container, 200px width, 36px height, radius full, Silver Light bg, MagnifyingGlass 16px + "Search..." Inter 400 13px Text Tertiary. Click opens Command Palette (full search overlay). Hover: border 1px #DDE0E6. Keyboard shortcut hint: "⌘K" in small badge right side of pill.
- Notification Bell: 36x36px hit area, Bell icon 20px in Text Secondary. Hover: Silver Light bg circle. Click opens Notification Dropdown. If unread: 8px red dot (Danger color) positioned top-right of icon with 2px white border ring.
- User Avatar: 34px circle, initials on Navy 80 bg (#1A4A6E) with white text. Click opens User Dropdown.

---

## COMPONENT: NOTIFICATION DROPDOWN

**Trigger:** Click bell icon in top bar
**Container:**
- Position: absolute, anchored below bell icon, right-aligned
- Width: 380px
- Max-height: 520px with internal scroll
- Background: White
- Radius: 12px
- Shadow: Level 3
- Border: 1px solid #DDE0E6
- Z-index: 50
- Entrance: opacity 0→1 + translateY(-4px→0), 150ms ease

**Header:**
- "Notifications" — DM Sans 600 16px, Navy Core
- Right: "Mark all read" — Inter 400 12px, Royal Blue, hover underline. Only visible when unread items exist.
- Padding: 16px 20px
- Bottom border: 1px solid #DDE0E6

**Tab Bar:**
- Tabs: "All" | "Tickets" | "Projects" | "System"
- Inter 500 12px, Text Secondary default
- Active: Royal Blue text, 2px bottom border Royal Blue
- Padding: 8px 16px per tab
- Bottom border: 1px solid #DDE0E6

**Notification Items:**
- Padding: 14px 20px
- Bottom border: 1px solid Silver Light
- Layout: 36px icon circle left (icon type-specific: Ticket = Ticket icon on Royal Wash, Project = Kanban on green wash, System = GearSix on silver wash) → content (flex-1) → timestamp right
- Title: Inter 500 13px, Text Primary (unread) / Text Secondary (read)
- Description: Inter 400 12px, Text Tertiary, max 2 lines, ellipsis overflow
- Timestamp: Inter 400 11px, Text Tertiary, right-aligned ("2m ago", "1h ago", "Yesterday")
- Unread indicator: 6px Royal Blue circle, left edge of item
- Hover: Silver Light bg. Transition: 100ms ease.
- Click: navigates to relevant page/item, marks as read

**Empty State:**
- Bell icon (Phosphor, 48px, Silver Dark), "No notifications" Inter 400 14px Text Tertiary, centered, 48px vertical padding

**Footer:**
- "View all notifications" — centered, Inter 500 13px, Royal Blue, hover underline
- Padding: 12px, top border 1px #DDE0E6

**Mobile:** Full-width bottom sheet instead of dropdown. Slides up from bottom, max 70vh, drag handle at top (40px × 4px rounded bar, Silver Dark, centered).

---

## COMPONENT: USER DROPDOWN

**Trigger:** Click avatar in top bar
**Container:** 220px wide, right-aligned below avatar, same styling as notification dropdown but smaller

**Content:**
- User info header: Avatar 40px, Name (Inter 600 14px), Email (Inter 400 12px Text Tertiary). 16px padding, bottom border.
- Menu items: "Account Settings" (GearSix), "Help & Support" (Question), "Sign Out" (SignOut). Each: 40px height, 16px padding horizontal, Inter 400 13px, Text Primary. Icon 18px Text Secondary, 10px gap. Hover: Silver Light bg, 100ms.
- Sign Out text is Danger color.

---

## COMPONENT: COMMAND PALETTE / SEARCH OVERLAY

**Trigger:** Click search pill in top bar OR keyboard ⌘K / Ctrl+K
**Overlay:** Full screen dark overlay rgba(0,43,77,0.4), backdrop-blur 4px
**Container:**
- Centered, 640px wide, max-height 480px
- White background, radius 16px, shadow Level 4
- Z-index: 60
- Entrance: overlay fades in 150ms, container scales from 0.97→1 + opacity 0→1, 200ms ease

**Search Input:**
- Full width, 56px height, no visible border
- MagnifyingGlass 20px Royal Blue left icon, 20px padding
- Input: Inter 400 16px, placeholder "Search tickets, projects, documents..."
- Right: "ESC" mini badge (Silver Light bg, Inter 400 11px Text Tertiary, radius 4px, padding 2px 6px)
- Bottom: 1px border #DDE0E6

**Results Area:**
- Grouped by type with section headers: "Tickets", "Projects", "Documents", "Pages"
- Section header: Inter 600 11px, uppercase, letter-spacing 0.06em, Text Tertiary, 12px padding horizontal, 8px vertical
- Result items: 44px height, 16px horizontal padding. Icon (type-specific, 18px, Text Secondary) → Title (Inter 400 14px Text Primary) → Subtitle/meta (Inter 400 12px Text Tertiary right-aligned)
- Keyboard navigation: arrow keys move highlight (Royal Wash bg), Enter selects
- Mouse hover: same Royal Wash bg, 0ms transition (instant)

**Empty State:**
- "No results for '[query]'" — centered, Inter 400 14px Text Tertiary
- Suggestions: "Try searching for ticket numbers, project names, or file names"

**Recent Searches (when input is empty):**
- "Recent" section header
- Last 5 searches as items with Clock icon

---

## PAGE 1: DASHBOARD (HOME)

**Route:** /dashboard
**Purpose:** Single-glance operational overview — tickets, projects, and external connectors unified on one page.

### Section A: Welcome Header

- Layout: Full width, no card — directly on canvas
- Left: "Good morning, [Client Name]" — DM Sans 700 26px. Below: "Here's your IT environment overview" — Inter 400 14px Text Secondary
- Right: Today's date — Inter 400 13px Text Tertiary. "Last synced: 2 min ago" with ArrowsClockwise icon, Text Tertiary. Click refresh: icon rotates 360° over 500ms, data refreshes.
- Margin-bottom: 28px

### Section B: KPI Summary Row

- Layout: 4 cards in a row (3-column + 1 on desktop, 2×2 on tablet, stacked on mobile)
- Each card: White, radius 8px, Level 1 shadow, padding 20px, height fixed at 110px

**Card 1: Open Tickets**
- Left: Icon circle (36px, Danger bg tint #FCE8E8, Danger icon CircleDashed 20px)
- Middle: Count "12" (DM Sans 700 30px Navy Core), label "Open Tickets" (Inter 500 12px uppercase tracking Text Secondary)
- Right edge: Trend micro-indicator: "↑3 from last week" — Inter 400 11px, Danger color with ArrowUp 12px. If down, Success color with ArrowDown.
- Hover: Level 2 shadow, translateY(-1px), 200ms ease. Cursor pointer → navigates to Helpdesk page filtered to Open.

**Card 2: Pending Tickets**
- Same structure. Icon: Clock on Warning tint. Count in Navy Core. Trend in relevant color.
- Click → Helpdesk filtered to Pending.

**Card 3: Avg Resolution Time**
- Icon: Timer on Royal Wash. Value: "4.2h" DM Sans 700 30px. Label: "Avg Resolution". Trend: "↓0.8h vs last month" in Success.
- Click → Helpdesk analytics view.

**Card 4: Active Projects**
- Icon: Kanban on Success tint (#E6F7EF). Value: "5". Label: "Active Projects". Sub: "2 due this week" Inter 400 11px Warning color.
- Click → Projects page.

### Section C: Ticket Activity (Primary Chart)

- Full width card, white, radius 8px, Level 1 shadow, padding 24px
- Header row: "Ticket Activity" DM Sans 600 18px left. Right: Segmented control pill — "7 Days" | "30 Days" | "90 Days" — Silver Light bg, radius full, 32px height. Active segment: White bg, Level 1 shadow, Royal Blue text. Inactive: Text Secondary. Transition: background slide 200ms ease.
- Chart: Combined bar + line chart.
  - Bars: Stacked per day — Open (#CC3333 at 80%), Pending (#D4880F at 80%), Closed (#0D9C5C at 80%). Rounded top corners 3px.
  - Line overlay: Total ticket volume trend line in Navy Core, 2px stroke, smooth bezier curves, with subtle dot markers (4px circle, white fill, Navy Core stroke) at each data point.
  - X-axis: Date labels, Inter 400 11px Text Tertiary
  - Y-axis: Ticket counts, Inter 400 11px Text Tertiary, gridlines 1px #F0F2F5 dashed
  - Hover on bar: Tooltip appears — Navy Core bg, radius 8px, Level 2 shadow, padding 10px 14px. Content: Date (Inter 600 12px white), then each status with colored dot + count (Inter 400 12px white 80%). Tooltip follows cursor horizontally, fixed 8px above bar. Entrance: opacity 0→1, 100ms.
  - Chart area height: 240px
- Legend below chart: Horizontal, centered. Each item: 8px colored circle + label Inter 400 12px Text Secondary, 20px gap between items.
- Bottom-right: "View all tickets →" link — Inter 500 13px Royal Blue, hover underline, CaretRight 14px. Click → Helpdesk page.

### Section D: Recent Tickets Table (Compact)

- Same card as chart (or new card below, 16px gap)
- Header row: "Recent Tickets" DM Sans 600 16px left. Right: "View all →" Inter 500 13px Royal Blue.
- Table: 5 most recent tickets. No pagination here (full table on Helpdesk page).

| Column | Width | Content |
|--------|-------|---------|
| Ticket # | 100px | JetBrains Mono 12px Royal Blue, clickable (hover underline) → opens ticket detail |
| Subject | flex | Inter 400 13px Text Primary, ellipsis if overflow, max 1 line |
| Status | 100px | Status pill badge (see badge specs above) |
| Priority | 90px | Icon (ArrowUp red / Equals amber / ArrowDown gray, 14px) + label Inter 400 12px |
| Updated | 110px | Relative time "2h ago" Inter 400 12px Text Tertiary |

- Row height: 48px, bottom border 1px Silver Light
- Row hover: Silver Light bg, 100ms ease
- Row click: Opens ticket detail slide-over panel (see Helpdesk section)

### Section E: Active Projects (Compact)

- New card below tickets, 16px gap
- Header: "Active Projects" DM Sans 600 16px. Right: "View all →" Royal Blue link.
- Layout: Horizontal scroll container of project mini-cards (if >3 projects, shows scroll indicator)
- Each mini-card: 280px min-width, White bg, 1px border #DDE0E6, radius 8px, padding 16px
  - Project name: Inter 600 14px Navy Core, 1 line max, ellipsis
  - Client project status: Colored dot (8px, Success/Warning/Danger) + "On Track" / "At Risk" / "Delayed" Inter 400 12px
  - Progress bar: Full width, 6px height, radius full, Silver Light track, Royal Blue fill proportional to completion. Below bar: "14/20 tasks" Inter 400 11px Text Tertiary right-aligned
  - Due date: CalendarBlank icon 14px + "Mar 15, 2026" Inter 400 12px Text Tertiary
  - Hover: Level 2 shadow, border-color Royal Blue at 30% opacity, 200ms ease
  - Click → Project detail on Projects page

- Scroll behavior: Horizontal scroll with CSS scroll-snap (snap to card start). Show fade gradient on right edge (white→transparent) when more cards exist. On mobile: same horizontal scroll, full-width cards.

### Section F: External Connectors Status

- New card below projects, 16px gap
- Header: "Connected Services" DM Sans 600 16px. Right: "Last checked: 5 min ago" Inter 400 11px Text Tertiary + ArrowsClockwise 14px.
- Layout: 3 connector cards in a row (responsive: 1 per row on mobile)

**Connector Card (each):**
- Width: 1/3 of container, min 200px
- White bg, 1px border #DDE0E6, radius 8px, padding 16px
- Top: Service icon (32px, actual brand icon or Phosphor placeholder: Microsoft logo placeholder → use Buildings icon, Atera → use Headset icon) + Service Name (Inter 600 14px Navy Core)
- Status line: Online dot (8px Success green) + "Connected" Inter 400 12px Success. OR Offline dot (Danger) + "Disconnected" in Danger.
- Meta: "Synced 2m ago" Inter 400 11px Text Tertiary
- Data summary: 1-2 lines of key info per service
  - Atera: "47 tickets this month • 12 open"
  - Microsoft Planner: "5 active plans • 23 tasks"
  - SharePoint: "156 documents • 8 folders"
- Hover: Level 2 shadow, 200ms ease
- Click: No action (informational only). If disconnected, show "Contact support" link in Royal Blue.

**Connector services to show:**
1. Atera (IT Helpdesk)
2. Microsoft Planner (Projects)
3. Microsoft SharePoint (Documents & Tech Stack)

---

## PAGE 2: HELPDESK

**Route:** /helpdesk
**Purpose:** Full ticket management view with charts, filters, and detail panel.

### Section A: Page Header

- "Helpdesk" DM Sans 700 26px. Below: "Monitor and manage your support tickets" Inter 400 14px Text Secondary.
- Right: "New Ticket Request" button — not a ticket creation form (clients don't create tickets directly), but a "Contact Support" action. Royal Blue bg, white text, Inter 500 13px, radius 8px, 40px height, PaperPlaneTilt icon 16px leading. Hover: Royal Light (#1E6ABF), 150ms. Active: darken 5%, scale 0.98 for 100ms.

### Section B: KPI Row

- 4 stat cards identical structure to dashboard KPIs but with helpdesk-specific data:
  1. Open Tickets (count)
  2. Pending Tickets (count)
  3. Closed This Month (count)
  4. Avg Resolution Time (hours)
- No click behavior here (already on the helpdesk page)

### Section C: Filter & Controls Bar

- Full width, no card bg (sits on canvas), flex row, align center, gap 12px, margin-bottom 16px
- **Status Filter:** Dropdown select, 160px. Label above: "Status" Inter 500 12px Text Secondary. Options: All Statuses, Open, Pending, Closed. Default: All. Styled select: 40px height, White bg, 1px #DDE0E6 border, radius 8px, Inter 400 13px Text Primary, CaretDown 14px right icon. Hover: border Silver Dark. Focus: border Royal Blue, ring 3px Royal Wash. Open: dropdown below, White bg, Level 2 shadow, radius 8px, each option 40px, hover Royal Wash bg.
- **Priority Filter:** Same dropdown. Options: All Priorities, Critical, High, Medium, Low.
- **Date Range:** Date picker trigger. CalendarBlank icon + "Last 30 Days" text. Click opens date range picker popover (see Popover: Date Picker below).
- **Search:** Expanding search input. MagnifyingGlass icon in 40px square (Text Secondary). Click: expands to 240px input field (200ms ease). Placeholder: "Search tickets..." X icon appears to clear and collapse.
- **Right side:** Sort dropdown: "Sort by: Newest" with CaretDown. Options: Newest, Oldest, Priority (High→Low), Status. 
- **Right side:** View toggle: Two icon buttons — List (Rows icon, 32px), Grid (GridFour icon, 32px). Active: Royal Blue icon, Royal Wash bg. Inactive: Text Tertiary, transparent bg. Hover: Silver Light bg.

### Section D: Charts Row

- Two charts side by side in cards (50/50 split, 16px gap between)

**Left Chart: 7-Day Ticket Activity**
- Same combined bar chart as dashboard Section C but always fixed to 7 days
- Height: 200px chart area

**Right Chart: 30-Day Trend**
- Card: White, radius 8px, Level 1 shadow, padding 24px
- Header: "30-Day Trend" DM Sans 600 16px
- Chart: Smooth area chart. Royal Blue fill at 10% opacity with Royal Blue 2px stroke line. Subtle gradient fill from top (Royal Blue 15%) to bottom (transparent).
- X-axis: Dates (every 5th day labeled), Y-axis: counts
- Hover: Vertical dashed guideline (#DDE0E6) follows cursor X position. Tooltip at intersection showing date + count.
- Height: 200px chart area

### Section E: Ticket Table (Full)

- Full width card, padding 0 (table touches card edges horizontally)
- Card header area: padding 20px, "All Tickets" DM Sans 600 16px, count badge "47 tickets" — Silver Light bg, Inter 500 12px Text Secondary, radius full, padding 2px 10px. Right: "Export CSV" button, ghost style, DownloadSimple icon + text.

**Table Columns:**

| Column | Width | Content | Sortable |
|--------|-------|---------|----------|
| Ticket # | 110px | JetBrains Mono 12px Royal Blue. "#TK-1234" format. Click → slide-over detail. | Yes |
| Subject | flex (min 200px) | Inter 400 13px Text Primary, single line ellipsis | No |
| Status | 110px | Pill badge (full radius, padding 3px 10px, 12px Inter 500): Open = Danger tint bg + Danger text, Pending = Warning tint + Warning text, Closed = Success tint + Success text | Yes |
| Priority | 100px | Colored icon + label: Critical (🔴 ArrowUp + "Critical" Danger), High (🟠 ArrowUp + "High" Warning dark), Medium (🔵 Equals + "Medium" Royal Blue), Low (⚪ ArrowDown + "Low" Text Tertiary) | Yes |
| Created | 120px | "Jan 15, 2026" Inter 400 12px Text Secondary | Yes |
| Updated | 120px | "2 hours ago" Inter 400 12px Text Tertiary | Yes |
| Assigned To | 130px | Avatar circle 24px + name Inter 400 12px Text Secondary | No |

- Sortable columns: header text + SortAscending/SortDescending icon 14px. Click toggles sort. Active sort: Text Primary text, Royal Blue icon.
- Table header row: Silver Light bg (#F0F2F5), height 44px, Inter 600 12px uppercase tracking 0.06em Text Secondary. Sticky on scroll.
- Data rows: 52px height, bottom border 1px Silver Light. Alternating row: NO alternating colors (cleaner without).
- Row hover: Royal Wash (#EBF2FA) bg, 100ms ease. Cursor pointer.
- Row click: Opens Ticket Detail Slide-Over.
- Selected row (while slide-over is open): Royal Wash bg persistent, left border 3px Royal Blue.

**Pagination:**
- Bottom of table, inside card, padding 16px 20px, top border 1px Silver Light
- Left: "Showing 1-10 of 47 tickets" Inter 400 13px Text Tertiary
- Right: Page controls — Previous (CaretLeft) and Next (CaretRight) icon buttons (32px square, radius 8px, 1px border #DDE0E6, hover Silver Light). Page numbers: "1 2 3 ... 5" — current page Royal Blue bg, white text, radius 8px. Other pages: transparent bg, Text Secondary, hover Silver Light. Inter 500 13px.

### Slide-Over: Ticket Detail

**Trigger:** Click any ticket row in table OR click ticket # link anywhere in portal
**Container:**
- Slides in from right edge of viewport
- Width: 560px (desktop), 480px (laptop), full width (tablet/mobile)
- Height: 100vh, position fixed right
- White background, Level 3 shadow on left edge
- Z-index: 45
- Dark overlay: rgba(0,43,77,0.2) on content behind (NOT full overlay — sidebar remains uncovered)
- Entrance: translateX(100%→0), 250ms ease-out
- Exit (click overlay, press ESC, click X): translateX(0→100%), 200ms ease-in

**Header (sticky top):**
- Height: 64px, padding 20px 24px, bottom border 1px #DDE0E6
- Left: X close button (24px, Text Secondary, hover Navy Core, 36px hit area)
- Center: "#TK-1234" JetBrains Mono 14px Navy Core
- Right: Status pill badge + Priority badge

**Content (scrollable):**
- Padding: 24px

**Subject Area:**
- Subject: DM Sans 600 18px Navy Core
- "Created by [Agent Name] • Jan 15, 2026 at 3:24 PM" — Inter 400 12px Text Tertiary
- Divider: 1px #DDE0E6, margin 20px 0

**Info Grid (2×2):**
- 4 info blocks in 2-column grid, gap 16px
  - Status: label (Inter 500 11px uppercase Text Tertiary) + value (pill badge)
  - Priority: label + colored priority indicator
  - Assigned To: label + avatar 24px + name
  - Resolution Time: label + "4.2 hours" or "In progress"

**Description:**
- "Description" section header (DM Sans 600 15px, margin-top 24px)
- Body text in Inter 400 14px Text Primary, line-height 24px

**Activity Timeline:**
- "Activity" section header
- Vertical timeline: 2px line in #DDE0E6, left margin 18px
- Each event: 8px circle on the line (Royal Blue for updates, Success for resolution, Warning for pending, Silver Dark for system notes) → content right (12px gap)
  - Event title: Inter 500 13px Text Primary ("Status changed to Pending")
  - Timestamp: Inter 400 11px Text Tertiary ("Jan 16, 2026 at 10:30 AM")
  - Optional note/comment: Inter 400 13px Text Secondary, Silver Light bg card, radius 6px, padding 10px 14px, margin-top 6px
- Events ordered newest first
- Subtle stagger entrance: each event fades in 80ms apart when slide-over opens

**Attachments (if any):**
- "Attachments" section header
- File cards: 1px border #DDE0E6, radius 6px, padding 10px 14px, flex row. File type icon (16px, color-coded: PDF red, DOCX blue, image green) + filename Inter 400 13px Text Primary + size "2.4 MB" Inter 400 11px Text Tertiary + DownloadSimple icon button 28px.
- Hover: Silver Light bg.

---

## PAGE 3: PROJECTS

**Route:** /projects
**Purpose:** View all active projects with task details and progress tracking.

### Section A: Page Header

- "Projects" DM Sans 700 26px. Sub: "Track your active projects and milestones" Inter 400 14px Text Secondary.
- Right: View toggles — "Cards" (GridFour) | "List" (Rows) | "Timeline" (ChartLine). Same toggle button style as helpdesk. Default: Cards.

### Section B: Project Stats Row

- 3 KPI cards:
  1. Active Projects (count)
  2. Tasks Completed This Month (count, with progress like "34/50")
  3. Projects On Track (percentage, with donut mini-viz)

### Section C: Card View (Default)

- Grid: 3 columns (desktop), 2 (laptop/tablet), 1 (mobile), gap 20px

**Project Card:**
- White, radius 12px, Level 1 shadow, padding 24px
- Top: Status dot (8px) + "On Track" / "At Risk" / "Delayed" — Inter 500 12px, respective semantic color. Right: DotsThreeVertical overflow menu (see Popover: Card Overflow).
- Title: DM Sans 600 16px Navy Core, margin-top 12px, max 2 lines
- Client tag (if useful): Pill badge, Silver Light bg, Inter 400 11px Text Secondary — but since this is client portal, each client sees only their own, so skip client tag. Instead show: Project category/type.
- Progress bar: Full width, 8px height (slightly thicker for prominence), radius full. Track: Silver Light. Fill: Royal Blue. Smooth width transition 300ms ease when data updates.
- Progress text: "14 of 20 tasks complete" Inter 400 12px Text Secondary, margin-top 8px
- Due date: CalendarBlank 14px + "Due Mar 15, 2026" Inter 400 12px Text Tertiary, margin-top 12px
- Assignees: Stacked avatar circles (24px each, -8px overlap for 2nd+), max 3 shown + "+2" overflow circle (Silver Light bg, Inter 500 11px Text Secondary)
- Hover: Level 2 shadow, translateY(-2px), border 1px solid Royal Blue at 20% opacity. All transitions 200ms ease.
- Click → navigates to Project Detail sub-page

### Section D: List View

- Table similar to Helpdesk ticket table:

| Column | Width | Content |
|--------|-------|---------|
| Project Name | flex | Inter 600 14px Navy Core |
| Status | 110px | Colored dot + text |
| Progress | 160px | Progress bar (120px) + "70%" text |
| Tasks | 100px | "14/20" Inter 400 13px |
| Due Date | 120px | Date Inter 400 12px Text Secondary |
| Assignees | 120px | Stacked avatars |

- Row click → Project Detail sub-page

### Section E: Timeline View

- Gantt-style horizontal timeline
- Card: White, radius 8px, Level 1, full width, padding 24px
- Y-axis: Project names (left column, 200px fixed)
- X-axis: Date range (auto-scaled to earliest start → latest due date), with month labels
- Bars: Horizontal rectangles per project, height 28px, radius 4px. Color: Royal Blue fill for completed portion, Royal Blue at 20% for remaining. Milestone diamonds (10px, rotated 45°, Navy Core fill) at key dates.
- Today line: Vertical dashed line, 2px, Danger color, with "Today" label at top
- Hover on bar: Tooltip with project name, start/end dates, % complete
- Scrollable horizontally if range exceeds viewport

### Sub-Page: Project Detail

**Route:** /projects/[id]
**Breadcrumb:** Projects > [Project Name]

**Header:**
- Project name: DM Sans 700 24px Navy Core
- Status badge + Due date + Assignees row
- "Back to Projects" link with CaretLeft icon, Inter 500 13px Royal Blue

**Tab Bar:**
- Tabs: "Tasks" | "Timeline" | "Files" | "Overview"
- Underline style: 2px bottom border. Active: Royal Blue text + Royal Blue underline. Inactive: Text Secondary. Hover: Text Primary. Transition: underline slides to active tab 200ms ease (use CSS transform on a pseudo-element).

**Tasks Tab (default):**
- Kanban board layout: 4 columns — To Do | In Progress | Review | Complete
- Column header: DM Sans 600 14px, item count badge (Silver Light circle, 24px, Inter 500 12px Text Secondary). Column bg: transparent (no colored columns — cleaner).
- Task cards: White, 1px border #DDE0E6, radius 8px, padding 14px, margin-bottom 12px
  - Task name: Inter 500 13px Text Primary, max 2 lines
  - Priority flag: Small colored bar (3px × full width) at card top — Critical = Danger, High = Warning, Medium = Royal Blue, Low = Silver Dark
  - Bottom row: Assignee avatar 20px + Due date Inter 400 11px Text Tertiary, flex space-between
  - Hover: Level 2 shadow, border Royal Blue at 20%, 150ms
- Drag-and-drop: NOT available in client portal (read-only). No drag handles.
- Column dividers: 1px dashed #DDE0E6 between columns

**Timeline Tab:**
- Same Gantt view as Section E but for individual tasks within this project

**Files Tab:**
- Same layout as Documents page (see Page 4) but scoped to this project's files

**Overview Tab:**
- Project description: Body text in Inter 400 14px
- Key dates: Start date, Due date, Last updated
- Team: Grid of assignee cards with name + role
- Completion donut chart: 120px diameter, Royal Blue for complete, Silver Light for remaining, percentage in center (DM Sans 700 24px)

---

## PAGE 4: DOCUMENTS

**Route:** /documents
**Purpose:** Access and download shared documents from SharePoint.

### Section A: Page Header

- "Documents" DM Sans 700 26px. Sub: "Access your shared files and resources" Inter 400 14px Text Secondary.
- Right: View toggle (Grid / List), Search input (expandable, same as helpdesk).

### Section B: Folder Navigation (Left Panel — Desktop Only)

- Width: 240px, position sticky, top below top bar
- "Folders" DM Sans 600 15px header, margin-bottom 12px
- Tree structure:
  - All Documents (root, always visible)
    - Contracts
    - Reports
      - Monthly
      - Quarterly
    - Policies
    - Network Diagrams
    - Invoices
  - Each item: FolderSimple icon 18px + name Inter 400 13px, 36px height, padding-left increases 16px per nesting level
  - Active folder: Royal Wash bg, Royal Blue text, font-weight 500
  - Hover: Silver Light bg, 100ms
  - Collapsed/expanded: CaretRight icon rotates 90° when folder has children and is expanded (150ms ease)

- Tablet/Mobile: Folder tree becomes a dropdown selector at the top of the page instead of a side panel.

### Section C: File Area (List View — Default)

- Breadcrumb: "All Documents > Reports > Monthly" — clickable segments
- Table:

| Column | Width | Content |
|--------|-------|---------|
| Type Icon | 40px | File type icon 24px — PDF: red FilePdf, DOCX: blue FileDoc, XLSX: green FileXls, Image: purple Image, Other: gray File. All Phosphor icons. |
| File Name | flex | Inter 400 14px Text Primary. Clickable → opens file in new tab or triggers download. |
| Category | 120px | Pill badge, Silver Light bg, Inter 400 11px Text Secondary |
| Modified | 130px | "Jan 15, 2026" Inter 400 12px Text Secondary |
| Size | 80px | "2.4 MB" Inter 400 12px Text Tertiary |
| Actions | 80px | DownloadSimple icon button (32px, Text Secondary, hover Royal Blue), ArrowSquareOut icon button (open externally) |

- Row height: 52px, hover Royal Wash, click on filename → downloads/opens
- Empty folder: FolderOpen 64px icon (Silver Dark), "No documents in this folder" Inter 400 14px Text Tertiary, centered with 48px padding

### Section D: Grid View

- Cards in 4-column grid (desktop), 3 (laptop), 2 (tablet), 1 (mobile), gap 16px
- File card: White, radius 8px, Level 1, padding 16px
  - Top area: 80px height, Silver Light bg, centered file type icon (36px, color-coded)
  - Name: Inter 500 13px Text Primary, max 2 lines, ellipsis, margin-top 12px
  - Meta: "2.4 MB • Jan 15, 2026" Inter 400 11px Text Tertiary
  - Hover: Level 2 shadow, scale(1.01), 200ms ease. Overlay appears on the thumbnail area: semi-transparent Navy Core (50% opacity), white DownloadSimple icon centered, fade in 150ms.
  - Click → downloads file

---

## PAGE 5: TECH STACK

**Route:** /tech-stack
**Purpose:** Overview of software, subscriptions, and infrastructure.

### Section A: Page Header

- "Tech Stack" DM Sans 700 26px. Sub: "Your technology infrastructure and subscriptions" Inter 400 14px Text Secondary.

### Section B: Summary KPIs

- 4 cards: Total Software (count), Active Subscriptions (count + "3 expiring soon" in Warning), Infrastructure Items (count), Monthly Cost ("$4,280" DM Sans 700 30px)

### Section C: Category Sections (Accordion)

Each category is a collapsible section:

**Section Header (Accordion Trigger):**
- Full width, 56px height, Silver Light bg left strip (4px wide, Royal Blue), padding 16px 20px
- Left: Category icon (20px, Royal Blue) + Category name (DM Sans 600 16px Navy Core) + count badge (Silver Light pill, Inter 500 12px Text Secondary)
- Right: CaretDown icon 18px Text Secondary, rotates 180° when expanded (200ms ease)
- Hover: whole row Silver Light bg at 50%, 100ms
- Click: toggles content area open/closed. Content slides open/closed with max-height transition (300ms ease) + opacity 0→1 (200ms).

**Categories:**

**1. Software & Subscriptions**
- Table inside accordion:
  | Icon (32px square, radius 6px, Silver Light bg, centered app icon placeholder) | Name (Inter 500 14px) | License Count ("5 licenses") | Cost/Month ("$49.99") | Renewal Date ("Mar 2026") | Status pill (Active=Success, Expiring Soon=Warning, Expired=Danger) |
- Expiring Soon rows: Left border 3px Warning color
- Hover: Royal Wash bg

**2. Infrastructure**
- Table:
  | Device Type Icon (Monitor, HardDrives, Printer, WifiHigh — Phosphor 24px) | Name/Model | Location | Status (Online: green dot + "Online" / Offline: red dot + "Offline") | Last Seen ("2 min ago" if online, "3 days ago" if offline in Danger text) |
- Offline items: subtle Danger wash bg (#FCE8E8 at 30%)

**3. Cloud Services**
- Table:
  | Provider Icon (Cloud Phosphor, 24px) | Service Name | Tier ("Business Premium") | Usage ("72% of quota") with mini progress bar (60px wide) | Status |

### Popover: License Detail

**Trigger:** Click on any software/subscription row
**Container:** 400px popover, positioned right of clicked row (or below on mobile), White, Level 3, radius 12px

**Content:**
- App icon (48px) + name (DM Sans 600 16px) + status badge
- Info grid (2-col): License count, Cost, Billing cycle, Renewal date, Admin contact
- "License History" section: mini timeline of changes
- Close: X button top-right, or click outside

---

## PAGE 6: AI ASSISTANT

**Route:** /ai-assistant
**Purpose:** Natural language queries about IT environment with data-driven answers.

### Layout

- No sidebar content panels — full width allocated to chat interface
- Clean, focused conversational UI

### Chat Container

- Max-width: 800px, centered horizontally in content area
- Full height of content area (below top bar)

### Welcome State (No Messages Yet)

- Centered vertically and horizontally:
  - Robot icon (Phosphor, 48px, Royal Blue)
  - "Flux AI Assistant" DM Sans 700 22px Navy Core
  - "Ask me anything about your IT environment. I can pull data from your tickets, projects, documents, and tech stack." Inter 400 14px Text Secondary, max-width 480px, text-align center
  - 24px gap
  - Suggested query chips (3×2 grid, gap 10px):
    - "Show my open tickets"
    - "What projects are overdue?"
    - "List expiring licenses"
    - "Summarize this month's ticket trends"
    - "What's my average resolution time?"
    - "Show network infrastructure status"
  - Chip style: White bg, 1px border #DDE0E6, radius full, padding 8px 16px, Inter 400 13px Text Primary. Hover: Royal Wash bg, border Royal Blue 30%, 150ms. Click: sends as message.

### Message Thread (After Conversation Starts)

- Messages stack vertically, 16px gap between messages
- Scroll: overflow-y auto, smooth scrolling, new messages auto-scroll to bottom

**User Message:**
- Right-aligned, max-width 70% of chat container
- Bubble: Royal Blue bg, white text, Inter 400 14px, line-height 22px, padding 12px 18px, radius 16px 16px 4px 16px (sharp bottom-right corner indicates sender)
- Timestamp below: Inter 400 11px Text Tertiary, right-aligned, "Just now" / "2:34 PM"

**AI Response:**
- Left-aligned, max-width 85% (wider to accommodate data displays)
- Icon: Robot circle 28px (Royal Wash bg, Royal Blue icon 16px) left of first response line
- Bubble: White bg, 1px border #DDE0E6, padding 16px 20px, radius 4px 16px 16px 16px (sharp top-left)
- Text: Inter 400 14px Text Primary
- **Rich content within responses:**
  - Inline data tables: Same table styling as rest of portal but compact (36px rows, 12px font)
  - Mini chart cards: Embedded mini charts (bar/line/donut) inside response, max 300px wide, within Silver Light bg cards with radius 8px, padding 12px
  - Ticket/Project references: Clickable pill links (Royal Wash bg, Royal Blue text, 12px Inter 500, radius full, padding 3px 10px). Click → navigates to item.
  - Data source tag: "Data from Atera • Updated 2m ago" — Inter 400 10px Text Tertiary, italic
- Timestamp below: left-aligned

**Typing Indicator:**
- Appears while AI is processing
- 3 dots in a row inside a light bubble (Silver Light bg, radius 16px, padding 10px 18px)
- Each dot: 6px circle, Navy Core at 40% opacity
- Animation: Sequential scale 1→1.4→1 per dot, 300ms each, 150ms stagger, infinite loop
- Entrance: opacity 0→1 + translateY(4px→0), 150ms

### Input Area (Sticky Bottom)

- Sticky to bottom of chat container, padding 16px 0
- Background: White with top border 1px #DDE0E6 (or subtle gradient fade from transparent→white if scrolled)
- Input container: White bg, 1px border #DDE0E6, radius 12px, min-height 48px, max-height 120px (auto-grows), padding 12px 48px 12px 16px
- Placeholder: "Ask about your IT environment..." Inter 400 14px Silver Dark
- Text: Inter 400 14px Text Primary
- Send button: Absolute positioned inside input container, right 8px, bottom 8px. 34px circle, Royal Blue bg, white PaperPlaneTilt icon 18px. Hover: Royal Light bg, 150ms. Disabled (empty input): Silver Light bg, Silver Dark icon. Active (sending): scale 0.9 for 100ms then 1.
- Keyboard: Enter sends (Shift+Enter for new line)
- Above input (when conversation active): Suggested follow-up chips in horizontal scroll. Same styling as welcome state chips but smaller (padding 6px 12px, 12px font).

---

## FLOATING COMPONENT: TOAST NOTIFICATIONS

**Trigger:** System events (sync complete, error, etc.)
**Position:** Top-right of content area (not overlapping sidebar), 24px from top and right edges
**Container:**
- Width: 380px
- White bg, radius 10px, Level 3 shadow
- Left border: 4px solid (Success green / Warning amber / Danger red / Royal Blue info)
- Padding: 14px 18px
- Z-index: 55

**Content:**
- Flex row: Icon circle 32px (color tint bg + colored icon) → Text content (flex-1) → X close button (16px, Text Tertiary, hover Text Secondary)
- Title: Inter 600 13px Text Primary
- Description: Inter 400 12px Text Secondary, max 2 lines

**Behavior:**
- Entrance: translateX(100%→0) + opacity 0→1, 250ms ease-out
- Auto-dismiss: 5 seconds, progress bar at bottom (4px height, colored like left border, shrinks right→left over 5s)
- Exit: opacity 1→0 + translateY(-8px), 200ms ease
- Stacking: Multiple toasts stack vertically, 8px gap, newer on top
- Hover on toast: Pauses auto-dismiss timer
- Max 3 visible at once (older ones immediately exit)

---

## FLOATING COMPONENT: TOOLTIP

**Trigger:** Hover on any element with title/info icon
**Delay:** 300ms hover before showing
**Container:**
- Navy Core (#002B4D) bg, radius 6px, padding 6px 10px, max-width 240px
- Text: Inter 400 12px White
- Shadow: Level 2
- Arrow: 6px triangle pointing toward trigger element

**Behavior:**
- Entrance: opacity 0→1 + scale(0.95→1), 100ms ease
- Exit: opacity 1→0, 80ms ease (on mouse leave, no delay)
- Position: Auto-detect best position (top/bottom/left/right) to stay within viewport. Prefer top.

---

## POPOVER: DATE RANGE PICKER

**Trigger:** Click date range filter on Helpdesk
**Container:** 560px wide (shows 2 months side-by-side), White bg, Level 3 shadow, radius 12px, z-index 50

**Header:**
- Quick select pills: "Today" | "7 Days" | "30 Days" | "90 Days" | "Custom"
- Silver Light bg, radius full, Inter 400 12px Text Secondary. Active: Royal Blue bg, white text.

**Calendar Grid:**
- 2 month panels side-by-side, 280px each
- Navigation: CaretLeft / CaretRight arrows to shift months. Month name DM Sans 600 14px centered.
- Day grid: 7 columns (Su Mo Tu We Th Fr Sa headers, Inter 500 11px Text Tertiary uppercase). Day cells 36px square, Inter 400 13px, radius 8px.
- Today: Royal Blue text, no bg
- Selected range start/end: Royal Blue bg, white text
- Range between: Royal Wash bg
- Out-of-month days: Text Tertiary at 40%
- Hover: Silver Light bg, 100ms

**Footer:**
- "Cancel" ghost button + "Apply" primary button, right-aligned, 12px gap

---

## POPOVER: CARD OVERFLOW MENU

**Trigger:** DotsThreeVertical icon on project cards
**Container:** 180px, White, Level 2, radius 8px, right-aligned below trigger

**Items:**
- "View Details" (Eye icon)
- "View Timeline" (ChartLine icon)
- "Copy Link" (Link icon)
- Each: 40px height, padding 8px 14px, Icon 16px Text Secondary + text Inter 400 13px Text Primary. Hover: Royal Wash bg. Click: performs action, closes menu.

---

## EMPTY STATES (Per Page)

Every page must have a designed empty state for when no data exists:

**Pattern:**
- Centered in content area
- Phosphor icon at 64px, Silver Dark color (#B8BCC4)
- Primary text: DM Sans 600 16px Text Primary — clear statement ("No tickets yet")
- Secondary text: Inter 400 14px Text Secondary, max 320px width — helpful explanation ("Your support tickets will appear here once they're created in the system.")
- Optional CTA button: "Contact Support" or "Learn More" — Secondary button style

**Page-specific:**
- Helpdesk: Ticket icon, "No tickets found", "Your support tickets will appear here. Use the filters above to adjust your search."
- Projects: Kanban icon, "No active projects", "Projects assigned to your organization will be listed here."
- Documents: FolderOpen icon, "No documents shared yet", "Your shared documents and files will be accessible here."
- Tech Stack: CircuitBoard icon, "Tech stack information pending", "Your technology inventory will appear here once configured."
- AI Assistant: (uses the welcome state as described above — no separate empty state needed)

---

## LOADING STATES

**Skeleton Screens (for initial page load / data fetching):**
- Replace ALL content areas with skeleton placeholders — never show a spinner for page-level loading
- Skeleton blocks: Silver Light bg (#F0F2F5), radius 4px, with a shimmer animation:
  - Linear gradient overlay: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`
  - Sweeps left→right over 1.5s, infinite, ease-in-out
- Match exact dimensions of what the content will be:
  - KPI card skeletons: 4 rectangles matching card dimensions
  - Chart skeleton: single rectangle matching chart area
  - Table skeleton: header row (solid Silver Light) + 5 rows of varying-width rectangles
  - Sidebar: already painted (not skeleton — remains static)
  - Text skeletons: heights match line-height, widths vary (70%, 100%, 85%) for natural feel

**Inline Loading (for data refresh / partial updates):**
- Small spinner: 16px circular, 2px stroke, Royal Blue with Silver Light track, rotates 360° over 800ms linear infinite
- Placed inline next to the "Last synced" timestamp or inside buttons during action

**Button Loading:**
- Replace button text with 16px spinner (white on Royal Blue bg)
- Button width locked (min-width: current width) to prevent layout shift
- Disabled state — no hover effects

---

## RESPONSIVE BEHAVIOR SUMMARY

| Breakpoint | Sidebar | Grid | Cards | Tables | Charts |
|-----------|---------|------|-------|--------|--------|
| ≥1280px (Desktop) | 256px expanded | 12-col, 24px gutter | 3-4 per row | Full table | Side-by-side |
| 1024-1279px (Laptop) | 72px collapsed | 12-col, 20px gutter | 2-3 per row | Full table, smaller font | Side-by-side (compressed) |
| 768-1023px (Tablet) | Hidden (hamburger overlay) | 8-col, 16px gutter | 2 per row | Horizontal scroll or card view | Stacked vertically |
| <768px (Mobile) | Hidden + bottom tab bar | 4-col, 12px gutter | 1 per row | Converted to card list | Full width, simplified |

**Table → Card transformation (Mobile):**
Each table row becomes a card with stacked key-value pairs:
- Card: White, radius 8px, Level 1, padding 16px
- Each field: Label (Inter 500 11px Text Tertiary uppercase) over Value (Inter 400 14px Text Primary)
- Status and Priority badges remain as pills
- Cards separated by 12px gap

---

## ANIMATION SPECIFICATIONS

All animations must be **purposeful** — they confirm state changes, guide attention, or provide spatial context. NO decorative animation.

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Card | Hover | translateY(-2px) + shadow L1→L2 | 200ms | ease |
| Card | Hover end | translateY(0) + shadow L2→L1 | 200ms | ease |
| Button | Hover | background-color darken | 150ms | ease |
| Button | Click/Active | scale(0.97) | 80ms | ease-out |
| Button | Release | scale(1) | 120ms | ease |
| Slide-over | Open | translateX(100%→0) | 250ms | ease-out |
| Slide-over | Close | translateX(0→100%) | 200ms | ease-in |
| Modal | Open | opacity 0→1, scale(0.95→1) | 200ms | ease-out |
| Modal | Close | opacity 1→0, scale(1→0.97) | 150ms | ease-in |
| Dropdown | Open | opacity 0→1, translateY(-4px→0) | 150ms | ease |
| Dropdown | Close | opacity 1→0 | 100ms | ease |
| Toast | Enter | translateX(100%→0), opacity 0→1 | 250ms | ease-out |
| Toast | Exit | opacity 1→0, translateY(0→-8px) | 200ms | ease |
| Tab underline | Switch | translateX to new position | 200ms | ease |
| Accordion | Expand | max-height 0→auto, opacity 0→1 | 300ms | ease |
| Accordion | Collapse | max-height auto→0, opacity 1→0 | 250ms | ease |
| Skeleton shimmer | Loop | gradient sweep left→right | 1500ms | ease-in-out |
| Tooltip | Show | opacity 0→1, scale(0.95→1) | 100ms | ease |
| Tooltip | Hide | opacity 1→0 | 80ms | ease |
| Chart data | Load | Bars grow from 0 height, lines draw from left | 600ms | ease-out, stagger 50ms |
| Progress bar | Update | width transition | 300ms | ease |
| Refresh icon | Click | rotate 360° | 500ms | ease |
| Parallax (subtle) | Scroll | Background of welcome section moves at 0.3× scroll speed | continuous | linear |
| Floating KPI cards | Page load | fade-in + translateY(8px→0), staggered 80ms per card | 300ms | ease-out |

**Limited Parallax:** ONLY on Dashboard welcome header area — a very subtle depth effect where the background pattern (if any) moves slower than content on scroll. Parallax ratio: 0.3. No parallax on any other page.

**Page Transition (Route Change):**
- Outgoing content: opacity 1→0, 100ms
- Incoming content: opacity 0→1 + translateY(6px→0), 200ms ease-out
- Total perceived transition: ~200ms. Fast and snappy.

---

## ACCESSIBILITY CHECKLIST (WCAG 2.1 AA COMPLIANCE)

Design every element to pass these checks:

**Color Contrast:**
- ✅ Navy Core (#002B4D) on White = 12.6:1 (AAA)
- ✅ Royal Blue (#15549D) on White = 5.8:1 (AA for normal text)
- ✅ White on Royal Blue = 5.8:1 (AA)
- ✅ White on Navy Core = 12.6:1 (AAA)
- ✅ Text Primary (#0A1929) on White = 16.4:1 (AAA)
- ✅ Text Secondary (#4A5E73) on White = 5.2:1 (AA)
- ✅ Text Tertiary (#7A8DA0) on White = 3.3:1 (AA for large text only — use only for timestamps/captions/non-essential info)
- ✅ All status colors (Success/Warning/Danger) paired with their tint backgrounds meet 4.5:1
- ⚠️ Never use color alone for status — always pair with icon + text label

**Focus States:**
- Every interactive element must have a visible focus indicator
- Focus ring: 2px solid Royal Blue, 2px offset from element. On dark backgrounds: 2px solid White.
- Tab order follows visual reading order (left→right, top→bottom)
- Skip-to-content link: First focusable element, visually hidden until focused, jumps to main content area

**Touch Targets:**
- Minimum 44×44px touch target for all interactive elements
- Buttons: min-height 40px, min-width 44px
- Icon buttons: min 36px with 4px padding = 44px target
- Table rows: 48-52px height provides sufficient target

**Screen Reader:**
- All icons have aria-label or are aria-hidden with adjacent text
- Charts must have a text summary alt: "Bar chart showing 7-day ticket activity: Monday 8, Tuesday 12..."
- Status badges: use aria-label "Status: Open" not just color
- Live regions: toast notifications use role="alert", typing indicator uses aria-live="polite"
- Modals/slide-overs trap focus within when open

**Reduced Motion:**
- Detect `prefers-reduced-motion: reduce`
- Disable all transform animations, chart animations, parallax
- Keep opacity transitions (reduced to 100ms)
- Skeleton shimmer becomes static Silver Light bg

**Keyboard Navigation:**
- ESC closes all overlays (modals, slide-overs, dropdowns, command palette)
- ⌘K / Ctrl+K opens command palette from anywhere
- Tab cycles through interactive elements
- Arrow keys navigate within dropdowns, menus, and calendar
- Enter/Space activates buttons, selects dropdown options
- Charts: arrow keys can navigate between data points with tooltip showing

---

## POST-DESIGN VALIDATION CHECKLIST

After completing all frames, run through these tests:

**1. Accessibility Audit:**
- [ ] Run Figma accessibility plugin (Stark or A11y) on every frame
- [ ] Verify all color contrast ratios meet AA minimum (4.5:1 normal text, 3:1 large text, 3:1 UI components)
- [ ] Confirm every interactive element has visible focus state designed
- [ ] Verify no information conveyed by color alone — all statuses have icon + text
- [ ] Check touch target sizes (44px minimum)
- [ ] Verify tab order annotations on complex pages (Helpdesk table, Project Kanban)

**2. Design Consistency:**
- [ ] All text styles used are from the defined type scale — no custom one-off sizes
- [ ] All colors used are from the defined palette — no off-brand hex codes
- [ ] All spacing between elements is on the 4px grid
- [ ] All border-radius values are from the defined token set
- [ ] All shadows are from the 4-level elevation system
- [ ] Icons are consistently from Phosphor Regular set at defined sizes
- [ ] All identical components (KPI cards, table rows, badges) are instances of the same Figma component

**3. UI Guideline Compliance:**
- [ ] Sidebar matches spec: 256px, gradient background, correct nav order and styling
- [ ] Top bar matches spec: 64px height, breadcrumb left, search + bell + avatar right
- [ ] Every button follows the 4 defined button styles (primary, secondary, ghost, destructive)
- [ ] Every badge follows the defined status color system
- [ ] Typography hierarchy is clear on every page — exactly one page title, clear section titles, no ambiguous text sizes

**4. Responsive Frames:**
- [ ] Desktop (1440px), Laptop (1200px), Tablet (768px), Mobile (375px) frames exist for EVERY page
- [ ] Sidebar behavior changes per breakpoint as specified
- [ ] Tables transform to card layouts on mobile
- [ ] Charts simplify on smaller screens
- [ ] Touch targets meet 44px minimum on tablet/mobile
- [ ] Bottom tab bar appears on mobile frames

**5. State Coverage:**
- [ ] Default, Hover, Active/Pressed, Focus, Disabled states for every interactive component
- [ ] Loading (skeleton) states for every page
- [ ] Empty states for every data-driven page
- [ ] Error states for failed data fetches (toast notification + inline error message)
- [ ] Notification dropdown: populated + empty states
- [ ] AI Assistant: welcome state + conversation state + typing indicator

**6. Animation/Interaction Notes:**
- [ ] Every animation has duration, easing, and trigger annotated in Figma (use sticky notes or Figma annotations)
- [ ] Reduced motion alternatives documented
- [ ] Parallax limited to dashboard welcome section only
- [ ] No purely decorative animations — every motion has purpose

---

## FIGMA FILE STRUCTURE

Organize the Figma file as follows:

**Page 1: 🎨 Design System**
- Color styles (all tokens)
- Text styles (all type specs)
- Effect styles (all shadow levels)
- Grid styles (12-col, responsive)
- Component library: Buttons, Badges, Cards, Table Rows, Inputs, Dropdowns, Navigation Items, Icons, Avatars, Charts (placeholder), Skeletons

**Page 2: 📐 Wireframes** (optional low-fidelity first pass)

**Page 3: 🖥️ Desktop Frames (1440px)**
- Dashboard (Home)
- Helpdesk + Ticket Detail Slide-over
- Projects + Project Detail (sub-tabs)
- Documents
- Tech Stack
- AI Assistant
- Command Palette overlay
- Notification Dropdown
- User Dropdown

**Page 4: 💻 Laptop Frames (1200px)**
- All pages with collapsed sidebar

**Page 5: 📱 Tablet Frames (768px)**
- All pages with hamburger + overlay sidebar

**Page 6: 📲 Mobile Frames (375px)**
- All pages with bottom tab bar + card-based tables

**Page 7: 🔄 States & Interactions**
- All component states (hover, active, focus, disabled, loading, empty, error)
- Animation annotations
- Slide-over open/close frames
- Modal states

**Page 8: ✅ Handoff & Specs**
- Spacing annotations
- Color contrast verification
- Accessibility notes

---

*End of prompt. This document is the single source of truth for the complete Flux Technologies Client Portal Dashboard design in Figma. No external references needed.*