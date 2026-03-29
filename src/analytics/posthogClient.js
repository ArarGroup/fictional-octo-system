import posthog from 'posthog-js'

let initialized = false

/**
 * Inicializa PostHog una sola vez. Sin VITE_POSTHOG_KEY no hace nada (dev local).
 *
 * Buenas prácticas:
 * - capture_pageview: false → las vistas SPA las enviamos en router (evita duplicados).
 * - person_profiles: identified_only → menos perfiles anónimos innecesarios.
 * - disable_session_recording en dev → no grabar sesiones locales salvo que lo actives.
 */
export function initPosthog() {
  const key = import.meta.env.VITE_POSTHOG_KEY
  if (!key) {
    if (import.meta.env.DEV) {
      console.info('[analytics] PostHog desactivado: falta VITE_POSTHOG_KEY')
    }
    return
  }

  const apiHost =
    import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

  posthog.init(key, {
    api_host: apiHost,
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    persistence: 'localStorage+cookie',
    disable_session_recording: import.meta.env.DEV,
    loaded: ph => {
      if (import.meta.env.VITE_POSTHOG_DEBUG === 'true') {
        ph.debug()
      }
    },
  })

  initialized = true
}

export function isPosthogReady() {
  return initialized
}

/** Instancia singleton de posthog-js; null si no se inicializó. */
export function getPosthog() {
  return initialized ? posthog : null
}
