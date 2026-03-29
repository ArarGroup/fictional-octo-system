/**
 * useMockLiveRegistrations
 *
 * Simulates customers registering in real time by cycling through the
 * LIVE_REGISTRATION_POOL and injecting them into the customers store.
 *
 * ─── HOW TO REMOVE ───────────────────────────────────────────────────────────
 * 1. Delete this file.
 * 2. Delete src/mocks/liveRegistrations.js
 * 3. In CustomersView.vue: remove the import and the useMockLiveRegistrations() call.
 * 4. In src/stores/customers.js: remove addLiveCustomer, freshIds, liveRegistrationCount.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * @param {object} options
 * @param {number} options.minDelay - Minimum ms between registrations (default 7 000)
 * @param {number} options.maxDelay - Maximum ms between registrations (default 15 000)
 */

import { onMounted, onUnmounted } from 'vue'
import { useCustomersStore } from '@/stores/customers'
import { LIVE_REGISTRATION_POOL } from '@/mocks/liveRegistrations'

export function useMockLiveRegistrations({ minDelay = 7000, maxDelay = 15000 } = {}) {
  const store = useCustomersStore()
  let timeoutId = null
  let poolIndex = 0

  function scheduleNext() {
    const delay = minDelay + Math.floor(Math.random() * (maxDelay - minDelay))
    timeoutId = setTimeout(() => {
      const template = LIVE_REGISTRATION_POOL[poolIndex % LIVE_REGISTRATION_POOL.length]
      poolIndex++

      store.addLiveCustomer({
        ...template,
        id: Date.now(),
        lastVisited: 'Ahora mismo',
        lastVisitedRaw: new Date(),
      })

      scheduleNext()
    }, delay)
  }

  onMounted(() => scheduleNext())
  onUnmounted(() => clearTimeout(timeoutId))
}
