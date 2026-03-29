<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideNavBar from '@/components/layout/SideNavBar.vue'
import TopNavBar from '@/components/layout/TopNavBar.vue'
import { trackEvent } from '@/analytics/trackEvent'
import { ANALYTICS_EVENTS } from '@/analytics/eventNames'

const route = useRoute()
const showFab = computed(() => !route.meta.hideFab)

function onFabAddCustomer() {
  trackEvent(ANALYTICS_EVENTS.FAB_ADD_CUSTOMER_CLICKED)
}
</script>

<template>
  <div class="bg-background text-on-background min-h-screen">
    <SideNavBar />
    <TopNavBar />

    <main class="pl-64 pt-16 min-h-screen">
      <router-view />
    </main>

    <!-- FAB (hidden on insight-heavy screens) -->
    <div v-if="showFab" class="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        class="w-16 h-16 rounded-full cta-gradient text-on-primary flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all group relative"
        @click="onFabAddCustomer"
      >
        <span class="material-symbols-outlined text-3xl">add</span>
        <span class="absolute right-20 top-1/2 -translate-y-1/2 bg-on-surface text-surface text-xs py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
          Agregar cliente
        </span>
      </button>
    </div>
  </div>
</template>
