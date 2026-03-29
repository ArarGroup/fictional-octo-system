import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { MOCK_CUSTOMERS } from '@/mocks/customers'

export const useCustomersStore = defineStore('customers', () => {
  const customers = ref([...MOCK_CUSTOMERS])
  const selectedCustomerId = ref(MOCK_CUSTOMERS[0].id)
  const activeFilter = ref('all') // 'all' | 'active' | 'at_risk'
  const searchQuery = ref('')

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

  return {
    customers,
    selectedCustomer,
    filteredCustomers,
    activeFilter,
    searchQuery,
    selectCustomer,
    setFilter,
    setSearchQuery,
  }
})
