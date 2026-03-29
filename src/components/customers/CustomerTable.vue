<script setup>
import CustomerTableRow from './CustomerTableRow.vue'

defineProps({
  customers: { type: Array, required: true },
  selectedId: { type: Number, default: null },
  activeFilter: { type: String, default: 'all' },
})

const emit = defineEmits(['select', 'filter-change'])

const filters = [
  { value: 'all',      label: 'All'      },
  { value: 'active',   label: 'Active'   },
  { value: 'at_risk',  label: 'At Risk'  },
]
</script>

<template>
  <div class="space-y-6">
    <!-- Header row: filters + count -->
    <div class="bg-surface-container-low rounded-xl p-6 flex items-center justify-between">
      <div class="flex gap-3">
        <span class="px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold flex items-center gap-1">
          <span class="material-symbols-outlined text-sm">filter_alt</span>
          All Statuses
        </span>
        <span class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-xs font-bold cursor-pointer hover:bg-surface-container-high transition-colors">
          Date Range
        </span>
      </div>
      <p class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
        Displaying {{ customers.length }} active members
      </p>
    </div>

    <!-- Table -->
    <div class="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-low">
            <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif">Customer Name</th>
            <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif">Status</th>
            <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif">Last Visited</th>
            <th class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif">Total Visits</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-surface-container">
          <CustomerTableRow
            v-for="customer in customers"
            :key="customer.id"
            :customer="customer"
            :is-selected="customer.id === selectedId"
            @select="emit('select', $event)"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>
