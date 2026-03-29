<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  metrics: { type: Array, required: true },
  quote: { type: String, required: true },
})
</script>

<template>
  <div
    class="bg-secondary-container/20 rounded-xl p-8 h-full relative overflow-hidden border border-secondary-container/30 flex flex-col"
  >
    <div class="absolute top-0 right-0 p-8 pointer-events-none" aria-hidden="true">
      <div class="w-32 h-32 rounded-full bg-secondary opacity-10 -mr-16 -mt-16" />
    </div>

    <span class="text-xs font-body font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">{{
      eyebrow
    }}</span>
    <h3 class="serif text-3xl sm:text-4xl text-on-surface font-bold mb-8">{{ title }}</h3>

    <div class="space-y-8 relative z-10 flex-1">
      <div
        v-for="(m, i) in metrics"
        :key="m.key"
        class="flex items-center justify-between pb-4"
        :class="i < metrics.length - 1 ? 'border-b border-outline-variant/20' : ''"
      >
        <div>
          <p class="text-sm font-body text-on-surface-variant">{{ m.label }}</p>
          <p :class="['serif text-2xl font-bold', m.valueClass || 'text-on-surface']">
            {{ m.value }}
            <span
              v-if="m.delta"
              class="text-sm font-body font-normal text-secondary"
            >{{ m.delta }}</span>
            <span
              v-if="m.sub"
              class="text-sm font-body font-normal text-on-surface-variant"
            >{{ m.sub }}</span>
          </p>
        </div>
        <span :class="['material-symbols-outlined text-3xl', m.iconClass]">{{ m.icon }}</span>
      </div>
    </div>

    <div
      class="mt-10 bg-surface p-6 rounded-lg shadow-sm border border-outline-variant/10 relative z-10"
    >
      <p class="text-xs italic text-on-surface-variant leading-relaxed">"{{ quote }}"</p>
    </div>
  </div>
</template>
