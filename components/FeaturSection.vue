<script setup lang="ts">
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <Swiper
    class="swiper swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
    :loop="true"
    :speed="1500"
    :modules="[Autoplay]"
    :autoplay="{ delay: 3000 }"
    :breakpoints="{
      1200: { slidesPerView: 3 },
      775: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
    :slides-per-view="3"
    :space-between="30"
  >
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.4s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/1.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.6s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/2.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.8s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/3.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.4s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/1.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.6s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/2.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="shop-card style-4 wow fadeInUp" data-wow-delay="0.8s">
        <div class="dz-media">
          <img src="../assets/images/shop/product/3.png" alt="image" />
        </div>
        <div class="dz-content">
          <div>
            <h6 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h6>
            <span class="sale-title">Up to 40% Off</span>
          </div>
          <div class="d-flex align-items-center">
            <h6 class="price">$80<del>$95</del></h6>
            <span class="review"><i class="fa-solid fa-star"></i>(2k Review)</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
