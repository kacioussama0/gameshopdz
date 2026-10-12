<script setup lang="ts">
import astro from "~/assets/checkout-astro.png";

// Moods drawn on Astro's screen. The body is the existing waving Astro image;
// only the face is redrawn, over the original eyes.
type Mood = 'cry' | 'sad' | 'search' | 'happy' | 'idle' | 'star' | 'heart' | 'wink' | 'pixel'

withDefaults(defineProps<{
  mood?: Mood
  size?: number
  // Crop to the helmet only, for use as an icon next to headings
  head?: boolean
  // Font Awesome icon shown in a small badge, e.g. "fa-trophy"
  badge?: string
}>(), {
  mood: 'idle',
  size: 180,
  head: false,
})

// Unique per instance so several Astros on one page don't share filter ids
const uid = String(useId()).replace(/[^a-zA-Z0-9_-]/g, '')
const softId = `astro-soft-${uid}`
const glowId = `astro-glow-${uid}`
</script>

<template>
  <div
      class="astro"
      :class="[`is-${mood}`, { 'is-head': head }]"
      :style="{ width: `${size}px`, '--astro-size': `${size}px` }"
      :role="head ? undefined : 'img'"
      :aria-hidden="head ? 'true' : undefined"
      :aria-label="head ? undefined : `Astro Bot (${mood})`"
  >
    <div class="astro-clip">
    <div class="astro-canvas">
    <img :src="astro" alt="" width="300" height="400" class="astro-body" />

    <!-- Same 300×400 coordinate space as the image -->
    <svg class="astro-face" viewBox="0 0 300 400" aria-hidden="true">
      <defs>
        <filter :id="softId" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter :id="glowId" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <!-- hide the original eyes with visor-coloured paint, feathered into the screen -->
      <rect x="78" y="104" width="112" height="66" rx="26" fill="#05070f" :filter="`url(#${softId})`" />

      <g class="eyes" :filter="`url(#${glowId})`" fill="#5fd3ff" stroke="#5fd3ff" stroke-linecap="round">
        <!-- idle: round eyes that blink -->
        <template v-if="mood === 'idle'">
          <g class="blink">
            <circle cx="110" cy="136" r="15" stroke="none" />
            <circle cx="158" cy="136" r="15" stroke="none" />
          </g>
        </template>

        <!-- happy: ^ ^ -->
        <template v-else-if="mood === 'happy'">
          <path d="M96 142 Q110 120 124 142" fill="none" stroke-width="7" />
          <path d="M144 142 Q158 120 172 142" fill="none" stroke-width="7" />
        </template>

        <!-- sad: eyes with drooping lids -->
        <template v-else-if="mood === 'sad'">
          <path d="M96 140 L124 130 L124 140 A14 14 0 0 1 96 140 Z" stroke="none" />
          <path d="M144 130 L172 140 A14 14 0 0 1 144 140 Z" stroke="none" />
        </template>

        <!-- cry: squeezed shut, tears running down the screen -->
        <template v-else-if="mood === 'cry'">
          <path d="M96 130 Q110 146 124 130" fill="none" stroke-width="7" />
          <path d="M144 130 Q158 146 172 130" fill="none" stroke-width="7" />
          <g stroke="none">
            <path class="tear t1" d="M104 150 q4 7 0 11 q-4 -4 0 -11 Z" />
            <path class="tear t2" d="M164 150 q4 7 0 11 q-4 -4 0 -11 Z" />
            <path class="tear t3" d="M116 150 q4 7 0 11 q-4 -4 0 -11 Z" />
          </g>
        </template>

        <!-- star: ★ ★ -->
        <template v-else-if="mood === 'star'">
          <g class="twinkle" stroke="none">
            <path d="M110 120 l4.7 9.6 10.6 1.5 -7.7 7.5 1.8 10.5 -9.4 -5 -9.4 5 1.8 -10.5 -7.7 -7.5 10.6 -1.5z" />
            <path d="M158 120 l4.7 9.6 10.6 1.5 -7.7 7.5 1.8 10.5 -9.4 -5 -9.4 5 1.8 -10.5 -7.7 -7.5 10.6 -1.5z" />
          </g>
        </template>

        <!-- heart: ♥ ♥ -->
        <template v-else-if="mood === 'heart'">
          <g class="beat" stroke="none" fill="#ff5fa2">
            <path d="M110 150 l-13 -12.5 a7.5 7.5 0 0 1 13 -8 a7.5 7.5 0 0 1 13 8z" />
            <path d="M158 150 l-13 -12.5 a7.5 7.5 0 0 1 13 -8 a7.5 7.5 0 0 1 13 8z" />
          </g>
        </template>

        <!-- wink: ● ^ -->
        <template v-else-if="mood === 'wink'">
          <circle cx="110" cy="136" r="15" stroke="none" />
          <path d="M144 140 Q158 122 172 140" fill="none" stroke-width="7" />
        </template>

        <!-- pixel: blocky "digital" eyes that flicker -->
        <template v-else-if="mood === 'pixel'">
          <g class="flicker" stroke="none">
            <rect x="98" y="124" width="10" height="10" />
            <rect x="110" y="124" width="10" height="10" />
            <rect x="98" y="136" width="10" height="10" />
            <rect x="110" y="136" width="10" height="10" opacity=".55" />
            <rect x="146" y="124" width="10" height="10" />
            <rect x="158" y="124" width="10" height="10" opacity=".55" />
            <rect x="146" y="136" width="10" height="10" />
            <rect x="158" y="136" width="10" height="10" />
          </g>
        </template>

        <!-- search: eyes glancing from side to side -->
        <template v-else-if="mood === 'search'">
          <g class="look">
            <circle cx="104" cy="136" r="13" stroke="none" />
            <circle cx="152" cy="136" r="13" stroke="none" />
          </g>
        </template>
      </g>
    </svg>
    </div>
    </div>

    <span v-if="mood === 'search' && !head" class="bubble" aria-hidden="true">?</span>

    <span v-if="badge" class="badge-icon" aria-hidden="true"><i class="fa-solid" :class="badge"></i></span>
  </div>
</template>

<style scoped>
.astro {
  position: relative;
  display: inline-block;
  aspect-ratio: 300 / 400;
  animation: float 3.2s ease-in-out infinite;
}

.astro-clip,
.astro-canvas {
  position: absolute;
  inset: 0;
}

/* Head only: show the 195×205 helmet area (x 40–235) of the 300×400 artwork */
.astro.is-head {
  aspect-ratio: 195 / 205;
  vertical-align: middle;
  animation: none;
}

/* only the artwork is cropped, so the badge can overhang */
.is-head .astro-clip {
  overflow: hidden;
}

.is-head .astro-canvas {
  inset: auto;
  top: 0;
  left: -20.51%;
  width: 153.85%;
  aspect-ratio: 300 / 400;
}

.astro-body,
.astro-face {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* The artwork is not mirrored in Arabic */
.astro-face {
  direction: ltr;
}

.blink {
  transform-origin: 134px 136px;
  animation: blink 4s infinite;
}

.look {
  animation: look 2.4s ease-in-out infinite;
}

.flicker {
  animation: flicker 2.2s steps(1) infinite;
}

.badge-icon {
  position: absolute;
  bottom: -10%;
  inset-inline-end: -18%;
  display: grid;
  place-items: center;
  width: 38%;
  aspect-ratio: 1;
  border: 2px solid #fff;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
  font-size: max(8px, calc(var(--astro-size) * .18));
  box-shadow: 0 3px 8px rgba(15, 30, 74, .25);
}

.twinkle {
  transform-origin: 134px 136px;
  animation: twinkle 1.8s ease-in-out infinite;
}

.beat {
  transform-origin: 134px 140px;
  animation: beat 1.2s ease-in-out infinite;
}

.tear {
  opacity: 0;
  animation: tear 1.6s ease-in infinite;
}

.t2 { animation-delay: .5s; }
.t3 { animation-delay: 1s; }

.is-cry {
  animation: sob 1.6s ease-in-out infinite;
}

.bubble {
  position: absolute;
  top: 2%;
  inset-inline-end: -6%;
  display: grid;
  place-items: center;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  color: #fff;
  font-size: clamp(16px, 2.2vw, 28px);
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(106, 61, 240, .35);
  animation: pop 2.4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes sob {
  0%, 100% { transform: translateY(0) rotate(0); }
  25% { transform: translateY(2px) rotate(-1.5deg); }
  75% { transform: translateY(2px) rotate(1.5deg); }
}

@keyframes blink {
  0%, 92%, 100% { transform: scaleY(1); }
  95% { transform: scaleY(.1); }
}

@keyframes look {
  0%, 15% { transform: translateX(0); }
  35%, 55% { transform: translateX(12px); }
  75%, 100% { transform: translateX(0); }
}

@keyframes tear {
  0% { opacity: 0; transform: translateY(0); }
  15% { opacity: 1; }
  100% { opacity: 0; transform: translateY(28px); }
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  48% { opacity: .65; }
  52% { opacity: 1; }
  80% { opacity: .85; }
}

@keyframes twinkle {
  0%, 100% { transform: scale(1) rotate(0); }
  50% { transform: scale(1.12) rotate(8deg); }
}

@keyframes beat {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.15); }
  30% { transform: scale(1); }
  45% { transform: scale(1.1); }
}

@keyframes pop {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}

@media (prefers-reduced-motion: reduce) {
  .astro, .blink, .look, .tear, .bubble, .is-cry, .twinkle, .beat, .flicker {
    animation: none;
  }
  .tear { opacity: 1; }
}
</style>
