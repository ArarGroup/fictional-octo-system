<script setup>
import { computed } from 'vue'
import { INSIGHT_ACCENTS } from '@/mocks/overview'

const props = defineProps({
  text: { type: String, required: true },
  accent: {
    type: String,
    required: true,
    validator: v => Object.keys(INSIGHT_ACCENTS).includes(v),
  },
})

const borderClass = computed(() => INSIGHT_ACCENTS[props.accent] ?? INSIGHT_ACCENTS.primary)
</script>

<template>
  <div
    :class="[
      'rounded-xl border border-outline-variant/40 bg-surface-container-low pl-4 pr-5 py-4 border-l-4',
      borderClass,
    ]"
  >
    <p class="text-sm text-on-surface leading-relaxed font-body">{{ text }}</p>
  </div>
</template>
