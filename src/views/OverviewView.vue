<script setup>
import { computed } from 'vue'
import { useOverviewStats } from '@/composables/useOverviewStats'
import {
  OVERVIEW_ALERT,
  OVERVIEW_INSIGHTS,
  WEEKLY_VISIT_TREND,
} from '@/mocks/overview'
import OverviewStatCard from '@/components/overview/OverviewStatCard.vue'
import OverviewInsightCard from '@/components/overview/OverviewInsightCard.vue'
import OverviewAlertBanner from '@/components/overview/OverviewAlertBanner.vue'
import OverviewVisitTrend from '@/components/overview/OverviewVisitTrend.vue'
import OverviewActivityRow from '@/components/overview/OverviewActivityRow.vue'

const { totalMembers, totalVisits, atRiskCount, newMembersCount, recentMembers } =
  useOverviewStats()

const alertTitle = computed(() => {
  const n = atRiskCount.value
  if (n === 0) {
    return 'Tu base de miembros se ve estable'
  }
  if (n === 1) {
    return '1 miembro necesita un empujón esta semana'
  }
  return `${n} miembros necesitan un empujón esta semana`
})

const alertBody = computed(() =>
  atRiskCount.value === 0
    ? 'No hay señales urgentes de riesgo en la lista actual. Seguí Insights para ver tendencias.'
    : OVERVIEW_ALERT.body
)

const formattedTotalVisits = computed(() => totalVisits.value.toLocaleString('es-419'))
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Page header -->
    <div class="mb-10">
      <h2 class="text-4xl serif font-bold text-on-surface mb-2">Resumen</h2>
      <p class="text-on-surface-variant font-body max-w-2xl">
        Panorama de la membresía, patrones de visita y señales para actuar — alineado con tu lista
        de clientes.
      </p>
    </div>

    <!-- KPI row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <OverviewStatCard
        label="Miembros activos"
        :value="totalMembers"
        icon="group"
        hint="Total en tu red FruverFiel"
      />
      <OverviewStatCard
        label="Visitas de por vida"
        :value="formattedTotalVisits"
        icon="calendar_month"
        hint="Registradas entre todos los miembros"
      />
      <OverviewStatCard
        label="Miembros nuevos"
        :value="newMembersCount"
        icon="person_add"
        hint="Todavía definiendo hábitos"
      />
      <OverviewStatCard
        label="Requieren atención"
        :value="atRiskCount"
        icon="priority_high"
        hint="En riesgo o sin contacto"
      />
    </div>

    <OverviewAlertBanner :title="alertTitle" :body="alertBody" class="mb-8" />

    <!-- Bento: trend + insights + activity -->
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-7 space-y-8">
        <OverviewVisitTrend :series="WEEKLY_VISIT_TREND" />

        <div
          class="bg-surface-container-lowest rounded-2xl p-6 custom-shadow border border-outline-variant/30"
        >
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="text-lg font-bold text-on-surface serif">Actividad reciente</h3>
              <p class="text-sm text-on-surface-variant font-body">Ordenado por última visita</p>
            </div>
            <router-link to="/customers" class="text-sm font-bold text-primary hover:underline"
              >Ver todos</router-link
            >
          </div>
          <div class="mt-2">
            <OverviewActivityRow
              v-for="c in recentMembers"
              :key="c.id"
              :name="c.name"
              :avatar="c.avatar"
              :avatar-bg="c.avatarBg"
              :status="c.status"
              :last-visited="c.lastVisited"
              :total-visits="c.totalVisits"
              :trending="c.trending"
            />
          </div>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-5 space-y-4">
        <div class="mb-2">
          <h3 class="text-lg font-bold text-on-surface serif">Insights de IA</h3>
          <p class="text-sm text-on-surface-variant font-body">Patrones de tu tienda</p>
        </div>
        <OverviewInsightCard
          v-for="ins in OVERVIEW_INSIGHTS"
          :key="ins.id"
          :text="ins.text"
          :accent="ins.accent"
        />
      </div>
    </div>
  </div>
</template>
