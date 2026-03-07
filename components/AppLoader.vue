<script setup lang="ts">
</script>
<template>
  <div class="app-loader">
    <div class="loader-inner">
      <img src="../assets/images/logo-white.svg" alt="Gameshop Logo" class="logo" />
      <div class="pixel-loader" aria-label="Loading">
        <span v-for="n in 8" :key="n" class="pixel"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background:
      radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 35%),
      linear-gradient(180deg, #0b1020 0%, #070b16 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  text-align: center;
}

.logo {
  width: 180px;
  max-width: 70vw;
  image-rendering: crisp-edges;
  animation: logoFloat 1.8s ease-in-out infinite;
  filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.08));
}

.pixel-loader {
  display: grid;
  grid-template-columns: repeat(8, 14px);
  gap: 8px;
  justify-content: center;
}

.pixel {
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(255,255,255,0.18);
  animation: pixelWave 1.1s infinite ease-in-out;
}

.pixel:nth-child(1) { animation-delay: 0s; }
.pixel:nth-child(2) { animation-delay: 0.08s; }
.pixel:nth-child(3) { animation-delay: 0.16s; }
.pixel:nth-child(4) { animation-delay: 0.24s; }
.pixel:nth-child(5) { animation-delay: 0.32s; }
.pixel:nth-child(6) { animation-delay: 0.40s; }
.pixel:nth-child(7) { animation-delay: 0.48s; }
.pixel:nth-child(8) { animation-delay: 0.56s; }

@keyframes pixelWave {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.35;
  }
  50% {
    transform: translateY(-10px) scale(1.15);
    opacity: 1;
  }
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-6px);
    opacity: 1;
  }
}
</style>