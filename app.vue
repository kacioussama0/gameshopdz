<script lang="ts" setup>
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
