<script setup lang="ts">
import Header from "~/components/Header.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const routeName = ref<string>("/");

watch(
  () => route.name,
  (to, _) => {
    routeName.value = String(to);
  }
);
onMounted(() => {
  routeName.value = String(route.name);
});

</script>

<template>
  <div>
    <header
      :class="`site-header mo-left header 
      ${routeName == 'portfolio-thumbs-slider' || routeName == 'portfolio-split-slider' ? '' : 'border-bottom'}`"
    >
      <Header />
    </header>
    <NuxtPage />
  </div>
</template>
