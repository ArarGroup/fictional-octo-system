<script setup>
import { useCustomersStore } from '@/stores/customers'
import { CURRENT_USER } from '@/mocks/customers'

const store = useCustomersStore()
</script>

<template>
  <header class="fixed top-0 right-0 left-64 h-16 z-30 flex justify-between items-center px-8 bg-[#fdfcf9]/80 dark:bg-stone-900/80 backdrop-blur-md">
    <!-- Search -->
    <div class="flex items-center gap-4 flex-1">
      <div class="relative w-full max-w-md">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
        <input
          :value="store.searchQuery"
          @input="store.setSearchQuery($event.target.value)"
          class="w-full bg-surface-container-highest border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-stone-500 outline-none"
          placeholder="Search customer name..."
          type="text"
        />
      </div>
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-6">
      <button class="text-stone-600 dark:text-stone-400 font-medium hover:text-primary transition-opacity opacity-90 hover:opacity-100 flex items-center gap-1 group relative">
        <span class="material-symbols-outlined text-xl">help</span>
        <span>Help</span>
        <span class="absolute -bottom-10 right-0 bg-on-surface text-surface text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Want full access? Talk to us.
        </span>
      </button>
      <div class="h-8 w-8 rounded-full overflow-hidden ring-2 ring-primary/10">
        <img :src="CURRENT_USER.avatar" :alt="CURRENT_USER.name" class="h-full w-full object-cover" />
      </div>
    </div>
  </header>
</template>
