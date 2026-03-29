/**
 * Insights — “La mirada de la cosecha” (textos + datos de gráficos)
 */

export const INSIGHTS_PAGE = {
  eyebrow: 'Inteligencia de mercado',
  title: 'La mirada de la cosecha',
  subtitle:
    'Entendé los patrones de tu comunidad para tener siempre el producto más fresco cuando lleguen.',
}

export const WEEKLY_FOOTFALL = {
  title: 'Afluencia semanal',
  weekLabel: 'Semana del 14 de octubre',
  insight:
    'El jueves es tu día pico de cosecha; ubicá lo mejor de temporada al frente antes de las 10:00.',
  bars: [
    { day: 'Lun', track: 'h-24', fill: 'h-1/2', fillClass: 'bg-primary-container/60' },
    { day: 'Mar', track: 'h-32', fill: 'h-2/3', fillClass: 'bg-primary-container/70' },
    { day: 'Mié', track: 'h-28', fill: 'h-[55%]', fillClass: 'bg-primary-container/65' },
    { day: 'Jue', track: 'h-40', fill: 'h-full', fillClass: 'bg-secondary custom-shadow', peak: true },
    { day: 'Vie', track: 'h-36', fill: 'h-[85%]', fillClass: 'bg-primary-container/85' },
    { day: 'Sáb', track: 'h-24', fill: 'h-1/2', fillClass: 'bg-primary-container/60' },
    { day: 'Dom', track: 'h-16', fill: 'h-1/4', fillClass: 'bg-primary-container/40' },
  ],
}

export const NURTURING_GROWTH = {
  title: 'Crecimiento que madura',
  subtitle: 'Nuevos clientes fieles este trimestre',
  stat: '12%',
  statLabel: 'Alza',
  body:
    'Tu base de clientes sigue madurando con un alza saludable del 12% mientras el programa de referidos locales toma fuerza.',
  linePath: 'M0,180 Q50,170 100,140 T200,100 T300,60 T400,20',
}

export const DAILY_SUN_CYCLES = {
  title: 'Ciclos del día',
  body:
    'Seguir el movimiento de tus clientes a lo largo del día ayuda a optimizar turnos y reposición fresca.',
  segments: [
    {
      label: 'Mañana',
      dot: 'bg-tertiary',
      fill: 'bg-tertiary',
      width: 'w-1/3',
      toneClass: 'font-label text-xs opacity-60',
      toneLabel: 'Tranquilo',
    },
    {
      label: 'Mediodía',
      dot: 'bg-primary',
      fill: 'bg-primary',
      width: 'w-[85%]',
      toneClass: 'font-label text-xs font-bold text-primary',
      toneLabel: 'Pico',
    },
    {
      label: 'Tarde',
      dot: 'bg-secondary',
      fill: 'bg-secondary',
      width: 'w-2/3',
      toneClass: 'font-label text-xs opacity-60',
      toneLabel: 'Estable',
    },
  ],
  footnote:
    'Tu tienda florece más entre las 12:00 y las 14:00; probá mover los turnos de almuerzo un poco antes o después.',
}

export const STORE_VITALITY = {
  title: 'Vitalidad de la tienda',
  body:
    'La salud general sigue siendo excelente. Los clientes responden bien al nuevo layout y a la rotación de producto fresco.',
  score: '94%',
  scoreLabel: 'Índice de satisfacción del cliente',
  cta: 'Ver informe detallado',
}

export const LOW_STOCK_WIDGET = {
  count: 14,
  title: 'Ítems con stock bajo',
  body:
    'Según las horas pico de esta tarde, estos esenciales podrían agotarse antes del cierre.',
  items: [
    { name: 'Palta Hass', dot: 'bg-error' },
    { name: 'Tomates heirloom', dot: 'bg-error' },
    { name: 'Miel orgánica', dot: 'bg-tertiary' },
  ],
  cta: 'Pedir reposición',
}
