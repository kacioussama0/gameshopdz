<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Mousewheel, Parallax } from "swiper/modules";

definePageMeta({
  layout: "nofooter",
});
</script>

<template>
  <div class="page-content bg-light">
    <div class="content-block">
      <div class="section-full overflow-hidden">
        <div id="home-slider" class="split-area">
          <div class="swiper-pagination-two style-1"></div>
          <Swiper
            class="swiper spilt-swiper-slider spilt-slider-wrapper"
            :loop="true"
            :direction="'vertical'"
            :modules="[Mousewheel, Pagination, Parallax]"
            :speed="1200"
            :mousewheel="true"
            :parallax="true"
            :pagination="{
              el: '.swiper-pagination-two',
              clickable: true,
              renderBullet(_, className) {
                return `<span class=${className}></span>`;
              },
            }"
          >
            <SwiperSlide class="swiper-slide">
              <div class="swiper-image swiper-bg portfolio-box style-2 rounded-0" data-swiper-parallax-y="35%" :style="`background-image: url(${IMAGES.portfolio10_pic1})`">
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Bottles</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1"> Hydrate with Confidence using Sturdy Wooden Bottles</RouterLink></h4>
                </div>
              </div>
              <div class="swiper-image">
                <div class="swiper-content">
                  <div class="portfolio-box style-2 rounded-0">
                    <div class="dz-media">
                      <RouterLink to="/portfolio-details-1">
                        <img src="../../../assets/images/portfolio/portfolio10/pic2.jpg" alt="/" />
                      </RouterLink>
                    </div>
                    <div class="dz-content">
                      <div class="product-tag">
                        <RouterLink to="/portfolio-details-1">
                          <span class="badge badge-primary">Bottles</span>
                        </RouterLink>
                      </div>
                      <h4 class="title">
                        <RouterLink to="/portfolio-details-1"> Hydrate with Confidence using Sturdy Wooden Bottles</RouterLink>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-image">
                <div class="swiper-content">
                  <div class="portfolio-box style-2 rounded-0">
                    <div class="dz-media">
                      <RouterLink to="/portfolio-details-1">
                        <img src="../../../assets/images/portfolio/portfolio10/pic3.jpg" alt="/" />
                      </RouterLink>
                    </div>
                    <div class="dz-content">
                      <div class="product-tag">
                        <RouterLink to="/portfolio-details-1">
                          <span class="badge badge-primary">Paper Bags</span>
                        </RouterLink>
                      </div>
                      <h4 class="title"><RouterLink to="/portfolio-details-2">Simplify Your Life with Practical Paper Bag </RouterLink></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-image swiper-bg portfolio-box style-2 rounded-0" data-swiper-parallax-y="35%" :style="`background-image: url(${IMAGES.portfolio10_pic4})`">
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Bottles</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Simplify Your Life with Practical Paper Bag</RouterLink></h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-image swiper-bg portfolio-box style-2 rounded-0" data-swiper-parallax-y="20%" :style="`background-image: url(${IMAGES.portfolio10_pic5})`">
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Bottles</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Simplify Your Life with Practical Paper Bag</RouterLink></h4>
                </div>
              </div>
              <div class="swiper-image">
                <div class="swiper-content">
                  <div class="portfolio-box style-2 rounded-0">
                    <div class="dz-media">
                      <RouterLink to="/portfolio-details-1">
                        <img src="../../../assets/images/portfolio/portfolio10/pic6.jpg" alt="/" />
                      </RouterLink>
                    </div>
                    <div class="dz-content">
                      <div class="product-tag">
                        <RouterLink to="/portfolio-details-1">
                          <span class="badge badge-primary">Glass</span>
                        </RouterLink>
                      </div>
                      <h4 class="title"><RouterLink to="/portfolio-details-3">Unveiling the Aesthetic Blend of Wood and Glass</RouterLink></h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-image">
                <div class="swiper-content">
                  <div class="portfolio-box style-2 rounded-0">
                    <div class="dz-media">
                      <RouterLink to="/portfolio-details-1">
                        <img src="../../../assets/images/portfolio/portfolio10/pic8.jpg" alt="/" />
                      </RouterLink>
                    </div>
                    <div class="dz-content">
                      <div class="product-tag">
                        <RouterLink to="/portfolio-details-1">
                          <span class="badge badge-primary">Bowls</span>
                        </RouterLink>
                      </div>
                      <h4 class="title"><RouterLink to="/portfolio-details-4">Uncovering the Beauty of Plant-Based Products</RouterLink></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-image swiper-bg portfolio-box style-2 rounded-0" data-swiper-parallax-y="35%" :style="`background-image: url(${IMAGES.portfolio10_pic7})`">
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Tumbler</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Uncovering the Beauty of Plant-Based Products</RouterLink></h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="swiper-image swiper-bg portfolio-box style-2 rounded-0" data-swiper-parallax-y="20%" :style="`background-image: url(${IMAGES.portfolio10_pic9})`">
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Tumbler</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Uncovering the Beauty of Plant-Based Products</RouterLink></h4>
                </div>
              </div>
              <div class="swiper-image">
                <div class="swiper-content">
                  <div class="portfolio-box style-2 rounded-0">
                    <div class="dz-media">
                      <RouterLink to="/portfolio-details-1">
                        <img src="../../../assets/images/portfolio/portfolio10/pic11.jpg" alt="/" />
                      </RouterLink>
                    </div>
                    <div class="dz-content">
                      <div class="product-tag">
                        <RouterLink to="/portfolio-details-1">
                          <span class="badge badge-primary">Bottal</span>
                        </RouterLink>
                      </div>
                      <h4 class="title"><RouterLink to="/portfolio-details-5">Go Green with the Best Reusable Metal Bottles</RouterLink></h4>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
