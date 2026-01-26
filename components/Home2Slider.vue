<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const props = defineProps<{
  products: Object;
}>();



</script>

<template>
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :modules="[Autoplay]"
      :speed="1500"
      :autoplay="{
        delay: 1500,
      }"
      :breakpoints="{
        1200: { slidesPerView: 5 },
        991: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 2 },
      }"
    >
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="ind">
        <ProductCard :product="product"/>
      </SwiperSlide>

      <SwiperSlide class="swiper-slide" v-else v-for="product in 10">
        <ProductCard :product="product"/>
      </SwiperSlide>

    </Swiper>
  </div>
</template>

<style scoped>

.clamp-text-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2   ; /* Number of lines to show */
  -webkit-box-orient: vertical;
  line-clamp: 2;
  font-size: 14px;
}


</style>