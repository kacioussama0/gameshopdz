<script lang="ts" setup>

const loading = ref(true)


const { itemsCount} = useLocalCart()
const { t, locale } = useI18n()

// Sliders read the text direction once, when created: flip the existing ones
// in place when the language changes (no page rebuild)
watch(locale, async (code) => {
  await nextTick()
  const dir = code === 'ar' ? 'rtl' : 'ltr'
  document.querySelectorAll<HTMLElement & { swiper?: any }>('.swiper').forEach((el) => {
    el.swiper?.changeLanguageDirection?.(dir)
  })
})
const i18nHead = useLocaleHead()

useHead({
  // Every page title ends with the brand: "Playstation 5 | Gameshopdz".
  // Titles that already name it (the home page) are left as they are.
  titleTemplate: (title?: string) =>
      !title ? 'Gameshopdz' : /gameshopdz/i.test(title) ? title : `${title} | Gameshopdz`,
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs.lang,
    dir: () => i18nHead.value.htmlAttrs.dir,
  },
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
});

// Splash on the first page of a visit: closes as soon as the page has loaded
// (kept at least MIN_MS so it doesn't flash, never longer than MAX_MS)
const MIN_MS = 700
const MAX_MS = 3000

onMounted(() => {
  let seen = false
  try {
    seen = !!sessionStorage.getItem("app_loaded")
    sessionStorage.setItem("app_loaded", "true")
  } catch {}

  if (seen) {
    loading.value = false
    return
  }

  const startedAt = performance.now()
  const hide = () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - startedAt))
    setTimeout(() => (loading.value = false), wait)
  }

  if (document.readyState === 'complete') hide()
  else window.addEventListener('load', hide, { once: true })

  setTimeout(() => (loading.value = false), MAX_MS)
})

const { start, finish } = useLoadingIndicator()
const router = useRouter()

router.beforeEach(() => {
  start({ force: true })
})

router.afterEach(() => {
  finish()
})


// Site-wide defaults; pages override what they know better (title, canonical…)
const route = useRoute()
const { absolute } = useSiteUrl()

// Canonical = the path without query strings (filters, tracking…)
const canonical = computed(() => absolute(route.path))

useHead({
  link: [{ rel: 'canonical', href: canonical, key: 'canonical' }],
})

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('seo.description'),
  ogImage: absolute('/banner.jpg'),
  ogImageWidth: 2240,
  ogImageHeight: 1260,
  ogImageAlt: 'Gameshopdz',
  ogUrl: canonical,
  ogSiteName: 'Gameshopdz',
  ogLocale: () => (locale.value === 'ar' ? 'ar_DZ' : 'fr_DZ'),
  ogType: 'website',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('seo.description'),
  twitterImage: absolute('/banner.jpg'),
  twitterCard: 'summary_large_image'
})

</script>

<template>

  <div class="page-wraper">

    <Transition name="loader-fade">
      <AppLoader v-if="loading" />
    </Transition>

    <NuxtLoadingIndicator color="#FFFFFF" error-color="#FF0000" :height="3" :throttle="0" :duration="2000" />

    <NuxtLayout>
      <NuxtPage  />
      <Footer />
      <MobileBottomNav :itemsCount="itemsCount" />
    </NuxtLayout>



  </div>
</template>

<style>


.logo-header {
  height: 60px !important;
}

.new-gradient,.swiper-pagination-bullet-active {
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0) !important;
}
.page-wrapper {
  position: relative;
}

.loader-fade-leave-active {
  transition: opacity .4s ease, transform .4s ease;
}

.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.03);
}





</style>