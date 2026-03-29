/**
 * Overview dashboard — copy and series data (stats are derived from MOCK_CUSTOMERS in useOverviewStats).
 */

export const OVERVIEW_ALERT = {
  title: '3 members need a nudge this week',
  body:
    'Visit frequency dropped for long-time regulars. AI suggests a short SMS with a seasonal produce perk — review in Campaigns.',
}

/** Accent maps to Tailwind border-l-* (design tokens). */
export const INSIGHT_ACCENTS = {
  primary: 'border-l-primary',
  secondary: 'border-l-secondary',
  tertiary: 'border-l-tertiary',
}

export const OVERVIEW_INSIGHTS = [
  {
    id: 'ins-1',
    text:
      'Tuesday mornings drive 28% of repeat visits — consider a mid-week produce spotlight.',
    accent: 'primary',
  },
  {
    id: 'ins-2',
    text:
      'New members who return within 7 days are 3× more likely to reach Silver tier.',
    accent: 'secondary',
  },
  {
    id: 'ins-3',
    text:
      'Gold tier shoppers bundle dairy with bakery items — pair those in your next offer.',
    accent: 'tertiary',
  },
]

/** Last 7 days — relative bar heights (0–100) for the visit trend strip. */
export const WEEKLY_VISIT_TREND = [
  { label: 'Mon', value: 62 },
  { label: 'Tue', value: 88 },
  { label: 'Wed', value: 71 },
  { label: 'Thu', value: 95 },
  { label: 'Fri', value: 78 },
  { label: 'Sat', value: 100 },
  { label: 'Sun', value: 54 },
]
