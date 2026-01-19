<script setup lang="ts">
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>

<template>
  <div class="container-fluid px-3">
    <Swiper
      class="swiper swiper-product"
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      :modules="[Autoplay]"
      :speed="1200"
      :autoplay="{ delay: 1500 }"
      :breakpoints="{
        1200: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="0.4s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_1})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">20% Off</span>
              <h2 class="product-name">Luxury Bras</h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="0.6s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_2})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">Sale Up to 50% Off</span>
              <h2 class="sub-title1">Summer <span class="year">2024</span></h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="0.8s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_3})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">20% Off</span>
              <h2 class="sub-title2">Swimwear<span class="bg-title">Sale</span></h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="1.0s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_1})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">20% Off</span>
              <h2 class="product-name">Luxury Bras</h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="1.2s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_2})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">Sale Up to 50% Off</span>
              <h2 class="sub-title1">Summer <span class="year">2024</span></h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="product-box style-2 wow fadeInUp" data-wow-delay="1.4s">
          <div class="product-media" :style="`background-image: url(${IMAGES.clothes2_3})`"></div>
          <div class="product-content">
            <div class="main-content">
              <span class="offer">20% Off</span>
              <h2 class="sub-title2">Swimwear<span class="bg-title">Sale</span></h2>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-rounded btn-lg">Collect Now</RouterLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
