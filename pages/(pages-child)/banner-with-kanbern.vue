<script setup lang="ts">
import bg1 from "@/assets/images/background/bg1.jpg";
import bg7 from "@/assets/images/background/bg7.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";
import PagesSection from "@/components/PagesSection.vue";
import Header2 from "~/components/Header2.vue";
</script>

<template>
  <header class="site-header mo-left header style-1 header-transparent header-text-white">
    <Header2 />
  </header>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary overlay-black-light">
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <h1>Banner Kanbern</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Banner With Video</li>
            </ul>
          </nav>
        </div>
      </div>
      <Swiper
        class="kanbern-bnr swiper"
        :modules="[EffectFade, Autoplay]"
        :effect="'fade'"
        :autoplay="{
          delay: 2000,
        }"
        :loop="true"
        :speed="2000"
      >
        <SwiperSlide class="swiper-slide"><div :style="`background-image: url(${bg1})`"></div></SwiperSlide>
        <SwiperSlide class="swiper-slide"><div :style="`background-image: url(${bg7})`"></div></SwiperSlide>
      </Swiper>
    </div>

    <PagesSection />
  </div>
</template>
