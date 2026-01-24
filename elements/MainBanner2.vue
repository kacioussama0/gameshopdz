<script lang="ts" setup>

const images = [
    '/_nuxt/assets/images/shadow.png',
    '/_nuxt/images/yasoki.png',
]



const randomImage = images[Math.floor(Math.random() * images.length)];


defineProps(['product'])

</script>

<template>
  <div class="main-swiper2">
    <div class="container">
      <div class="banner-content">
        <div class="row text-center text-md-start">
          <div class="col-xl-7 col-lg-7 col-md-12 align-self-center">
            <div class="swiper-content">
              <div class="content-info">
                <h1 class="offer-title mb-0" data-swiper-parallax="-20">
                  Leader Gaming
                  <span class="text-primary d-flex align-items-center  justify-content-center justify-content-md-start"
                    ><svg
                      class="d-none d-md-block"
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
                     Shop en Algérie</span
                  >
                </h1>
                <p class="sub-title mb-0" data-swiper-parallax="-40">
                  Découvrez notre sélection exclusive de produits gaming
                  haut de gamme, conçus pour les passionnés comme vous.
                </p>
              </div>
              <div class="content-btn" data-swiper-parallax="-60">
                <NuxtLink class="btn btn-secondary me-3" to="/shop"
                  >Découvrir la boutique</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-xl-5 col-lg-5 col-md-12 d-none d-lg-block">
            <div class="banner-media">
              <div class="shap"></div>
              <div class="border-shap"></div>
              <div class="border-shap2"></div>

              <div class="img-preview border-0" data-swiper-parallax="-100">


                <img
                  src="../assets/images/yasoki.png"
                  alt="banner-media"
                />


              </div>
              <div class="bnr-content-bx slideskew" v-if="product">
                <div class="dz-media">
                  <img :src="product['thumbnail']" width="80" height="80" class="" alt="product-image" />
                </div>
                <div class="dz-info">
                  <h5 class="dz-title">{{product.name}}</h5>
                  <h6 class="price text-primary">{{product.price}} DA</h6>
                  <NuxtLink :to="`/shop/product/${product.slug}`" class="btn btn-primary meta-icon dz-carticon">
                    <i class="flaticon flaticon-basket"></i>
                  </NuxtLink>
                </div>
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
