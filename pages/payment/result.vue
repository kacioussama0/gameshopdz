<script setup lang="ts">
import Header3 from "~/components/Header3.vue";

const route = useRoute()
const { t } = useI18n()

const clean = (value: unknown) => String(value ?? '').replace(/[^\w-]/g, '')

const orderId = computed(() => clean(route.query.order_id))
const invoiceId = computed(() => clean(route.query.invoice_id))

// The gateway reports failures through ?error=…; treat "0"/"false"/empty as success
const isFailed = computed(() => {
  const value = String(route.query.error ?? '').trim().toLowerCase()
  return value !== '' && value !== '0' && value !== 'false'
})

// Gateway message is shown as plain text (never as HTML)
const reason = computed(() => {
  const value = String(route.query.message ?? '').trim()
  return value && value !== '0' ? value.slice(0, 200) : ''
})

useHead({
  title: () => (isFailed.value ? t('payment.failed') : t('payment.confirmed')),
  meta: [{ name: 'robots', content: 'noindex' }],
})

const formatPrice = (value: number | string) =>
    `${Number(value).toLocaleString('fr-FR')} ${t('common.currency')}`

// Saved by the product page right before leaving for the payment page
const attempt = ref<any>(null)

onMounted(() => {
  try {
    const saved = JSON.parse(sessionStorage.getItem('lastEpay') || 'null')
    if (saved && (!orderId.value || String(saved.orderId) === orderId.value)) attempt.value = saved
  } catch {}
})

const retryLink = computed(() => attempt.value?.slug ? `/shop/product/${attempt.value.slug}` : '/shop')

const copied = ref(false)
const copyOrderId = async () => {
  try {
    await navigator.clipboard.writeText(orderId.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {}
}

const SUPPORT_PHONE = '213551007798'

const whatsappUrl = computed(() => {
  const key = isFailed.value ? 'payment.whatsappFailed' : 'payment.whatsappSuccess'
  return `https://wa.me/${SUPPORT_PHONE}?text=${encodeURIComponent(t(key, { id: orderId.value || '-' }))}`
})

const steps = computed(() => [
  { icon: 'fa-solid fa-check', title: 'payment.tl1Title', text: 'payment.tl1Text', state: 'done' },
  { icon: 'fa-brands fa-whatsapp', title: 'payment.tl2Title', text: 'payment.whatsappIntroShort', state: 'current' },
  {
    icon: attempt.value?.isPrepay ? 'fa-solid fa-truck-fast' : 'fa-solid fa-key',
    title: attempt.value?.isPrepay ? 'payment.tl3TitlePrepay' : 'payment.tl3Title',
    text: attempt.value?.isPrepay ? 'payment.tl3TextPrepay' : 'payment.tl3Text',
    state: '',
  },
])
</script>

<template>
  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">
    <div class="content-inner result-page">
      <div class="container">

        <!-- Status -->
        <section class="hero-card" :class="isFailed ? 'is-failed' : 'is-success'">
          <div v-if="!isFailed" class="confetti" aria-hidden="true">
            <i v-for="n in 18" :key="n" :style="{ '--i': n }"></i>
          </div>

          <div class="astro-wrap">
            <AstroBot :mood="isFailed ? 'cry' : 'happy'" :size="130" />
            <span class="status-badge" aria-hidden="true">
              <i :class="isFailed ? 'fa-solid fa-xmark' : 'fa-solid fa-check'"></i>
            </span>
          </div>

          <p class="eyebrow">{{ isFailed ? $t('payment.failed') : $t('payment.confirmed') }}</p>
          <h1>{{ isFailed ? $t('payment.notConfirmed') : $t('payment.thanksTitle') }}</h1>
          <p class="lead">{{ isFailed ? $t('payment.notFinalized') : $t('payment.preparing') }}</p>

          <div class="refs">
            <button v-if="orderId" type="button" class="ref-pill" :aria-label="$t('success.copyOrder')" @click="copyOrderId">
              <span>{{ $t('payment.orderNo') }}</span>
              <strong dir="ltr">#{{ orderId }}</strong>
              <i :class="copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'"></i>
            </button>
            <span v-if="invoiceId" class="ref-small">{{ $t('payment.invoiceNo') }} <span dir="ltr">#{{ invoiceId }}</span></span>
          </div>
          <span class="copied" role="status">{{ copied ? $t('success.copied') : '' }}</span>

          <div v-if="isFailed && reason" class="reason">
            <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
            <span><b>{{ $t('payment.reasonLabel') }}</b> {{ reason }}</span>
          </div>
        </section>

        <!-- ===== Success ===== -->
        <template v-if="!isFailed">
          <section class="callout" role="note">
            <span class="callout-icon"><i class="fa-brands fa-whatsapp"></i></span>
            <div>
              <h2>{{ $t('success.stayReachableTitle') }}</h2>
              <p>{{ $t('payment.stayReachableText') }}</p>
            </div>
          </section>

          <div class="result-grid">
            <section class="panel" :class="{ 'span-all': !attempt }">
              <h2 class="panel-title">{{ $t('success.nextTitle') }}</h2>
              <ol class="timeline">
                <li v-for="step in steps" :key="step.title" :class="step.state">
                  <span class="dot"><i :class="step.icon"></i></span>
                  <div>
                    <h3>{{ $t(step.title) }}</h3>
                    <p>{{ $t(step.text) }}</p>
                  </div>
                </li>
              </ol>
            </section>

            <section class="panel" v-if="attempt">
              <h2 class="panel-title">{{ $t('payment.recapTitle') }}</h2>
              <div class="recap-product">
                <img v-if="attempt.image" :src="attempt.image" :alt="attempt.name" width="64" height="64" />
                <span>
                  <b>{{ attempt.name }}</b>
                  <small v-if="attempt.option">{{ attempt.option }}</small>
                </span>
              </div>
              <div class="recap-total">
                <span>{{ attempt.isPrepay ? $t('payment.depositPaid') : $t('payment.paid') }}</span>
                <strong>{{ formatPrice(attempt.amount) }}</strong>
              </div>
              <div v-if="attempt.isPrepay && attempt.remaining" class="recap-row">
                <span>{{ $t('product.remainingOnDelivery') }}</span>
                <span>{{ formatPrice(attempt.remaining) }}</span>
              </div>
            </section>
          </div>
        </template>

        <!-- ===== Failure ===== -->
        <template v-else>
          <div class="result-grid">
            <section class="panel">
              <h2 class="panel-title">{{ $t('payment.checksTitle') }}</h2>
              <ul class="checklist">
                <li><i class="fa-regular fa-credit-card"></i>{{ $t('payment.checkCard') }}</li>
                <li><i class="fa-solid fa-wallet"></i>{{ $t('payment.checkBalance') }}</li>
                <li><i class="fa-solid fa-rotate-right"></i>{{ $t('payment.checkRetry') }}</li>
              </ul>
            </section>

            <section class="panel retry-panel">
              <h2 class="panel-title">{{ $t('payment.retryTitle') }}</h2>
              <div v-if="attempt" class="recap-product">
                <img v-if="attempt.image" :src="attempt.image" :alt="attempt.name" width="64" height="64" />
                <span>
                  <b>{{ attempt.name }}</b>
                  <small v-if="attempt.option">{{ attempt.option }}</small>
                  <small class="fw-bold">{{ formatPrice(attempt.amount) }}</small>
                </span>
              </div>
              <NuxtLink :to="retryLink" class="btn btn-primary btn-lg btn-block">
                <i class="fa-solid fa-rotate-right"></i> {{ $t('payment.retry') }}
              </NuxtLink>
            </section>
          </div>
        </template>

        <!-- Help -->
        <section class="panel help-panel">
          <div>
            <h2 class="panel-title">{{ $t('payment.support') }}</h2>
            <p class="help-text">{{ isFailed ? $t('payment.helpFailed') : $t('payment.needHelp') }}</p>
          </div>
          <div class="help-actions">
            <a :href="whatsappUrl" target="_blank" rel="noopener" class="btn btn-success">
              <i class="fa-brands fa-whatsapp"></i> {{ $t('success.whatsapp') }}
            </a>
            <a :href="`tel:+${SUPPORT_PHONE}`" class="btn btn-outline-primary">
              <i class="fa-solid fa-phone"></i> <span dir="ltr">0551 00 77 98</span>
            </a>
          </div>
        </section>

        <div class="final-actions">
          <NuxtLink to="/shop" class="btn btn-primary btn-lg" v-if="!isFailed">
            <i class="iconly-Curved-Game"></i> {{ $t('common.backShop') }}
          </NuxtLink>
          <NuxtLink to="/" class="btn btn-outline-primary btn-lg">{{ $t('common.backHome') }}</NuxtLink>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.result-page .container {
  max-width: 1000px;
}

/* ---------- status ---------- */
.hero-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 24px 28px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #eef1f7;
  text-align: center;
}

.hero-card.is-success {
  background: radial-gradient(circle at 50% 0%, rgba(25, 135, 84, .1), transparent 60%), #fff;
}

.hero-card.is-failed {
  background: radial-gradient(circle at 50% 0%, rgba(220, 53, 69, .08), transparent 60%), #fff;
}

.astro-wrap {
  position: relative;
  margin-bottom: 8px;
}

.status-badge {
  position: absolute;
  bottom: 10px;
  inset-inline-end: -6px;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 4px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  animation: pop-in .5s .3s cubic-bezier(.2, 1.4, .4, 1) both;
}

.is-success .status-badge { background: #198754; }
.is-failed .status-badge { background: #dc3545; }

.eyebrow {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.is-success .eyebrow { color: #198754; }
.is-failed .eyebrow { color: #dc3545; }

.hero-card h1 {
  margin: 6px 0;
  font-size: clamp(24px, 4vw, 36px);
}

.lead {
  max-width: 560px;
  margin: 0 0 18px;
  color: #6b7390;
  font-size: 16px;
  line-height: 1.6;
}

.refs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 14px;
}

.ref-pill {
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

.ref-pill strong {
  font-size: 17px;
  letter-spacing: .03em;
}

.ref-pill i {
  color: var(--gs-primary, #0A63D8);
}

.ref-pill:hover {
  border-color: var(--gs-primary, #0A63D8);
}

.ref-small {
  color: #6b7390;
  font-size: 13px;
}

.copied {
  min-height: 20px;
  margin-top: 6px;
  color: #198754;
  font-size: 12.5px;
  font-weight: 600;
}

.reason {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  max-width: 560px;
  margin-top: 6px;
  padding: 12px 16px;
  border-radius: 12px;
  background: #fdecee;
  color: #842029;
  font-size: 14px;
  text-align: start;
}

.reason i {
  margin-top: 3px;
}

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
  .status-badge { animation: none; }
}

/* ---------- callout ---------- */
.callout {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding: 16px 20px;
  border-radius: 18px;
  background: #ecfbf2;
  border: 1px solid #bfeccf;
}

.callout-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  font-size: 22px;
}

.callout h2 {
  margin: 0 0 2px;
  font-size: 16px;
}

.callout p {
  margin: 0;
  color: #1d5e3a;
  font-size: 14px;
}

/* ---------- panels ---------- */
.result-grid {
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

.panel.span-all {
  grid-column: 1 / -1;
}

.panel-title {
  margin-bottom: 16px;
  font-size: 18px;
}

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

.timeline li.done .dot {
  background: #198754;
  color: #fff;
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

.recap-product {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.recap-product img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid #eef1f7;
  background: #fff;
}

.recap-product span {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  line-height: 1.35;
}

.recap-product small {
  color: #6b7390;
}

.recap-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 12px;
  border-top: 1px dashed #dfe3ee;
}

.recap-total strong {
  font-size: 22px;
  color: #198754;
}

.recap-row {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  color: #6b7390;
  font-size: 14px;
}

.checklist {
  margin: 0;
  padding: 0;
  list-style: none;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 14px;
}

.checklist li + li {
  border-top: 1px solid #eef1f7;
}

.checklist i {
  width: 20px;
  color: var(--gs-primary, #0A63D8);
  text-align: center;
}

.retry-panel {
  display: flex;
  flex-direction: column;
}

.retry-panel .btn {
  margin-top: auto;
}

.help-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
}

.help-panel .panel-title {
  margin-bottom: 4px;
}

.help-text {
  margin: 0;
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
  .result-grid {
    grid-template-columns: 1fr;
  }

  .hero-card,
  .panel {
    padding: 18px;
  }

  .help-actions,
  .help-actions .btn,
  .final-actions .btn {
    flex: 1 1 100%;
  }
}
</style>
