<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Autoplay, Navigation } from "swiper/modules";
import ModelVideo from "@/elements/ModelVideo.vue";
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const isOpen = ref(false);

const openVideo = () => {
  isOpen.value = true;
};

const closeModel = () => {
  isOpen.value = false;
};
</script>

<template>
  <ModelVideo :isClose="closeModel" :isVideoModalOpen="isOpen" videoId="YwYoyQ1JdpQ" />
  <div class="slider-inner">
    <div class="row">
      <div class="col-lg-6">
        <Swiper class="slider-main" :modules="[Thumbs, Autoplay]" :thumbs="{ swiper: thumbsSwiper }" :autoplay="{ delay: 1200 }" :speed="1200">
          <SwiperSlide class="slick-slide">
            <div class="content-info">
              <h1 class="title">Beautiful Woman Purple Sweater.</h1>
              <div class="swiper-meta-items">
                <div class="meta-content">
                  <span class="price-name">Price</span>
                  <span class="price-num d-inline-block">&#036;80.00</span>
                </div>
              </div>
              <div class="content-btn m-b30">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary btnhover20">VIEW DETAIL </RouterLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="content-info">
              <h1 class="title">Shot Slad Curly Woman.</h1>
              <div class="swiper-meta-items">
                <div class="meta-content">
                  <span class="price-name">Price</span>
                  <span class="price-num d-inline-block">&#036;30.00</span>
                </div>
              </div>
              <div class="content-btn m-b30">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary btnhover20">VIEW DETAIL </RouterLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="content-info">
              <h1 class="title">Athletic Mesh Sports Leggings.</h1>
              <div class="swiper-meta-items">
                <div class="meta-content">
                  <span class="price-name">Price</span>
                  <span class="price-num d-inline-block">&#036;75.00</span>
                </div>
              </div>
              <div class="content-btn m-b30">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary btnhover20">VIEW DETAIL </RouterLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="content-info">
              <h1 class="title">Curly Girl Beautiful Dress.</h1>
              <div class="swiper-meta-items">
                <div class="meta-content">
                  <span class="price-name">Price</span>
                  <span class="price-num d-inline-block">&#036;50.00</span>
                </div>
              </div>
              <div class="content-btn m-b30">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary btnhover20">VIEW DETAIL </RouterLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="content-info">
              <h1 class="title">Vintage Denim Overalls Shorts.</h1>
              <div class="swiper-meta-items">
                <div class="meta-content">
                  <span class="price-name">Price</span>
                  <span class="price-num d-inline-block">&#036;65.00</span>
                </div>
              </div>
              <div class="content-btn m-b30">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 btnhover20">ADD TO CART</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary btnhover20">VIEW DETAIL </RouterLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="col-lg-6">
        <Swiper
          class="slider-thumbs"
          :slides-per-view="2"
          :modules="[Thumbs, Navigation]"
          watch-slides-progress
          @swiper="setThumbsSwiper"
          :speed="1200"
          :navigation="{
            nextEl: '.slick-next',
          }"
        >
          <SwiperSlide class="slick-slide">
            <div class="banner-media" data-name="Winter">
              <div class="img-preview">
                <img src="../assets/images/banner/banner-media.png" alt="banner-media" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="banner-media" data-name="Summer">
              <div class="img-preview">
                <img src="../assets/images/banner/banner-media2.png" alt="banner-media" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="banner-media" data-name="Leggings">
              <div class="img-preview">
                <img src="../assets/images/banner/banner-media.png" alt="banner-media" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="banner-media" data-name="Dress">
              <div class="img-preview">
                <img src="../assets/images/banner/banner-media4.png" alt="banner-media" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="slick-slide">
            <div class="banner-media" data-name="Shorts">
              <div class="img-preview">
                <img src="../assets/images/banner/banner-media5.png" alt="banner-media" />
              </div>
            </div>
          </SwiperSlide>
          <button class="slick-next slick-arrow" aria-label="Next" type="button">Next</button>
        </Swiper>
      </div>
    </div>
    <div class="bottom-content align-items-end wow fadeInUp" data-wow-delay="1.0s">
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
        <path
          d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z"
          fill="black"
        />
      </svg>
      <div>
        <span class="sub-title">Summer Collection</span>
        <h4 class="title">Trendy and Classic for the New Season</h4>
      </div>
    </div>
    <svg class="star-1" xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
      <path
        d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z"
        fill="#FEEB9D"
      />
    </svg>
    <svg class="star-2" xmlns="http://www.w3.org/2000/svg" width="82" height="94" viewBox="0 0 82 94" fill="none">
      <path d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z" fill="black" />
    </svg>
    <RouterLink class="animation-btn popup-youtube" to="" @click="openVideo">
      <div class="text-row word-rotate-box c-black">
        <i class="fa-solid fa-play text-dark badge__emoji"></i>
        <span class="text__char" style="--char-rotate: 0deg"> </span><span class="text__char" style="--char-rotate: 14.4deg">M</span><span class="text__char" style="--char-rotate: 28.8deg">o</span
        ><span class="text__char" style="--char-rotate: 43.2deg">r</span><span class="text__char" style="--char-rotate: 57.6deg">e</span><span class="text__char" style="--char-rotate: 72deg"> </span
        ><span class="text__char" style="--char-rotate: 86.4deg">C</span><span class="text__char" style="--char-rotate: 100.8deg">o</span
        ><span class="text__char" style="--char-rotate: 115.2deg">l</span><span class="text__char" style="--char-rotate: 129.6deg">l</span
        ><span class="text__char" style="--char-rotate: 144deg">e</span><span class="text__char" style="--char-rotate: 158.4deg">c</span
        ><span class="text__char" style="--char-rotate: 172.8deg">t</span><span class="text__char" style="--char-rotate: 187.20000000000002deg">i</span
        ><span class="text__char" style="--char-rotate: 201.6deg">o</span><span class="text__char" style="--char-rotate: 216deg">n</span
        ><span class="text__char" style="--char-rotate: 230.4deg"> </span><span class="text__char" style="--char-rotate: 244.8deg">E</span
        ><span class="text__char" style="--char-rotate: 259.2deg">x</span><span class="text__char" style="--char-rotate: 273.6deg">p</span
        ><span class="text__char" style="--char-rotate: 288deg">l</span><span class="text__char" style="--char-rotate: 302.40000000000003deg">o</span
        ><span class="text__char" style="--char-rotate: 316.8deg">r</span><span class="text__char" style="--char-rotate: 331.2deg">e</span
        ><span class="text__char" style="--char-rotate: 345.6deg"> </span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
@media screen and (max-width: 1600px) {
  .slick-arrow {
    bottom: 110px !important;
  }
}
@media screen and (max-width: 535px) {
  .slick-arrow {
    bottom: 100px !important;
  }
}
</style>
