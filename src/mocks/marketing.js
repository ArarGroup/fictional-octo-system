/** Marketing hub — campaigns, performance, live preview, settings teaser (read-only). */

export const TALK_TO_US_TOOLTIP = 'Want full access? Talk to us.'

export const MARKETING_PAGE = {
  title: 'Campaign Center',
  subtitle: 'Nurture your customer relationships with curated seasonal stories.',
  activePill: '4 Active Campaigns',
  harvestsTitle: 'Current Harvests',
  livePreviewTitle: 'Live Email Preview',
  settingsTitle: 'Campaign Settings',
}

export const MARKETING_KAM = {
  title: 'Need scheduling, segments, or approvals?',
  body:
    'Editing campaigns, audience rules, and send times is enabled with your Key Account Manager — we’ll mirror this hub in your live workspace.',
  cta: 'Contact your Key Account Manager',
  mailto:
    'mailto:kam@fruverfiel.com?subject=FruverFiel%20Campaign%20Center&body=Hi%2C%20I%E2%80%99d%20like%20help%20with%20campaigns%20and%20email.',
}

/** Featured row in “Current Harvests” — accent maps to border-l-* */
export const MARKETING_CAMPAIGNS = [
  {
    id: 'citrus',
    status: 'Active',
    statusTone: 'secondary',
    meta: 'Ends in 4 days',
    title: 'Seasonal Citrus',
    description: 'Fresh navel oranges and Meyer lemons from our local grove partners.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmdSMj_PKVM6pomQs2y-xwukIOKqyt-AV6Aty5n84YN4GJfH6fxUxiqPTZCy43IVEs7OrFuxM9w1GcriZQYl_j4BJYnRqZfiD2urBaLJq_V2q78mAOq1rg5Z5PKnwXUssT04ozB1ko_OSwMSZ9TR2zI0ueoIxvwmvA1hP6ohfMYoYDLu8lHcjopjHsYD8xfQofzUAa6lrrAzCuXcO31TADYArkwcoacnfi3eTN4xVlKCsdjZXxnp2Z1Cfsg7rHWOQ38fqlhIVQkA',
    ctr: '4.8%',
    audienceExtra: 12,
    borderAccent: 'secondary',
  },
  {
    id: 'root',
    status: 'Scheduled',
    statusTone: 'primary',
    meta: 'Starts Oct 12',
    title: 'Root Veggie Week',
    description: 'Earthy flavors and nutrient-dense harvests for the cooler months.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnSey16OI2L_ls3Xfih5cQAAY4xAzZqez7qZCZ10S8RTtGZl8klisi6Hg43N4Z7mZgrGyoaClD1QcqCZnE4y2S8KsLAHHg4OPH2zCnsBjHuJFF4fSycqEHuswyfZSKzFoLEAfmA__Z54gSBn6iZwCXCuYP6CgWXzQyrFujsQrCcpU0zZxTMR1dnXF7WVNe_6a49HMKKbK2oWbjE_9MUQox9jC27wrFUYLjSra9DRZbXVqb10jZeggok5BsMU5Zl9Tak-uSwocjT3A',
    ctr: null,
    audienceExtra: null,
    borderAccent: 'primary',
    showEdit: true,
  },
  {
    id: 'cheese',
    status: 'Draft',
    statusTone: 'neutral',
    meta: 'Modified yesterday',
    title: 'Artisan Cheese Pairing',
    description: 'Discover the perfect matches for our new local dairy selections.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIOTsF14McLDBbsmCiJ8MEIu6WmjzZWnmSJqQbbOQBHFv_8-InCY8-QSwfnRwYUIenhgghq5BnGwxq3GXrXWe2dl-eTOfRTbG9KaabponI0tosYXzzjR7FXREb-7Tk6mmQ3rIngrgJk3yX_-HJHBd8jOI87Wmhm3VxMsBwEpu94qAtdT8gT6Iyhl05fCkSnyBT0LEf-MJ8xclqt3kVQkRfbMPJd1b_haNlb78DQNxZ6A4BTk02c_-zRVyLj7lugOQt_h4uf1WP3Q',
    ctr: null,
    audienceExtra: null,
    borderAccent: 'neutral',
    showForward: true,
  },
]

export const MARKETING_PERFORMANCE = {
  eyebrow: 'Store Health',
  title: 'Performance Glance',
  metrics: [
    {
      key: 'reach',
      label: 'Active Reach',
      value: '12.4k',
      delta: '+12%',
      deltaTone: 'secondary',
      icon: 'trending_up',
      iconClass: 'text-secondary',
    },
    {
      key: 'inventory',
      label: 'Low Inventory Alerts',
      value: '08 Items',
      delta: null,
      icon: 'inventory_2',
      iconClass: 'text-tertiary',
      valueClass: 'text-tertiary',
    },
    {
      key: 'loyalty',
      label: 'Customer Loyalty',
      value: '88%',
      sub: 'avg.',
      icon: 'favorite',
      iconClass: 'text-primary',
    },
  ],
  quote:
    'The Seasonal Citrus campaign is currently outperforming your monthly average by 22% in conversion.',
}

/** Live email body (citrus) — desktop + mobile */
export const MARKETING_LIVE_EMAIL = {
  brandLine: 'FruverFiel Specials',
  headlineDesktop: 'A Zest for the Season',
  headlineMobile: 'Zest for the Season',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCBgcuzNk_UHdoxMHff3V5TlnXuehfKU3BWqMU2LTl4fCL4r1V3lIKwDQFpCoq9C0UGHgg53tGCejVHqvlj5OdAV5qcN8E-mmx8-voCYmuRhbRnnxnQ658fpU4FpcHLEPp17hPxIfo4E1mJCBFbt3zrOAyKG2SnmDfI3yfqpLkkeY_Q5nk38v_WI6Az666wSZnwYneCrtWrC8U-DOtfDpbL5SMiUTsSkgmL0JdYlAV5T4bsy8D_Z_-G3pNENpIIjfgAhnEEpYqkNA',
  imageMobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDdM_Ecmk5qLrXCinGjMYuiirws5g2fq9ny2Ue1ZttW3wDOVB86Nwt5l5vVapyqPzdk16Q__c14HrQHe_J12A3UfGL3iALV17kd8pJmUqFWProl3JUkXXOZebj-wL7mKQlJlKSyP40znxfdkh51ziwg6vxj6ACqtAVLs6E9tej3BHQFINDO6V3belz8GsGAx9V8iyE_9DpM14TLX0wfWGfrNVdaQmUAT5TTastY1qruZjiCzjG73kDRm__fA_Jy8cXbM5ofP7n7Dg',
  bodyDesktop:
    "This week at FruverFiel, we're celebrating the arrival of the finest citrus from our southern partners. Bursting with Vitamin C and morning sunlight.",
  bodyMobile:
    'Celebrate the arrival of the finest citrus from our southern partners.',
  ctaDesktop: 'Shop the Harvest',
  ctaMobile: 'Shop Now',
}

export const MARKETING_SETTINGS = {
  audienceLabel: 'Audience Segment',
  audienceValue: 'Loyal Harvest Members',
  dispatchLabel: 'Dispatch Date',
  dispatchValue: 'Oct 12, 2023 · 09:00 AM',
  saveDraft: 'Save Draft',
  schedule: 'Schedule',
}

/** Legacy exports — voucher/campaign brief previews (optional reuse) */
export const PREVIEW_CHROME = {
  windowLabel: 'Read-only preview',
  fromLabel: 'From',
  fromValue: 'FruverFiel · Member perks',
  toLabel: 'To',
  toValue: 'Your loyalty members',
  footnote:
    'Static preview. Live sends include your logo, store hours, legal footer, and unsubscribe link.',
}
