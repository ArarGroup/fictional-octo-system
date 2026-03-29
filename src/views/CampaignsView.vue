<script setup>
import {
  CAMPAIGNS_PAGE,
  CAMPAIGNS_WIDGET,
  CAMPAIGNS_HERO,
  CAMPAIGNS_FOOTER,
  CAMPAIGNS_PLACEHOLDER_IMAGE,
} from '@/mocks/campaigns'
</script>

<template>
  <div class="relative overflow-hidden bg-surface min-h-[calc(100vh-4rem)] px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
    <!-- Page header -->
    <div class="mb-10 lg:mb-12 relative z-10 max-w-7xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-on-surface mb-2 serif tracking-tight">
        {{ CAMPAIGNS_PAGE.title }}
      </h1>
      <p class="text-on-surface-variant font-body text-base sm:text-lg max-w-xl">
        {{ CAMPAIGNS_PAGE.subtitle }}
      </p>
    </div>

    <!-- Greyed-out section + overlay -->
    <div
      class="relative rounded-[2rem] overflow-hidden bg-surface-container-low min-h-[600px] flex items-center justify-center max-w-7xl mx-auto"
    >
      <!-- Blurred placeholder bento (background) -->
      <div
        class="absolute inset-0 grid grid-cols-12 gap-6 lg:gap-8 p-8 lg:p-12 opacity-30 grayscale pointer-events-none select-none"
        aria-hidden="true"
      >
        <!-- Audience -->
        <div
          class="col-span-12 md:col-span-4 bg-surface-container-high rounded-3xl p-8 flex flex-col gap-6"
        >
          <div
            class="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-on-secondary-container">groups</span>
          </div>
          <div class="space-y-3">
            <div class="h-6 w-3/4 bg-on-surface-variant/20 rounded-md" />
            <div class="h-4 w-full bg-on-surface-variant/10 rounded-md" />
            <div class="h-4 w-2/3 bg-on-surface-variant/10 rounded-md" />
          </div>
          <div class="mt-auto space-y-4">
            <div
              class="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between border border-outline-variant/10"
            >
              <div class="h-4 w-24 bg-on-surface-variant/20 rounded-md" />
              <div class="h-4 w-4 bg-primary/20 rounded-full" />
            </div>
            <div
              class="p-4 bg-surface-container-lowest rounded-xl flex items-center justify-between border border-outline-variant/10"
            >
              <div class="h-4 w-32 bg-on-surface-variant/20 rounded-md" />
              <div class="h-4 w-4 bg-primary/20 rounded-full" />
            </div>
          </div>
        </div>

        <!-- Composer -->
        <div
          class="col-span-12 md:col-span-8 bg-surface-container-highest rounded-3xl p-8 lg:p-10 flex flex-col gap-8 min-h-[280px]"
        >
          <div class="flex justify-between items-center">
            <div class="h-8 w-48 bg-on-surface-variant/20 rounded-md" />
            <div class="flex gap-2">
              <div class="h-8 w-8 bg-on-surface-variant/10 rounded-full" />
              <div class="h-8 w-8 bg-on-surface-variant/10 rounded-full" />
            </div>
          </div>
          <div
            class="flex-1 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/10 min-h-[200px]"
          >
            <div class="space-y-4">
              <div class="h-4 w-full bg-on-surface-variant/10 rounded-md" />
              <div class="h-4 w-full bg-on-surface-variant/10 rounded-md" />
              <div class="h-4 w-[80%] bg-on-surface-variant/10 rounded-md" />
              <div class="pt-8 flex gap-4 flex-wrap sm:flex-nowrap">
                <img
                  :src="CAMPAIGNS_PLACEHOLDER_IMAGE"
                  alt=""
                  class="w-24 h-24 rounded-lg object-cover shrink-0"
                />
                <div class="flex-1 space-y-2 min-w-[120px]">
                  <div class="h-4 w-1/3 bg-on-surface-variant/20 rounded-md" />
                  <div class="h-4 w-1/2 bg-on-surface-variant/10 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics strip -->
        <div
          class="col-span-12 bg-surface-container-high rounded-3xl p-8 min-h-[160px] flex flex-col sm:flex-row items-stretch sm:items-center gap-8 sm:gap-12"
        >
          <div class="flex-1 space-y-4">
            <div class="h-4 w-24 bg-on-surface-variant/10 rounded-md" />
            <div class="h-8 w-32 bg-on-surface-variant/20 rounded-md" />
          </div>
          <div class="flex-1 space-y-4">
            <div class="h-4 w-24 bg-on-surface-variant/10 rounded-md" />
            <div class="h-8 w-32 bg-on-surface-variant/20 rounded-md" />
          </div>
          <div class="flex-[2] h-24 sm:h-full flex items-end gap-2 min-h-[80px]">
            <div class="flex-1 bg-primary/10 h-1/2 rounded-t-lg min-h-[40px]" />
            <div class="flex-1 bg-primary/10 h-2/3 rounded-t-lg min-h-[40px]" />
            <div class="flex-1 bg-primary/10 h-3/4 rounded-t-lg min-h-[40px]" />
            <div class="flex-1 bg-primary/20 h-full rounded-t-lg min-h-[40px]" />
            <div class="flex-1 bg-primary/10 h-1/2 rounded-t-lg min-h-[40px]" />
          </div>
        </div>
      </div>

      <!-- Foreground: coming soon -->
      <div class="relative z-20 flex flex-col items-center text-center px-4 py-16 sm:py-20">
        <div class="mb-10 lg:mb-12 relative">
          <div
            class="bg-secondary-container/60 backdrop-blur-md px-8 py-10 rounded-[2.5rem] border border-secondary/20 shadow-xl max-w-sm mx-auto"
          >
            <span
              class="material-symbols-outlined text-secondary text-5xl mb-4 block"
              aria-hidden="true"
            >{{ CAMPAIGNS_WIDGET.icon }}</span>
            <h3
              class="serif text-2xl font-bold text-on-secondary-container mb-2 leading-tight"
            >
              {{ CAMPAIGNS_WIDGET.title }}
            </h3>
            <p class="text-on-secondary-container/70 text-sm leading-relaxed font-body">
              {{ CAMPAIGNS_WIDGET.body }}
            </p>
            <div
              class="absolute -top-6 -right-6 w-20 h-20 bg-tertiary-fixed rounded-full flex items-center justify-center -rotate-12 shadow-md px-2"
            >
              <span
                class="text-on-tertiary-fixed serif font-bold text-lg leading-none text-center"
              >{{ CAMPAIGNS_WIDGET.badge }}</span>
            </div>
          </div>
        </div>

        <div
          class="max-w-xl bg-surface/40 backdrop-blur-xl p-8 sm:p-12 rounded-[3rem] border border-white/20 shadow-2xl"
        >
          <h2 class="text-3xl sm:text-4xl serif font-bold text-on-surface mb-4">
            {{ CAMPAIGNS_HERO.title }}
          </h2>
          <p class="text-lg sm:text-xl text-on-surface-variant font-body mb-8 sm:mb-10 leading-relaxed">
            {{ CAMPAIGNS_HERO.body }}
          </p>
          <div class="flex flex-col gap-6 items-center">
            <p class="text-lg font-bold text-primary italic font-body">{{ CAMPAIGNS_HERO.ctaLead }}</p>
            <button
              type="button"
              class="px-8 sm:px-10 py-4 sm:py-5 cta-gradient text-on-primary rounded-full font-bold text-lg sm:text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              {{ CAMPAIGNS_HERO.ctaLabel }}
            </button>
          </div>
        </div>
      </div>

      <!-- Decorative blurs -->
      <div
        class="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        class="absolute -top-20 -right-20 w-80 h-80 bg-tertiary/5 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
    </div>

    <!-- Footer -->
    <div class="mt-12 lg:mt-16 flex justify-center pb-6 relative z-10">
      <button
        type="button"
        class="text-tertiary font-medium hover:underline flex items-center gap-2 font-body"
      >
        <span class="material-symbols-outlined text-lg" aria-hidden="true">{{
          CAMPAIGNS_FOOTER.icon
        }}</span>
        {{ CAMPAIGNS_FOOTER.label }}
      </button>
    </div>
  </div>
</template>
