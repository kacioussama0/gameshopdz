<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Portfolio Tiles" />
    <!--Banner End-->


  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import Header from "~/components/Header.vue";

export default {
  components: { CommonBanner, Header },
  setup() {
    const lightgallery = ref(null);
    const addActive = ref("*");
    let isotopeInstance: any = null;

    function setFilter(filter: any) {
      addActive.value = filter;
      isotopeInstance.arrange({
        filter: filter === "*" ? "*" : filter,
      });
    }
    onMounted(() => {
      isotopeInstance = new Isotope(lightgallery.value, {
        itemSelector: ".card-container",
        masonry: {
          columnWidth: 1,
        },
      });

      setTimeout(() => {
        setFilter(addActive.value);
      }, 100);
    });

    return {
      lightgallery,
      setFilter,
      addActive,
      bg,
    };
  },
};
</script>
