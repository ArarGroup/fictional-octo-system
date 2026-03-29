import { getPosthog } from '@/analytics/posthogClient'

/**
 * Registra $pageview en cada navegación SPA (PostHog recomienda URL actualizada).
 */
export function installRouterAnalytics(router) {
  router.afterEach((to, from) => {
    const ph = getPosthog()
    if (!ph) return

    ph.capture('$pageview', {
      $current_url: window.location.href,
      route_name: to.name ?? to.path,
      route_path: to.path,
      referrer_route: from.name ?? from.path,
    })
  })
}
