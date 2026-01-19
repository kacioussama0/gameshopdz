<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
              <li class="breadcrumb-item">Portfolio Film Strip</li>
            </ul>
          </nav>
          <div class="pagination-align style-2">
            <div class="portfolio-button-prev swiper-button-prev">Prev</div>
            <div class="portfolio-button-next swiper-button-next">Next</div>
          </div>
        </div>
      </div>
      <div class="container-fluid pe-md-0">
        <Swiper
          class="swiper portfolio-gallery2"
          :slides-per-view="'auto'"
          :space-between="30"
          :modules="[Autoplay, Navigation, Pagination]"
          :loop="true"
          :pagination="{
            el: '.swiper-pagination-two',
            clickable: true,
            renderBullet(_, className) {
              return `<span class=${className}></span>`;
            },
          }"
          :autoplay="{ delay: 1500 }"
          :speed="1500"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
        >
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio8/pic1.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">Sweater</span>
                  </RouterLink>
                </div>
                <h4 class="title">
                  <RouterLink to="/portfolio-details-1">Elevate your style with our exclusive shirt collection.</RouterLink>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio8/pic2.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">shirts</span>
                  </RouterLink>
                </div>
                <h4 class="title">
                  <RouterLink to="/portfolio-details-2"> Unleash your confidence in fashionable, tailored shirts.</RouterLink>
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio8/pic3.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">comfort</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-3">Embrace comfort without compromising on a sharp look.</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio8/pic1.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">designs</span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink to="/portfolio-details-4">Explore a blend of modern and classic shirt designs.</RouterLink></h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="../../../assets/images/portfolio/portfolio8/pic2.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-secondary">sophistication</span>
                  </RouterLink>
                </div>
                <h4 class="title">
                  <RouterLink to="/portfolio-details-5">Each shirt is a statement of individuality and sophistication.</RouterLink>
                </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="swiper-pagination-two"></div>
    </section>
  </div>
</template>
