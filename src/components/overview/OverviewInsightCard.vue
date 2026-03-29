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
  isGenerated: { type: Boolean, default: false },
})

const borderClass = computed(() => INSIGHT_ACCENTS[props.accent] ?? INSIGHT_ACCENTS.primary)
</script>

<template>
  <div
    :class="[
      'rounded-xl bg-surface-container-low pl-4 pr-5 py-4 border-l-4 relative',
      borderClass,
      isGenerated ? 'border border-outline-variant/30' : '',
    ]"
  >
    <!-- AI-generated badge -->
    <div
      v-if="isGenerated"
      class="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-wider text-tertiary"
    >
      <span class="material-symbols-outlined text-[13px]" style="font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20;">auto_awesome</span>
      IA
    </div>

    <p class="text-sm text-on-surface leading-relaxed font-body" :class="isGenerated ? 'pr-8' : ''">
      {{ text }}
    </p>
  </div>
</template>
