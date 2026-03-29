<script setup>
defineProps({
  series: {
    type: Array,
    required: true,
    // { label: string, value: number 0-100 }[]
  },
})
</script>

<template>
  <div class="bg-surface-container-lowest rounded-2xl p-6 custom-shadow border border-outline-variant/30">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h3 class="text-lg font-bold text-on-surface serif">Visit rhythm</h3>
        <p class="text-sm text-on-surface-variant font-body">Last 7 days · check-ins</p>
      </div>
      <span
        class="text-xs font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container rounded-full px-3 py-1"
      >This week</span>
    </div>
    <div class="flex justify-between gap-2 h-44 pt-2">
      <div
        v-for="bar in series"
        :key="bar.label"
        class="flex flex-1 flex-col items-center min-w-0 h-full"
      >
        <div class="flex flex-1 w-full flex-col justify-end min-h-0 mb-2">
          <div
            class="w-full max-w-[2.5rem] mx-auto rounded-t-lg bg-gradient-to-t from-primary to-primary-container/90 min-h-[6px]"
            :style="{ height: `${bar.value}%` }"
            :title="`${bar.label}: ${bar.value}% of peak`"
          />
        </div>
        <span class="text-[10px] font-semibold text-on-surface-variant truncate w-full text-center">{{
          bar.label
        }}</span>
      </div>
    </div>
  </div>
</template>
