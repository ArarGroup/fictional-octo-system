import { trackEvent } from '@/analytics/trackEvent'
import { identifySessionUser } from '@/analytics/identity'

/**
 * API de analytics para componentes (Vue): eventos con nombres centralizados vía trackEvent.
 */
export function useAnalytics() {
  return {
    track: trackEvent,
    identify: identifySessionUser,
  }
}
