<script setup lang="ts">
import { PLATFORMS } from "~/composables/useShopFilters";

const props = defineProps({
  error: Object
})

const { t } = useI18n()

const is404 = computed(() => Number(props.error?.statusCode) === 404)
const statusCode = computed(() => props.error?.statusCode || 500)

// Error pages skip app.vue, so set the language and direction here too
const i18nHead = useLocaleHead()

useHead({
  title: () => (is404.value ? t('error.notFound') : t('error.generic')),
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs.lang,
    dir: () => i18nHead.value.htmlAttrs.dir,
  },
  meta: [{ name: 'robots', content: 'noindex' }],
})

// Leave the error state and go somewhere useful
const goTo = (path: string) => clearError({ redirect: path })

const term = ref('')
const search = () => {
  const q = term.value.trim()
  if (q) goTo(`/shop?search=${encodeURIComponent(q)}`)
}

const canGoBack = ref(false)
onMounted(() => {
  canGoBack.value = window.history.length > 1
})

const goBack = () => {
  clearError()
  window.history.back()
}

const retry = () => window.location.reload()

const whatsappUrl = computed(() => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return `https://wa.me/213550779973?text=${encodeURIComponent(t('error.whatsappMessage', { code: statusCode.value, url }))}`
})

const quickLinks = [
  { label: 'menu.games', to: '/shop?category=815', icon: 'iconly-Curved-Game' },
  { label: 'menu.consoles', to: '/shop?category=821', icon: 'iconly-Curved-Bag' },
  { label: 'menu.digital', to: '/shop?category=844', icon: 'iconly-Curved-Wallet' },
  { label: 'home.promotions', to: '/shop?on_sale=true', icon: 'iconly-Curved-Discount' },
]
</script>

<template>
  <main class="error-page">
    <header class="error-top">
      <a href="/" class="error-logo" @click.prevent="goTo('/')" aria-label="Gameshop">
        <img src="~/assets/images/logo-white.svg" alt="Gameshop" width="150" height="45" />
      </a>
      <LanguageSwitcher />
    </header>

    <section class="error-card">
      <div class="visual">
        <span v-if="is404" class="big-code" aria-hidden="true">4<span class="zero"><AstroBot mood="cry" :size="92" head /></span>4</span>
        <AstroBot v-else mood="sad" :size="140" />
      </div>

      <h1>{{ is404 ? $t('error.notFound') : $t('error.generic') }}</h1>
      <p class="lead">{{ is404 ? $t('error.notFoundText') : $t('error.retryLater') }}</p>

      <!-- 404: help them find what they wanted -->
      <template v-if="is404">
        <form class="error-search" role="search" @submit.prevent="search">
          <i class="iconly-Light-Search" aria-hidden="true"></i>
          <input
              v-model="term"
              type="search"
              enterkeyhint="search"
              :placeholder="$t('header.searchPlaceholder')"
              :aria-label="$t('header.searchLabel')"
          />
          <button type="submit" class="btn btn-primary">{{ $t('header.searchButton') }}</button>
        </form>

        <p class="quick-title">{{ $t('error.popular') }}</p>
        <div class="quick-links">
          <a v-for="link in quickLinks" :key="link.to" :href="link.to" class="quick-link" @click.prevent="goTo(link.to)">
            <i :class="link.icon" aria-hidden="true"></i>{{ $t(link.label) }}
          </a>
          <a v-for="platform in PLATFORMS.slice(0, 1)" :key="platform.id" :href="`/shop?category=${platform.id}`" class="quick-link" @click.prevent="goTo(`/shop?category=${platform.id}`)">
            <i :class="platform.icon" aria-hidden="true"></i>{{ platform.label }}
          </a>
        </div>
      </template>

      <div class="actions">
        <button v-if="!is404" type="button" class="btn btn-primary btn-lg" @click="retry">
          <i class="fa-solid fa-rotate-right"></i> {{ $t('error.retry') }}
        </button>
        <a href="/" class="btn btn-lg" :class="is404 ? 'btn-primary' : 'btn-outline-primary'" @click.prevent="goTo('/')">
          <i class="iconly-Curved-Home"></i> {{ $t('common.backHome') }}
        </a>
        <button v-if="canGoBack" type="button" class="btn btn-outline-primary btn-lg" @click="goBack">
          <i class="fa-solid fa-arrow-left flip-rtl"></i> {{ $t('error.goBack') }}
        </button>
      </div>

      <p class="help">
        {{ $t('error.helpText') }}
        <a :href="whatsappUrl" target="_blank" rel="noopener">
          <i class="fa-brands fa-whatsapp"></i> {{ $t('success.whatsapp') }}
        </a>
      </p>

      <p v-if="!is404" class="code">{{ $t('error.code') }} <span dir="ltr">{{ statusCode }}</span></p>
    </section>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 20px 16px 48px;
  background:
      radial-gradient(circle at top, rgba(255, 255, 255, .08), transparent 40%),
      linear-gradient(180deg, #0f2f6d 0%, #164094 45%, #6a3df0 100%);
}

.error-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 640px;
}

.error-logo img {
  height: 42px;
  width: auto;
}

.error-card {
  width: 100%;
  max-width: 640px;
  margin: auto 0;
  padding: 40px 32px 28px;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 30px 80px rgba(8, 18, 60, .35);
  text-align: center;
}

.visual {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}

/* "4 🤖 4": Astro's helmet plays the zero */
.big-code {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: clamp(88px, 18vw, 132px);
  font-weight: 800;
  line-height: 1;
  background: var(--gs-gradient, linear-gradient(135deg, #0f2f6d, #164094, #6a3df0));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  direction: ltr;
}

.zero {
  display: inline-flex;
  animation: bob 3s ease-in-out infinite;
}

.error-card h1 {
  margin: 4px 0 8px;
  font-size: clamp(24px, 4vw, 32px);
}

.lead {
  max-width: 460px;
  margin: 0 auto 24px;
  color: #6b7390;
  font-size: 16px;
  line-height: 1.6;
}

/* search */
.error-search {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 54px;
  padding-inline: 18px 6px;
  border: 1.5px solid #dfe3ee;
  border-radius: 999px;
  background: #fff;
  transition: border-color .15s ease, box-shadow .15s ease;
}

.error-search:focus-within {
  border-color: var(--gs-primary, #0A63D8);
  box-shadow: 0 0 0 3px rgba(10, 99, 216, .15);
}

.error-search i {
  color: #9aa1b5;
  font-size: 18px;
}

.error-search input {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  font-size: 15px;
}

.error-search .btn {
  min-height: 42px;
}

.quick-title {
  margin: 22px 0 10px;
  color: #6b7390;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
}

.quick-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  transition: all .15s ease;
}

.quick-link:hover {
  border-color: var(--gs-primary, #0A63D8);
  background: rgba(10, 99, 216, .05);
  color: var(--gs-primary, #0A63D8);
}

.quick-link i {
  color: var(--gs-primary, #0A63D8);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}

.help {
  margin: 24px 0 0;
  padding-top: 18px;
  border-top: 1px solid #eef1f7;
  color: #6b7390;
  font-size: 14px;
}

.help a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-inline-start: 4px;
  color: #128c4b;
  font-weight: 700;
}

.code {
  margin: 8px 0 0;
  color: #9aa1b5;
  font-size: 12px;
}

:global([dir="rtl"] .error-page .flip-rtl) {
  transform: scaleX(-1);
}

@keyframes bob {
  0%, 100% { transform: translateY(0) rotate(-4deg); }
  50% { transform: translateY(-6px) rotate(4deg); }
}

@media (prefers-reduced-motion: reduce) {
  .zero { animation: none; }
}

@media (max-width: 575.98px) {
  .error-card {
    padding: 28px 18px 22px;
    border-radius: 22px;
  }

  .error-search {
    padding-inline-start: 14px;
  }

  .actions .btn {
    flex: 1 1 100%;
  }
}
</style>
