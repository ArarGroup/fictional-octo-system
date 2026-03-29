<script setup>
defineProps({
  title: { type: String, required: true },
  body: { type: String, required: true },
})
</script>

<template>
  <div
    class="rounded-2xl border-l-4 border-primary bg-primary-fixed/25 px-6 py-5 flex gap-4 items-start"
    role="status"
  >
    <span
      class="material-symbols-outlined text-primary shrink-0 mt-0.5"
      aria-hidden="true"
    >notifications_active</span>
    <div>
      <p class="font-bold text-on-surface serif text-lg">{{ title }}</p>
      <p class="text-sm text-on-surface-variant mt-1 leading-relaxed font-body">{{ body }}</p>
    </div>
  </div>
</template>
