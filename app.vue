<script lang="ts" setup>
const { refresh } = useWcCart()
onMounted(() => refresh())
</script>

<template>

  <div class="page-wraper">

    <NuxtLayout>
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
