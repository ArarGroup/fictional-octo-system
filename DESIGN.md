# Design System Specification: Editorial Organicism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Modern Agrarian."** This is a high-end editorial approach that rejects the sterile, "app-like" boxiness of traditional SaaS. Instead, it draws inspiration from premium lifestyle periodicals and organic textures.

To break the "template" look, we prioritize **intentional asymmetry** and **tonal depth**. Rather than centering everything on a rigid grid, we use wide gutters and overlapping elements—where a `display-lg` headline might bleed into a `surface-container` card—to create a sense of bespoke craftsmanship. The system feels rooted in the earth (Olive and Terracotta) but elevated through sophisticated whitespace and refined typography.

---

## 2. Colors & Tonal Architecture
The palette is a dialogue between the muted, authoritative Olive Green and the vibrant, sun-baked Terracotta.

### The Core Palette
These hex values are **canonical** in code (Tailwind `primary` / `primary-container`) and should not be approximated with other olives or browns.

* **Primary (`#47532b` / `#5f6b41`):** The grounding force. Use the Primary Container (`#5f6b41`) for major structural elements and the Primary core for high-emphasis call-to-actions.
* **Secondary (`#a03f30` / `#fe8672`):** The "Life" color. Used for accents, secondary CTAs, and highlighting organic data points.
* **Background (`#fcf9ef`):** A warm, cream canvas that prevents the "clinical" feel of pure white.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders are strictly prohibited for sectioning.
Structure must be defined through:
1. **Background Color Shifts:** A `surface-container-low` section sitting against a `surface` background.
2. **Tonal Transitions:** Moving from `surface-dim` to `surface-bright` to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine papers.
* **Level 0 (Base):** `surface` (#fcf9ef)
* **Level 1 (Sections):** `surface-container-low` (#f7f4e9)
* **Level 2 (Cards):** `surface-container-lowest` (#ffffff)
* **Level 3 (Pop-overs):** `surface-bright` (#fcf9ef) with ambient shadows.

### The "Glass & Gradient" Rule
To add visual "soul," use subtle linear gradients (e.g., `primary` to `primary_container` at a 145° angle) for hero backgrounds. For floating navigation or modal overlays, apply a **Glassmorphism** effect: `surface` color at 80% opacity with a `20px` backdrop-blur.

---

## 3. Typography
The typographic system creates an "Editorial Contrast" between a heritage Serif and a technical Sans.

* **The Hero (Noto Serif):** Used for `display` and `headline` scales. This provides an authoritative, storied feel. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for a high-fashion editorial look.
* **The Utility (Be Vietnam Pro):** Used for `title`, `body`, and `labels`. Its clean, geometric nature ensures that dense data remains legible and feels "expert."

**Hierarchy Note:** Use high contrast in scale. A `display-lg` headline followed by a `body-md` sub-header creates a sophisticated "Visual Gap" that feels more premium than a standard step-down.

---

## 4. Elevation & Depth
We eschew traditional material shadows in favor of **Tonal Layering**.

* **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The difference in hex value provides all the separation required.
* **Ambient Shadows:** If a floating element (like a FAB or Menu) requires lift, use a diffuse shadow: `offset-y: 12px`, `blur: 32px`, `color: rgba(28, 28, 22, 0.06)`. Note the tint: the shadow is a low-opacity version of `on-surface`, not pure black.
* **The "Ghost Border" Fallback:** If a container needs more definition (e.g., in high-glare environments), use the `outline-variant` token at **15% opacity**. Never 100%.

---

## 5. Components

### Buttons
* **Primary:** Solid `primary` (#47532b) with `on-primary` (#ffffff) text. Use `rounded-md` (0.75rem).
* **Secondary:** Solid `secondary_container` (#fe8672) with `on-secondary_container` (#741f13) text.
* **Tertiary:** Ghost style. No background, `primary` text, with a `surface-variant` background on hover.

### Cards & Lists
* **Zero-Divider Policy:** Forbid the use of horizontal lines. To separate list items, use `spacing-4` vertical gaps or alternating background tints between `surface-container-low` and `surface-container-lowest`.
* **Cards:** Use `rounded-lg` (1rem). Content should have generous internal padding (`spacing-6` minimum).

### Input Fields
* **Style:** Filled style using `surface-container-high`. No bottom line.
* **Focus:** Transition to a `ghost border` of the `primary` color.
* **Label:** `label-md` using `Be Vietnam Pro` in `on-surface-variant`.

### Signature Component: The "Editorial Inset"
A specific container for pull-quotes or key data summaries. Use a `surface-container-highest` background, `notoSerif` typography, and a 4px left-accent bar in `secondary` (Terracotta).

---

## 6. Do's and Don'ts

### Do
* **Do** embrace whitespace. If a layout feels "full," add `spacing-16` of breathing room.
* **Do** overlap elements. Let an image container slightly overhang the edge of its parent `surface-container`.
* **Do** use the `secondary` color sparingly for high-impact conversion points.

### Don't
* **Don't** use 1px solid borders. It shatters the high-end editorial illusion.
* **Don't** use pure black (#000000) for text. Always use `on-surface` (#1c1c16).
* **Don't** use Noto Serif for small data labels. It loses legibility; always default to Be Vietnam Pro for utility.
* **Don't** use standard "drop shadows." If it doesn't look like ambient light, it doesn't belong.
