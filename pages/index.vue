<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import { IMAGES } from "@/constent/theme";
import productBg1 from "@/assets/images/shop/large/product1.png";
import productBg2 from "@/assets/images/shop/large/product2.png";
import MainBanner from "~/elements/MainBanner.vue";
import Header from "~/components/Header.vue";

const shopSlides = [
  { img: IMAGES.clothes1, name: "Shirts" },
  { img: IMAGES.clothes2, name: "Shorts" },
  { img: IMAGES.clothes3, name: "t-Shirt" },
  { img: IMAGES.clothes4, name: "t-Jeans" },
  { img: IMAGES.clothes5, name: "t-Jeans" },
  { img: IMAGES.clothes2, name: "Shorts" },
  { img: IMAGES.clothes3, name: "t-Shirt" },
];

</script>

<template>
  <header class="site-header mo-left header style-1 header-transparent">
    <Header />
  </header>
  <div class="page-content bg-light">
    <div class="main-slider-wrapper">
      <MainBanner />
    </div>
    <!-- Shop Section Start -->
    <section class="shop-section overflow-hidden">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col-lg-8 left-box">
            <Swiper
              class="swiper swiper-shop"
              :slides-per-view="5"
              :loop="true"
              :speed="1200"
              :modules="[Navigation, Autoplay]"
              :autoplay="{
                delay: 1500,
              }"
              :navigation="{
                prevEl: '.shop-button-prev',
                nextEl: '.shop-button-next',
              }"
            >
              <SwiperSlide class="swiper-slide" v-for="{ img, name } in shopSlides">
                <div class="shop-box style-1 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="dz-media">
                    <img :src="img" alt="image" />
                  </div>
                  <h6 class="product-name">
                    <RouterLink to="/shop-with-category">{{ name }}</RouterLink>
                  </h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="col-lg-4 right-box">
            <div>
              <h3 class="title wow fadeInUp" data-wow-delay="1.2s">Featured Categories</h3>
              <p class="text wow fadeInUp" data-wow-delay="1.4s">Discover the most trending products in Pixio.</p>
              <div class="pagination-align wow fadeInUp" data-wow-delay="1.6s">
                <div class="shop-button-prev">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path
                      d="M32.2645 16.9503H4.08145L10.7508 10.4669C11.2604 9.97176 10.5046 9.1837 9.98813 9.68289C9.98815 9.68286 2.35193 17.1063 2.35193 17.1063C2.12911 17.3092 2.14686 17.6755 2.35196 17.8903C2.35193 17.8903 9.98815 25.3169 9.98815 25.3169C10.5021 25.81 11.2622 25.0367 10.7508 24.5328C10.7508 24.5329 4.07897 18.0441 4.07897 18.0441H32.2645C32.9634 18.0375 32.9994 16.9636 32.2645 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="shop-button-next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path
                      d="M2.73549 16.9503H30.9186L24.2492 10.4669C23.7396 9.97176 24.4954 9.1837 25.0119 9.68289L32.6481 17.1063C32.8709 17.3092 32.8531 17.6755 32.648 17.8903L25.0118 25.3169C24.4979 25.81 23.7378 25.0367 24.2492 24.5328L30.921 18.0441H2.73549C2.03663 18.0375 2.00064 16.9636 2.73549 16.9503Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <RouterLink class="icon-button d-md-inline-block" to="/shop-standard">
              <div class="text-row word-rotate-box c-black">
                <svg class="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_85_881)">
                    <path
                      d="M31.3072 10.7239L39.5891 19.0059C39.8523 19.2696 40.0001 19.627 40.0001 19.9995C40.0001 20.3721 39.8523 20.7295 39.5891 20.9932L31.3072 29.2752C31.1236 29.4582 30.8748 29.5608 30.6156 29.5606C30.3564 29.5604 30.1078 29.4573 29.9245 29.274C29.7412 29.0907 29.6381 28.8422 29.6379 28.5829C29.6377 28.3237 29.7404 28.075 29.9234 27.8913L36.8368 20.9781L0.978516 20.9781C0.718997 20.9781 0.470108 20.875 0.2866 20.6915C0.103093 20.508 -1.17109e-07 20.2591 -1.14015e-07 19.9995C-1.1092e-07 19.74 0.103093 19.4911 0.2866 19.3076C0.470108 19.1241 0.718997 19.021 0.978516 19.021L36.8368 19.021L29.9234 12.1077C29.7404 11.9241 29.6377 11.6754 29.6379 11.4162C29.6381 11.1569 29.7412 10.9084 29.9245 10.7251C30.1078 10.5418 30.3564 10.4387 30.6156 10.4385C30.8748 10.4383 31.1236 10.5409 31.3072 10.7239Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_85_881">
                      <rect width="40" height="40" fill="white" transform="matrix(-1.19249e-08 1 1 1.19249e-08 0 0)"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span class="text__char" style="--char-rotate: 0deg">l</span><span class="text__char" style="--char-rotate: 13.333333333333334deg">a</span
                ><span class="text__char" style="--char-rotate: 26.666666666666668deg">t</span><span class="text__char" style="--char-rotate: 40deg">e</span
                ><span class="text__char" style="--char-rotate: 53.333333333333336deg">s</span><span class="text__char" style="--char-rotate: 66.66666666666667deg">t</span
                ><span class="text__char" style="--char-rotate: 80deg"> </span><span class="text__char" style="--char-rotate: 93.33333333333334deg">n</span
                ><span class="text__char" style="--char-rotate: 106.66666666666667deg">e</span><span class="text__char" style="--char-rotate: 120deg">w</span
                ><span class="text__char" style="--char-rotate: 133.33333333333334deg">s</span><span class="text__char" style="--char-rotate: 146.66666666666669deg"> </span
                ><span class="text__char" style="--char-rotate: 160deg">-</span><span class="text__char" style="--char-rotate: 173.33333333333334deg"> </span
                ><span class="text__char" style="--char-rotate: 186.66666666666669deg">l</span><span class="text__char" style="--char-rotate: 200deg">a</span
                ><span class="text__char" style="--char-rotate: 213.33333333333334deg">t</span><span class="text__char" style="--char-rotate: 226.66666666666669deg">e</span
                ><span class="text__char" style="--char-rotate: 240deg">s</span><span class="text__char" style="--char-rotate: 253.33333333333334deg">t</span
                ><span class="text__char" style="--char-rotate: 266.6666666666667deg"> </span><span class="text__char" style="--char-rotate: 280deg">n</span
                ><span class="text__char" style="--char-rotate: 293.33333333333337deg">e</span><span class="text__char" style="--char-rotate: 306.6666666666667deg">w</span
                ><span class="text__char" style="--char-rotate: 320deg">s</span><span class="text__char" style="--char-rotate: 333.33333333333337deg"> </span
                ><span class="text__char" style="--char-rotate: 346.6666666666667deg">-</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- Shop Section End -->

    <!-- About Section Start -->
    <section class="content-inner overflow-hidden">
      <div class="container">
        <div class="row about-style1">
          <div class="col-lg-6 col-md-12 m-b30">
            <div class="about-thumb wow fadeInUp position-relative" data-wow-delay="0.2s">
              <div class="dz-media h-100">
                <img src="../assets/images/women.png" alt="" />
              </div>
              <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-light btn-xl">Woman collection</RouterLink>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 align-self-center">
            <div class="about-content">
              <div class="section-head style-1 wow fadeInUp" data-wow-delay="0.4s">
                <h3 class="title">Set your wardrobe with our amazing selection!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
              </div>
              <RouterLink class="service-btn-2 wow fadeInUp" data-wow-delay="0.6s" to="/about-us">
                <span class="icon-wrapper">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.832 31.1663L31.1654 12.833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.832 12.833H31.1654V31.1663" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </RouterLink>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="shop-card style-6 wow fadeInUp" data-wow-delay="0.8s">
                    <div class="dz-media">
                      <img src="../assets/images/shop/product/medium/1.png" alt="image" />
                    </div>
                    <div class="dz-content">
                      <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-light btn-md">Child Fashion</RouterLink>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="shop-card style-6 wow fadeInUp" data-wow-delay="1.0s">
                    <div class="dz-media">
                      <img src="../assets/images/shop/product/medium/2.png" alt="image" />
                    </div>
                    <div class="dz-content">
                      <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-light btn-md">Man collection</RouterLink>
                    </div>
                    <span class="sale-badge">50%<br />Sale <img src="../assets/images/star.png" alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Dz Silder Start -->
    <section class="content-inner-3 overflow-hidden">
      <div class="dz-features-wrapper overflow-hidden">
        <ul class="dz-features text-wrapper">
          <li class="item">
            <h2 class="title">Jacket</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Jeans</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Shirts</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Shorts</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">t-shirt</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Blazer</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Jacket</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Jeans</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Shirts</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Shorts</h2>
          </li>
          <li class="item">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
        </ul>
      </div>
    </section>
    <!-- Dz Silder End -->

    <!-- Products Section Start -->
    <section class="content-inner">
      <div class="container">
        <ProductGallery />
      </div>
    </section>
    <!-- Products Section Start -->

    <!-- Collection Section Start -->
    <section class="adv-area">
      <div class="container-fluid px-0">
        <div class="row product-style2 g-0">
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-box style-4">
              <div class="product-media" :style="`background-image: url(${productBg1})`"></div>
              <div class="sale-box">
                <div class="badge style-1 mb-1">Sale Up to 50% Off</div>
                <h2 class="sale-name">Summer<span>2023</span></h2>
                <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-lg text-uppercase">Shop Now</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
            <div class="product-box style-4">
              <div class="product-media" :style="`background-image: url(${productBg2})`"></div>
              <div class="product-content">
                <div class="main-content">
                  <div class="badge style-1 mb-3">Sale Up to 50% Off</div>
                  <h2 class="product-name">New Summer Collection</h2>
                </div>
                <RouterLink to="/shop-list" class="btn btn-secondary btn-lg text-uppercase">Shop Now</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Collection Section End -->

    <!-- About Section Start -->
    <section class="content-inner-2 overflow-hidden">
      <div class="container">
        <div class="row align-items-xl-center align-items-start">
          <div class="col-lg-5 col-md-12 m-b30 align-self-center">
            <div class="dz-media style-1 img-ho1 wow fadeInUp" data-wow-delay="0.2s">
              <img src="../assets/images/about/pic3.jpg" alt="image" />
            </div>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="row justify-content-between align-items-center">
              <div class="col-lg-8 col-md-8 col-sm-12">
                <div class="section-head style-1 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="left-content">
                    <h2 class="title">Users Who Viewed This Also Checked Out These Similar Profiles</h2>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 text-md-end wow fadeInUp" data-wow-delay="0.6s">
                <RouterLink class="icon-button d-md-block d-none ms-md-auto m-b30" to="/shop-standard">
                  <div class="text-row word-rotate-box c-black">
                    <svg class="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <g clip-path="url(#clip0_85_1327)">
                        <path
                          d="M31.3072 10.7239L39.5891 19.0059C39.8523 19.2696 40.0001 19.627 40.0001 19.9995C40.0001 20.3721 39.8523 20.7295 39.5891 20.9932L31.3072 29.2752C31.1236 29.4582 30.8748 29.5608 30.6156 29.5606C30.3564 29.5604 30.1078 29.4573 29.9245 29.274C29.7412 29.0907 29.6381 28.8422 29.6379 28.5829C29.6377 28.3237 29.7404 28.075 29.9234 27.8913L36.8368 20.9781L0.978516 20.9781C0.718997 20.9781 0.470108 20.875 0.2866 20.6915C0.103093 20.508 -1.17109e-07 20.2591 -1.14015e-07 19.9995C-1.1092e-07 19.74 0.103093 19.4911 0.2866 19.3076C0.470108 19.1241 0.718997 19.021 0.978516 19.021L36.8368 19.021L29.9234 12.1077C29.7404 11.9241 29.6377 11.6754 29.6379 11.4162C29.6381 11.1569 29.7412 10.9084 29.9245 10.7251C30.1078 10.5418 30.3564 10.4387 30.6156 10.4385C30.8748 10.4383 31.1236 10.5409 31.3072 10.7239Z"
                          fill="black"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_85_1327">
                          <rect width="40" height="40" fill="white" transform="matrix(-1.19249e-08 1 1 1.19249e-08 0 0)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="text__char" style="--char-rotate: 0deg">a</span><span class="text__char" style="--char-rotate: 12deg">l</span
                    ><span class="text__char" style="--char-rotate: 24deg">l</span><span class="text__char" style="--char-rotate: 36deg"> </span
                    ><span class="text__char" style="--char-rotate: 48deg">p</span><span class="text__char" style="--char-rotate: 60deg">r</span
                    ><span class="text__char" style="--char-rotate: 72deg">o</span><span class="text__char" style="--char-rotate: 84deg">d</span
                    ><span class="text__char" style="--char-rotate: 96deg">u</span><span class="text__char" style="--char-rotate: 108deg">c</span
                    ><span class="text__char" style="--char-rotate: 120deg">t</span><span class="text__char" style="--char-rotate: 132deg">s</span
                    ><span class="text__char" style="--char-rotate: 144deg"> </span><span class="text__char" style="--char-rotate: 156deg">-</span
                    ><span class="text__char" style="--char-rotate: 168deg"> </span><span class="text__char" style="--char-rotate: 180deg">a</span
                    ><span class="text__char" style="--char-rotate: 192deg">l</span><span class="text__char" style="--char-rotate: 204deg">l</span
                    ><span class="text__char" style="--char-rotate: 216deg"> </span><span class="text__char" style="--char-rotate: 228deg">p</span
                    ><span class="text__char" style="--char-rotate: 240deg">r</span><span class="text__char" style="--char-rotate: 252deg">o</span
                    ><span class="text__char" style="--char-rotate: 264deg">d</span><span class="text__char" style="--char-rotate: 276deg">u</span
                    ><span class="text__char" style="--char-rotate: 288deg">c</span><span class="text__char" style="--char-rotate: 300deg">t</span
                    ><span class="text__char" style="--char-rotate: 312deg">s</span><span class="text__char" style="--char-rotate: 324deg"> </span
                    ><span class="text__char" style="--char-rotate: 336deg">-</span><span class="text__char" style="--char-rotate: 348deg"> </span>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6 m-b15">
                <div class="shop-card style-5 wow fadeInUp" data-wow-delay="0.8s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/1.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 m-b15">
                <div class="shop-card style-5 wow fadeInUp" data-wow-delay="1.0s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/2.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 m-b15">
                <div class="shop-card style-5 wow fadeInUp" data-wow-delay="1.2s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/3.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- About Section -->
    <section class="content-inner overflow-hidden p-b0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 align-self-center">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/1.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.3s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/2.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title text-success">Free delivery</span>
                      <h6 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                  <span class="sale-badge">50%<br />Sale <img src="../assets/images/star.png" alt="" /></span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/3.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title text-success">Free delivery</span>
                      <h6 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.6s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/4.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Athletic Mesh Sports Leggings</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 m-b30">
            <div class="about-box style-1 clearfix h-100 right">
              <div class="dz-media h-100">
                <img src="../assets/images/about/pic1.jpg" alt="" />
                <div class="media-contant">
                  <h2 class="title">Great saving on everyday essentials</h2>
                  <h5 class="sub-title">Up to 60% off + up to $107 Cashback</h5>
                  <RouterLink to="/shop-list" class="btn btn-white btn-lg">See All</RouterLink>
                </div>
                <svg class="title animation-text" viewBox="0 0 1320 300">
                  <text x="0" y="">Great saving</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section -->

    <!-- Map Area Start-->
    <section class="content-inner-3 overflow-hidden" id="Maping">
      <MapSection />
    </section>

    <!-- Blockbuster deal Start -->
    <section class="content-inner-2 overflow-hidden">
      <div class="container">
        <div class="section-head style-1 wow fadeInUp d-lg-flex justify-content-between" data-wow-delay="0.2s">
          <div class="left-content">
            <h2 class="title">Blockbuster deals</h2>
          </div>
          <RouterLink to="/shop-list" class="text-secondary font-14 d-flex align-items-center gap-1"
            >See all deals
            <i class="icon feather icon-chevron-right font-18"></i>
          </RouterLink>
        </div>
        <BlockBusterSection />
      </div>
    </section>
    <!-- Blockbuster deal Start -->

    <!-- Offer Section Start -->
    <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-1 wow fadeInUp d-flex justify-content-between m-b30" data-wow-delay="0.2s">
          <div class="left-content">
            <h2 class="title">Featured offer for you</h2>
          </div>
          <RouterLink to="/shop-list" class="text-secondary font-14 d-flex align-items-center gap-1"
            >See All
            <i class="icon feather icon-chevron-right font-18"></i>
          </RouterLink>
        </div>
      </div>
      <OfferSection />
    </section>
    <!-- Product End -->

    <!-- Featured Section Start -->
    <section class="content-inner overflow-hidden">
      <div class="container">
        <div class="section-head style-1 wow fadeInUp d-flex justify-content-between" data-wow-delay="0.2s">
          <div class="left-content">
            <h2 class="title">Featured now</h2>
          </div>
          <RouterLink to="/shop-list" class="text-secondary font-14 d-flex align-items-center gap-1"
            >See All
            <i class="icon feather icon-chevron-right font-18"></i>
          </RouterLink>
        </div>
        <FeaturSection />
      </div>
    </section>
    <!-- Featured Section End -->

    <!-- About Section -->
    <section class="content-inner overflow-hidden p-b0">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 m-b30">
            <div class="about-box style-1 wow fadeInUp clearfix h-100" data-wow-delay="0.2s">
              <div class="dz-media h-100">
                <img src="../assets/images/about/pic2.jpg" alt="" />
                <div class="media-contant">
                  <h2 class="title">Recent Additions to Your Shortlist</h2>
                  <RouterLink to="/shop-list" class="btn btn-white">Shop Now</RouterLink>
                </div>
                <svg class="title animation-text" viewBox="0 0 1320 300">
                  <text x="0" y="">Shortlist</text>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 align-self-center">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/1.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.6s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/2.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                  <span class="sale-badge">50%<br />Sale <img src="../assets/images/star.png" alt="" /></span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/3.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 m-b30">
                <div class="shop-card style-3 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="dz-media">
                    <img src="../assets/images/shop/product-2/4.png" alt="image" />
                  </div>
                  <div class="dz-content">
                    <div>
                      <span class="sale-title">up to 79% off</span>
                      <h6 class="title"><RouterLink to="/shop-list">Athletic Mesh Sports Leggings</RouterLink></h6>
                    </div>
                    <h6 class="price">
                      $80
                      <del>$95</del>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section -->

    <!-- company-box Start -->
    <section class="content-inner-2">
      <div class="container">
        <div class="section-head style-1 wow fadeInUp d-flex justify-content-between" data-wow-delay="0.2s">
          <div class="left-content">
            <h2 class="title">Sponsored</h2>
          </div>
          <RouterLink to="/shop-list" class="text-secondary font-14 d-flex align-items-center gap-1"
            >See All
            <i class="icon feather icon-chevron-right font-18"></i>
          </RouterLink>
        </div>
        <SponsoredSection />
      </div>
    </section>
    <!-- company-box End -->

    <!-- Blog Start -->
    <section class="content-inner-3 overflow-hidden p-b0">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div class="section-head style-2 m-0 wow fadeInUp" data-wow-delay="0.1s">
              <div class="left-content">
                <h2 class="title">Discover the most trending Post in Pixio.</h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12 text-md-end m-b30 wow fadeInUp" data-wow-delay="0.2s">
            <RouterLink class="icon-button d-md-inline-block d-none" to="/shop-standard">
              <div class="text-row word-rotate-box c-black">
                <svg class="badge__emoji" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g clip-path="url(#clip0_85_881)">
                    <path
                      d="M31.3072 10.7239L39.5891 19.0059C39.8523 19.2696 40.0001 19.627 40.0001 19.9995C40.0001 20.3721 39.8523 20.7295 39.5891 20.9932L31.3072 29.2752C31.1236 29.4582 30.8748 29.5608 30.6156 29.5606C30.3564 29.5604 30.1078 29.4573 29.9245 29.274C29.7412 29.0907 29.6381 28.8422 29.6379 28.5829C29.6377 28.3237 29.7404 28.075 29.9234 27.8913L36.8368 20.9781L0.978516 20.9781C0.718997 20.9781 0.470108 20.875 0.2866 20.6915C0.103093 20.508 -1.17109e-07 20.2591 -1.14015e-07 19.9995C-1.1092e-07 19.74 0.103093 19.4911 0.2866 19.3076C0.470108 19.1241 0.718997 19.021 0.978516 19.021L36.8368 19.021L29.9234 12.1077C29.7404 11.9241 29.6377 11.6754 29.6379 11.4162C29.6381 11.1569 29.7412 10.9084 29.9245 10.7251C30.1078 10.5418 30.3564 10.4387 30.6156 10.4385C30.8748 10.4383 31.1236 10.5409 31.3072 10.7239Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_85_881">
                      <rect width="40" height="40" fill="white" transform="matrix(-1.19249e-08 1 1 1.19249e-08 0 0)"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span class="text__char" style="--char-rotate: 0deg">l</span><span class="text__char" style="--char-rotate: 13.333333333333334deg">a</span
                ><span class="text__char" style="--char-rotate: 26.666666666666668deg">t</span><span class="text__char" style="--char-rotate: 40deg">e</span
                ><span class="text__char" style="--char-rotate: 53.333333333333336deg">s</span><span class="text__char" style="--char-rotate: 66.66666666666667deg">t</span
                ><span class="text__char" style="--char-rotate: 80deg"> </span><span class="text__char" style="--char-rotate: 93.33333333333334deg">n</span
                ><span class="text__char" style="--char-rotate: 106.66666666666667deg">e</span><span class="text__char" style="--char-rotate: 120deg">w</span
                ><span class="text__char" style="--char-rotate: 133.33333333333334deg">s</span><span class="text__char" style="--char-rotate: 146.66666666666669deg"> </span
                ><span class="text__char" style="--char-rotate: 160deg">-</span><span class="text__char" style="--char-rotate: 173.33333333333334deg"> </span
                ><span class="text__char" style="--char-rotate: 186.66666666666669deg">l</span><span class="text__char" style="--char-rotate: 200deg">a</span
                ><span class="text__char" style="--char-rotate: 213.33333333333334deg">t</span><span class="text__char" style="--char-rotate: 226.66666666666669deg">e</span
                ><span class="text__char" style="--char-rotate: 240deg">s</span><span class="text__char" style="--char-rotate: 253.33333333333334deg">t</span
                ><span class="text__char" style="--char-rotate: 266.6666666666667deg"> </span><span class="text__char" style="--char-rotate: 280deg">n</span
                ><span class="text__char" style="--char-rotate: 293.33333333333337deg">e</span><span class="text__char" style="--char-rotate: 306.6666666666667deg">w</span
                ><span class="text__char" style="--char-rotate: 320deg">s</span><span class="text__char" style="--char-rotate: 333.33333333333337deg"> </span
                ><span class="text__char" style="--char-rotate: 346.6666666666667deg">-</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
      <BlogSection />
    </section>
    <!-- Blog End -->

    <!-- collection-bx -->
    <section class="collection-bx content-inner-3 overflow-hidden">
      <div class="container">
        <h2 class="title wow fadeInUp" data-wow-delay="0.2s">Upgrade your style with our top-notch collection.</h2>
        <div class="text-center">
          <RouterLink to="/shop-list" class="btn btn-secondary btn-lg wow fadeInUp m-b30" data-wow-delay="0.4s">All Collections</RouterLink>
        </div>
      </div>
      <div class="collection1"><img src="../assets/images/collection/1.png" alt="" /></div>
      <div class="collection2"><img src="../assets/images/collection/2.png" alt="" /></div>
      <div class="collection3"><img src="../assets/images/collection/3.png" alt="" /></div>
      <div class="collection4"><img src="../assets/images/collection/4.png" alt="" /></div>
      <div class="collection5"><img src="../assets/images/collection/5.png" alt="" /></div>
    </section>
    <!-- collection-bx -->
  </div>
</template>
