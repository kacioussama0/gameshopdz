<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <div class="main-swiper2">
    <div class="container">
      <div class="banner-content">
        <div class="row">
          <div class="col-xl-7 col-lg-7 col-md-12 align-self-center">
            <div class="swiper-content">
              <div class="content-info">
                <h1 class="offer-title mb-0" data-swiper-parallax="-20">
                  Your Ultimate
                  <span class="text-primary d-flex align-items-center"
                    ><svg
                      class="m-r10"
                      xmlns="http://www.w3.org/2000/svg"
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                    >
                      <path
                        d="M34 0L43.6167 24.3833L68 34L43.6167 43.6167L34 68L24.3833 43.6167L0 34L24.3833 24.3833L34 0Z"
                        fill="var(--primary)"
                      />
                    </svg>
                    Online Store</span
                  >for All Your Needs.
                </h1>
                <p class="sub-title mb-0" data-swiper-parallax="-40">
                  No code need. Plus free shippng on <span>$99+</span> orders!
                </p>
              </div>
              <div class="content-btn" data-swiper-parallax="-60">
                <NuxtLink class="btn btn-secondary me-3" to="/shop-cart"
                  >ADD TO CART</NuxtLink
                >
                <NuxtLink class="btn btn-outline-secondary" to="/shop-standard"
                  >VIEW DETAILS</NuxtLink
                >
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-5 col-md-12">
            <div class="banner-media">
              <div class="shap"></div>
              <div class="border-shap"></div>
              <div class="border-shap2"></div>

              <div class="img-preview" data-swiper-parallax="-100">
                <img
                  src="../assets/images/main-slider/slider2/pic1.png"
                  alt="banner-media"
                />
              </div>
              <div class="bnr-content-bx slideskew">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/small/1.png" alt="" />
                </div>
                <div class="dz-info">
                  <h5 class="dz-title">Cozy Knit Cardigan</h5>
                  <h6 class="price text-primary">$80</h6>
                  <div class="btn btn-primary meta-icon dz-carticon">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="bnr-customer-bx slideskew">
                <i class="icon feather icon-heart-on dz-heart"></i>
                <ul>
                  <li class="customer-image">
                    <img
                      src="../assets/images/testimonial/testimonial1.jpg"
                      alt=""
                    />
                  </li>
                  <li class="customer-image">
                    <img
                      src="../assets/images/testimonial/testimonial2.jpg"
                      alt=""
                    />
                  </li>
                  <li class="customer-image">
                    <img
                      src="../assets/images/testimonial/testimonial3.jpg"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <ul class="star-list">
                <li class="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <path
                      d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                      fill="var(--rgba-primary-2)"
                    />
                  </svg>
                </li>
                <li class="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <path
                      d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                      fill="var(--rgba-primary-2)"
                    />
                  </svg>
                </li>
                <li class="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                  >
                    <path
                      d="M28.5 0L33.3366 23.6634L57 28.5L33.3366 33.3366L28.5 57L23.6634 33.3366L0 28.5L23.6634 23.6634L28.5 0Z"
                      fill="var(--rgba-primary-2)"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-social-media style-2 left">
      <ul>
        <li>
          <NuxtLink to="https://www.instagram.com/dexignzone/" target="_blank"
            >Instagram</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://www.facebook.com/dexignzone" target="_blank"
            >Facebook</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="https://twitter.com/dexignzones" target="_blank"
            >twitter</NuxtLink
          >
        </li>
      </ul>
    </div>
    <NuxtLink to="/" class="service-btn btn-dark">Let’s talk</NuxtLink>
  </div>
</template>
