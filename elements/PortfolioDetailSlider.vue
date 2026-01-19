<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
</script>

<template>
  <!-- @vue-skip -->
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="2"
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
    >
      <SwiperSlide class="swiper-slide">
        <div class="portfolio-box">
          <div class="dz-media">
            <RouterLink to="/portfolio-details-1">
              <img src="../assets/images/portfolio/details/portfolio-detail-4/related-img/pic1.jpg" alt="/" />
            </RouterLink>
          </div>
          <div class="dz-content">
            <div class="product-tag">
              <RouterLink to="/portfolio-details-1">
                <span class="badge badge-primary">Sweater</span>
              </RouterLink>
            </div>
            <h5 class="title"><RouterLink to="/portfolio-details-1">Cozy Knit Cardigan Sweater</RouterLink></h5>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="portfolio-box">
          <div class="dz-media">
            <RouterLink to="/portfolio-details-1">
              <img src="../assets/images/portfolio/details/portfolio-detail-4/related-img/pic2.jpg" alt="/" />
            </RouterLink>
          </div>
          <div class="dz-content">
            <div class="product-tag">
              <RouterLink to="/portfolio-details-1">
                <span class="badge badge-primary">Suit</span>
              </RouterLink>
            </div>
            <h5 class="title"><RouterLink to="/portfolio-details-1">Sophisticated Swagger Suit</RouterLink></h5>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="portfolio-box">
          <div class="dz-media">
            <RouterLink to="/portfolio-details-1">
              <img src="../assets/images/portfolio/details/portfolio-detail-4/related-img/pic3.jpg" alt="/" />
            </RouterLink>
          </div>
          <div class="dz-content">
            <div class="product-tag">
              <RouterLink to="/portfolio-details-1">
                <span class="badge badge-primary">Sweater</span>
              </RouterLink>
            </div>
            <h5 class="title"><RouterLink to="/portfolio-details-1">Cozy Knit Cardigan Sweater</RouterLink></h5>
          </div>
        </div>
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
