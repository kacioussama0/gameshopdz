<script lang="ts" setup>
import Home2Slider from "~/components/Home2Slider.vue";
import ProductGallery from "~/components/ProductGallery.vue";
import MainBanner2 from "~/elements/MainBanner2.vue";
import modelBg from "assets/images/background/bg2.jpg";
import { onMounted, ref } from "vue";
import ModelVideo from "~/elements/ModelVideo.vue";
import Header3 from "~/components/Header3.vue";

const isOpen = ref(false);

const openVideo = () => {
  isOpen.value = true;
};

const closeModel = () => {
  isOpen.value = false;
};

const xVal = ref(0);
onMounted(() => {
  setInterval(() => {
    if (xVal.value > 1500) {
      xVal.value = 0;
    } else {
      xVal.value++;
    }
  }, 10);
});

let latestProducts = ref([]);

     useFetch("/api/wc/products", {
      query: { per_page: 10, page: 1 ,status:'publish'}
    }).then(( response) => {
      latestProducts.value = response.data.value.map((product: any) => ({
        name: product.name,
        slug: product.slug,
        thumbnail: product.images[0]?.thumbnail || '',
        price: product.price,
        on_sale: product.on_sale,
        regular_price: product.regular_price,
        stock: product.stock_status,
        occasion: product.categories.some((category) => category.slug == 'occasion')
      }));
    }).catch((error) => {
      console.error("Error fetching latest products:", error);
});




</script>

<template>
  <ModelVideo
    :isClose="closeModel"
    :isVideoModalOpen="isOpen"
    videoId="YwYoyQ1JdpQ"
  />
  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>
  <div class="page-content bg-light">
    <!--Swiper Banner Start -->
    <div class="main-slider style-2">
      <MainBanner2 :product="latestProducts[0]" />
    </div>
    <!--Swiper Banner End-->

    <!--Featured Section Start-->
    <div class="content-inner category-section">
      <div class="container">
        <div class="row gx-xl-4 g-3">
          <div
            class="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="category-product left product-1">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS4.png?w=1080&ssl=1" alt="" />
                <div class="category-badge">Jeux Video</div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="category-product left product-2">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS0.png?w=572&ssl=1" alt="" />
                <div class="category-badge">Consoles</div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="category-product left product-3">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2025/04/ARGS99.png?w=1080&ssl=1" alt="" />
                <div class="category-badge">Jeux d'occasions</div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="category-product right product-4">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS7.png?w=1080&ssl=1" alt="" />
                <div class="category-badge">Cartes & Abonnement</div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-5 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="category-product right product-5">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS129.png?w=1080&ssl=1" alt="" />
                <div class="category-badge">Accessoires Consoles</div>
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div class="category-product right product-6">
              <NuxtLink to="/shop-with-category">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS9.png?w=1080&ssl=1" alt="" />
                <div class="category-badge">Collectors</div>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
      <NuxtLink class="icon-button" to="/shop-with-category">
        <div class="text-row word-rotate-box c-black border-white">
          <svg
            class="badge__emoji"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <g clip-path="url(#clip0_161_568)">
              <path
                d="M10.7239 31.3072L19.0059 39.5891C19.2696 39.8523 19.627 40.0001 19.9995 40.0001C20.3721 40.0001 20.7295 39.8523 20.9932 39.5891L29.2752 31.3072C29.4582 31.1236 29.5608 30.8748 29.5606 30.6156C29.5604 30.3564 29.4573 30.1078 29.274 29.9245C29.0907 29.7412 28.8421 29.6381 28.5829 29.6379C28.3237 29.6377 28.075 29.7404 27.8913 29.9234L20.9781 36.8368V0.978516C20.9781 0.718997 20.875 0.470108 20.6915 0.286601C20.508 0.103093 20.2591 0 19.9995 0C19.74 0 19.4911 0.103093 19.3076 0.286601C19.1241 0.470108 19.021 0.718997 19.021 0.978516V36.8368L12.1077 29.9234C11.9241 29.7404 11.6754 29.6377 11.4162 29.6379C11.1569 29.6381 10.9084 29.7412 10.7251 29.9245C10.5418 30.1078 10.4387 30.3564 10.4385 30.6156C10.4383 30.8748 10.5409 31.1236 10.7239 31.3072Z"
                fill="#000"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_161_568">
                <rect width="40" height="40" fill="#000"></rect>
              </clipPath>
            </defs>
          </svg>
          <span class="text__char" style="--char-rotate: 0deg">c</span
          ><span class="text__char" style="--char-rotate: 17.142857142857142deg"
            >a</span
          ><span class="text__char" style="--char-rotate: 34.285714285714285deg"
            >t</span
          ><span class="text__char" style="--char-rotate: 51.42857142857143deg"
            >e</span
          ><span class="text__char" style="--char-rotate: 68.57142857142857deg"
            >g</span
          ><span class="text__char" style="--char-rotate: 85.71428571428571deg"
            >o</span
          ><span class="text__char" style="--char-rotate: 102.85714285714286deg"
            >r</span
          ><span class="text__char" style="--char-rotate: 120deg">y</span
          ><span
            class="text__char"
            style="--char-rotate: 137.14285714285714deg"
          >
          </span
          ><span class="text__char" style="--char-rotate: 154.28571428571428deg"
            >-</span
          ><span
            class="text__char"
            style="--char-rotate: 171.42857142857142deg"
          >
          </span
          ><span class="text__char" style="--char-rotate: 188.57142857142856deg"
            >c</span
          ><span class="text__char" style="--char-rotate: 205.71428571428572deg"
            >a</span
          ><span class="text__char" style="--char-rotate: 222.85714285714286deg"
            >t</span
          ><span class="text__char" style="--char-rotate: 240deg">e</span
          ><span class="text__char" style="--char-rotate: 257.1428571428571deg"
            >g</span
          ><span class="text__char" style="--char-rotate: 274.2857142857143deg"
            >o</span
          ><span class="text__char" style="--char-rotate: 291.42857142857144deg"
            >r</span
          ><span class="text__char" style="--char-rotate: 308.57142857142856deg"
            >y</span
          ><span class="text__char" style="--char-rotate: 325.7142857142857deg">
          </span
          ><span class="text__char" style="--char-rotate: 342.85714285714283deg"
            >-</span
          >
        </div>
      </NuxtLink>
    </div>
    <!--Featured Section End-->




    <section class="content-inner overflow-hidden">
      <div class="container">
        <NuxtLink to="/shop-with-category">
          <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS_991.png?resize=1536%2C198&ssl=1" alt="" class=" w-100 rounded-4">
        </NuxtLink>
      </div>
    </section>


    <!-- Tranding Start-->
    <section class="content-inner-1 overflow-hidden" v-if="latestProducts.length">
      <div class="container">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
              class="section-head style-1 m-b30 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="left-content">
                  <h2 class="title">Gardez un œil sur les nouveautés</h2>
                  <p>Des nouveaux, exclus et orignaux produits</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12 text-md-end">
            <NuxtLink class="btn btn-secondary m-b30" to="/shop-cart">Voir tout</NuxtLink>
          </div>
        </div>

        <Home2Slider :products="latestProducts"/>
      </div>
    </section>
    <!-- Tranding Stop-->

    <section class="video-section">
      <div
        class="video-wrapper bg-parallax"
        :style="`background-image: url(https://lh3.googleusercontent.com/p/AF1QipN19apdG8TofDnbwxWFcRNsYi1oSl2YzxrwbsdL=s1360-w1360-h1020-rw)`"
      >
        <div class="container">
          <div class="d-flex justify-content-center">
            <NuxtLink
              class="icon-button popup-youtube"
              to=""
              @click="openVideo"
            >
              <div class="text-row word-rotate-box border-white c-black">
                <svg
                  class="badge__emoji"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_671_345)">
                    <path
                      d="M34.6779 15.3843L11.0529 0.821429C9.34369 -0.230839 7.2772 -0.274589 5.52493 0.704398C3.77266 1.68323 2.72656 3.46612 2.72656 5.47323V34.4664C2.72656 37.5013 5.17188 39.9835 8.17735 39.9999C8.18556 39.9999 8.19376 40 8.20181 40C9.14103 39.9999 10.1198 39.7056 11.0339 39.1478C11.7693 38.6991 12.0017 37.7392 11.5531 37.0039C11.1044 36.2685 10.1444 36.0361 9.40923 36.4848C8.98165 36.7456 8.56407 36.8805 8.19415 36.8804C7.06016 36.8742 5.84602 35.9028 5.84602 34.4665V5.47331C5.84602 4.6123 6.29477 3.84769 7.04634 3.42776C7.79798 3.00784 8.68431 3.02659 9.41658 3.47745L33.0417 18.0404C33.7518 18.4776 34.1581 19.2065 34.1564 20.0405C34.1547 20.8743 33.7454 21.6016 33.0314 22.0373L15.9503 32.4958C15.2156 32.9456 14.9847 33.9059 15.4346 34.6405C15.8843 35.3752 16.8446 35.6061 17.5792 35.1563L34.6583 24.6991C36.2935 23.7015 37.2721 21.9624 37.276 20.0467C37.2799 18.1312 36.3083 16.3881 34.6779 15.3843Z"
                      fill="#FEEB9D"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_671_345">
                      <rect width="40" height="40" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span class="text__char" style="--char-rotate: 0deg">s</span
                ><span
                  class="text__char"
                  style="--char-rotate: 13.333333333333334deg"
                  >h</span
                ><span
                  class="text__char"
                  style="--char-rotate: 26.666666666666668deg"
                  >o</span
                ><span class="text__char" style="--char-rotate: 40deg">p</span
                ><span
                  class="text__char"
                  style="--char-rotate: 53.333333333333336deg"
                >
                </span
                ><span
                  class="text__char"
                  style="--char-rotate: 66.66666666666667deg"
                  >-</span
                ><span class="text__char" style="--char-rotate: 80deg"> </span
                ><span
                  class="text__char"
                  style="--char-rotate: 93.33333333333334deg"
                  >s</span
                ><span
                  class="text__char"
                  style="--char-rotate: 106.66666666666667deg"
                  >h</span
                ><span class="text__char" style="--char-rotate: 120deg">o</span
                ><span
                  class="text__char"
                  style="--char-rotate: 133.33333333333334deg"
                  >p</span
                ><span
                  class="text__char"
                  style="--char-rotate: 146.66666666666669deg"
                >
                </span
                ><span class="text__char" style="--char-rotate: 160deg">-</span
                ><span
                  class="text__char"
                  style="--char-rotate: 173.33333333333334deg"
                >
                </span
                ><span
                  class="text__char"
                  style="--char-rotate: 186.66666666666669deg"
                  >s</span
                ><span class="text__char" style="--char-rotate: 200deg">h</span
                ><span
                  class="text__char"
                  style="--char-rotate: 213.33333333333334deg"
                  >o</span
                ><span
                  class="text__char"
                  style="--char-rotate: 226.66666666666669deg"
                  >p</span
                ><span class="text__char" style="--char-rotate: 240deg"> </span
                ><span
                  class="text__char"
                  style="--char-rotate: 253.33333333333334deg"
                  >-</span
                ><span
                  class="text__char"
                  style="--char-rotate: 266.6666666666667deg"
                >
                </span
                ><span class="text__char" style="--char-rotate: 280deg">s</span
                ><span
                  class="text__char"
                  style="--char-rotate: 293.33333333333337deg"
                  >h</span
                ><span
                  class="text__char"
                  style="--char-rotate: 306.6666666666667deg"
                  >o</span
                ><span class="text__char" style="--char-rotate: 320deg">p</span
                ><span
                  class="text__char"
                  style="--char-rotate: 333.33333333333337deg"
                >
                </span
                ><span
                  class="text__char"
                  style="--char-rotate: 346.6666666666667deg"
                  >-</span
                >
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="dz-features-wrapper overflow-hidden">
        <ul class="dz-features text-wrapper">
          <li class="item">
            <h2 class="title">Console</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">PS4 / PS5</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Abonnement</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Retro</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Jeux</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Collector & Goodies</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">PC</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Retro</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Occasions</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
              <path
                opacity="0.3"
                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"
                fill="black"
              />
            </svg>
          </li>
          <li class="item">
            <h2 class="title">Jeux</h2>
          </li>
          <li class="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="60"
              viewBox="0 0 61 60"
              fill="none"
            >
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

    <!-- Products  Section Start-->
    <section class="content-inner">
      <div class="container">
        <ProductGallery />
      </div>
    </section>
    <!-- Products Section Start-->

    <section class="content-inner-3 companies-section overflow-hidden">
      <div class="container">
        <div class="row justify-content-between align-items-end">
          <div class="col-lg-8 col-md-8 col-sm-12">
            <div
              class="section-head style-2 wow fadeInUp m-0"
              data-wow-delay="0.1s"
              style="
                visibility: visible;
                animation-delay: 0.1s;
                animation-name: fadeInUp;
              "
            >
              <h2 class="title text-white">
                Trouvez tout ce qui est nouveau sur votre Brand préféré
              </h2>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-4 col-sm-12 text-md-center m-b30 wow fadeInUp"
            data-wow-delay="0.2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <NuxtLink
              class="icon-button d-md-inline-block d-none"
              to="/blog-tag"
            >
              <div
                class="text-row word-rotate-box c-black border-secondary bg-secondary"
              >
                <img src="../assets/images/icon0.svg" alt="" width="80">
                <span class="text__char" style="--char-rotate: 0deg">g</span
                ><span class="text__char" style="--char-rotate: 18deg">a</span
                ><span class="text__char" style="--char-rotate: 36deg">m</span
                ><span class="text__char" style="--char-rotate: 54deg">e</span
                ><span class="text__char" style="--char-rotate: 72deg">s</span
                ><span class="text__char" style="--char-rotate: 90deg">h</span
                ><span class="text__char" style="--char-rotate: 108deg">o</span
                ><span class="text__char" style="--char-rotate: 126deg">p</span
                ><span class="text__char" style="--char-rotate: 144deg">-</span
                ><span class="text__char" style="--char-rotate: 162deg"> </span
                ><span class="text__char" style="--char-rotate: 180deg">g</span
                ><span class="text__char" style="--char-rotate: 198deg">a</span
                ><span class="text__char" style="--char-rotate: 216deg">m</span
                ><span class="text__char" style="--char-rotate: 234deg">e</span
                ><span class="text__char" style="--char-rotate: 252deg">s</span
                ><span class="text__char" style="--char-rotate: 270deg">h</span
                ><span class="text__char" style="--char-rotate: 288deg">o</span
                ><span class="text__char" style="--char-rotate: 306deg">p</span
                ><span class="text__char" style="--char-rotate: 324deg">-</span
                ><span class="text__char" style="--char-rotate: 342deg"> </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div
          class="tag-slider style-1 wow fadeInUp"
          data-wow-delay="0.2s"
          id="tagSlider"
          style="
            visibility: visible;
            animation-delay: 0.2s;
            animation-name: fadeInUp;
          "
        >
          <div
            class="item-wrap"
            :style="`transform: translateX(-${xVal}px); animation-name: slide`"
            :slides-per-view="6"
          >
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS14.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS16.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS15.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS126.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS17.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS125.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS18-1.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS18.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS127.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS22.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/hyperx.png?w=230&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/dissney.png?w=230&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/google_play.png?w=230&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/prime.png?w=230&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo5.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo6.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo7.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo8.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo1.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo2.png" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="tag-slider wow fadeInUp"
          data-wow-delay="0.4s"
          id="tagSlider2"
          style="
            visibility: visible;
            animation-delay: 0.4s;
            animation-name: fadeInUp;
          "
        >
          <div
            class="item-wrap"
            :style="`transform: translateX(-${1500 - xVal}px)`"
          >
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS14.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS16.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS15.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS126.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS17.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS125.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS18-1.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo2.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo3.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo4.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo5.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo6.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo7.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo8.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo1.png" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../assets/images/companies/logo2.png" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Start -->
    <section class="content-inner">
      <div class="container">
        <div
          class="section-head style-1 wow fadeInUp d-md-flex justify-content-between align-items-center"
          data-wow-delay="0.1s"
        >
          <div class="left-content">
            <h2 class="title">latest Post</h2>
            <p>Discover the most trending products in Pixio.</p>
          </div>
          <NuxtLink class="btn btn-secondary" to="/blog-archive"
            >View All</NuxtLink
          >
        </div>
        <div class="row blog-shap">
          <div
            class="col-lg-6 col-md-6 col-sm-12 m-lg-b30 m-b50 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="dz-card blog-half style-6 card-1">
              <div class="dz-media">
                <img
                  src="../assets/images/blog/blogpost-4/pic1.jpg"
                  alt="/"
                />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">18 May 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <NuxtLink to="/blog-both-sidebar"
                    >Trendsetter Chronicles: Unveiling the Latest in
                    Fashion</NuxtLink
                  >
                </h4>
                <NuxtLink
                  to="/blog-both-sidebar"
                  class="btn btn-theme text-uppercase"
                  >Read more<i class="fa-solid fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 m-lg-b30 m-b50 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="dz-card blog-half style-6 card-2">
              <div class="dz-media">
                <img
                  src="../assets/images/blog/blogpost-4/pic2.jpg"
                  alt="/"
                />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">15 Aug 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <NuxtLink to="/blog-both-sidebar"
                    >Runway Rundown: Decoding Fashion Week’s Best
                    Looks</NuxtLink
                  >
                </h4>
                <NuxtLink
                  to="/blog-both-sidebar"
                  class="btn btn-theme text-uppercase"
                  >Read more<i class="fa-solid fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 m-lg-b30 m-b50 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="dz-card blog-half style-6 card-3">
              <div class="dz-media">
                <img
                  src="../assets/images/blog/blogpost-4/pic3.jpg"
                  alt="/"
                />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">22 Sep 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <NuxtLink to="/blog-both-sidebar"
                    >loset Confidential: Behind-the-Scenes of a
                    Fashionista</NuxtLink
                  >
                </h4>
                <NuxtLink
                  to="/blog-both-sidebar"
                  class="btn btn-theme text-uppercase"
                  >Read more<i class="fa-solid fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-12 m-lg-b30 m-b50 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="dz-card blog-half style-6 card-4">
              <div class="dz-media">
                <img
                  src="../assets/images/blog/blogpost-4/pic4.jpg"
                  alt="/"
                />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">20 Feb 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <NuxtLink to="/blog-both-sidebar"
                    >DIY Couture: Crafting Your Own Fashion
                    Masterpieces</NuxtLink
                  >
                </h4>
                <NuxtLink
                  to="/blog-both-sidebar"
                  class="btn btn-theme text-uppercase"
                  >Read more<i class="fa-solid fa-arrow-right"></i
                ></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog End -->

    <!-- Feature Box -->
    <div class="content-inner py-0 image-wrapper">
      <div class="container-fluid px-0">
        <div class="row gx-0">
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/1.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.2s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/2.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.3s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/3.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.4s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/4.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.5s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/5.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-4 wow fadeIn"
            data-wow-delay="0.6s"
          >
            <div class="insta-post dz-media dz-img-effect rotate">
              <NuxtLink to="/portfolio-tiles">
                <img src="../assets/images/clothe/feature/6.png" alt="" />
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            to="https://www.instagram.com/dexignzone/"
            class="instagram-link"
          >
            <div class="follow-link wow bounceIn" data-wow-delay="0.1s">
              <div class="follow-link-icon">
                <img src="../assets/images/insta-follow.png" alt="" />
              </div>
              <div class="follow-link-content">
                <p class="m-0">Follow @Pixio</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- Feature Box End -->
  </div>
</template>
