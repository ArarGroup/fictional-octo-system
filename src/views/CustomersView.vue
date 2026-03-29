<script setup>
import { storeToRefs } from 'pinia'
import { useCustomersStore } from '@/stores/customers'
import CustomerTable from '@/components/customers/CustomerTable.vue'
import CustomerDetailPanel from '@/components/customers/CustomerDetailPanel.vue'

const store = useCustomersStore()
const { filteredCustomers, selectedCustomer, activeFilter } = storeToRefs(store)

const filters = [
  { value: 'all', label: 'Todos' },
  { value: 'active', label: 'Activos' },
  { value: 'at_risk', label: 'En riesgo' },
]
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Page header -->
    <div class="flex justify-between items-end mb-12">
      <div>
        <h2 class="text-4xl serif font-bold text-on-surface mb-2">Mis clientes</h2>
        <p class="text-on-surface-variant font-body">
          Gestioná la relación con los miembros del ecosistema FruverFiel.
        </p>
      </div>
      <!-- Filter tabs -->
      <div class="flex bg-surface-container rounded-full p-1">
        <button
          v-for="f in filters"
          :key="f.value"
          @click="store.setFilter(f.value)"
          :class="[
            'px-6 py-2 rounded-full text-sm font-semibold transition-colors',
            activeFilter === f.value
              ? 'bg-surface-container-lowest text-primary shadow-sm'
              : 'text-on-surface-variant hover:bg-surface-container-high',
          ]"
        >
          {{ f.label }}
        </button>
      </div>
    </div>

    <!-- Bento layout -->
    <div class="grid grid-cols-12 gap-8">
      <!-- Table (left) -->
      <div class="col-span-12 lg:col-span-8">
        <CustomerTable
          :customers="filteredCustomers"
          :selected-id="selectedCustomer?.id"
          :active-filter="activeFilter"
          @select="store.selectCustomer"
        />
      </div>

      <!-- Detail panel (right) -->
      <div class="col-span-12 lg:col-span-4">
        <CustomerDetailPanel v-if="selectedCustomer" :customer="selectedCustomer" />
      </div>
    </div>
  </div>
</template>
