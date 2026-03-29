<script setup>
import StatusBadge from '@/components/ui/StatusBadge.vue'
import MaterialIcon from '@/components/ui/MaterialIcon.vue'

const props = defineProps({
  customer: { type: Object, required: true },
  isSelected: { type: Boolean, default: false },
})

const emit = defineEmits(['select'])
</script>

<template>
  <tr
    @click="emit('select', customer.id)"
    :class="[
      'hover:bg-surface-container-low transition-colors cursor-pointer',
      isSelected ? 'bg-surface-container-low' : '',
    ]"
  >
    <!-- Name -->
    <td class="px-6 py-5">
      <div class="flex items-center gap-3">
        <div :class="['w-10 h-10 rounded-full overflow-hidden shrink-0', customer.avatarBg]">
          <img :src="customer.avatar" :alt="customer.name" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="font-bold text-on-surface">{{ customer.name }}</p>
          <p class="text-xs text-on-surface-variant">{{ customer.email }}</p>
        </div>
      </div>
    </td>

    <!-- Status -->
    <td class="px-6 py-5">
      <StatusBadge :status="customer.status" />
    </td>

    <!-- Last Visited -->
    <td class="px-6 py-5 text-sm text-on-surface-variant">{{ customer.lastVisited }}</td>

    <!-- Total Visits -->
    <td class="px-6 py-5">
      <div class="flex items-center gap-2">
        <span class="font-bold text-lg serif">{{ customer.totalVisits }}</span>
        <MaterialIcon v-if="customer.trending === 'up'" icon="star" :filled="true" size="sm" class="text-primary" />
        <MaterialIcon v-else-if="customer.trending === 'down'" icon="trending_down" size="sm" class="text-primary" />
      </div>
    </td>
  </tr>
</template>
