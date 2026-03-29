<script setup>
import MaterialIcon from '@/components/ui/MaterialIcon.vue'

defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  icon: { type: String, required: true },
  hint: { type: String, default: '' },
})
</script>

<template>
  <div
    class="bg-surface-container-lowest rounded-2xl p-6 custom-shadow border border-outline-variant/30"
  >
    <div class="flex items-start justify-between gap-3 mb-4">
      <span class="text-xs font-bold uppercase tracking-wider text-on-surface-variant">{{
        label
      }}</span>
      <span
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed/40 text-primary"
      >
        <MaterialIcon :icon="icon" size="lg" />
      </span>
    </div>
    <p class="text-4xl serif font-bold text-on-surface tracking-tight">{{ value }}</p>
    <p v-if="hint" class="mt-2 text-sm text-on-surface-variant font-body">{{ hint }}</p>
  </div>
</template>
