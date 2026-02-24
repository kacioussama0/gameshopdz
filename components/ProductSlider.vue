<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, Navigation} from "swiper/modules";

const props = defineProps<{
  products: Object,
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

        0: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 20 },
        1400: { slidesPerView: 5, spaceBetween: 25 },
        2000: { slidesPerView: 6, spaceBetween: 30 },
        2500: { slidesPerView: 7, spaceBetween: 35 }
      }"
      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
      }"
    >
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="ind">
        <ProductCard :product="product"/>
      </SwiperSlide>


      <SwiperSlide class="swiper-slide" v-else v-for="p in 10" >
        <ProductCardSkeleton />
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