<script setup>
import { MSG_ACCESS_TOOLTIP } from '@/mocks/uiCopy'

defineProps({
  customer: { type: Object, required: true },
})
</script>

<template>
  <div class="bg-surface-container-high rounded-3xl p-8 sticky top-24 custom-shadow border-t-8 border-primary">
    <!-- Profile -->
    <div class="text-center mb-8">
      <div class="w-24 h-24 rounded-full mx-auto ring-4 ring-white mb-4 overflow-hidden bg-primary-fixed">
        <img :src="customer.avatar" :alt="customer.name" class="w-full h-full object-cover" />
      </div>
      <h3 class="serif text-2xl font-bold text-on-surface">{{ customer.name }}</h3>
      <p class="text-on-surface-variant font-medium">{{ customer.tier }}</p>
    </div>

    <div class="space-y-8">
      <!-- Habits Summary (Editorial Inset) -->
      <section>
        <h4 class="text-xs font-extrabold uppercase tracking-widest text-primary mb-4">
          Resumen de hábitos
        </h4>
        <div
          class="bg-surface-container-lowest p-5 rounded-2xl relative overflow-hidden border-l-4 border-primary-container"
        >
          <div
            class="absolute -right-4 -top-4 w-16 h-16 bg-secondary-container/40 rounded-full pointer-events-none"
          />
          <p class="text-sm leading-relaxed text-on-surface italic serif">
            "{{ customer.habitsNote }}"
          </p>
        </div>
      </section>

      <!-- Visit Timeline -->
      <section>
        <h4 class="text-xs font-extrabold uppercase tracking-widest text-primary mb-4">
          Historial de visitas
        </h4>

        <!-- Empty state: brand-new live registration -->
        <div
          v-if="customer.visitTimeline.length === 0"
          class="bg-surface-container-lowest rounded-2xl p-5 flex items-center gap-3"
        >
          <span class="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
          <p class="text-xs text-on-surface-variant italic">
            Recién registrado — aún no hay primera visita registrada.
          </p>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="(visit, index) in customer.visitTimeline"
            :key="index"
            class="flex items-start gap-3"
          >
            <div
              :class="[
                'mt-1 w-2 h-2 rounded-full shrink-0',
                index === 0 ? 'bg-secondary' : 'bg-outline-variant',
              ]"
            />
            <div>
              <p class="text-xs font-bold text-on-surface">
                {{ visit.date }} · Compra ${{ visit.amount.toFixed(2) }}
              </p>
              <p class="text-[10px] text-on-surface-variant">{{ visit.items }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Actions (locked) -->
      <section class="pt-4 space-y-3">
        <button
          disabled
          class="w-full py-3 rounded-full bg-surface-variant text-primary/40 font-bold text-sm cursor-not-allowed group relative flex items-center justify-center gap-2"
        >
          <span class="material-symbols-outlined text-sm">send</span>
          Enviar cupón de fidelidad
          <span
            class="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
          >
            {{ MSG_ACCESS_TOOLTIP }}
          </span>
        </button>
        <button
          disabled
          class="w-full py-3 rounded-full bg-surface-variant text-primary/40 font-bold text-sm cursor-not-allowed group relative flex items-center justify-center gap-2"
        >
          <span class="material-symbols-outlined text-sm">edit</span>
          Editar notas del perfil
          <span
            class="absolute -top-12 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
          >
            {{ MSG_ACCESS_TOOLTIP }}
          </span>
        </button>
      </section>
    </div>
  </div>
</template>
