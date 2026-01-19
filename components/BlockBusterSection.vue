<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
</script>
<template>
  <Swiper
    class="swiper swiper-four swiper-visible swiper-item-4"
    :slides-per-view="4"
    :space-between="30"
    :loop="true"
    :modules="[Autoplay]"
    :autoplay="{ delay: 1500 }"
    :speed="1200"
    :breakpoints="{
      1200: { slidesPerView: 4 },
      775: { slidesPerView: 3 },
      575: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-2 wow fadeInUp" data-wow-delay="0.4s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/shart/1.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <span class="sale-title">up to 79% off</span>
            <h5 class="title"><RouterLink to="/shop-list">Printed Spread Collar Casual Shirt</RouterLink></h5>
          </div>
          <h6 class="price">
            $80
            <del>$95</del>
          </h6>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-2 wow fadeInUp" data-wow-delay="0.6s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/shart/2.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <span class="sale-title">up to 79% off</span>
            <h5 class="title"><RouterLink to="/shop-list">Checkered Slim Collar Casual Shirt</RouterLink></h5>
          </div>
          <h6 class="price">
            $80
            <del>$95</del>
          </h6>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-2 wow fadeInUp" data-wow-delay="0.8s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/shart/3.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <span class="sale-title">up to 79% off</span>
            <h5 class="title"><RouterLink to="/shop-list">Solid Cut Away Collar Casual Shirt</RouterLink></h5>
          </div>
          <h6 class="price">
            $80
            <del>$95</del>
          </h6>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-2 wow fadeInUp" data-wow-delay="1.0s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/shart/4.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <span class="sale-title">up to 79% off</span>
            <h5 class="title"><RouterLink to="/shop-list">Printed Spread Collar Casual Shirt</RouterLink></h5>
          </div>
          <h6 class="price">
            $80
            <del>$95</del>
          </h6>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-2 wow fadeInUp" data-wow-delay="1.2s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/shart/5.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <span class="sale-title">up to 79% off</span>
            <h5 class="title"><RouterLink to="/shop-list">Checkered Spread Collar Casual Shirt</RouterLink></h5>
          </div>
          <h6 class="price">
            $80
            <del>$95</del>
          </h6>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
