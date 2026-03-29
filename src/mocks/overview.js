/**
 * Resumen — textos y serie de visitas (los totales salen de MOCK_CUSTOMERS).
 */

export const OVERVIEW_ALERT = {
  title: '3 miembros necesitan un empujón esta semana',
  body:
    'La frecuencia de visita bajó entre clientes frecuentes. La IA sugiere un SMS breve con un beneficio de producto de temporada — revisalo en Campañas.',
}

/** Acentos → border-l-* (tokens Tailwind). */
export const INSIGHT_ACCENTS = {
  primary: 'border-l-primary',
  secondary: 'border-l-secondary',
  tertiary: 'border-l-tertiary',
}

export const OVERVIEW_INSIGHTS = [
  {
    id: 'ins-1',
    text:
      'Los martes por la mañana concentran el 28% de las visitas repetidas — vale la pena un foco de verdura a mitad de semana.',
    accent: 'primary',
  },
  {
    id: 'ins-2',
    text:
      'Los miembros nuevos que vuelven en 7 días tienen 3× más probabilidades de alcanzar nivel plata.',
    accent: 'secondary',
  },
  {
    id: 'ins-3',
    text:
      'En nivel oro suelen combinar lácteos con panadería — emparéjalos en tu próxima oferta.',
    accent: 'tertiary',
  },
]

/** Últimos 7 días — alturas relativas (0–100) para la franja de visitas. */
export const WEEKLY_VISIT_TREND = [
  { label: 'Lun', value: 62 },
  { label: 'Mar', value: 88 },
  { label: 'Mié', value: 71 },
  { label: 'Jue', value: 95 },
  { label: 'Vie', value: 78 },
  { label: 'Sáb', value: 100 },
  { label: 'Dom', value: 54 },
]
