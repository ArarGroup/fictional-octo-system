<script setup>
import {
  MARKETING_PAGE,
  MARKETING_CAMPAIGNS,
  MARKETING_PERFORMANCE,
  MARKETING_KAM,
} from '@/mocks/marketing'
import MarketingCampaignCard from '@/components/marketing/MarketingCampaignCard.vue'
import MarketingPerformanceGlance from '@/components/marketing/MarketingPerformanceGlance.vue'
import MarketingLiveEmailPreview from '@/components/marketing/MarketingLiveEmailPreview.vue'
import MarketingCampaignSettings from '@/components/marketing/MarketingCampaignSettings.vue'
</script>

<template>
  <div class="p-6 sm:p-10 lg:p-12 max-w-7xl mx-auto">
    <!-- Page header -->
    <div
      class="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-end mb-10 lg:mb-16"
    >
      <div>
        <h1 class="serif text-3xl sm:text-4xl text-on-surface font-bold leading-tight">
          {{ MARKETING_PAGE.title }}
        </h1>
        <p class="text-on-surface-variant font-body mt-2 text-base sm:text-lg max-w-xl">
          {{ MARKETING_PAGE.subtitle }}
        </p>
      </div>
      <div
        class="bg-surface-container px-5 py-2.5 rounded-full flex items-center gap-2 border border-outline-variant/15 w-fit shrink-0"
      >
        <span class="w-2 h-2 rounded-full bg-secondary shrink-0" aria-hidden="true" />
        <span class="text-sm font-medium text-secondary">{{ MARKETING_PAGE.activePill }}</span>
      </div>
    </div>

    <!-- Campaigns + performance -->
    <div class="grid grid-cols-12 gap-8 mb-12 lg:mb-16">
      <div class="col-span-12 lg:col-span-7 space-y-6">
        <h2 class="serif text-xl text-on-surface font-bold mb-2 flex items-center gap-3">
          <span class="material-symbols-outlined text-primary">potted_plant</span>
          {{ MARKETING_PAGE.harvestsTitle }}
        </h2>
        <MarketingCampaignCard
          v-for="c in MARKETING_CAMPAIGNS"
          :key="c.id"
          :status="c.status"
          :status-tone="c.statusTone"
          :meta="c.meta"
          :title="c.title"
          :description="c.description"
          :image="c.image"
          :ctr="c.ctr"
          :audience-extra="c.audienceExtra"
          :border-accent="c.borderAccent"
          :show-edit="!!c.showEdit"
          :show-forward="!!c.showForward"
        />
      </div>

      <div class="col-span-12 lg:col-span-5 min-h-0">
        <MarketingPerformanceGlance
          :eyebrow="MARKETING_PERFORMANCE.eyebrow"
          :title="MARKETING_PERFORMANCE.title"
          :metrics="MARKETING_PERFORMANCE.metrics"
          :quote="MARKETING_PERFORMANCE.quote"
        />
      </div>
    </div>

    <!-- Live email -->
    <section class="mb-12 lg:mb-16" aria-labelledby="live-email-heading">
      <h2 id="live-email-heading" class="sr-only">Vista previa del correo</h2>
      <MarketingLiveEmailPreview :title="MARKETING_PAGE.livePreviewTitle" />
    </section>

    <!-- Settings teaser -->
    <MarketingCampaignSettings :title="MARKETING_PAGE.settingsTitle" class="mb-12" />

    <!-- KAM -->
    <div
      class="rounded-2xl border border-primary/20 bg-primary-fixed/30 p-8 sm:p-10 relative overflow-hidden"
    >
      <div
        class="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-secondary/10 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div class="relative z-10">
        <h2 class="text-2xl serif font-bold text-on-surface mb-3">{{ MARKETING_KAM.title }}</h2>
        <p class="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
          {{ MARKETING_KAM.body }}
        </p>
        <a
          :href="MARKETING_KAM.mailto"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full cta-gradient text-on-primary font-bold text-sm custom-shadow hover:opacity-95 transition-opacity"
        >
          <span class="material-symbols-outlined text-lg">person_raised_hand</span>
          {{ MARKETING_KAM.cta }}
        </a>
      </div>
    </div>
  </div>
</template>
