<script lang="ts" setup>

const loading = ref(true)
const { refresh } = useWcCart()

onMounted(() => {

  if (sessionStorage.getItem("app_loaded")) {
    loading.value = false
    return
  }

  sessionStorage.setItem("app_loaded", "true")
  refresh()
  setTimeout(() => {
    loading.value = false
  }, 1500)

})

const { start, finish } = useLoadingIndicator()
const router = useRouter()

router.beforeEach(() => {
  start({ force: true })
})

router.afterEach(() => {
  finish()
})


useSeoMeta({
  title: 'Gameshopdz - Leader Gaming Shop en Algérie',
  description: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.',
  ogTitle: 'Gameshopdz - Leader Gaming Shop en Algérie',
  ogDescription: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.',
  ogImage: 'https://gameshopdz.com/banner.jpg',
  ogUrl: 'https://gameshopdz.com/',
  twitterTitle: 'Gameshopdz - Leader Gaming Shop en Algérie',
  twitterDescription: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.',
  twitterImage: 'https://gameshopdz.com/banner.jpg',
  twitterCard: 'summary_large_image'
})

</script>

<template>

  <div class="page-wraper">

    <AppLoader v-if="loading" />

    <NuxtLoadingIndicator color="#FFFFFF" error-color="#FF0000" :height="3" :throttle="0" :duration="2000" />

    <NuxtLayout>
      <NuxtPage  />
      <Footer />
    </NuxtLayout>



  </div>
</template>

<style>


.logo-header {
  height: 60px !important;
}

.new-gradient {
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0) !important;
}
.page-wrapper {
  position: relative;
}
</style>