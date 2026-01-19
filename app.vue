<script lang="ts" setup>
import PreviewModel from "./elements/PreviewModel.vue";
</script>

<template>
  <div class="page-wraper">
    <PreviewModel />
    <NuxtLayout>
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>
