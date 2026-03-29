<script setup>
import { computed } from 'vue'
import { CUSTOMER_STATUSES } from '@/mocks/customers'

const props = defineProps({
  status: {
    type: String,
    required: true,
  },
})

const config = computed(() => CUSTOMER_STATUSES[props.status] ?? CUSTOMER_STATUSES.regular)
</script>

<template>
  <span :class="['px-3 py-1 rounded-full text-[10px] font-extrabold uppercase', config.classes]">
    {{ config.label }}
  </span>
</template>
