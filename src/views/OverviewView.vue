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
    return 'Your member base looks steady'
  }
  if (n === 1) {
    return '1 member needs a nudge this week'
  }
  return `${n} members need a nudge this week`
})

const alertBody = computed(() =>
  atRiskCount.value === 0
    ? 'No urgent at-risk signals from the current roster. Keep an eye on Insights for trends.'
    : OVERVIEW_ALERT.body
)

const formattedTotalVisits = computed(() =>
  totalVisits.value.toLocaleString()
)
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Page header -->
    <div class="mb-10">
      <h2 class="text-4xl serif font-bold text-on-surface mb-2">Overview</h2>
      <p class="text-on-surface-variant font-body max-w-2xl">
        Snapshot of membership health, visit patterns, and signals worth acting on — aligned with
        your customer roster.
      </p>
    </div>

    <!-- KPI row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      <OverviewStatCard
        label="Active members"
        :value="totalMembers"
        icon="group"
        hint="Total in your FruverFiel roster"
      />
      <OverviewStatCard
        label="Lifetime visits"
        :value="formattedTotalVisits"
        icon="calendar_month"
        hint="Recorded across all members"
      />
      <OverviewStatCard
        label="New members"
        :value="newMembersCount"
        icon="person_add"
        hint="Still establishing habits"
      />
      <OverviewStatCard
        label="Needs attention"
        :value="atRiskCount"
        icon="priority_high"
        hint="At risk or lost touch"
      />
    </div>

    <OverviewAlertBanner :title="alertTitle" :body="alertBody" class="mb-8" />

    <!-- Bento: trend + insights + activity -->
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-7 space-y-8">
        <OverviewVisitTrend :series="WEEKLY_VISIT_TREND" />

        <div class="bg-surface-container-lowest rounded-2xl p-6 custom-shadow border border-outline-variant/30">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="text-lg font-bold text-on-surface serif">Recent activity</h3>
              <p class="text-sm text-on-surface-variant font-body">Sorted by last visit</p>
            </div>
            <router-link
              to="/customers"
              class="text-sm font-bold text-primary hover:underline"
            >View all</router-link>
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
          <h3 class="text-lg font-bold text-on-surface serif">AI insights</h3>
          <p class="text-sm text-on-surface-variant font-body">Patterns from your store</p>
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
