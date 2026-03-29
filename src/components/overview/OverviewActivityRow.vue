<script setup>
import StatusBadge from '@/components/ui/StatusBadge.vue'
import MaterialIcon from '@/components/ui/MaterialIcon.vue'

defineProps({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  avatarBg: { type: String, required: true },
  status: { type: String, required: true },
  lastVisited: { type: String, required: true },
  totalVisits: { type: Number, required: true },
  trending: { type: String, default: null },
})
</script>

<template>
  <div
    class="flex items-center gap-4 py-4 border-b border-outline-variant/40 last:border-0 last:pb-0 first:pt-0"
  >
    <div :class="['w-11 h-11 rounded-full overflow-hidden shrink-0', avatarBg]">
      <img :src="avatar" :alt="name" class="w-full h-full object-cover" />
    </div>
    <div class="flex-1 min-w-0">
      <p class="font-bold text-on-surface truncate">{{ name }}</p>
      <p class="text-xs text-on-surface-variant">{{ lastVisited }}</p>
    </div>
    <StatusBadge :status="status" />
    <div class="flex items-center gap-1 shrink-0 w-16 justify-end">
      <span class="font-bold serif text-on-surface">{{ totalVisits }}</span>
      <MaterialIcon v-if="trending === 'up'" icon="trending_up" size="sm" class="text-primary" />
      <MaterialIcon
        v-else-if="trending === 'down'"
        icon="trending_down"
        size="sm"
        class="text-secondary"
      />
    </div>
  </div>
</template>
