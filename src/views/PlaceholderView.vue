<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
    <div class="text-center space-y-4">
      <h2 class="text-4xl serif font-bold text-on-surface">{{ route.meta.title }}</h2>
      <p class="text-on-surface-variant">Próximamente.</p>
    </div>
  </div>
</template>
