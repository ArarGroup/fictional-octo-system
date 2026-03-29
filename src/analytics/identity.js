import { getPosthog } from '@/analytics/posthogClient'
import { CURRENT_USER } from '@/mocks/customers'

function distinctIdFromStore() {
  const raw = `${CURRENT_USER.storeName}`.toLowerCase()
  const slug = raw.replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
  return `fruver_store_${slug || 'default'}`
}

/**
 * Identifica al usuario de la sesión (demo: dueño de tienda mock).
 * Llamar una vez tras initPosthog. No envía email salvo que lo agregues con consentimiento.
 */
export function identifySessionUser() {
  const ph = getPosthog()
  if (!ph) return

  ph.identify(distinctIdFromStore(), {
    name: CURRENT_USER.name,
    store_name: CURRENT_USER.storeName,
  })
}
