<script setup lang="ts">
import Home3Swiper from "@/components/Home3Swiper.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import product1 from "@/assets/images/shop/large/product1.png";
import product2 from "@/assets/images/shop/large/product2.png";
import OfferSection from "@/components/OfferSection.vue";
import SponsoredSection from "@/components/SponsoredSection.vue";
import { ref } from "vue";
import ModelVideo from "@/elements/ModelVideo.vue";
import { RouterLink } from "vue-router";

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
  <header class="site-header mo-left header style-1 header-transparent">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Swiper Banner Start -->
    <div class="main-slider style-3">
      <div class="container">
        <div class="banner-content">
          <div class="row gx-0">
            <div class="col-md-12 col-lg-8 align-self-center">
              <div class="inner-content">
                <div class="content-info">
                  <h1 class="title mb-4 wow flipInX animated" data-wow-delay="0.5s">Make your fashion look mire <span>charming</span></h1>
                  <p class="text" data-swiper-parallax="-40">Sell globally in minutes with localized currencies, languages, and experiences in every market.</p>
                  <div class="content-btn m-b30 wow fadeInUp" data-wow-delay="0.8s" data-swiper-parallax="-60">
                    <RouterLink class="btn btn-secondary btn-lg me-xl-3 me-2 btnhover20" to="/shop-cart">ADD TO CART</RouterLink>
                    <RouterLink class="btn btn-outline-secondary btn-lg btnhover20" to="/shop-standard">VIEW DETAILS</RouterLink>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-5 mb-3 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-card">
                    <div class="dz-media">
                      <img src="../../assets/images/shop/small/pic1.png" alt="/" />
                    </div>
                    <div class="dz-content">
                      <h5 class="dz-title"><RouterLink to="/shop-standard">Collar Casual Shirt</RouterLink></h5>
                      <span class="price">
                        $18
                        <del>$27</del>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-card">
                    <div class="dz-media">
                      <img src="../../assets/images/shop/small/pic2.png" alt="/" />
                    </div>
                    <div class="dz-content">
                      <h5 class="dz-title"><RouterLink to="/shop-standard">Collar Casual Shirt</RouterLink></h5>
                      <span class="price">
                        $18
                        <del>$27</del>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <div class="banner-media">
                <div class="img-preview wow slideInRight" data-wow-delay="0.1s" data-wow-duration="1.5s">
                  <img src="../../assets/images/banner/banner-media3.png" alt="banner-media" />
                </div>
                <RouterLink class="icon-button popup-youtube" to="" @click="openVideo">
                  <div class="text-row word-rotate-box c-black blur">
                    <i class="fa-solid fa-play text-dark badge__emoji"></i>
                    <span class="text__char" style="--char-rotate: 0deg">M</span><span class="text__char" style="--char-rotate: 15deg">o</span
                    ><span class="text__char" style="--char-rotate: 30deg">r</span><span class="text__char" style="--char-rotate: 45deg">e</span
                    ><span class="text__char" style="--char-rotate: 60deg"> </span><span class="text__char" style="--char-rotate: 75deg">C</span
                    ><span class="text__char" style="--char-rotate: 90deg">o</span><span class="text__char" style="--char-rotate: 105deg">l</span
                    ><span class="text__char" style="--char-rotate: 120deg">l</span><span class="text__char" style="--char-rotate: 135deg">e</span
                    ><span class="text__char" style="--char-rotate: 150deg">c</span><span class="text__char" style="--char-rotate: 165deg">t</span
                    ><span class="text__char" style="--char-rotate: 180deg">i</span><span class="text__char" style="--char-rotate: 195deg">o</span
                    ><span class="text__char" style="--char-rotate: 210deg">n</span><span class="text__char" style="--char-rotate: 225deg"> </span
                    ><span class="text__char" style="--char-rotate: 240deg">E</span><span class="text__char" style="--char-rotate: 255deg">x</span
                    ><span class="text__char" style="--char-rotate: 270deg">p</span><span class="text__char" style="--char-rotate: 285deg">l</span
                    ><span class="text__char" style="--char-rotate: 300deg">o</span><span class="text__char" style="--char-rotate: 315deg">r</span
                    ><span class="text__char" style="--char-rotate: 330deg">e</span><span class="text__char" style="--char-rotate: 345deg"> </span>
                  </div>
                </RouterLink>
                <div class="star">
                  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <path d="M34 0L43.6167 24.3833L68 34L43.6167 43.6167L34 68L24.3833 43.6167L0 34L24.3833 24.3833L34 0Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collection1"><img src="../../assets/images/collection/1.png" alt="" /></div>
      <div class="collection2"><img src="../../assets/images/collection/2.png" alt="" /></div>
      <div class="collection3"><img src="../../assets/images/collection/3.png" alt="" /></div>
    </div>
    <!--Swiper Banner End-->

    <!-- abouts-Secthion Start -->
    <section class="content-inner overflow-hidden bg-light-dark">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-12 m-b30">
            <div class="dz-media style-2 wow fadeInUp" data-wow-delay="0.2s">
              <img src="../../assets/images/about/pic8.jpg" alt="image" />
            </div>
          </div>
          <div class="col-lg-8 col-md-12 m-b30">
            <div class="about-wraper position-relative">
              <div class="section-head style-1 wow fadeInUp d-lg-flex justify-content-between align-items-center" data-wow-delay="0.4s">
                <h3 class="title">Discover latest collection</h3>
                <RouterLink class="service-btn-2 wow fadeInUp position-relative light d-md-flex d-none" data-wow-delay="0.6s" to="/about-us">
                  <span class="icon-wrapper">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.832 31.1663L31.1654 12.833" stroke="var(--title)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12.832 12.833H31.1654V31.1663" stroke="var(--title)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </RouterLink>
              </div>

              <Home3Swiper />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- abouts-Secthion End -->

    <!-- Products  Section Start-->
    <section class="content-inner">
      <div class="container">
        <ProductGallery />
      </div>
    </section>
    <!-- Products Section Start-->

    <!-- Collection Section Start -->
    <section class="adv-area">
      <div class="container-fluid px-0">
        <div class="row product-style2 g-0">
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-box style-4">
              <div class="product-media" :style="`background-image: url(${product1})`"></div>
              <div class="sale-box">
                <div class="badge style-1 mb-1">Sale Up to 50% Off</div>
                <h2 class="sale-name">Summer<span>2023</span></h2>
                <RouterLink to="/shop-list" class="btn btn-outline-secondary btn-lg text-uppercase">Shop Now</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
            <div class="product-box style-4">
              <div class="product-media" :style="`background-image: url(${product2})`"></div>
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
    <!-- Collection Section End-->

    <!-- About Section Start-->
    <section class="content-inner-2 overflow-hidden">
      <div class="container">
        <div class="row align-items-xl-center align-items-start">
          <div class="col-lg-5 col-md-12 m-b30 align-self-center">
            <div class="dz-media style-1 img-ho1 wow fadeInUp" data-wow-delay="0.2s">
              <img src="../../assets/images/about/pic3.jpg" alt="image" />
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
                    <img src="../../assets/images/shop/product-2/1.png" alt="image" />
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
                    <img src="../../assets/images/shop/product-2/2.png" alt="image" />
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
                    <img src="../../assets/images/shop/product-2/3.png" alt="image" />
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
    <!-- About Section End-->

    <!-- Offer Section Start-->
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
    <!-- Product End-->

    <!-- company-box Start-->
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
    <!-- company-box End-->

    <!-- Blog Start -->
    <section class="content-inner">
      <div class="container">
        <div class="section-head style-1 wow fadeInUp d-md-flex justify-content-between align-items-center" data-wow-delay="0.1s">
          <div class="left-content">
            <h2 class="title">latest Post</h2>
            <p>Discover the most trending products in Pixio.</p>
          </div>
          <RouterLink class="btn btn-secondary" to="/blog-archive">View All</RouterLink>
        </div>
        <div class="row blog-shap">
          <div class="col-lg-6 col-md-12 col-sm-12 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.1s">
            <div class="dz-card style-1 light">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-3/pic1.jpg" alt="/" />
              </div>
              <div class="dz-info bg-white">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/post-standard">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                </h3>
                <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.1s">
            <div class="row">
              <div class="col-lg-12 col-md-6 m-b30">
                <div class="dz-card blog-half style-7">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic2.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">17 May 2022</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink to="/blog-both-sidebar">Dress to Impress: Elevate Your Everyday Style</RouterLink>
                    </h4>
                    <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 m-b30">
                <div class="dz-card blog-half style-7">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic3.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">17 May 2022</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink to="/blog-both-sidebar">Chic & Unique: Personalized Fashion Finds</RouterLink>
                    </h4>
                    <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog End -->
  </div>
</template>
