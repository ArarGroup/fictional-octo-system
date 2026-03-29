import { computed } from 'vue'
import { MOCK_CUSTOMERS } from '@/mocks/customers'

export function useOverviewStats() {
  const totalMembers = computed(() => MOCK_CUSTOMERS.length)

  const totalVisits = computed(() =>
    MOCK_CUSTOMERS.reduce((sum, c) => sum + c.totalVisits, 0)
  )

  const atRiskCount = computed(
    () =>
      MOCK_CUSTOMERS.filter(
        c => c.status === 'needs_attention' || c.status === 'lost_touch'
      ).length
  )

  const newMembersCount = computed(
    () => MOCK_CUSTOMERS.filter(c => c.status === 'new').length
  )

  /** Recent members: sort by lastVisitedRaw desc, take n */
  const recentMembers = computed(() =>
    [...MOCK_CUSTOMERS]
      .sort((a, b) => b.lastVisitedRaw - a.lastVisitedRaw)
      .slice(0, 6)
  )

  return {
    totalMembers,
    totalVisits,
    atRiskCount,
    newMembersCount,
    recentMembers,
  }
}
