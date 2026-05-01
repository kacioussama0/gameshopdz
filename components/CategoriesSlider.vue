<script setup lang="ts">

import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

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
  { name: "Jeux Video", image: img1, link: "/shop?category=815" },
  { name: "Consoles", image: img2, link: "/shop?category=821" },
  { name: "Accessoires Consoles", image: img3, link: "/shop?category=829" },
  { name: "Occasions", image: img4, link: "/shop?category=854" },
  { name: "Cartes & Abonnement", image: img5, link: "/shop?category=843" },
  { name: "Collectors", image: img6, link: "/shop?category=846" },
  { name: "Figurines", image: img7, link: "/shop?category=846" },
  { name: "Steelbooks", image: img8, link: "/shop?category=2842" },
  { name: "Posters & Cadres", image: img9, link: "/shop?category=852" },
  { name: "PC Accessoires", image: img10, link: "/shop?category=836" },
  { name: "Goodies", image: img11, link: "/shop?category=846" },
  { name: "Miniatures", image: img12, link: "/shop?category=850" },
  { name: "Vêtements", image: img13, link: "/shop?category=1183" },
  { name: "Consoles d'occasions", image: img14, link: "/shop?tag=933" },
  { name: "Retro", image: img15, link: "/shop?category=827" },
];
</script>

<template>
  <section class="content-inner-1 pb-2 pt-5 bg-white overflow-hidden shortcuts">
    <div class="container">


      <Swiper
          class="swiper swiper-four text-center"

          :space-between="30"
          :modules="[Autoplay,Pagination,Navigation]"
          :speed="300"
          :pagination="{ clickable: true }"
          :breakpoints="{
            0: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 20 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            1400: { slidesPerView: 6, spaceBetween: 25 },
            2000: { slidesPerView: 7, spaceBetween: 30 },
            2500: { slidesPerView: 8, spaceBetween: 35 }
          }"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
      >

        <SwiperSlide
            v-for="(cat, index) in categories"
            :key="index"
            class="swiper-slide px-lg-5"
        >
          <RouterLink :to="cat.link" class="text-center">

            <img v-if="cat.image" :src="cat.image" width="100" height="100" class="rounded-circle mb-3" />

            <h6 class="text-center">{{ cat.name }}</h6>

          </RouterLink>
        </SwiperSlide>

        <span class=" swiper-button-prev slick-arrow new-gradient" style=""></span>
        <span class=" swiper-button-next slick-arrow new-gradient" style=""></span>

      </Swiper>



    </div>
  </section>
</template>

<style scoped>



.slick-arrow {
  background: #164094;
  width: 45px;

  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #fff0df;
  z-index: 5;
  outline: none;
  cursor: pointer;
}

.swiper-button-prev {
  left: 0;
  border-radius: 50%;
}

.swiper-button-next {
  right: 0;
  border-radius: 50%;

}

.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 22px;
}

.swiper-four {
  position: relative;
  padding-bottom: 80px; /* creates space for dots */
}


@media screen and (max-width: 500px) {

  .swiper-button-prev , .swiper-button-next  {
    display: none;
  }
}

h6 {
  margin-bottom: 0;
}
</style>