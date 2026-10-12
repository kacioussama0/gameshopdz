<template>
  <div class="product-card-skeleton placeholder-glow" aria-hidden="true">
    <span class="placeholder skeleton-media"></span>

    <div class="skeleton-body">
      <span class="placeholder col-12"></span>
      <span class="placeholder col-8"></span>
      <span class="placeholder col-5 mt-2"></span>
      <span class="placeholder skeleton-btn"></span>
    </div>
  </div>
</template>

<style scoped>
/* Mirrors ProductCard's layout so the grid doesn't jump once products load */
.product-card-skeleton {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(10, 99, 216, 0.12);
  border-radius: 16px;
}

.skeleton-media {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
}

.skeleton-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px 14px;
}

.skeleton-btn {
  height: 38px;
  margin-top: 6px;
  border-radius: 999px;
}
</style>
