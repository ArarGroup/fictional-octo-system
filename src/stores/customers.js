import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { MOCK_CUSTOMERS } from '@/mocks/customers'

// How long a newly registered row stays highlighted (ms)
const FRESH_HIGHLIGHT_DURATION = 5000

export const useCustomersStore = defineStore('customers', () => {
  const customers = ref([...MOCK_CUSTOMERS])
  const selectedCustomerId = ref(MOCK_CUSTOMERS[0].id)
  const activeFilter = ref('all') // 'all' | 'active' | 'at_risk'
  const searchQuery = ref('')

  // ── Live registration state ───────────────────────────────────────────────
  // freshIds: Set of customer IDs that should render with the "just joined" highlight.
  // We replace the whole Set (never mutate) so Vue tracks the ref change correctly.
  const freshIds = ref(new Set())
  const liveRegistrationCount = ref(0)

  const selectedCustomer = computed(() =>
    customers.value.find(c => c.id === selectedCustomerId.value) ?? null
  )

  const filteredCustomers = computed(() => {
    let list = customers.value

    if (activeFilter.value === 'active') {
      list = list.filter(c => c.status === 'regular' || c.status === 'new')
    } else if (activeFilter.value === 'at_risk') {
      list = list.filter(c => c.status === 'needs_attention' || c.status === 'lost_touch')
    }

    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase()
      list = list.filter(
        c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
      )
    }

    return list
  })

  function selectCustomer(id) {
    selectedCustomerId.value = id
  }

  function setFilter(filter) {
    activeFilter.value = filter
  }

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  // ── Live registration actions ─────────────────────────────────────────────
  function addLiveCustomer(customer) {
    customers.value.unshift(customer)
    liveRegistrationCount.value++

    // Mark fresh
    freshIds.value = new Set([...freshIds.value, customer.id])

    // Auto-clear highlight after duration
    setTimeout(() => {
      const next = new Set(freshIds.value)
      next.delete(customer.id)
      freshIds.value = next
    }, FRESH_HIGHLIGHT_DURATION)
  }

  return {
    customers,
    selectedCustomer,
    filteredCustomers,
    activeFilter,
    searchQuery,
    freshIds,
    liveRegistrationCount,
    selectCustomer,
    setFilter,
    setSearchQuery,
    addLiveCustomer,
  }
})
