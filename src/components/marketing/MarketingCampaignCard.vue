<script setup>
import { computed } from 'vue'
import { MSG_ACCESS_TOOLTIP } from '@/mocks/uiCopy'

const props = defineProps({
  status: { type: String, required: true },
  statusTone: { type: String, required: true },
  meta: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  ctr: { type: String, default: null },
  audienceExtra: { type: Number, default: null },
  borderAccent: { type: String, required: true },
  showEdit: { type: Boolean, default: false },
  showForward: { type: Boolean, default: false },
})

const borderClass = computed(() => {
  if (props.borderAccent === 'secondary') {
    return 'border-l-secondary'
  }
  if (props.borderAccent === 'primary') {
    return 'border-l-primary'
  }
  return 'border-l-outline-variant'
})

const statusBadgeClass = computed(() => {
  if (props.statusTone === 'secondary') {
    return 'bg-secondary-container/30 text-secondary'
  }
  if (props.statusTone === 'primary') {
    return 'bg-primary-container/20 text-primary'
  }
  return 'bg-surface-container-high text-on-surface-variant'
})
</script>

<template>
  <div
    :class="[
      'bg-surface-container-lowest rounded-xl p-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-6',
      'shadow-sm hover:shadow-md transition-shadow group border-l-4 cursor-pointer',
      borderClass,
    ]"
  >
    <div class="h-24 w-24 rounded-lg overflow-hidden shrink-0 mx-auto sm:mx-0">
      <img
        :src="image"
        :alt="imageAlt || title"
        class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div class="flex-1 min-w-0 text-center sm:text-left">
      <div class="flex flex-wrap items-center justify-center sm:justify-between gap-2 mb-1">
        <span
          :class="['text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded', statusBadgeClass]"
        >{{ status }}</span>
        <span class="text-xs text-on-surface-variant font-body">{{ meta }}</span>
      </div>
      <h4 class="serif text-lg text-on-surface font-bold">{{ title }}</h4>
      <p class="text-sm text-on-surface-variant line-clamp-2 mt-0.5">{{ description }}</p>
    </div>

    <div
      v-if="ctr != null || audienceExtra != null"
      class="flex flex-row sm:flex-col items-center justify-center sm:items-end gap-3 sm:gap-2 shrink-0"
    >
      <span v-if="ctr" class="text-xs font-body text-on-surface-variant">CTR: {{ ctr }}</span>
      <div v-if="audienceExtra != null" class="flex -space-x-2">
        <div class="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-surface-container-high" />
        <div class="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-surface-container" />
        <div
          class="w-6 h-6 rounded-full border-2 border-surface-container-lowest bg-surface-container-low flex items-center justify-center text-[8px] font-bold text-on-surface-variant"
        >
          +{{ audienceExtra }}
        </div>
      </div>
    </div>

    <div v-else class="flex justify-center sm:justify-end shrink-0">
      <button
        v-if="showEdit"
        type="button"
        class="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full cursor-not-allowed group/btn relative"
      >
        edit
        <span
          class="absolute bottom-full right-0 mb-2 hidden group-hover/btn:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none"
        >{{ MSG_ACCESS_TOOLTIP }}</span>
      </button>
      <button
        v-else-if="showForward"
        type="button"
        class="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-high rounded-full cursor-not-allowed group/btn relative"
      >
        arrow_forward
        <span
          class="absolute bottom-full right-0 mb-2 hidden group-hover/btn:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none"
        >{{ MSG_ACCESS_TOOLTIP }}</span>
      </button>
    </div>
  </div>
</template>
