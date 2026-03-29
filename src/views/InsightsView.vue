<script setup>
import {
  INSIGHTS_PAGE,
  WEEKLY_FOOTFALL,
  NURTURING_GROWTH,
  DAILY_SUN_CYCLES,
  STORE_VITALITY,
  LOW_STOCK_WIDGET,
} from '@/mocks/insights'
</script>

<template>
  <div
    class="p-10 lg:p-12 max-w-[1600px] mx-auto selection:bg-secondary-container/40 font-body"
  >
    <!-- Page header -->
    <header class="mb-10 lg:mb-12">
      <span
        class="text-primary font-bold tracking-widest text-xs uppercase font-label block mb-2"
      >{{ INSIGHTS_PAGE.eyebrow }}</span>
      <h1 class="text-4xl sm:text-5xl serif font-bold text-on-surface leading-tight">
        {{ INSIGHTS_PAGE.title }}
      </h1>
      <p class="text-on-surface-variant mt-4 text-lg max-w-2xl leading-relaxed">
        {{ INSIGHTS_PAGE.subtitle }}
      </p>
    </header>

    <div class="grid grid-cols-12 gap-8">
      <!-- Weekly footfall -->
      <div
        class="col-span-12 lg:col-span-7 bg-surface-container-low rounded-2xl p-8 custom-shadow relative overflow-hidden group"
      >
        <div class="flex justify-between items-start mb-10 lg:mb-12">
          <div>
            <h2 class="text-2xl serif text-on-surface mb-2">{{ WEEKLY_FOOTFALL.title }}</h2>
            <p class="text-sm text-secondary font-medium">{{ WEEKLY_FOOTFALL.weekLabel }}</p>
          </div>
          <div
            class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-secondary shrink-0"
          >
            <span class="material-symbols-outlined">calendar_today</span>
          </div>
        </div>

        <div class="flex items-end justify-between h-48 gap-2 sm:gap-4 mb-8">
          <div
            v-for="bar in WEEKLY_FOOTFALL.bars"
            :key="bar.day"
            class="flex-1 flex flex-col items-center gap-4 min-w-0"
          >
            <div
              class="w-full bg-outline-variant/20 rounded-full relative overflow-hidden"
              :class="bar.track"
            >
              <div
                class="absolute bottom-0 left-0 right-0 w-full rounded-full"
                :class="[bar.fill, bar.fillClass, bar.peak ? 'shadow-md' : '']"
              />
            </div>
            <span
              :class="[
                'text-xs font-bold truncate max-w-full',
                bar.peak ? 'text-secondary' : 'text-on-surface-variant',
              ]"
            >{{ bar.day }}</span>
          </div>
        </div>

        <div
          class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary"
        >
          <p class="text-on-surface italic text-sm leading-relaxed">
            "{{ WEEKLY_FOOTFALL.insight }}"
          </p>
        </div>
      </div>

      <!-- Nurturing growth -->
      <div
        class="col-span-12 lg:col-span-5 bg-surface-container-high rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative min-h-[420px]"
      >
        <div class="z-10">
          <h2 class="text-2xl serif text-on-surface mb-2">{{ NURTURING_GROWTH.title }}</h2>
          <p class="text-sm text-on-surface-variant">{{ NURTURING_GROWTH.subtitle }}</p>
        </div>

        <div class="relative h-48 w-full mt-8 z-10">
          <svg class="w-full h-full overflow-visible text-secondary" viewBox="0 0 400 200" aria-hidden="true">
            <path
              :d="NURTURING_GROWTH.linePath"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="6"
            />
            <circle cx="400" cy="20" r="8" fill="currentColor" />
            <circle cx="400" cy="20" r="14" fill="currentColor" opacity="0.2" />
          </svg>
          <div class="absolute top-0 right-0 text-right pointer-events-none">
            <span class="text-5xl serif font-bold text-secondary block leading-none">{{
              NURTURING_GROWTH.stat
            }}</span>
            <p
              class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1"
            >
              {{ NURTURING_GROWTH.statLabel }}
            </p>
          </div>
        </div>

        <div class="mt-8 z-10">
          <div class="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
            <p class="text-on-surface text-sm leading-relaxed">{{ NURTURING_GROWTH.body }}</p>
          </div>
        </div>

        <div
          class="absolute -bottom-10 -right-10 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <!-- Daily sun cycles -->
      <div
        class="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-8 lg:p-10 custom-shadow flex flex-col md:flex-row gap-10 lg:gap-12 items-center"
      >
        <div class="flex-1 w-full min-w-0">
          <h2 class="text-3xl serif text-on-surface mb-4">{{ DAILY_SUN_CYCLES.title }}</h2>
          <p class="text-on-surface-variant leading-relaxed mb-8">
            {{ DAILY_SUN_CYCLES.body }}
          </p>
          <div class="space-y-6">
            <div
              v-for="seg in DAILY_SUN_CYCLES.segments"
              :key="seg.label"
              class="flex items-center gap-4"
            >
              <div :class="['w-3 h-3 rounded-full shrink-0', seg.dot]" />
              <span class="font-label text-sm font-bold w-24 shrink-0">{{ seg.label }}</span>
              <div class="flex-1 h-2 bg-surface-container rounded-full overflow-hidden min-w-0">
                <div :class="['h-full rounded-full', seg.fill, seg.width]" />
              </div>
              <span :class="['font-label', seg.toneClass]">{{ seg.toneLabel }}</span>
            </div>
          </div>
          <div class="mt-10 p-5 bg-surface-container-low rounded-xl">
            <p class="text-sm text-on-surface leading-relaxed">{{ DAILY_SUN_CYCLES.footnote }}</p>
          </div>
        </div>

        <div class="w-64 h-64 relative flex items-center justify-center shrink-0">
          <div class="absolute inset-0 border-8 border-dashed border-outline-variant/20 rounded-full" />
          <div
            class="w-48 h-48 rounded-full bg-tertiary-fixed/30 flex items-center justify-center"
          >
            <div
              class="w-32 h-32 rounded-full bg-primary-fixed-dim/40 flex items-center justify-center"
            >
              <div
                class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary custom-shadow"
              >
                <span class="material-symbols-outlined">sunny</span>
              </div>
            </div>
          </div>
          <span
            class="absolute top-0 font-label font-bold text-[10px] text-on-surface-variant"
          >12:00</span>
          <span
            class="absolute right-0 font-label font-bold text-[10px] text-on-surface-variant"
          >15:00</span>
          <span
            class="absolute bottom-0 font-label font-bold text-[10px] text-on-surface-variant"
          >18:00</span>
          <span
            class="absolute left-0 font-label font-bold text-[10px] text-on-surface-variant"
          >09:00</span>
        </div>
      </div>

      <!-- Store vitality -->
      <div
        class="col-span-12 lg:col-span-4 bg-secondary text-on-secondary rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden min-h-[320px]"
      >
        <div class="relative z-10">
          <h2 class="text-3xl serif mb-4">{{ STORE_VITALITY.title }}</h2>
          <p class="opacity-80 text-sm leading-relaxed">{{ STORE_VITALITY.body }}</p>
        </div>
        <div class="mt-8 relative z-10">
          <div class="text-6xl serif font-bold mb-2 leading-none">{{ STORE_VITALITY.score }}</div>
          <p class="uppercase tracking-widest text-xs font-bold opacity-70">
            {{ STORE_VITALITY.scoreLabel }}
          </p>
        </div>
        <button
          type="button"
          class="mt-10 bg-surface-container-lowest text-secondary rounded-full py-4 font-bold flex items-center justify-center gap-3 hover:bg-secondary-container transition-colors relative z-10"
        >
          {{ STORE_VITALITY.cta }}
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
        <div
          class="absolute -top-20 -right-20 w-64 h-64 bg-secondary-container/20 rounded-full pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <!-- Low stock -->
      <div
        class="col-span-12 bg-surface-container-highest rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 lg:gap-10"
      >
        <div class="relative w-32 h-32 shrink-0 flex items-center justify-center">
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full" />
          <div class="relative z-10 text-7xl serif font-bold text-primary leading-none">
            {{ LOW_STOCK_WIDGET.count }}
          </div>
        </div>
        <div class="flex-1 min-w-0 text-center md:text-left">
          <h3 class="text-2xl serif text-on-surface mb-2">{{ LOW_STOCK_WIDGET.title }}</h3>
          <p class="text-on-surface-variant mb-6 leading-relaxed">{{ LOW_STOCK_WIDGET.body }}</p>
          <div class="flex flex-wrap gap-3 justify-center md:justify-start">
            <span
              v-for="item in LOW_STOCK_WIDGET.items"
              :key="item.name"
              class="bg-surface px-4 py-2 rounded-full text-xs font-bold border border-outline-variant/30 flex items-center gap-2"
            >
              <span :class="['w-2 h-2 rounded-full shrink-0', item.dot]" />
              {{ item.name }}
            </span>
          </div>
        </div>
        <div class="shrink-0">
          <button
            type="button"
            class="px-8 py-4 bg-primary text-on-primary rounded-full font-bold custom-shadow hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {{ LOW_STOCK_WIDGET.cta }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
