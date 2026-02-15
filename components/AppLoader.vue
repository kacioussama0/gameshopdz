<template>
  <div class="loader-wrapper">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loader-wrapper {
  position: fixed;
  inset: 0;
  background: rgba(255,255,255,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #eee;
  border-top: 4px solid #00c37a;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
