<script lang="ts" setup>
import Header from "~/components/Header.vue";

const { refresh } = useWcCart()
onMounted(() => refresh())


const { start, finish } = useLoadingIndicator()

const router = useRouter()

// 🔁 Routing loading
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

    <NuxtLoadingIndicator color="#04113C" error-color="#FF0000" :height="3" :throttle="0" :duration="2000" />

    <NuxtLayout>
      <NuxtPage />
      <Footer />


    </NuxtLayout>
  </div>
</template>
