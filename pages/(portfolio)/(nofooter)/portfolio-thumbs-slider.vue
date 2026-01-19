<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from 'swiper/modules';
import { ref } from "vue";
const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper:any) => {
    thumbsSwiper.value = swiper;
};

definePageMeta({
  layout:'nofooter'
})
</script>

<template>
  <div class="page-content bg-ligh">
    <section class="portfoilo-wrapper-1 z-index-unset bg-white">
      <div class="container-fluid px-0">
        <div class="row gx-0">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <Swiper class="swiper portfolio-gallery swiper-gl" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper }">
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic1.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">collection</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Elevate your style with our exclusive shirt collection.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic2.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">shirts</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Unleash your confidence in fashionable, tailored shirts.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic3.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
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
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic4.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">designs</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Explore a blend of modern and classic shirt designs.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic5.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">shirt</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Each shirt is a statement of individuality and sophistication.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic6.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">craftsmanship</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Immerse yourself in quality fabrics and impeccable craftsmanship.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic7.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">fashion</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Redefine elegance with our curated shirt fashion line.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic8.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">shirts</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Effortlessly transition from day to night in our versatile shirts.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="col-xl-7 col-lg-6 col-md-5 gallary-list">
            <Swiper class="swiper portfolio-thumb gallery" ref="gallery" data-masonry='{"percentPosition": true}'
            :modules="[Thumbs]"
            watch-slides-progress
            @swiper="setThumbsSwiper"
            >
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic1.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">collection</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Elevate your style with our exclusive shirt collection.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic2.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">shirts</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Unleash your confidence in fashionable, tailored shirts.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic3.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">look</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Embrace comfort without compromising on a sharp look.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic4.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">designs</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Explore a blend of modern and classic shirt designs.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic5.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">sophistication</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Each shirt is a statement of individuality and sophistication.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic6.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">craftsmanship</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Immerse yourself in quality fabrics and impeccable craftsmanship.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic7.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">fashion</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Redefine elegance with our curated shirt fashion line.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
              <SwiperSlide class="swiper-slide">
                <div class="portfolio-box style-2 rounded-0">
                  <div class="dz-media">
                    <RouterLink to="/portfolio-details-1">
                      <img src="../../../assets/images/portfolio/portfolio7/pic8.jpg" class="swiper-gl-image" alt="/" />
                    </RouterLink>
                  </div>
                  <div class="dz-content w-100">
                    <div class="product-tag">
                      <RouterLink to="/portfolio-details-1">
                        <span class="badge badge-secondary">shirts</span>
                      </RouterLink>
                    </div>
                    <h4 class="title"><RouterLink to="/portfolio-details-3">Effortlessly transition from day to night in our versatile shirts.</RouterLink></h4>
                  </div>
                </div>
              </SwiperSlide c>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
