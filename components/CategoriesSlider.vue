<script setup lang="ts">

import {Swiper, SwiperSlide} from "swiper/vue";
import { Navigation } from "swiper/modules";

import img1 from "../assets/images/categories/ARGS01.png";
import img2 from "../assets/images/categories/ARGS02.png";
import img3 from "../assets/images/categories/ARGS11.png";
import img4 from "../assets/images/categories/ARGS99.png";
import img5 from "../assets/images/categories/ARGS03.png";
import img6 from "../assets/images/categories/ARGS05.png";
import img7 from "../assets/images/categories/ARGS07.png";
import img8 from "../assets/images/categories/ARGS06.png";
import img9 from "../assets/images/categories/ARGS08.png";
import img10 from "../assets/images/categories/ARGS09.png";
import img11 from "../assets/images/categories/ARGS16.png";
import img12 from "../assets/images/categories/ARGS13.png";
import img13 from "../assets/images/categories/ARGS15.png";
import img14 from "../assets/images/categories/ARGS14.png";
import img15 from "../assets/images/categories/ARGS12.png";

const categories = [
  { name: "categories.videoGames", image: img1, link: "/shop?category=815" },
  { name: "categories.consoles", image: img2, link: "/shop?category=821" },
  { name: "categories.consoleAccessories", image: img3, link: "/shop?category=829" },
  { name: "categories.used", image: img4, link: "/shop?category=854" },
  { name: "categories.cardsSubs", image: img5, link: "/shop?category=843" },
  { name: "categories.collectors", image: img6, link: "/shop?category=846" },
  { name: "categories.figurines", image: img7, link: "/shop?category=846" },
  { name: "categories.steelbooks", image: img8, link: "/shop?category=2842" },
  { name: "categories.postersFrames", image: img9, link: "/shop?category=852" },
  { name: "categories.pcAccessories", image: img10, link: "/shop?category=836" },
  { name: "categories.goodies", image: img11, link: "/shop?category=846" },
  { name: "categories.miniatures", image: img12, link: "/shop?category=850" },
  { name: "categories.clothing", image: img13, link: "/shop?category=1183" },
  { name: "categories.usedConsoles", image: img14, link: "/shop?tag=933" },
  { name: "categories.retro", image: img15, link: "/shop?category=827" },
];
</script>

<template>
  <section class="categories-section">
    <div class="container home-wide">

      <div class="cat-head">
        <h2 class="cat-title">{{ $t('home.browseCategories') }}</h2>
        <div class="cat-nav">
          <button type="button" class="nav-btn cat-prev" :aria-label="$t('shop.prevPage')">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" class="nav-btn cat-next" :aria-label="$t('shop.nextPage')">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Swiper
          class="cat-swiper"
          :modules="[Navigation]"
          :speed="400"
          :watch-overflow="true"
          breakpoints-base="container"
          :breakpoints="{
            0: { slidesPerView: 3.3, spaceBetween: 12 },
            560: { slidesPerView: 4.3, spaceBetween: 16 },
            760: { slidesPerView: 5, spaceBetween: 20, slidesPerGroup: 2 },
            980: { slidesPerView: 6, spaceBetween: 20, slidesPerGroup: 3 },
            1200: { slidesPerView: 7, spaceBetween: 24, slidesPerGroup: 3 },
            1380: { slidesPerView: 8, spaceBetween: 24, slidesPerGroup: 4 }
          }"
          :navigation="{
            prevEl: '.cat-prev',
            nextEl: '.cat-next',
            disabledClass: 'is-disabled',
          }"
      >
        <SwiperSlide v-for="(cat, index) in categories" :key="index">
          <NuxtLink :to="cat.link" class="cat-item">
            <span class="cat-thumb">
              <img :src="cat.image" :alt="$t(cat.name)" width="150" height="150" loading="lazy" />
            </span>
            <span class="cat-name">{{ $t(cat.name) }}</span>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>

    </div>
  </section>
</template>

<style scoped>
.categories-section {
  padding: 36px 0 28px;
  background: #fff;
}

.cat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.cat-title {
  margin: 0;
  font-size: clamp(20px, 2.4vw, 26px);
}

.cat-nav {
  display: flex;
  gap: 8px;
}

.nav-btn {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e1e5ef;
  border-radius: 50%;
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
  transition: all .15s ease;
}

.nav-btn:hover:not(.is-disabled) {
  border-color: transparent;
  background: var(--gs-gradient);
  color: #fff;
}

.nav-btn.is-disabled {
  opacity: .35;
  cursor: default;
}

/* Arrows point where they move in Arabic too */
:global([dir="rtl"] .categories-section .nav-btn i) {
  transform: scaleX(-1);
}

.cat-swiper {
  padding: 6px 2px 4px;
}

.cat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  text-decoration: none;
}

.cat-thumb {
  display: grid;
  place-items: center;
  width: 100%;
  max-width: 136px;
  aspect-ratio: 1 / 1;
  padding: 8px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 35%, #ffffff, #eef1f8 70%);
  box-shadow: 0 4px 14px rgba(15, 30, 74, .06);
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
}

.cat-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.cat-name {
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  min-height: 2.6em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cat-item:hover .cat-thumb,
.cat-item:focus-visible .cat-thumb {
  transform: translateY(-4px);
  border-color: #8f6bff;
  box-shadow: 0 12px 24px rgba(106, 61, 240, .18);
}

.cat-item:hover .cat-name {
  color: var(--gs-primary, #0A63D8);
}

.cat-item:focus-visible {
  outline: none;
}

@media (max-width: 575.98px) {
  .categories-section {
    padding: 24px 0 16px;
  }

  /* swiping is the natural gesture on phones */
  .cat-nav {
    display: none;
  }

  .cat-name {
    font-size: 12.5px;
  }
}
</style>
