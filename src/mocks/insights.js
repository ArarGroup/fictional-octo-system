/**
 * Insights — "The Harvest Glance" (copy + chart data)
 * Colors reference Tailwind tokens (DESIGN.md): primary = olive, secondary = terracotta.
 */

export const INSIGHTS_PAGE = {
  eyebrow: 'Market Intelligence',
  title: 'The Harvest Glance',
  subtitle:
    "Understanding your community's patterns to ensure the freshest produce is always ready when they arrive.",
}

export const WEEKLY_FOOTFALL = {
  title: 'Weekly Footfall',
  weekLabel: 'Week of October 14th',
  insight:
    'Thursday is your peak harvest day; ensure your highest-quality seasonal stock is front-and-center by 10:00 AM.',
  /** Track height, fill height class, fill color classes, label emphasis */
  bars: [
    { day: 'Mon', track: 'h-24', fill: 'h-1/2', fillClass: 'bg-primary-container/60' },
    { day: 'Tue', track: 'h-32', fill: 'h-2/3', fillClass: 'bg-primary-container/70' },
    { day: 'Wed', track: 'h-28', fill: 'h-[55%]', fillClass: 'bg-primary-container/65' },
    { day: 'Thu', track: 'h-40', fill: 'h-full', fillClass: 'bg-secondary custom-shadow', peak: true },
    { day: 'Fri', track: 'h-36', fill: 'h-[85%]', fillClass: 'bg-primary-container/85' },
    { day: 'Sat', track: 'h-24', fill: 'h-1/2', fillClass: 'bg-primary-container/60' },
    { day: 'Sun', track: 'h-16', fill: 'h-1/4', fillClass: 'bg-primary-container/40' },
  ],
}

export const NURTURING_GROWTH = {
  title: 'Nurturing Growth',
  subtitle: 'New loyal customers this quarter',
  stat: '12%',
  statLabel: 'Increase',
  body:
    'Your customer base is ripening steadily, showing a healthy 12% increase as your local referral program gains traction.',
  /** SVG path in viewBox 0 0 400 200 */
  linePath: 'M0,180 Q50,170 100,140 T200,100 T300,60 T400,20',
}

export const DAILY_SUN_CYCLES = {
  title: 'Daily Sun Cycles',
  body:
    'Tracking the movement of your patrons throughout the day helps you optimize staff shifts and fresh stocking times.',
  segments: [
    {
      label: 'Morning',
      dot: 'bg-tertiary',
      fill: 'bg-tertiary',
      width: 'w-1/3',
      toneClass: 'font-label text-xs opacity-60',
      toneLabel: 'Quiet',
    },
    {
      label: 'Midday',
      dot: 'bg-primary',
      fill: 'bg-primary',
      width: 'w-[85%]',
      toneClass: 'font-label text-xs font-bold text-primary',
      toneLabel: 'Peak',
    },
    {
      label: 'Evening',
      dot: 'bg-secondary',
      fill: 'bg-secondary',
      width: 'w-2/3',
      toneClass: 'font-label text-xs opacity-60',
      toneLabel: 'Steady',
    },
  ],
  footnote:
    'Your store blooms most vibrantly between 12:00 PM and 2:00 PM; consider moving lunch rotations to earlier or later hours.',
}

export const STORE_VITALITY = {
  title: 'Store Vitality',
  body:
    'Overall store health remains exceptional. Patrons are responding well to the new layout and fresh produce rotation.',
  score: '94%',
  scoreLabel: 'Customer Satisfaction Score',
  cta: 'Get Detailed Report',
}

export const LOW_STOCK_WIDGET = {
  count: 14,
  title: 'Items Low on Stock',
  body:
    'Based on your busiest hours trending for this afternoon, these essentials might run out by sunset.',
  items: [
    { name: 'Hass Avocados', dot: 'bg-error' },
    { name: 'Heirloom Tomatoes', dot: 'bg-error' },
    { name: 'Organic Honey', dot: 'bg-tertiary' },
  ],
  cta: 'Order Restock',
}
