<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const props = defineProps<{
  products: Object,
}>();



</script>

<template>
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"

      :space-between="30"
      :loop="true"
      :modules="[Autoplay,Navigation]"
      :speed="2000"


      :breakpoints="{

        0: { slidesPerView: 1, spaceBetween: 15 },
        500: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 20 },
        1400: { slidesPerView: 5, spaceBetween: 25 },
        2000: { slidesPerView: 6, spaceBetween: 30 },
        2500: { slidesPerView: 7, spaceBetween: 35 }
      }"
      :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
    >
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="ind">
        <ProductCard :product="product" :show-stock="false"/>
      </SwiperSlide>


      <SwiperSlide class="swiper-slide" v-else v-for="p in 10" >
        <ProductCardSkeleton />
      </SwiperSlide>


      <span class=" swiper-button-prev slick-arrow new-gradient"></span>
      <span class=" swiper-button-next slick-arrow new-gradient"></span>



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


.slick-arrow {
  background: #164094;
  width: 45px;

  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #fff0df;
  z-index: 5;
  outline: none;
  cursor: pointer;
}

.swiper-button-prev {
  left: 0;
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
}

.swiper-button-next {
  right: 0;
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
}

.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 22px;
}
</style>