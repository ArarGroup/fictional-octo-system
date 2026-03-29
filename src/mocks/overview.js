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

/**
 * Pool de insights generados por IA. useAiInsightGenerator rota estos textos
 * para simular una recomendación nueva en cada generación. Sumá entradas acá
 * para variar sin tocar componentes.
 */
export const AI_INSIGHT_POOL = [
  {
    id: 'ai-gen-1',
    text: 'Elena Rodríguez visita todos los martes — una oferta de “madrugador” a mitad de semana enviada el lunes por la noche podría aumentar su ticket ~18%.',
    accent: 'primary',
  },
  {
    id: 'ai-gen-2',
    text: 'Quienes compran fermentados también llevan hierbas frescas en la misma visita en el 74% de los casos. Conviene cruzarlos visualmente en la tienda.',
    accent: 'secondary',
  },
  {
    id: 'ai-gen-3',
    text: 'El sábado el pico de afluencia es entre las 10 y las 11. Programar un SMS semanal de “mercado fresco” para el viernes por la tarde podría subir esa ventana.',
    accent: 'tertiary',
  },
  {
    id: 'ai-gen-4',
    text: '4 miembros del grupo “Requiere atención” compraron por última vez en la misma ventana de dos semanas. Una sola campaña de reactivación podría recuperarlos a los cuatro.',
    accent: 'primary',
  },
  {
    id: 'ai-gen-5',
    text: 'Los miembros oro gastan en promedio USD 62 por visita — casi 3× los de bronce. Impulsar a los plata con una oferta puntual podría cambiar esa proporción.',
    accent: 'secondary',
  },
  {
    id: 'ai-gen-6',
    text: 'Los miembros nuevos que reciben un SMS de bienvenida en las primeras 24 horas vuelven en 10 días en un 68% frente al 31% sin contacto.',
    accent: 'tertiary',
  },
  {
    id: 'ai-gen-7',
    text: 'Los compradores de producto orgánico son el 34% de la lista pero generan el 51% del ingreso. Priorizar variedad orgánica puede crecer el ticket de forma desproporcionada.',
    accent: 'primary',
  },
  {
    id: 'ai-gen-8',
    text: 'Las visitas del domingo bajaron 12% en las últimas 4 semanas. Una campaña “Domingo de cosecha” para habituales podría revertir la tendencia.',
    accent: 'secondary',
  },
  {
    id: 'ai-gen-9',
    text: 'Quienes visitan más de dos veces por semana tienen un 92% de retención a 6 meses. Detectar el top 10 y reforzar sus hábitos es la palanca de crecimiento más segura.',
    accent: 'tertiary',
  },
  {
    id: 'ai-gen-10',
    text: 'Los datos muestran que el combo masa madre + lácteos representa el 22% de los tickets. Una promo semanal “Elección del panadero” podría convertirlo en compra recurrente.',
    accent: 'primary',
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
