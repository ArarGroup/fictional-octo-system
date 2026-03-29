/**
 * Nombres de eventos para PostHog (snake_case, sustantivo_verbo).
 * Documentá propiedades esperadas junto a cada evento en tu proyecto de PostHog.
 */

export const ANALYTICS_EVENTS = {
  /** PostHog: vista de página SPA (también se envía desde routerAnalytics). */
  PAGE_VIEW: '$pageview',

  /** Usuario generó un insight de IA desde Resumen. Props: insight_template_id, insight_accent */
  AI_INSIGHT_GENERATED: 'ai_insight_generated',

  /** Cambió filtro en Mis clientes. Props: filter (all | active | at_risk) */
  CUSTOMER_FILTER_CHANGED: 'customer_filter_changed',

  /** Seleccionó un cliente en la tabla. Props: customer_id (number) */
  CUSTOMER_SELECTED: 'customer_selected',

  /** Clic en FAB agregar cliente. Sin props obligatorias */
  FAB_ADD_CUSTOMER_CLICKED: 'fab_add_customer_clicked',

  /** Clic en CTA “Hablemos” (sidebar) */
  CTA_TALK_CLICKED: 'cta_talk_clicked',

  /** Clic en Ayuda (top bar) */
  HELP_CLICKED: 'help_clicked',
}
