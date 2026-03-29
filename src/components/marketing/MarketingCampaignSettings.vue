<script setup>
import { MARKETING_SETTINGS } from '@/mocks/marketing'
import { MSG_ACCESS_TOOLTIP } from '@/mocks/uiCopy'

defineProps({
  title: { type: String, default: 'Ajustes de campaña' },
})
</script>

<template>
  <div class="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/20">
    <div class="flex items-center gap-4 mb-8">
      <span class="material-symbols-outlined text-primary">tune</span>
      <h3 class="serif text-xl text-on-surface font-bold">{{ title }}</h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <label
          class="block text-xs font-bold font-body text-on-surface-variant uppercase tracking-widest mb-3"
        >{{ MARKETING_SETTINGS.audienceLabel }}</label>
        <div class="relative group">
          <select
            class="w-full bg-surface-container-highest border-b-2 border-outline-variant outline-none py-3 px-2 font-body text-on-surface-variant appearance-none cursor-not-allowed rounded-t-lg"
            disabled
          >
            <option>{{ MARKETING_SETTINGS.audienceValue }}</option>
          </select>
          <span
            class="material-symbols-outlined absolute right-2 top-3 text-on-surface-variant pointer-events-none"
          >expand_more</span>
          <span
            class="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded z-10"
          >{{ MSG_ACCESS_TOOLTIP }}</span>
        </div>
      </div>
      <div>
        <label
          class="block text-xs font-bold font-body text-on-surface-variant uppercase tracking-widest mb-3"
        >{{ MARKETING_SETTINGS.dispatchLabel }}</label>
        <div class="relative group">
          <input
            class="w-full bg-surface-container-highest border-b-2 border-outline-variant outline-none py-3 px-2 font-body text-on-surface-variant cursor-not-allowed rounded-t-lg"
            type="text"
            :value="MARKETING_SETTINGS.dispatchValue"
            disabled
            readonly
          />
          <span
            class="material-symbols-outlined absolute right-2 top-3 text-on-surface-variant pointer-events-none"
          >calendar_today</span>
          <span
            class="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded z-10"
          >{{ MSG_ACCESS_TOOLTIP }}</span>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
        <button
          type="button"
          class="flex-1 bg-surface-container-highest text-on-surface-variant font-medium py-3 rounded-full border border-outline-variant/30 cursor-not-allowed group relative"
        >
          {{ MARKETING_SETTINGS.saveDraft }}
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap"
          >{{ MSG_ACCESS_TOOLTIP }}</span>
        </button>
        <button
          type="button"
          class="flex-1 cta-gradient text-on-primary font-medium py-3 rounded-full shadow-lg opacity-90 cursor-not-allowed group relative"
        >
          {{ MARKETING_SETTINGS.schedule }}
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap"
          >{{ MSG_ACCESS_TOOLTIP }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
