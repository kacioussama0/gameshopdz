<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";

definePageMeta({
  layout: "nofooter",
});
</script>

<template>
  <div class="page-content bg-light">
    <section class="pt-0 z-index-unset bg-white overflow-hidden">
      <div class="container-fluid">
        <div class="d-sm-flex justify-content-sm-between justtify-content-center py-sm-3 py-3 mb-sm-0 m-b20">
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb mb-0">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Carousel Showcase</li>
            </ul>
          </nav>
          <div class="pagination-align style-2">
            <div class="portfolio-button-prev swiper-button-prev">Prev</div>
            <div class="portfolio-button-next swiper-button-next">Next</div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <Swiper
          class="swiper portfolio-gallery3"
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :modules="[Navigation, Autoplay]"
          :autoplay="{ delay: 1200 }"
          :speed="1500"
          :lazy="true"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
          :breakpoints="{
            1200: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }"
        >
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio9/pic1.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Bottles</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-5">Cozy Knit Cardigan Sweater</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio9/pic2.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Bottles</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-4">Sophisticated Swagger Suit</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio9/pic3.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Bottles</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-3">Classic Denim Skinny Jeans</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio9/pic1.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Bottles</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-2">Athletic Mesh Sports Leggings</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio9/pic2.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Bottles</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-1">Vintage Denim Overalls Shorts</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="swiper-pagination-two"></div>
      <div class="banner-social-media">
        <ul>
          <li>
            <RouterLink class="text-dark" to="?">Instagram</RouterLink>
          </li>
          <li>
            <RouterLink class="text-dark" to="?">Facebook</RouterLink>
          </li>
          <li>
            <RouterLink class="text-dark" to="?">twitter</RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
