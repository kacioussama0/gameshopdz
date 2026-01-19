<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img1 from "@/assets/images/portfolio/details/portfolio-detail-1/pic1.jpg";
import img2 from "@/assets/images/portfolio/details/portfolio-detail-1/pic2.jpg";
import img3 from "@/assets/images/portfolio/details/portfolio-detail-1/pic3.jpg";
import img4 from "@/assets/images/portfolio/details/portfolio-detail-1/pic4.jpg";
import Header from "~/components/Header.vue";

const gallery1 = [{ img: img1 }, { img: img2 }];
const gallery2 = [{ img: img3 }, { img: img4 }];
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary" style="z-index: unset">
      <div class="container">
        <div class="dz-bnr-inr-entry text-start">
          <h1>
            Make your fashion look <br />
            mire charming
          </h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Portfolio Details 1</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="content-inner portfolio-detail-1" id="lightgallery">
      <div class="container">
        <div class="row" style="z-index: 999">
          <div class="col-lg-8 pe-xl-4 pe-lg-4 pe-auto">
            <div class="row">
              <div class="col-xl-6 col-md-6 col-6 m-b30" v-for="({ img }, ind) in gallery1" :key="ind">
                <div class="dz-box portfolio-bx style-1">
                  <div class="dz-media rounded">
                    <a class="mfp-link lg-item" :href="img" :data-src="img" data-lg-id="75b7cc18-d826-43e4-9d3b-15808826f9e3">
                      <i class="feather icon-maximize dz-maximize top-right"></i>
                      <img :src="img" alt="image" class="d-none" />
                    </a>
                    <img :src="img" alt="image" />
                  </div>
                </div>
              </div>
              <div class="col-xl-12 m-b30">
                <div class="dz-detail-box">
                  <h2>Research &amp; Planning</h2>
                  <p class="m-b30">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>

                  <p class="mb-0">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </p>
                </div>
              </div>
              <div class="col-xl-6 col-md-6 col-6 m-b30" v-for="({ img }, ind) in gallery2" :key="ind">
                <div class="dz-box portfolio-bx style-1">
                  <div class="dz-media rounded">
                    <a class="mfp-link lg-item" :href="img" :data-src="img" data-lg-id="c41a18a1-f7cb-4dd5-bb53-860aedba376a">
                      <i class="feather icon-maximize dz-maximize top-right"></i>
                      <img :src="img" alt="image" class="d-none" />
                    </a>
                    <img :src="img" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="detail-list-box style-1 sticky-top">
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
    </Lightgallery>

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

    <section class="content-inner-1 overflow-hidden releted-portfolio">
      <div class="container">
        <div class="section-head style-2">
          <div class="left-content">
            <h2 class="title mb-0">Related Projects</h2>
          </div>
        </div>
        <div class="swiper-btn-center-lr">
          <Swiper
            class="swiper swiper-four swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
            :slides-per-view="4"
            :space-between="30"
            :loop="true"
            :breakpoints="{
              1200: { slidesPerView: 4 },
              991: { slidesPerView: 3 },
              775: { slidesPerView: 2 },
              240: { slidesPerView: 1 },
            }"
          >
            <SwiperSlide class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 5" data-swiper-slide-index="2" style="width: 300px; margin-right: 30px">
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/related-img/pic3.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Jeans</span>
                    </RouterLink>
                  </div>
                  <h5 class="title"><RouterLink to="/portfolio-details-1">Classic Denim Skinny Jeans</RouterLink></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
              role="group"
              aria-label="4 / 5"
              data-swiper-slide-index="3"
              style="width: 300px; margin-right: 30px"
            >
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/related-img/pic4.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Leggings</span>
                    </RouterLink>
                  </div>
                  <h5 class="title"><RouterLink to="/portfolio-details-1">Athletic Mesh Sports Leggings</RouterLink></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              class="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-next"
              role="group"
              aria-label="5 / 5"
              data-swiper-slide-index="4"
              style="width: 300px; margin-right: 30px"
            >
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/related-img/pic1.jpg" alt="/" />
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
            <SwiperSlide class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" role="group" aria-label="1 / 5" data-swiper-slide-index="0" style="width: 300px; margin-right: 30px">
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/related-img/pic1.jpg" alt="/" />
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
            <SwiperSlide class="swiper-slide swiper-slide-visible swiper-slide-fully-visible" role="group" aria-label="2 / 5" data-swiper-slide-index="1" style="width: 300px; margin-right: 30px">
              <div class="portfolio-box">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/related-img/pic2.jpg" alt="/" />
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
          </Swiper>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.lg-item {
  z-index: 9;
}
</style>
