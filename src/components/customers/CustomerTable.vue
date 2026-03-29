<script setup>
import CustomerTableRow from './CustomerTableRow.vue'

defineProps({
  customers: { type: Array, required: true },
  selectedId: { type: Number, default: null },
  activeFilter: { type: String, default: 'all' },
})

const emit = defineEmits(['select', 'filter-change'])
</script>

<template>
  <div class="space-y-6">
    <!-- Header row: filters + count -->
    <div class="bg-surface-container-low rounded-xl p-6 flex items-center justify-between">
      <div class="flex gap-3">
        <span
          class="px-4 py-1.5 rounded-full bg-primary-container/20 text-primary text-xs font-bold flex items-center gap-1"
        >
          <span class="material-symbols-outlined text-sm">filter_alt</span>
          Todos los estados
        </span>
        <span
          class="px-4 py-1.5 rounded-full border border-outline-variant text-on-surface-variant text-xs font-bold cursor-pointer hover:bg-surface-container-high transition-colors"
        >
          Rango de fechas
        </span>
      </div>
      <p class="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
        Mostrando {{ customers.length }} miembros activos
      </p>
    </div>

    <!-- Table -->
    <div class="bg-surface-container-lowest rounded-2xl overflow-hidden custom-shadow">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-low">
            <th
              class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif"
            >
              Cliente
            </th>
            <th
              class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif"
            >
              Estado
            </th>
            <th
              class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif"
            >
              Última visita
            </th>
            <th
              class="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest serif"
            >
              Visitas totales
            </th>
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
