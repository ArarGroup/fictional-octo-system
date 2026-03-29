import { getPosthog } from '@/analytics/posthogClient'

/**
 * Captura un evento con propiedades en snake_case y contexto común de la app.
 * Uso preferido desde componentes/composables en lugar de posthog.capture directo.
 */
export function trackEvent(eventName, properties = {}) {
  const ph = getPosthog()
  if (!ph) return

  ph.capture(eventName, {
    ...properties,
    app_name: 'fruver_fiel_dashboard',
    app_version: import.meta.env.VITE_APP_VERSION ?? '0.1.0',
    environment: import.meta.env.MODE,
  })
}
