# FruverFiel — Ideas & Improvements

A structured review of the current codebase with actionable improvements and feature ideas.
Items are grouped by scope: bugs/inconsistencies first, then UX, then features, then architecture.

---

## 1. Bugs & Inconsistencies to Fix Now

### Language mixing
The app is split between English and Spanish with no clear rule.
- `SideNavBar.vue` labels are in Spanish: "Resumen", "Mis clientes", "Hablemos"
- `CustomersView.vue` and most component copy is in English
- `App.vue` FAB tooltip says "Agregar cliente"
- **Fix:** Pick one language for the UI and move all copy to `uiCopy.js`. `uiCopy.js` is already a good pattern but barely used — everything else is hardcoded in templates.

### Design token violations
`DESIGN.md` explicitly says: *"No 1px solid borders"* and *"Never hardcode hex values."*
- `SideNavBar.vue:17` uses `bg-white` instead of `bg-surface`
- `OverviewView.vue:86` uses `border border-outline-variant/30` (explicit line — forbidden)
- `InsightsView.vue` uses `border-8 border-dashed border-outline-variant/20` for the clock decoration
- Multiple places use `text-stone-400`, `text-stone-600` (raw Tailwind tokens, not design system)
- **Fix:** Replace every `bg-white`, `stone-*`, and explicit `border` with design token equivalents.

### Active nav style inconsistency
The original HTML spec and `DESIGN.md` called for a `border-r-4` right accent on the active nav item.
`SideNavBar.vue` currently renders a fully-filled `bg-primary text-on-primary` pill instead.
Both are valid looks but they should be deliberate — pick one and document it in `DESIGN.md`.

### `hideFab` route meta is set to `true` on all routes
Every route sets `meta: { hideFab: true }`, so the FAB in `App.vue` is never shown.
Either remove the FAB or fix the meta on the routes where it should appear (e.g., `/customers`).

### `MOCK_CUSTOMERS` dates are hardcoded to 2023
`lastVisitedRaw` uses `new Date('2023-10-24')` etc. The app's current date is 2026-03-29.
Relative labels like "Today" and "Yesterday" on rows 1, 5, 11 are now misleading.
**Fix:** Make relative dates dynamic (`Date.now()`, `subDays(new Date(), n)`) or update the year.

---

## 2. UX & Interaction Gaps

### My Customers

| Gap | What to build |
|-----|---------------|
| No column sorting | Clicking a column header should sort the table (name A→Z, visits ↑↓, date) |
| No empty state | When a filter/search returns zero results the table body is just blank |
| No pagination / virtual scroll | With 20+ rows the table is fully rendered with no end; add pagination or a "load more" |
| Detail panel has no transition | Switching customers causes a hard content swap — add a `v-move` or fade transition |
| Search has no debounce | Every keystroke triggers a computed re-evaluation — extract a `useDebounce` composable |
| No visit count for selected filter | The filter pills (All / Active / At Risk) don't show a count badge next to the label |
| Spend data missing | The detail panel shows individual visit amounts but never a total or average spend |
| "Add Customer" FAB does nothing | Should open a slide-in drawer or modal with a minimal form |

### Overview

| Gap | What to build |
|-----|---------------|
| KPI cards are static | They should animate in (count-up) on mount — adds perceived data richness |
| Bar chart has no Y-axis or tooltips | `OverviewVisitTrend` renders bars but hovering a bar shows nothing |
| "AI Insights" cards have no action | Each insight card should link to the relevant screen (Insights, Customers, Campaigns) |
| Alert banner is always visible | When `atRiskCount === 0` the banner text changes but the banner stays — consider hiding it |
| No "last updated" timestamp | Dashboards need to signal data freshness — even a mocked "Refreshed 2 min ago" label |

### Insights

| Gap | What to build |
|-----|---------------|
| Bar chart heights are CSS class strings | `bar.fillClass` and `bar.track` mix inline style concerns into the data — use `style` binding with a `height` percentage instead |
| SVG line path is a hardcoded `d` string | The nurturing growth chart path lives in the mock — it should be computed from data points |
| "Store Vitality" CTA button does nothing | It should navigate somewhere (Campaigns or a tips modal) |
| Low-stock items have no action | The "Order Restock" CTA should at least open a confirm modal as a placeholder |
| Clock diagram is purely decorative | The time-of-day rings have no interaction — hovering a quadrant should highlight the matching bar in the footfall chart |

### Campaigns / Marketing

| Gap | What to build |
|-----|---------------|
| Campaigns screen is fully locked | Good as a freemium gate — but the blurred preview could show real campaign card shapes instead of just skeleton divs |
| Marketing view has no Pinia store | All data comes directly from the mock in the template — no filtering, sorting, or state |
| Campaign cards are not clickable | They should expand inline or navigate to a detail view |
| "Live Email Preview" is static HTML | Consider adding a toggle between mobile/desktop preview frames |

---

## 3. Missing Screens & Features

### 3.1 Customer Profile Page (full-page view)
Route: `/customers/:id`
The current split-panel detail is a great list companion, but a full page is needed for:
- Complete visit history (scrollable, not limited to 4 rows)
- Total lifetime spend + average basket
- Preferred visit days (a small heatmap)
- Tags / notes field (mock-editable)
- A "Suggested action" AI chip (e.g. "Send a sourdough restock alert")

### 3.2 Add / Edit Customer Drawer
A slide-in panel triggered by the FAB or an "Edit" button on the detail panel.
Fields: name, email, phone, tier, notes.
On submit: add to the Pinia store (no real API needed — mock persistence).

### 3.3 Notification Center
A slide-in panel accessible from the top nav bell icon.
Mock notifications:
- "Sarah Jenkins hasn't visited in 14 days — consider an offer"
- "3 new members this week"
- "Your Tuesday footfall is up 12%"
Badges clear on view. State managed in a `useNotificationsStore`.

### 3.4 Settings Page
Route: `/settings`
Sections:
- **Store profile** — store name, address, logo (mock upload)
- **Notification preferences** — toggle SMS / email / push per event type
- **Membership tiers** — label and threshold for Bronze / Silver / Gold
- **Account** — owner name, email, change password (all mocked)

### 3.5 QR / Wallet Pass Generator
Route: `/pass` or a modal from Customers
Core to Track A of the business model: generate a QR code for a customer's digital membership card.
Can be purely visual (render a QR using a library like `qrcode` npm package).
Display: store name, customer tier, a scannable code, and an "Add to Wallet" button (placeholder).

### 3.6 Real-time Check-in Feed (mock)
A live-style panel (perhaps in Overview or a dedicated `/activity` route) that simulates new check-ins arriving — cycling through mock customers with a short interval using `setInterval`. Gives the dashboard a "live" feeling even in mock mode.

---

## 4. Architecture & Code Quality

### 4.1 Centralise all UI copy
Every string visible to the user should live in `src/mocks/uiCopy.js` (or `src/constants/copy.js`).
Templates should contain zero hardcoded strings beyond trivial labels.
This makes future i18n or copy edits a one-file change.

### 4.2 Add missing Pinia stores
Currently only the customers screen has a store. Views for Insights, Marketing, and Campaigns read directly from mocks.
Create:
- `src/stores/insights.js`
- `src/stores/marketing.js`
- `src/stores/notifications.js`

### 4.3 Extract missing composables
| Composable | Purpose |
|---|---|
| `useDebounce(value, delay)` | Debounce reactive refs — needed for search inputs |
| `useLocalStorage(key, initial)` | Persist filter preferences across page refreshes |
| `useAsync(fn)` | Wrap async calls with `{ data, isLoading, error }` — ready for real API |
| `useCountUp(target, duration)` | Animate number stats on mount (KPI cards) |
| `useRelativeTime(date)` | Format dates as "Today", "3 days ago" relative to actual current date |

### 4.4 Add route transitions
`App.vue` has a `<router-view />` with no transition. A simple fade or slide-up would make navigation feel polished:
```vue
<router-view v-slot="{ Component }">
  <transition name="page-fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
```
Add `page-fade` enter/leave classes in `main.css`.

### 4.5 Add skeleton loading states
Create a `SkeletonBlock.vue` atom — an animated pulse placeholder.
Use it in `CustomerTable`, `OverviewStatCard`, and `InsightsView` while data is "loading" (even a 400ms mock delay makes the skeleton useful and tests the empty state paths).

### 4.6 Add a toast / snackbar system
A global `useToastStore` with a `<ToastStack />` component mounted in `App.vue`.
Trigger toasts on: "Customer added", "Filter applied", "Coming soon — talk to us."
Keeps the UI responsive to actions without needing modal confirms for everything.

### 4.7 Update page `<title>` from route meta
`router/index.js` already has `meta.title` on every route but it's never used.
Add a `router.afterEach` hook in `main.js`:
```js
router.afterEach(to => {
  document.title = to.meta.title ? `${to.meta.title} — FruverFiel` : 'FruverFiel'
})
```

### 4.8 Dark mode toggle
`tailwind.config.js` is set to `darkMode: 'class'`. The HTML root has `class="light"`.
The sidebar already has `dark:` variants. A toggle button in the top nav (sun/moon icon) that adds/removes `dark` on `document.documentElement` is a 10-line composable (`useColorScheme`) and would bring a lot of value.

---

## 5. Design System Completeness (vs DESIGN.md)

| Token / rule | Current state | Action needed |
|---|---|---|
| `surface` hierarchy used correctly | Mostly yes — some `bg-white` slip-throughs | Audit and replace |
| No 1px borders for sectioning | Several violations (`border border-outline-variant/30`) | Replace with background shift or `outline-variant/15` ghost border |
| Glassmorphism on modals/overlays | Not implemented anywhere yet | Apply when building drawer/modal components |
| `display-lg` (-0.02em letter-spacing) on hero headings | Not applied | Add `tracking-tight` or a custom class to all serif h1/h2 |
| "Editorial Inset" component | One usage in `CustomerDetailPanel` | Extract as a standalone `EditorialInset.vue` reusable atom |
| Ambient shadow (`rgba(28,28,22,0.06)`) | `custom-shadow` is close but uses a warm tint | Verify the shadow color in `main.css` matches the spec |
| Ghost border fallback (`outline-variant` at 15% opacity) | Used at 30% in some places | Standardise to 15% per spec |

---

## Priority Order (suggested)

**Do first** — fixes things that are broken or misleading:
1. Fix language mixing (pick English, move all copy to `uiCopy.js`)
2. Fix `hideFab` meta bug
3. Fix mock dates to use relative offsets from `Date.now()`
4. Replace design token violations (`bg-white`, `stone-*`, explicit `border`)

**Do next** — highest UX return:
5. Add empty state to `CustomerTable`
6. Add column sorting to `CustomerTable`
7. Add route transitions
8. Add `useCountUp` to Overview KPI cards
9. Add `useRelativeTime` composable and wire to customer rows

**Bigger lifts** — new features in priority order:
10. Add Customer drawer + Pinia mock persistence
11. Notification center
12. Customer full-page profile route
13. Toast system
14. Dark mode toggle
15. Settings page
16. QR / Wallet pass screen
