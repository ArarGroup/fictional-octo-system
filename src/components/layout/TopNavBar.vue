<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCustomersStore } from '@/stores/customers'
import { CURRENT_USER } from '@/mocks/customers'
import { MSG_ACCESS_TOOLTIP } from '@/mocks/uiCopy'
import { trackEvent } from '@/analytics/trackEvent'
import { ANALYTICS_EVENTS } from '@/analytics/eventNames'

const route = useRoute()

function onHelpClick() {
  trackEvent(ANALYTICS_EVENTS.HELP_CLICKED)
}
const store = useCustomersStore()

const searchPlaceholder = computed(
  () => route.meta.searchPlaceholder ?? 'Buscar cliente por nombre…'
)
</script>

<template>
  <header
    class="fixed top-0 right-0 left-64 h-16 z-30 flex justify-between items-center px-8 bg-background/80 dark:bg-stone-900/80 backdrop-blur-md"
  >
    <!-- Search -->
    <div class="flex items-center gap-4 flex-1">
      <div class="relative w-full max-w-md">
        <span
          class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/55 text-lg"
        >search</span>
        <input
          :value="store.searchQuery"
          @input="store.setSearchQuery($event.target.value)"
          class="w-full bg-surface-container-highest border-none rounded-full py-2 pl-10 pr-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/20 placeholder:text-primary/45 outline-none"
          :placeholder="searchPlaceholder"
          type="text"
        />
      </div>
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-6">
      <button
        type="button"
        class="text-primary dark:text-primary-fixed-dim font-medium hover:text-primary-container transition-opacity opacity-90 hover:opacity-100 flex items-center gap-1 group relative"
        @click="onHelpClick"
      >
        <span class="material-symbols-outlined text-xl">help</span>
        <span>Ayuda</span>
        <span
          class="absolute -bottom-10 right-0 bg-on-surface text-surface text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        >
          {{ MSG_ACCESS_TOOLTIP }}
        </span>
      </button>
      <div class="h-8 w-8 rounded-full overflow-hidden ring-2 ring-primary/10">
        <img :src="CURRENT_USER.avatar" :alt="CURRENT_USER.name" class="h-full w-full object-cover" />
      </div>
    </div>
  </header>
</template>
