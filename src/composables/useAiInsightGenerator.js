/**
 * useAiInsightGenerator
 *
 * Simulates an AI model running in the background to produce a new insight.
 * The generation moves through visible phases before revealing the result,
 * giving the UI enough time to communicate that work is happening.
 *
 * Usage:
 *   const { isGenerating, phaseLabel, generatedInsights, generate } = useAiInsightGenerator()
 */

import { ref, readonly } from 'vue'
import { trackEvent } from '@/analytics/trackEvent'
import { ANALYTICS_EVENTS } from '@/analytics/eventNames'
import { AI_INSIGHT_POOL } from '@/mocks/overview'

// Each phase label is shown for PHASE_DURATION ms before advancing.
const PHASES = [
  'Analizando patrones de visita…',
  'Cruzando hábitos de miembros…',
  'Evaluando señales de temporada…',
  'Generando recomendación…',
]
const PHASE_DURATION = 1100 // ms per phase
const REVEAL_DELAY   = 500  // ms after the last phase before the card appears

export function useAiInsightGenerator() {
  const isGenerating      = ref(false)
  const phaseIndex        = ref(0)
  const phaseLabel        = ref(PHASES[0])
  const generatedInsights = ref([])

  // Pool cursor — cycles so repeated presses always return something new
  let poolCursor = Math.floor(Math.random() * AI_INSIGHT_POOL.length)

  function generate() {
    if (isGenerating.value) return

    isGenerating.value = true
    phaseIndex.value   = 0
    phaseLabel.value   = PHASES[0]

    // Pick the next insight before starting so the delay feels deterministic
    const poolEntry = AI_INSIGHT_POOL[poolCursor % AI_INSIGHT_POOL.length]
    const incoming = {
      ...poolEntry,
      // Give each generated card a unique key so TransitionGroup handles it correctly
      id: `${poolEntry.id}-${Date.now()}`,
    }
    poolCursor++

    let phase = 0

    function advance() {
      phase++
      if (phase < PHASES.length) {
        phaseIndex.value = phase
        phaseLabel.value = PHASES[phase]
        setTimeout(advance, PHASE_DURATION)
      } else {
        // All phases done — pause briefly then reveal
        setTimeout(() => {
          generatedInsights.value.unshift(incoming)
          isGenerating.value = false
          trackEvent(ANALYTICS_EVENTS.AI_INSIGHT_GENERATED, {
            insight_template_id: poolEntry.id,
            insight_accent: poolEntry.accent,
          })
        }, REVEAL_DELAY)
      }
    }

    setTimeout(advance, PHASE_DURATION)
  }

  return {
    isGenerating: readonly(isGenerating),
    phaseLabel:   readonly(phaseLabel),
    generatedInsights,
    generate,
  }
}
