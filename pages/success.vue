<script setup lang="ts">

import Header3 from "~/components/Header3.vue";

const route = useRoute();
const orderId = computed(() => String(route.query.orderId || '').replace(/[^\w-]/g, ''))

const { t } = useI18n()

useHead({
  title: () => t('seo.success'),
  meta: [
    { name: 'description', content: () => t('seo.description') },
    { name: 'robots', content: 'noindex' },
  ],
})

const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

// Recap saved by the checkout just before the cart was emptied
const order = ref<any>(null)

onMounted(() => {
  try {
    const saved = JSON.parse(sessionStorage.getItem('lastOrder') || 'null')
    if (saved && String(saved.id) === orderId.value) order.value = saved
  } catch {}
})

const copied = ref(false)
const copyOrderId = async () => {
  try {
    await navigator.clipboard.writeText(orderId.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {}
}

const whatsappUrl = computed(() =>
    `https://wa.me/213550779973?text=${encodeURIComponent(t('success.whatsappMessage', { id: orderId.value }))}`
)

const steps = [
  { icon: 'iconly-Curved-Call', title: 'success.step1Title', text: 'success.contactSoon' },
  { icon: 'iconly-Curved-Bag', title: 'success.step2Title', text: 'success.prepared' },
  { icon: 'fa-solid fa-truck-fast', title: 'success.step3Title', text: 'success.codInfo' },
]
</script>

<template>
  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">
    <div class="content-inner success-page">
      <div class="container">

        <!-- Celebration -->
        <section class="hero-card">
          <div class="confetti" aria-hidden="true">
            <i v-for="n in 18" :key="n" :style="{ '--i': n }"></i>
          </div>

          <div class="astro-wrap">
            <AstroBot mood="happy" :size="130" />
            <span class="check-badge" aria-hidden="true"><i class="fa-solid fa-check"></i></span>
          </div>

          <p class="eyebrow">{{ $t('success.heading') }}</p>
          <h1>{{ $t('success.thanks') }}</h1>
          <p class="lead">{{ $t('success.received') }}</p>

          <button v-if="orderId" type="button" class="order-pill" :aria-label="$t('success.copyOrder')" @click="copyOrderId">
            <span>{{ $t('payment.orderNo') }}</span>
            <strong dir="ltr">#{{ orderId }}</strong>
            <i :class="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'"></i>
          </button>
          <span class="copied" role="status">{{ copied ? $t('success.copied') : '' }}</span>
        </section>

        <!-- Stay reachable -->
        <section class="callout" role="note">
          <span class="callout-icon"><i class="fa-solid fa-phone-volume"></i></span>
          <div>
            <h2>{{ $t('success.stayReachableTitle') }}</h2>
            <p>{{ $t('success.unreachable') }}</p>
          </div>
        </section>

        <div class="success-grid">

          <!-- What happens next -->
          <section class="panel" :class="{ 'span-all': !order }">
            <h2 class="panel-title">{{ $t('success.nextTitle') }}</h2>
            <ol class="timeline">
              <li v-for="(step, index) in steps" :key="step.title" :class="{ current: index === 0 }">
                <span class="dot"><i :class="step.icon"></i></span>
                <div>
                  <h3>{{ $t(step.title) }}</h3>
                  <p>{{ $t(step.text) }}</p>
                </div>
              </li>
            </ol>
          </section>

          <!-- Order recap (only when we have it) -->
          <section class="panel" v-if="order">
            <h2 class="panel-title">{{ $t('checkout.yourOrder') }}</h2>

            <ul class="recap-items">
              <li v-for="(item, index) in order.items" :key="index">
                <span class="thumb">
                  <img :src="item.image" :alt="item.name" width="52" height="52" />
                  <span class="qty">{{ item.quantity }}</span>
                </span>
                <span class="name">
                  {{ item.name }}
                  <small v-if="item.options?.length">{{ item.options.join(' · ') }}</small>
                </span>
                <span class="price">{{ formatPrice(Number(item.price) * item.quantity) }}</span>
              </li>
            </ul>

            <div class="recap-row">
              <span>{{ $t('common.subtotal') }}</span>
              <span>{{ formatPrice(order.subtotal) }}</span>
            </div>
            <div class="recap-row">
              <span>{{ order.shippingLabel ? $t(order.shippingLabel) : $t('checkout.shippingMethod') }}</span>
              <span>{{ Number(order.shipping) ? formatPrice(order.shipping) : $t('checkout.free') }}</span>
            </div>
            <div class="recap-total">
              <span>{{ $t('success.toPayOnDelivery') }}</span>
              <strong>{{ formatPrice(order.total) }}</strong>
            </div>
            <p v-if="order.commune" class="recap-address">
              <i class="iconly-Curved-Location"></i>
              {{ order.commune }}<template v-if="order.wilaya">, {{ order.wilaya }}</template>
            </p>
          </section>

          <!-- Help -->
          <section class="panel help-panel">
            <h2 class="panel-title">{{ $t('success.help') }}</h2>
            <p class="help-text">{{ $t('success.helpText') }}</p>
            <div class="help-actions">
              <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-success">
                <i class="fa-brands fa-whatsapp"></i> {{ $t('success.whatsapp') }}
              </a>
              <a href="tel:+213550779973" class="btn btn-outline-primary">
                <i class="fa-solid fa-phone"></i> <span dir="ltr">0550 77 99 73</span>
              </a>
            </div>
          </section>
        </div>

        <div class="final-actions">
          <NuxtLink to="/shop" class="btn btn-primary btn-lg">
            <i class="iconly-Curved-Game"></i> {{ $t('common.backShop') }}
          </NuxtLink>
          <NuxtLink to="/" class="btn btn-outline-primary btn-lg">{{ $t('common.backHome') }}</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.success-page .container {
  max-width: 1000px;
}

/* ---------- celebration ---------- */
.hero-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 28px;
  border-radius: 24px;
  background:
      radial-gradient(circle at 50% 0%, rgba(106, 61, 240, .12), transparent 60%),
      #fff;
  border: 1px solid #eef1f7;
  text-align: center;
}

.astro-wrap {
  position: relative;
  margin-bottom: 8px;
}

.check-badge {
  position: absolute;
  bottom: 10px;
  inset-inline-end: -6px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 4px solid #fff;
  border-radius: 50%;
  background: #198754;
  color: #fff;
  font-size: 18px;
  animation: pop-in .5s .3s cubic-bezier(.2, 1.4, .4, 1) both;
}

.eyebrow {
  margin: 0;
  color: var(--gs-primary, #0A63D8);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.hero-card h1 {
  margin: 6px 0 6px;
  font-size: clamp(26px, 4vw, 38px);
}

.lead {
  margin: 0 0 18px;
  color: #6b7390;
  font-size: 16px;
}

.order-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border: 1.5px dashed #c9cfe0;
  border-radius: 999px;
  background: #f6f7fb;
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
}

.order-pill strong {
  font-size: 17px;
  letter-spacing: .03em;
}

.order-pill i {
  color: var(--gs-primary, #0A63D8);
}

.order-pill:hover {
  border-color: var(--gs-primary, #0A63D8);
}

.copied {
  min-height: 20px;
  margin-top: 6px;
  color: #198754;
  font-size: 12.5px;
  font-weight: 600;
}

/* falling confetti, brand colours */
.confetti i {
  position: absolute;
  top: -12px;
  left: calc(var(--i) * 5.5%);
  width: 8px;
  height: 14px;
  border-radius: 2px;
  background: #6a3df0;
  opacity: 0;
  animation: fall 2.6s calc(var(--i) * .08s) ease-in forwards;
}

.confetti i:nth-child(3n) { background: #0A63D8; }
.confetti i:nth-child(3n+1) { background: #ffbf3f; }
.confetti i:nth-child(4n) { background: #25d366; width: 6px; height: 6px; border-radius: 50%; }

@keyframes fall {
  0% { opacity: 1; transform: translateY(0) rotate(0); }
  100% { opacity: 0; transform: translateY(320px) rotate(540deg); }
}

@keyframes pop-in {
  from { transform: scale(0); }
  to { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .confetti { display: none; }
  .check-badge { animation: none; }
}

/* ---------- callout ---------- */
.callout {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding: 16px 20px;
  border-radius: 18px;
  background: #fff8e6;
  border: 1px solid #ffe3a3;
}

.callout-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #ffbf3f;
  color: #3d2600;
  font-size: 20px;
}

.callout h2 {
  margin: 0 0 2px;
  font-size: 16px;
}

.callout p {
  margin: 0;
  color: #7a5b00;
  font-size: 14px;
}

/* ---------- panels ---------- */
.success-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

.panel {
  padding: 22px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eef1f7;
}

.panel.span-all,
.help-panel {
  grid-column: 1 / -1;
}

.panel-title {
  margin-bottom: 16px;
  font-size: 18px;
}

/* timeline */
.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline li {
  position: relative;
  display: flex;
  gap: 14px;
  padding-bottom: 18px;
}

.timeline li:last-child {
  padding-bottom: 0;
}

/* connecting line */
.timeline li:not(:last-child)::before {
  content: "";
  position: absolute;
  top: 40px;
  bottom: 4px;
  inset-inline-start: 19px;
  width: 2px;
  background: #e1e5ef;
}

.dot {
  flex: none;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eef1f7;
  color: #6b7390;
  font-size: 17px;
}

.timeline li.current .dot {
  background: var(--gs-gradient);
  color: #fff;
  box-shadow: 0 0 0 5px rgba(106, 61, 240, .15);
}

.timeline h3 {
  margin: 8px 0 2px;
  font-size: 15px;
}

.timeline p {
  margin: 0;
  color: #6b7390;
  font-size: 13.5px;
  line-height: 1.5;
}

/* recap */
.recap-items {
  margin: 0 0 12px;
  padding: 0 0 12px;
  list-style: none;
  border-bottom: 1px solid #eef1f7;
}

.recap-items li {
  display: grid;
  grid-template-columns: 52px 1fr auto;
  align-items: center;
  gap: 12px;
}

.recap-items li + li {
  margin-top: 10px;
}

.thumb {
  position: relative;
}

.thumb img {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: 10px;
  border: 1px solid #eef1f7;
  background: #fff;
}

.qty {
  position: absolute;
  top: -6px;
  inset-inline-end: -6px;
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 999px;
  background: var(--gs-ink, #0F1E4A);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
}

.name {
  display: flex;
  flex-direction: column;
  min-width: 0;
  font-size: 13.5px;
  font-weight: 600;
  line-height: 1.35;
}

.name small {
  color: #6b7390;
  font-weight: 500;
}

.price {
  font-weight: 700;
  white-space: nowrap;
}

.recap-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 4px 0;
  font-size: 14px;
}

.recap-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px dashed #dfe3ee;
}

.recap-total strong {
  font-size: 22px;
}

.recap-address {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 0;
  color: #6b7390;
  font-size: 13px;
}

/* help */
.help-text {
  margin: -8px 0 14px;
  color: #6b7390;
  font-size: 14px;
}

.help-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.final-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}

@media (max-width: 767.98px) {
  .success-grid {
    grid-template-columns: 1fr;
  }

  .hero-card,
  .panel {
    padding: 18px;
  }

  .help-actions .btn,
  .final-actions .btn {
    flex: 1 1 100%;
  }
}
</style>
