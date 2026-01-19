<script setup lang="ts">
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
<template>
  <Swiper
    class="swiper swiper-company"
    :slides-per-view="4"
    :space-between="30"
    :speed="1200"
    :modules="[Autoplay]"
    :autoplay="{ delay: 1500 }"
    :loop="true"
    :breakpoints="{
      1200: { slidesPerView: 4 },
      775: { slidesPerView: 3 },
      575: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="0.4s">
        <div class="dz-media">
          <img src="../assets/images/company/1.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo1.png" alt="image" class="logo" />
        </div>
        <div class="dz-content">
          <h6 class="title">Outdoor Shoes</h6>
          <span class="sale-title">Min. 30% Off</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="0.6s">
        <div class="dz-media">
          <img src="../assets/images/company/2.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo2.png" alt="image" class="logo" />
          <span class="sale-badge">in Store</span>
        </div>
        <div class="dz-content">
          <h6 class="title">Best Cloths</h6>
          <span class="sale-title">Up To 20% Off</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="0.8s">
        <div class="dz-media">
          <img src="../assets/images/company/1.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo3.png" alt="image" class="logo" />
        </div>
        <div class="dz-content">
          <h6 class="title">Sports Shoes</h6>
          <span class="sale-title">up to 30% Off</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="1.0s">
        <div class="dz-media">
          <img src="../assets/images/company/3.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo4.png" alt="image" class="logo" />
          <span class="sale-badge">in Store</span>
        </div>
        <div class="dz-content">
          <h6 class="title">modern jewellery</h6>
          <span class="sale-title">Min. 30% Off</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="1.2s">
        <div class="dz-media">
          <img src="../assets/images/company/1.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo1.png" alt="image" class="logo" />
        </div>
        <div class="dz-content">
          <h6 class="title">Outdoor Shoes</h6>
          <span class="sale-title">Min. 30% Off</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="company-box style-1 wow fadeInUp" data-wow-delay="1.4s">
        <div class="dz-media">
          <img src="../assets/images/company/2.jpg" alt="image" class="company-img" />
          <img src="../assets/images/company/logo/logo2.png" alt="image" class="logo" />
          <span class="sale-badge">in Store</span>
        </div>
        <div class="dz-content">
          <h6 class="title">Best Cloths</h6>
          <span class="sale-title">Up To 20% Off</span>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
