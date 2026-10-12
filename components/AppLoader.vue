<template>
  <div class="app-loader" role="status" aria-live="polite">
    <div class="glow" aria-hidden="true"></div>

    <div class="loader-inner">
      <img src="../assets/images/logo-white.svg" alt="Gameshop" class="logo" width="170" height="51" />

      <div class="astro-stage" aria-hidden="true">
        <div class="astro-jump">
          <AstroBot mood="idle" :size="110" />
        </div>
        <span class="shadow"></span>
      </div>

      <div class="progress" aria-hidden="true">
        <span class="bar"></span>
      </div>

      <p class="caption">
        {{ $t('loader.ready') }}<span class="dots" aria-hidden="true"><i>.</i><i>.</i><i>.</i></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: linear-gradient(160deg, #0f2f6d 0%, #164094 45%, #6a3df0 100%);
  color: #fff;
}

/* soft moving light behind Astro */
.glow {
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(143, 107, 255, .45), transparent 65%);
  filter: blur(10px);
  animation: glow 4s ease-in-out infinite;
}

.loader-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
}

.logo {
  width: 170px;
  max-width: 60vw;
  height: auto;
}

/* Astro hops, its shadow squashes on landing */
.astro-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* room for the hop so the antenna never touches the logo */
  margin-top: 30px;
}

.astro-jump {
  animation: hop 1.1s cubic-bezier(.45, 0, .55, 1) infinite;
}

.astro-jump :deep(.astro) {
  animation: none;
}

.shadow {
  width: 70px;
  height: 10px;
  margin-top: -4px;
  border-radius: 50%;
  background: rgba(8, 18, 60, .45);
  animation: shadow 1.1s cubic-bezier(.45, 0, .55, 1) infinite;
}

.progress {
  width: 200px;
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, .18);
}

.bar {
  display: block;
  width: 40%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #8fd8ff, #fff, #c9b6ff);
  animation: slide 1.2s ease-in-out infinite;
}

.caption {
  margin: 0;
  color: rgba(255, 255, 255, .85);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .02em;
}

.dots i {
  font-style: normal;
  animation: dot 1.2s infinite;
}

.dots i:nth-child(2) { animation-delay: .2s; }
.dots i:nth-child(3) { animation-delay: .4s; }

@keyframes hop {
  0%, 100% { transform: translateY(0) scale(1, 1); }
  10% { transform: translateY(0) scale(1.05, .95); }
  50% { transform: translateY(-26px) scale(.98, 1.02); }
  90% { transform: translateY(0) scale(1.04, .96); }
}

@keyframes shadow {
  0%, 100% { transform: scale(1); opacity: .9; }
  50% { transform: scale(.6); opacity: .45; }
}

@keyframes slide {
  0% { transform: translateX(-110%); }
  100% { transform: translateX(260%); }
}

@keyframes dot {
  0%, 60%, 100% { opacity: .2; }
  30% { opacity: 1; }
}

@keyframes glow {
  0%, 100% { transform: scale(1); opacity: .8; }
  50% { transform: scale(1.12); opacity: 1; }
}

/* The bar always travels with the reading direction */
:global([dir="rtl"] .app-loader .bar) {
  animation-name: slide-rtl;
}

@keyframes slide-rtl {
  0% { transform: translateX(110%); }
  100% { transform: translateX(-260%); }
}

@media (prefers-reduced-motion: reduce) {
  .glow, .astro-jump, .shadow, .bar, .dots i {
    animation: none;
  }

  .bar {
    width: 100%;
    opacity: .6;
  }
}
</style>
