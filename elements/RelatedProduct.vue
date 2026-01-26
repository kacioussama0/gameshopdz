<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

const props = defineProps<{
  products: Object;
}>();


</script>

<template>
  <!-- @vue-skip -->
  <div class="swiper-btn-center-lr"  v-if="products">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :speed="1500"
      :modules="[Navigation, Autoplay]"
      :autoplay="{
        delay: 1500,
      }"
      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
      }"
      :breakpoints="{
        1200: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide class="swiper-slide" v-for="product in products">
        <ProductCard :product="product"/>
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
