# Frontend Engineer — Skills

## Two Independent Apps

The POC is **two separate codebases**, each deployed independently:

| App | Repo | Primary Device | Purpose |
|-----|------|---------------|---------|
| `fiel-dashboard` | Grocer Dashboard | Desktop / tablet | Store owner views insights |
| `fiel-member` | Member Web App | Mobile (390px) | Customer sees their card & offers |

They share the same design tokens and mock data shape but have no shared codebase.

## Core Stack (each app)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom design tokens
- **Language:** TypeScript
- **Icons:** Lucide React
- **Charts:** Recharts — `fiel-dashboard` only (warm palette overrides required)
- **QR Code:** `qrcode.react` — `fiel-member` only
- **Fonts:** `next/font/google` — Fraunces, Lora, DM Sans

## Plugins & Extensions (see `/plugins`)
- Tailwind CSS IntelliSense (VS Code)
- Prettier with Tailwind plugin
- ESLint with Next.js config

## Design Token Setup
Tailwind config must extend with fiel design tokens:

```js
// tailwind.config.js
colors: {
  terracotta: '#C4622D',
  olive: '#4A6741',
  marigold: '#E8A838',
  cream: '#FAF7F2',
  'warm-white': '#FEFCF9',
  espresso: '#2C1810',
  'warm-gray': '#6B5A52',
  beige: '#E8DDD5',
},
borderRadius: {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
},
boxShadow: {
  sm: '0 1px 3px rgba(44,24,16,0.08)',
  md: '0 4px 12px rgba(44,24,16,0.10)',
  lg: '0 8px 24px rgba(44,24,16,0.12)',
},
```

## Key Components by App

### `fiel-dashboard`
- `SegmentBadge` — pill badge for Regular / New / At-Risk / Churned
- `InsightCard` — single-sentence insight with colored left border
- `AlertBanner` — terracotta-bordered action alert
- `StatBlock` — large number + label for overview stats
- `MemberRow` — list row with avatar, name, badge, last seen, visit count

### `fiel-member`
- `MemberCard` — the hero loyalty card with gradient bg + member name
- `QRDisplay` — QR code block below the card with "Show at checkout" label
- `OfferCard` — marigold-bordered offer with bilingual copy
- `VisitHistory` — simple timeline of past visits
