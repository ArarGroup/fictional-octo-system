<script setup>
import { useRoute } from 'vue-router'
import { MSG_ACCESS_TOOLTIP } from '@/mocks/uiCopy'
import { trackEvent } from '@/analytics/trackEvent'
import { ANALYTICS_EVENTS } from '@/analytics/eventNames'

const route = useRoute()

function onTalkClick() {
  trackEvent(ANALYTICS_EVENTS.CTA_TALK_CLICKED)
}

const navItems = [
  { label: 'Resumen', icon: 'dashboard', to: '/overview' },
  { label: 'Mis clientes', icon: 'group', to: '/customers' },
  { label: 'Insights', icon: 'analytics', to: '/insights' },
  { label: 'Campañas', icon: 'campaign', to: '/campaigns' },
  { label: 'Marketing', icon: 'mail', to: '/marketing' },
]
</script>

<template>
  <aside class="fixed left-0 top-0 h-full z-40 flex flex-col w-64 bg-white dark:bg-stone-900">
    <!-- Logo -->
    <div class="p-8">
      <h1 class="text-2xl font-bold text-primary italic serif">FruverFiel</h1>
      <p class="text-xs tracking-widest uppercase text-on-surface-variant mt-1 font-medium">
        Agrario moderno
      </p>
    </div>

    <!-- Nav -->
    <nav class="flex-1 px-4 space-y-2 mt-4">
      <router-link
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ isActive, navigate }"
      >
        <a
          @click="navigate"
          :class="[
            'flex items-center gap-3 px-4 py-3 transition-colors cursor-pointer',
            isActive
              ? 'bg-primary text-on-primary font-bold rounded-xl shadow-sm'
              : 'text-on-surface-variant dark:text-primary-fixed-dim hover:text-primary hover:bg-surface-container-low rounded-xl',
          ]"
        >
          <span class="material-symbols-outlined">{{ item.icon }}</span>
          <span class="font-medium">{{ item.label }}</span>
        </a>
      </router-link>
    </nav>

    <!-- CTA -->
    <div class="p-6 mt-auto">
      <button
        type="button"
        class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full cta-gradient text-on-primary font-bold text-sm shadow-md hover:opacity-90 transition-opacity group relative"
        @click="onTalkClick"
      >
        Hablemos
        <span
          class="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
        >
          {{ MSG_ACCESS_TOOLTIP }}
        </span>
      </button>
    </div>
  </aside>
</template>
