<script setup>
defineProps({
  icon: { type: String, required: true },
  filled: { type: Boolean, default: false },
  size: { type: String, default: 'md' }, // 'sm' | 'md' | 'lg'
})
</script>

<template>
  <span
    class="material-symbols-outlined select-none"
    :style="filled ? { fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24` } : {}"
    :class="{
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-2xl': size === 'lg',
    }"
  >{{ icon }}</span>
</template>
