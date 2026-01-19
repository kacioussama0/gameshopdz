<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const slideData = [
  { img: IMAGES.product1, title: "Cozy Knit Cardigan Sweater" },
  { img: IMAGES.product2, title: "Sophisticated Swagger Suit" },
  { img: IMAGES.product3, title: "Classic Denim Skinny Jeans" },
  { img: IMAGES.product4, title: "Athletic Mesh Sports Leggings" },
  { img: IMAGES.product1, title: "Cozy Knit Cardigan Sweater" },
  { img: IMAGES.product2, title: "Sophisticated Swagger Suit" },
  { img: IMAGES.product3, title: "Classic Denim Skinny Jeans" },
  { img: IMAGES.product4, title: "Athletic Mesh Sports Leggings" },
];
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
        1200: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide class="swiper-slide" v-for="({ img, title }, ind) in slideData" :key="ind">
        <div class="shop-card wow fadeInUp">
          <div class="dz-media">
            <img :src="img" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="(e)=>{
                (e.target as HTMLElement).classList.toggle('active')
              }"
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="(e)=>{
                (e.target as HTMLElement).classList.toggle('active')
              }"
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title">
              <RouterLink to="/shop-list">{{ title }}</RouterLink>
            </h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
