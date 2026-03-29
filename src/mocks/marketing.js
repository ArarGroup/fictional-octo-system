/** Centro de marketing — campañas, desempeño, vista previa (solo lectura). */

export const MARKETING_PAGE = {
  title: 'Centro de campañas',
  subtitle: 'Nutrí la relación con tus clientes con historias de temporada seleccionadas.',
  activePill: '4 campañas activas',
  harvestsTitle: 'Cosechas actuales',
  livePreviewTitle: 'Vista previa del correo',
  settingsTitle: 'Ajustes de campaña',
}

export const MARKETING_KAM = {
  title: '¿Programación, segmentos o aprobaciones?',
  body:
    'Editar campañas, reglas de audiencia y horarios de envío está habilitado con tu gerente de cuenta — replicamos este centro en tu espacio de trabajo en vivo.',
  cta: 'Hablá con tu gerente de cuenta',
  mailto:
    'mailto:kam@fruverfiel.com?subject=FruverFiel%20Centro%20de%20campa%C3%B1as&body=Hola%2C%20quiero%20ayuda%20con%20campa%C3%B1as%20y%20correo.',
}

export const MARKETING_CAMPAIGNS = [
  {
    id: 'citrus',
    status: 'Activa',
    statusTone: 'secondary',
    meta: 'Termina en 4 días',
    title: 'Cítricos de temporada',
    description: 'Naranjas navel y limones Meyer de nuestros socios del valle.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmdSMj_PKVM6pomQs2y-xwukIOKqyt-AV6Aty5n84YN4GJfH6fxUxiqPTZCy43IVEs7OrFuxM9w1GcriZQYl_j4BJYnRqZfiD2urBaLJq_V2q78mAOq1rg5Z5PKnwXUssT04ozB1ko_OSwMSZ9TR2zI0ueoIxvwmvA1hP6ohfMYoYDLu8lHcjopjHsYD8xfQofzUAa6lrrAzCuXcO31TADYArkwcoacnfi3eTN4xVlKCsdjZXxnp2Z1Cfsg7rHWOQ38fqlhIVQkA',
    ctr: '4.8%',
    audienceExtra: 12,
    borderAccent: 'secondary',
  },
  {
    id: 'root',
    status: 'Programada',
    statusTone: 'primary',
    meta: 'Inicia el 12 oct',
    title: 'Semana de tubérculos',
    description: 'Sabores terrosos y cosechas densas en nutrientes para los meses más frescos.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnSey16OI2L_ls3Xfih5cQAAY4xAzZqez7qZCZ10S8RTtGZl8klisi6Hg43N4Z7mZgrGyoaClD1QcqCZnE4y2S8KsLAHHg4OPH2zCnsBjHuJFF4fSycqEHuswyfZSKzFoLEAfmA__Z54gSBn6iZwCXCuYP6CgWXzQyrFujsQrCcpU0zZxTMR1dnXF7WVNe_6a49HMKKbK2oWbjE_9MUQox9jC27wrFUYLjSra9DRZbXVqb10jZeggok5BsMU5Zl9Tak-uSwocjT3A',
    ctr: null,
    audienceExtra: null,
    borderAccent: 'primary',
    showEdit: true,
  },
  {
    id: 'cheese',
    status: 'Borrador',
    statusTone: 'neutral',
    meta: 'Modificada ayer',
    title: 'Maridaje de quesos artesanales',
    description: 'Descubrí las combinaciones perfectas para nuevas selecciones lácteas locales.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIOTsF14McLDBbsmCiJ8MEIu6WmjzZWnmSJqQbbOQBHFv_8-InCY8-QSwfnRwYUIenhgghq5BnGwxq3GXrXWe2dl-eTOfRTbG9KaabponI0tosYXzzjR7FXREb-7Tk6mmQ3rIngrgJk3yX_-HJHBd8jOI87Wmhm3VxMsBwEpu94qAtdT8gT6Iyhl05fCkSnyBT0LEf-MJ8xclqt3kVQkRfbMPJd1b_haNlb78DQNxZ6A4BTk02c_-zRVyLj7lugOQt_h4uf1WP3Q',
    ctr: null,
    audienceExtra: null,
    borderAccent: 'neutral',
    showForward: true,
  },
]

export const MARKETING_PERFORMANCE = {
  eyebrow: 'Salud de la tienda',
  title: 'Mirada rápida',
  metrics: [
    {
      key: 'reach',
      label: 'Alcance activo',
      value: '12.4k',
      delta: '+12%',
      deltaTone: 'secondary',
      icon: 'trending_up',
      iconClass: 'text-secondary',
    },
    {
      key: 'inventory',
      label: 'Alertas de stock bajo',
      value: '08 ítems',
      delta: null,
      icon: 'inventory_2',
      iconClass: 'text-tertiary',
      valueClass: 'text-tertiary',
    },
    {
      key: 'loyalty',
      label: 'Fidelidad del cliente',
      value: '88%',
      sub: 'prom.',
      icon: 'favorite',
      iconClass: 'text-primary',
    },
  ],
  quote:
    'La campaña de cítricos de temporada está superando ahora tu promedio mensual en conversión en un 22%.',
}

export const MARKETING_LIVE_EMAIL = {
  brandLine: 'Especiales FruverFiel',
  headlineDesktop: 'El sabor de la temporada',
  headlineMobile: 'Sabor de temporada',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCBgcuzNk_UHdoxMHff3V5TlnXuehfKU3BWqMU2LTl4fCL4r1V3lIKwDQFpCoq9C0UGHgg53tGCejVHqvlj5OdAV5qcN8E-mmx8-voCYmuRhbRnnxnQ658fpU4FpcHLEPp17hPxIfo4E1mJCBFbt3zrOAyKG2SnmDfI3yfqpLkkeY_Q5nk38v_WI6Az666wSZnwYneCrtWrC8U-DOtfDpbL5SMiUTsSkgmL0JdYlAV5T4bsy8D_Z_-G3pNENpIIjfgAhnEEpYqkNA',
  imageMobile:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDdM_Ecmk5qLrXCinGjMYuiirws5g2fq9ny2Ue1ZttW3wDOVB86Nwt5l5vVapyqPzdk16Q__c14HrQHe_J12A3UfGL3iALV17kd8pJmUqFWProl3JUkXXOZebj-wL7mKQlJlKSyP40znxfdkh51ziwg6vxj6ACqtAVLs6E9tej3BHQFINDO6V3belz8GsGAx9V8iyE_9DpM14TLX0wfWGfrNVdaQmUAT5TTastY1qruZjiCzjG73kDRm__fA_Jy8cXbM5ofP7n7Dg',
  bodyDesktop:
    'Esta semana en FruverFiel celebramos la llegada de los mejores cítricos de nuestros socios del sur. Llenos de vitamina C y luz de mañana.',
  bodyMobile:
    'Celebrá la llegada de los mejores cítricos de nuestros socios del sur.',
  ctaDesktop: 'Comprá la cosecha',
  ctaMobile: 'Comprar ahora',
}

export const MARKETING_SETTINGS = {
  audienceLabel: 'Segmento de audiencia',
  audienceValue: 'Miembros fieles de la cosecha',
  dispatchLabel: 'Fecha de envío',
  dispatchValue: '12 oct 2023 · 09:00',
  saveDraft: 'Guardar borrador',
  schedule: 'Programar',
}

export const PREVIEW_CHROME = {
  windowLabel: 'Vista previa (solo lectura)',
  fromLabel: 'De',
  fromValue: 'FruverFiel · Beneficios para miembros',
  toLabel: 'Para',
  toValue: 'Tus miembros de fidelidad',
  footnote:
    'Vista estática. Los envíos reales incluyen tu logo, horarios, pie legal y enlace para darse de baja.',
}
