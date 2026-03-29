# Code Principles: Maintainable, Flexible & Scalable

These principles govern all code written in this project. Every PR, every component,
every store must be evaluated against them.

---

## 1. The Single Responsibility Rule

A file does one thing. A component renders one concept. A store owns one domain.

If you cannot describe what a file does in one sentence without using "and," split it.

**Bad:** `CustomerTableAndFilterAndSearch.vue`
**Good:** `CustomerTable.vue`, `CustomerFilters.vue`, `useCustomerSearch.js`

---

## 2. Mock Everything, Couple Nothing

During development, all external data comes from `/src/mocks/`.
Mocks mirror the exact shape of the real API response — no shortcuts.

Every store and composable should accept data as an argument or fetch from a
swappable source. Switching from mocks to a real API should be a 1-line change.

**Rule:** If you have to touch more than one file to switch from mock to real data, the abstraction is wrong.

---

## 3. Design Tokens Are Law

No hardcoded color hex values in component files. Ever.
The design system lives in `tailwind.config.js`. If a color isn't there, add it there first.

This ensures a single-source-of-truth for the visual language and makes
white-label or theme switching a config change, not a codebase search.

---

## 4. Props Down, Events Up

Components never reach up into parents. Data flows downward via props.
Communication flows upward via emits.

State that is shared across unrelated subtrees lives in a Pinia store.
State that is local to one component tree stays in that component.

---

## 5. Flat is Better Than Nested

For components, stores, and logic:
- Prefer shallow composition over deep inheritance
- Prefer multiple small stores over one giant store
- Prefer multiple focused composables over one god hook

---

## 6. Explicit Over Implicit

Prefer:
- Named exports over default exports in utility files
- Explicit prop types with required flags
- Named emit events that read like user actions (`select`, `filter-change`, not `action`, `event`)

---

## 7. Readability Is a Feature

Code is read far more than it is written.

- Function and variable names should be full words (no abbreviations like `cust`, `idx`, `fn`)
- Boolean variables must start with `is`, `has`, or `can`
- Template logic that requires a comment to understand must be moved to a computed property

---

## 8. Scalability Through Isolation

New features should be addable without modifying existing files:
- New screens → new `views/` file + new route
- New data type → new `mocks/` file + new `stores/` file
- New UI atom → new `components/ui/` file

The Open/Closed Principle: open for extension, closed for modification.

---

## 9. Performance Is Not Premature When It's Free

- Use `defineAsyncComponent` and route-level code splitting by default
- Use `v-once` for static subtrees
- Use `shallowRef` for large data structures that do not need deep reactivity

These are zero-cost habits, not optimizations. Build them in from the start.

---

## 10. The Mock Quality Standard

Mocks must be production-quality in shape, not just "good enough to render."

Every mock:
- Has realistic, diverse, human-sounding data
- Covers all states (empty, error, loading, full)
- Has at least 10–20 entries so lists look real
- Uses the exact same field names as the API contract

A screen that looks good with 2 identical mock entries will break in production.
