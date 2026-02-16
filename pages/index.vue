<script lang="ts" setup>
import ProductSlider from "~/components/ProductSlider.vue";
import MainBanner2 from "~/elements/MainBanner2.vue";
import { onMounted, ref } from "vue";
import ModelVideo from "~/elements/ModelVideo.vue";
import Header3 from "~/components/Header3.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

useHead({
  title: 'Gameshopdz - Leader Gaming Shop en Algérie',
  meta: [
    { name: 'description', content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.' },
  ],
})


const isOpen = ref(false);

const discountProducts = ref([]);
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

const latestProducts = ref([]);
const newProducts = ref([]);
const consoles = ref([])
const carousel = ref([])




useFetch("/api/wc/products", {
      query: { per_page: 10, page: 1 ,status:'publish',category: '3035'}
    }).then(( response) => {

      latestProducts.value = response.data.value.products.map((product: any) => ({
        id: product.id,
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

useFetch("/api/wc/products", {
  query: { per_page: 10, page: 1 ,status:'publish',category: '3035'}
}).then(( response) => {
  latestProducts.value = response.data.value.products.map((product: any) => ({
    id: product.id,
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



useFetch("/api/wc/products", {
  query: { per_page: 10, page: 1 ,status:'publish',on_sale:true,stock_status:'instock'}
}).then(( response) => {
  discountProducts.value = response.data.value.products.map((product: any) => ({
    id: product.id,
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


useFetch("/api/wc/products", {
  query: { per_page: 10, page: 1 ,status:'publish',category: '3035'}
}).then(( response) => {
  latestProducts.value = response.data.value.products.map((product: any) => ({
    id: product.id,
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


useFetch("/api/wc/products", {
  query: { per_page: 6, page: 2  ,status:'publish',category: '821'}
}).then(( response) => {
  consoles.value = response.data.value.products.map((product: any) => ({
    id: product.id,
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

useFetch("/api/wc/products", {
  query: { per_page: 4, page: 1  ,status:'publish',category: '3039'}
}).then(( response) => {
  carousel.value = response.data.value.products.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    images: product.images,
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

  <div class="page-content bg-light mb-0">

    <section class="pt-0 z-index-unset bg-white overflow-hidden">

        <div class="container-fluid p-0">
          <Swiper
              class="swiper portfolio-gallery2"
              :space-between="30"
              :modules="[Autoplay, Navigation]"
              :loop="true"
              :autoplay="{ delay: 1500 }"
              :speed="1500"
              :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
          >
            <SwiperSlide class="swiper-slide" v-for="product in carousel">
              <div class="portfolio-box style-2 rounded-0">
                <div class="dz-media">
                  <img :src="product.images[1].src" class="img-fluid" alt="">
                </div>
                <div class="dz-content justify-content-end">


                  <div class="container">
                    <h6 class="sub-title text-light mb-1 fw-light" style="letter-spacing: 4px">DECOUVREZ</h6>
                    <h1 class="title mb-3">
                      <RouterLink to="/shop/product/nioh-3-ps5">{{product.name}}</RouterLink>
                    </h1>

                    <p class="mb-4 w-50 text-light  d-none d-lg-block">NIOH 3 | PS5 Préparez-vous à affronter les ténèbres une nouvelle fois avec Nioh 3, l’évolution ultime du "Masocore" de la Team NINJA, exclusivement conçue pour la PlayStation 5. Plongez dans une version fantastique et brutale de l’histoire …</p>

                    <RouterLink  :to="'/shop/product/' + product.slug" class="btn btn-outline-light rounded-0 mb-5">ACHETEZ MAINTENANT</RouterLink>

                  </div>


                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="swiper-pagination-two"></div>
      </section>






    <!-- New Sart-->
    <section class="content-inner-1 overflow-hidden">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-info">
                  <i class="fa fa-plus me-1"></i>
                  Nouveautés
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider :products="latestProducts"/>
      </div>
    </section>
    <!-- New Stop-->



    <!-- Discount Start-->
    <section class="content-inner-1 pt-0 overflow-hidden">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-success" >
                  <i class="fa fa-percentage me-1"></i>
                  Promotion
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider :products="discountProducts"/>
      </div>
    </section>
    <!-- Discount Stop-->




    <!-- Gameshop hits Start-->
    <section class="content-inner-1 pt-0 overflow-hidden">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-danger" >
                  <i class="fa fa-gamepad me-1"></i>
                  Gameshop Hits
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider  :products="discountProducts"/>
      </div>
    </section>
    <!-- Gameshop hits Stop-->




    <!-- Selection Sart-->
    <section class="content-inner-1 py-0 overflow-hidden">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-warning">
                  <i class="fa fa-star me-1"></i>
                  Notre Sélection
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider :products="latestProducts"/>
      </div>
    </section>
    <!-- Selection Stop-->




    <section class="content-inner pb-0  overflow-hidden">
      <div class=" container-md">
        <NuxtLink to="/shop">
          <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS_991.png?resize=1536%2C198&ssl=1" alt="" class=" w-100 rounded-4">
        </NuxtLink>
      </div>
    </section>

    <!--Featured Section Start-->
    <div class="content-inner category-section my-5">

      <div class="container">
        <div class="clearfix">
          <ul class=" row g-5">

            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=815">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-games-Banner.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>

            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=821">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-Consoles-Banner.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>


            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=854">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-occasion-Banner.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>

            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=829">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-accessoires-Banner.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>



            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/portfolio-details-1">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/DIGTAL-GS.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>

            <li class="card-container col-xl-4 col-lg-4 col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=846">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/Collector-GS.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>


            <li class="card-container col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/portfolio-details-1">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/PC-LAP-GS.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>


            <li class="card-container  col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/portfolio-details-1">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/Retro-GS.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>



          </ul>
        </div>
      </div>

    </div>
    <!--Featured Section End-->


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
<!--        <ProductGallery />-->

        <div class="row">

          <div class="col-md-4">
            <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS_997.png?resize=531%2C1024&ssl=1" class="h-100 rounded-4" alt="">
          </div>


          <div class="col-md-8">

            <div class="left-content mb-3">
              <h2 class="title mb-0 ">Découvrez nos nouvelles consoles en magasin !</h2>
              <p class="mb-0">Nouvelles consoles en stock !</p>
            </div>

            <div class="row gy-3 gx-3">

              <div class="col-md-4" v-for="console in consoles">

                  <ProductCard :product="console"  />

              </div>


            </div>


          </div>

        </div>

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
            class="item-wrap g-5 row mt-5"
          >
            <div class="item col-md-4">
              <NuxtLink to="" class=" rounded-5 overflow-hidden companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS14.png?w=448&ssl=1" alt="" c />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS16.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS15.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS126.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS17.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS125.png?w=448&ssl=1" alt="" />
                </div>
              </NuxtLink>
            </div>


          </div>
        </div>

    </section>

    <!-- Services Start -->
    <section class="content-inner">
      <div class="container">
        <div
          class="section-head style-1 wow fadeInUp d-md-flex justify-content-between align-items-center"
          data-wow-delay="0.1s"
        >
        </div>
        <div class="row blog-shap">
          <div class="col-12 col-sm-6 col-md-3 text-center vstack gap-3 m-lg-b30 m-b50 wow fadeInUp">

            <i class="fa fa-3x fa-shield text-dark"></i>
            <h3>Garantie Gameshop</h3>

          </div>



          <div class="col-12 col-sm-6 col-md-3 text-center vstack gap-3 m-lg-b30 m-b50 wow fadeInUp">

            <i class="fa fa-3x fa-truck-fast text-dark"></i>
            <h3>Livraision Express</h3>

          </div>

          <div class="col-12 col-sm-6 col-md-3 text-center vstack gap-3 m-lg-b30 m-b50 wow fadeInUp">

            <i class="fa fa-3x fa-users text-dark"></i>
            <h3>Service Client Dynamique</h3>

          </div>

          <div class="col-12 col-sm-6 col-md-3 text-center vstack gap-3 m-lg-b30 m-b50 wow fadeInUp">

            <i class="fa fa-3x fa-certificate text-dark"></i>
            <h3>Produits certifiés</h3>

          </div>

        </div>
      </div>
    </section>
    <!-- Services End -->

    <!-- Feature Box -->
    <div class="content-inner py-0  image-wrapper">
      <div class="container px-0">


        <h3 class="text-center">Rejoignez nous sur nos réseaux officiels</h3>


          <ul class="hstack gap-4 align-items-center justify-content-center social-media py-5">
            <li>
              <NuxtLink
                  class="fa-brands  fa-3x  fa-facebook"

                  target="_blank"
                  to="https://www.facebook.com/gameshopdz2"
              ></NuxtLink>
            </li>

            <li>
              <NuxtLink
                  class="fab fa-3x fa-tiktok"

                  target="_blank"
                  to="https://www.tiktok.com/@gameshop.dz"
              ></NuxtLink>
            </li>
            <li>
              <NuxtLink

                  class="fab fa-3x fa-instagram"
                  target="_blank"
                  to="https://www.instagram.com/gameshop.dz/"
              ></NuxtLink>
            </li>

            <li>
              <NuxtLink

                  class="fab fa-3x fa-snapchat-ghost"
                  target="_blank"
                  to="https://www.snapchat.com/add/gameshop.dz?sender_web_id=1626268c-ffd5-4cbb-9b2d-4025523a74d7&device_type=desktop&is_copy_url=true"
              ></NuxtLink>
            </li>

          </ul>
        </div>


      </div>
    </div>
    <!-- Feature Box End -->
</template>

<style scoped>

.swiper-wrapper,.swiper-slide ,.portfolio-box{
  min-height: 50vh!important;
  max-height: 40vh!important;
}


.swiper .dz-media video ,.swiper .dz-media img {
  min-height: 50vh!important;
  max-height: 40vh!important;
  width: 100%;
  object-fit: cover !important;
}

@media screen and (max-width: 1440px) {
  .swiper-wrapper,.swiper-slide ,.portfolio-box{
    min-height: 60vh!important;
    max-height: 60vh!important;
  }

  .swiper .dz-media video ,.swiper .dz-media img {
    min-height: 60vh!important;
    max-height: 60vh!important;
    width: 100%;
    object-fit: cover !important;
  }
}

.social-media  li {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0F1E4A;
  transition: .3s;
  cursor: pointer;
}

.social-media li a {
  font-size: 25px;
  color: #ffff;
}


.social-media li:hover {

  background: #FFFFFF;
  border: 1px solid #0F1E4A;
}

.social-media li:hover a{

  color: #0F1E4A;

}

</style>
