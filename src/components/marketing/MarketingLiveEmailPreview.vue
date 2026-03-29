<script setup>
import { ref } from 'vue'
import { MARKETING_LIVE_EMAIL, TALK_TO_US_TOOLTIP } from '@/mocks/marketing'

defineProps({
  title: { type: String, required: true },
})

const focus = ref('desktop')
</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <h3 class="serif text-2xl text-on-surface font-bold">{{ title }}</h3>
      <div class="flex gap-2 justify-end">
        <button
          type="button"
          :class="[
            'bg-surface-container-high p-2 rounded-full transition-colors cursor-not-allowed group relative',
            focus === 'desktop' ? 'text-primary' : 'text-on-surface-variant hover:text-primary',
          ]"
          @click="focus = 'desktop'"
        >
          <span class="material-symbols-outlined">desktop_windows</span>
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10"
          >{{ TALK_TO_US_TOOLTIP }}</span>
        </button>
        <button
          type="button"
          :class="[
            'bg-surface-container-high p-2 rounded-full transition-colors cursor-not-allowed group relative',
            focus === 'mobile' ? 'text-primary' : 'text-on-surface-variant hover:text-primary',
          ]"
          @click="focus = 'mobile'"
        >
          <span class="material-symbols-outlined">smartphone</span>
          <span
            class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-inverse-surface text-inverse-on-surface text-[10px] py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10"
          >{{ TALK_TO_US_TOOLTIP }}</span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-8 items-start">
      <!-- Desktop -->
      <div
        class="col-span-12 transition-opacity duration-300"
        :class="[
          focus === 'mobile' ? 'lg:opacity-40' : 'lg:opacity-100',
          'lg:col-span-8',
        ]"
      >
        <div
          class="bg-surface-container-high rounded-xl overflow-hidden shadow-inner border border-outline-variant/20 p-6 sm:p-8"
        >
          <div
            class="bg-surface-container-lowest rounded-lg shadow-2xl max-w-2xl mx-auto h-[min(600px,70vh)] overflow-y-auto custom-scrollbar"
          >
            <div class="p-8 sm:p-12 text-center">
              <span class="text-primary font-serif italic text-lg mb-2 block">{{
                MARKETING_LIVE_EMAIL.brandLine
              }}</span>
              <h1 class="serif text-3xl sm:text-4xl text-on-surface font-bold mb-6 leading-tight">
                {{ MARKETING_LIVE_EMAIL.headlineDesktop }}
              </h1>
              <img
                :src="MARKETING_LIVE_EMAIL.image"
                alt=""
                class="w-full h-56 sm:h-64 object-cover rounded-lg mb-8"
              />
              <p
                class="font-body text-on-surface-variant leading-relaxed mb-8 max-w-md mx-auto text-sm sm:text-base"
              >
                {{ MARKETING_LIVE_EMAIL.bodyDesktop }}
              </p>
              <div
                class="bg-secondary text-on-secondary py-4 px-8 sm:px-10 rounded-full inline-block font-bold uppercase tracking-widest text-xs"
              >
                {{ MARKETING_LIVE_EMAIL.ctaDesktop }}
              </div>
              <div class="mt-12 pt-12 border-t border-outline-variant/30 flex justify-center gap-8 opacity-40">
                <div class="w-12 h-1 border-t-2 border-primary" />
                <div class="w-12 h-1 border-t-2 border-primary" />
                <div class="w-12 h-1 border-t-2 border-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile device -->
      <div
        class="col-span-12 transition-opacity duration-300"
        :class="[
          focus === 'desktop' ? 'lg:opacity-40' : 'lg:opacity-100',
          'lg:col-span-4',
        ]"
      >
        <div
          class="bg-surface-container-high rounded-xl p-4 sm:p-6 flex justify-center border border-outline-variant/20"
        >
          <div
            class="w-[280px] h-[min(580px,70vh)] bg-inverse-surface rounded-[40px] p-3 border-4 border-inverse-surface shadow-2xl relative shrink-0"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-inverse-surface rounded-b-2xl z-10"
              aria-hidden="true"
            />
            <div
              class="bg-surface-container-lowest h-full rounded-[30px] overflow-hidden overflow-y-auto custom-scrollbar"
            >
              <div class="p-6 text-center">
                <h2 class="serif text-xl text-on-surface font-bold mb-4 leading-snug">
                  {{ MARKETING_LIVE_EMAIL.headlineMobile }}
                </h2>
                <img
                  :src="MARKETING_LIVE_EMAIL.imageMobile"
                  alt=""
                  class="w-full h-40 object-cover rounded-lg mb-6"
                />
                <p class="font-body text-xs text-on-surface-variant leading-relaxed mb-6">
                  {{ MARKETING_LIVE_EMAIL.bodyMobile }}
                </p>
                <div
                  class="bg-secondary text-on-secondary py-2 px-6 rounded-full inline-block font-bold uppercase tracking-widest text-[10px]"
                >
                  {{ MARKETING_LIVE_EMAIL.ctaMobile }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
