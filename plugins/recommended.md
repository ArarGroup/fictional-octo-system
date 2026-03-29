# Frontend — Recommended Plugins & Libraries

## VS Code Extensions
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **Prettier** — code formatting
- **ESLint** — linting with Next.js rules
- **Auto Rename Tag** — HTML/JSX tag pairing

## npm Packages

### UI & Styling
| Package | Purpose |
|---------|---------|
| `tailwindcss` | Utility-first CSS |
| `@tailwindcss/forms` | Form element resets |
| `clsx` | Conditional class merging |
| `tailwind-merge` | Merge Tailwind classes without conflicts |

### Components & Icons
| Package | Purpose |
|---------|---------|
| `lucide-react` | Icon library (rounded, warm-override friendly) |
| `@phosphor-icons/react` | Alternative icon library |
| `qrcode.react` | QR code generation for member card |
| `recharts` | Charts for grocer dashboard (override colors with warm palette) |

### Utilities
| Package | Purpose |
|---------|---------|
| `date-fns` | Date formatting for visit history |
| `next/font` | Optimized Google Fonts loading |

## Avoid
- `styled-components` or `emotion` — use Tailwind instead
- `chart.js` directly — use Recharts wrapper
- `moment.js` — use `date-fns`
- Any UI kit (MUI, Chakra, shadcn base) that would override the warm palette
