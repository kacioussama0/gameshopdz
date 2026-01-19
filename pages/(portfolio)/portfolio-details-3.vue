<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import Header from "~/components/Header.vue";

const gallery = [{ img: IMAGES.portfolio_detail3Pic1 }, { img: IMAGES.portfolio_detail3Pic2 }, { img: IMAGES.portfolio_detail3Pic3 }];

const product = [
  { img: IMAGES.related_pic1, title: "Cozy Knit Cardigan Sweater", badge: "Sweater" },
  { img: IMAGES.related_pic2, title: "Sophisticated Swagger Suit", badge: "Suit" },
  { img: IMAGES.related_pic3, title: "Classic Denim Skinny Jeans", badge: "Jeans" },
  { img: IMAGES.related_pic4, title: "Athletic Mesh Sports Leggings", badge: "Leggings" },
];
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <section class="content-inner-1 section-detail">
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <div class="dz-content">
              <div class="product-tag">
                <RouterLink to="/portfolio-details-1">
                  <span class="badge badge-primary">Toothbrushes</span>
                </RouterLink>
              </div>
              <h2 class="title">Make your fashion look mire charming</h2>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="detail-list-box style-3">
              <ul>
                <li>
                  <span class="title">Client</span>
                  <span>Martin Stewart</span>
                </li>
                <li>
                  <span class="title">Seatpad</span>
                  <span>100% Polyester</span>
                </li>
                <li>
                  <span class="title">Location</span>
                  <span>London, UK</span>
                </li>
                <li>
                  <span class="title">Shipping</span>
                  <span>Free Shipping</span>
                </li>
                <li>
                  <span class="title">Category</span>
                  <span>Child Trolly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner -->
    <div class="container-fluid">
      <Swiper
        class="swiper portfolio-detail3"
        :slides-per-view="4"
        :space-between="30"
        :loop="true"
        :modules="[Autoplay]"
        :autoplay="{
          delay: 2000,
        }"
        :speed="1500"
        :breakpoints="{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          775: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }"
      >
        <SwiperSlide class="swiper-slide">
          <div class="portfolio-box style-2">
            <div class="dz-media">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/swiper/pic1.jpg" alt="/" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="portfolio-box style-2">
            <div class="dz-media">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/swiper/pic2.jpg" alt="/" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="portfolio-box style-2">
            <div class="dz-media">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/swiper/pic3.jpg" alt="/" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="portfolio-box style-2">
            <div class="dz-media">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/swiper/pic4.jpg" alt="/" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div class="portfolio-box style-2">
            <div class="dz-media">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/swiper/pic2.jpg" alt="/" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <section class="content-inner-1 about-section-detail bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-md-6">
            <div class="dz-detail-box border-0 p-0 text-justify">
              <h2>Research & Planning</h2>
              <p class="m-b30 m-lg-b20">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>

              <p class="mb-xl-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-md-6 sticky-top">
            <div class="dz-media rounded">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/about1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="clearfix" id="lightgallery">
      <div class="container">
        <div class="row">
          <div v-for="({ img }, ind) in gallery" class="col-xl-4 col-md-4 m-b30" :key="ind">
            <div class="dz-box portfolio-bx style-1">
              <div class="dz-media rounded">
                <a class="mfp-link lg-item" :href="img" :data-src="img">
                  <i class="feather icon-maximize dz-maximize top-right"></i>
                  <img :src="img" alt="image" class="d-none" />
                </a>
                <img :src="img" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery>

    <!-- Post Pagination -->
    <section class="content-inner pb-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="post-pagination style-1">
              <div class="post-prev">
                <RouterLink to="/portfolio-details-5" class="post-inner">
                  <div class="inner-icon">
                    <i class="icon feather icon-chevron-left"></i>
                  </div>
                  <div class="dz-media me-3">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-1.jpg" alt="" />
                  </div>
                  <div class="dz-info m-0">
                    <span>Swagger</span>
                    <h6 class="m-b0">Sophisticated Swagger Suit</h6>
                  </div>
                </RouterLink>
              </div>
              <div class="post-next">
                <RouterLink to="/portfolio-details-2" class="post-inner">
                  <div class="dz-info">
                    <span>Sweater</span>
                    <h6 class="m-b0">Cozy Knit Cardigan Sweater</h6>
                  </div>
                  <div class="dz-media">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-2.jpg" alt="" />
                  </div>
                  <div class="inner-icon">
                    <i class="icon feather icon-chevron-right"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="content-inner-1 overflow-hidden releted-portfolio">
      <div class="container">
        <div class="section-head style-2">
          <div class="left-content">
            <h2 class="title mb-0">Related Projects</h2>
          </div>
        </div>
        <ProductRelaited />
      </div>
    </section> -->

    <section class="content-inner-1 overflow-hidden releted-portfolio">
      <div class="container">
        <div class="section-head style-2">
          <div class="left-content">
            <h2 class="title mb-0">Related Projects</h2>
          </div>
        </div>
        <div class="swiper-btn-center-lr">
          <Swiper
            class="swiper swiper-four"
            :slides-per-view="4"
            :loop="true"
            :space-between="30"
            :breakpoints="{
              1440: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              775: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }"
          >
            <SwiperSlide class="swiper-slide" v-for="({ img, title, badge }, ind) in product" :key="ind">
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img :src="img" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">{{ badge }}</span>
                    </RouterLink>
                  </div>
                  <h5 class="title">
                    <RouterLink to="/portfolio-details-1">{{ title }}</RouterLink>
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </div>
</template>
