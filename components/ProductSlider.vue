<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, Navigation} from "swiper/modules";

const props = defineProps<{
  products: Object,
  variant: {type:String,required:false,default:'primary'}
}>();



</script>

<template>
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :modules="[Autoplay,Navigation]"
      :speed="1500"
      :autoplay="{
        delay: 1500,
      }"
      :breakpoints="{

        1600: { slidesPerView: 6 },
        1200: { slidesPerView: 5 },
        991: { slidesPerView: 3 },
        500: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"


      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
      }"
    >
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="ind">
        <ProductCard :product="product" :variant="variant"/>
      </SwiperSlide>

    </Swiper>

    <div class="pagination-align">
      <div class="tranding-button-prev btn-prev">
        <i class="flaticon flaticon-left-chevron"></i>
      </div>
      <div class="tranding-button-next btn-next">
        <i class="flaticon flaticon-chevron"></i>
      </div>
    </div>




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