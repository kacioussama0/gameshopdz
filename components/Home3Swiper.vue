<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
</script>

<template>
  <Swiper
    class="swiper testimonial-swiper about-swiper m-b30"
    :slides-per-view="3"
    :space-between="30"
    :loop="true"
    :navigation="{
      nextEl: '.testimonial-button-next',
      prevEl: '.testimonial-button-prev',
    }"
    :pagination="{
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class=${className}>0${index + 1}</span>`;
      },
    }"
    :modules="[Navigation, Pagination]"
    :breakpoints="{
      991: { slidesPerView: 3 },
      775: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide class="swiper-slide">
      <div class="about-box">
        <div class="about-img">
          <img src="../assets/images/shop/product-2/1.png" alt="image" />
        </div>
        <div class="about-btn">
          <RouterLink class="btn btn-white btn-md" to="/shop-list">Man Shoes</RouterLink>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="about-box">
        <div class="about-img">
          <img src="../assets/images/shop/product-2/2.png" alt="image" />
        </div>
        <div class="about-btn">
          <RouterLink class="btn btn-white btn-md" to="/shop-list">Woman Shoes</RouterLink>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="about-box">
        <div class="about-img">
          <img src="../assets/images/shop/product-2/3.png" alt="image" />
        </div>
        <div class="about-btn">
          <RouterLink class="btn btn-white btn-md" to="/shop-list">Kid Shoes</RouterLink>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="about-box">
        <div class="about-img">
          <img src="../assets/images/shop/product-2/1.png" alt="image" />
        </div>
        <div class="about-btn">
          <RouterLink class="btn btn-white btn-md" to="/shop-list">Man Shoes</RouterLink>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  <!-- Navigation Arrows -->
  <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex gap-3">
      <!-- Previous Button -->
      <div class="testimonial-button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M36.8751 19.372H4.6659L12.288 11.9623C12.8705 11.3965 12.0066 10.4958 11.4164 11.0663C11.4164 11.0663 2.68932 19.5502 2.68932 19.5502C2.43467 19.7821 2.45495 20.2007 2.68935 20.4462C2.68932 20.4462 11.4164 28.9337 11.4164 28.9337C12.0038 29.4974 12.8725 28.6135 12.288 28.0377C12.288 28.0377 4.66308 20.622 4.66308 20.622H36.8751C37.6738 20.6144 37.7149 19.3872 36.8751 19.372Z"
            fill="black"
          />
        </svg>
      </div>
      <!-- Next Button -->
      <div class="testimonial-button-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M3.12489 19.372H35.3341L27.712 11.9623C27.1295 11.3965 27.9934 10.4958 28.5836 11.0663L37.3107 19.5502C37.5653 19.7821 37.5451 20.2007 37.3107 20.4462L28.5836 28.9337C27.9962 29.4973 27.1275 28.6135 27.712 28.0377L35.3369 20.622H3.12489C2.32618 20.6144 2.28506 19.3872 3.12489 19.372Z"
            fill="black"
          />
        </svg>
      </div>
    </div>

    <!-- Pagination Bullets -->
    <div class="swiper-pagination style-1 text-end swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
  </div>
</template>
