<script setup lang="ts">
// Google reviews, rendered by a Jotform embed. The third-party script is heavy,
// so it's loaded once, and only when this section is about to scroll into view.
const WIDGET_ID = '019ccb4c526477e79d3bdd4b5afa7c84f074'
const SCRIPT_ID = 'jotform-reviews-script'

const root = ref<HTMLElement | null>(null)
const loaded = ref(false)
let observer: IntersectionObserver | null = null

const loadScript = () => {
  if (document.getElementById(SCRIPT_ID)) {
    loaded.value = true
    return
  }
  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.src = `https://www.jotform.com/website-widgets/embed/${WIDGET_ID}`
  script.async = true
  script.setAttribute('data-jf-widget', 'reviews')
  script.onload = () => {
    // give the widget a moment to draw before removing the placeholders
    setTimeout(() => (loaded.value = true), 600)
  }
  document.body.appendChild(script)
}

onMounted(() => {
  if (!('IntersectionObserver' in window) || !root.value) return loadScript()
  observer = new IntersectionObserver((entries) => {
    if (entries.some(e => e.isIntersecting)) {
      observer?.disconnect()
      loadScript()
    }
  }, { rootMargin: '400px 0px' })
  observer.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section ref="root" class="reviews-section" aria-labelledby="reviews-title">
    <div class="container home-wide">
      <div class="reviews-head">
        <span class="google-badge" aria-hidden="true">
          <i class="fa-brands fa-google"></i>
        </span>
        <div>
          <h2 id="reviews-title" class="reviews-title">{{ $t('reviews.title') }}</h2>
          <p class="reviews-sub">
            <span class="stars" aria-hidden="true"><i v-for="n in 5" :key="n" class="fa-solid fa-star"></i></span>
            {{ $t('reviews.subtitle') }}
          </p>
        </div>
      </div>

      <div class="reviews-frame">
        <!-- placeholders while the widget loads -->
        <div v-if="!loaded" class="reviews-skeleton placeholder-glow" aria-hidden="true">
          <div v-for="n in 4" :key="n" class="skeleton-card">
            <span class="placeholder col-6 mb-3"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-10"></span>
            <span class="placeholder col-8"></span>
            <span class="placeholder col-5 mt-3"></span>
          </div>
        </div>

        <div :id="`JFWebsiteWidget-${WIDGET_ID}`" class="reviews-widget" :class="{ ready: loaded }"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  padding: 56px 0;
  background: #fff;
}

.reviews-head {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.google-badge {
  flex: none;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #fff;
  border: 1px solid #eef1f7;
  box-shadow: 0 4px 12px rgba(15, 30, 74, .08);
  color: #4285f4;
  font-size: 22px;
}

.reviews-title {
  margin: 0;
  font-size: clamp(22px, 2.6vw, 28px);
}

.reviews-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0 0;
  color: #6b7390;
  font-size: 14px;
}

.stars {
  display: inline-flex;
  gap: 2px;
  color: #fbbc04;
  font-size: 13px;
}

.reviews-frame {
  position: relative;
  min-height: 260px;
}

/* sits over the widget's area so nothing jumps when the reviews appear */
.reviews-skeleton {
  position: absolute;
  inset: 0 0 auto;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.skeleton-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border-radius: 16px;
  background: #f6f7fb;
}

.skeleton-card .placeholder {
  border-radius: 6px;
}

.reviews-widget {
  opacity: 0;
  transition: opacity .4s ease;
}

.reviews-widget.ready {
  opacity: 1;
}

/* The widget prints its own French-only heading; ours (translated) replaces it */
.reviews-widget :deep(.jf-reviews-title-bar) {
  display: none !important;
}

@media (max-width: 991.98px) {
  .reviews-skeleton {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .reviews-section {
    padding: 36px 0;
  }

  .reviews-skeleton {
    grid-template-columns: 1fr;
  }

  .reviews-skeleton .skeleton-card:nth-child(n+2) {
    display: none;
  }
}
</style>
