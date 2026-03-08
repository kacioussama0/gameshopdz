<script lang="ts" setup>
import Header3 from "~/components/Header3.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

useHead({
  title: 'Gameshopdz - Leader Gaming Shop en Algérie',
  meta: [
    { name: 'description', content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.' },
  ],
})

onMounted(()=> {


  const script = document.createElement('script')
  script.src = 'https://www.jotform.com/website-widgets/embed/019ccb4c526477e79d3bdd4b5afa7c84f074'
  script.async = true
  script.defer = true
  script.setAttribute('data-jf-widget', 'reviews')

  document.body.appendChild(script)
})


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

const ourSelection = ref([]);
const newProducts = ref([]);
const consoles = ref([])
const carousel = ref([])
const discountProducts = ref([]);
const hitsProducts = ref([])




useFetch("/api/wc/products", {
      query: { per_page: 10, page: 1 ,status:'publish',stock_status: 'instock',category: '3035'}
    }).then(( response) => {

  newProducts.value = response.data.value.products.map((product: any) => ({
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
  query: { per_page: 10, page: 1 ,status:'publish',category: '3040'}
}).then(( response) => {
  hitsProducts.value = response.data.value.products.map((product: any) => ({
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
  query: { per_page: 10, page: 1 ,status:'publish',category: '3041',stock_status:'instock'}
}).then(( response) => {
  ourSelection.value = response.data.value.products.map((product: any) => ({
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
  query: { per_page: 6, page: 1  ,status:'publish',category: '821',stock_status:'instock'}
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
  query: { per_page: 4, page: 1  ,status:'publish',category: '3039',stock_status:'instock'}
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

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light mb-0">

    <section class="pt-0 z-index-unset bg-white overflow-hidden ">

        <div class="container-fluid p-0">
          <Swiper
              class="swiper portfolio-gallery2"
              :modules="[Navigation,Pagination,Autoplay]"
              :loop="true"
              :autoplay="{
                delay: 4000,
              }"
              :pagination="{ clickable: true }"
              :speed="1500"
              :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
          >
            <SwiperSlide class="swiper-slide" v-for="product in carousel">
              <div class="portfolio-box style-2 rounded-0">
                <div class="dz-media">
                  <NuxtImg
                      placeholder
                      :src="product.images[1].src"
                      format="webp"
                      loading="lazy"
                  />
                </div>
                <div class="dz-content justify-content-end">

                  <div class="container">
                    <h6 class="sub-title text-light mb-1 fw-light" style="letter-spacing: 2px">DECOUVREZ</h6>
                    <h1 class="title mb-3">
                      <RouterLink :to="'/shop/product/' + product.slug">{{product.name}}</RouterLink>
                    </h1>


                    <RouterLink  :to="'/shop/product/' + product.slug" class="btn btn-outline-light rounded-0 mb-5">ACHETEZ MAINTENANT</RouterLink>

                  </div>


                </div>
              </div>
            </SwiperSlide>

            <span class=" swiper-button-prev slick-arrow new-gradient" style=""></span>
            <span class=" swiper-button-next slick-arrow new-gradient" style=""></span>

          </Swiper>
        </div>
      </section>



    <!-- Shortcuts-->
    <section class="content-inner-1 pb-2 pt-5 bg-white overflow-hidden shortcuts">
      <div class="container">

        <div class="row gy-5 gx-0 text-center">

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=815">
              <i class="fa fa-gamepad mb-3" style="font-size: 30px"></i>
              <h6>Jeux</h6>
            </RouterLink>
          </div>


          <div class="col-6 col-md-2">

            <RouterLink  to="/shop?category=821">
              <span class="d-flex gap-2 align-items-center mb-3 justify-content-center">
                 <i class="fa-brands fa-playstation" style="font-size: 30px"></i>
                 <i class="fa-brands fa-xbox" style="font-size: 30px"></i>
                 <img src="../assets/nintendo.svg" width="30px" height="30px" />
              </span>
              <h6>Console</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=829">
              <i class="fa fa-headset mb-3" style="font-size: 30px"></i>
              <h6>Accessoires</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=854" >
              <i class="fa fa-recycle mb-3" style="font-size: 30px"></i>
              <h6>Occasions</h6>
            </RouterLink>
          </div>


          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?on_sale=1">
              <i class="fa fa-percent mb-3" style="font-size: 30px"></i>
              <h6>Promotions</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=2714">
              <i class="fa fa-clock-rotate-left mb-3" style="font-size: 30px"></i>
              <h6>Retro</h6>
            </RouterLink>
          </div>


        </div>

      </div>
    </section>
    <!-- Shortcuts-->




    <!-- Gameshop hits Start-->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="hitsProducts.length">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title" >
                  <i class="iconly-Curved-Game me-1"></i>
                  Gameshop Hits
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider  :products="hitsProducts"/>
      </div>
    </section>
    <!-- Gameshop hits Stop-->








    <!-- Discount Start-->
    <section class="content-inner-1 pt-5 overflow-hidden" v-if="discountProducts.length">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-danger">
                  <i class="iconly-Curved-Discount me-1"></i>
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
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="hitsProducts.length">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title" >
                  <i class="iconly-Curved-Game me-1"></i>
                  Gameshop Hits
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider  :products="hitsProducts"/>
      </div>
    </section>
    <!-- Gameshop hits Stop-->




    <!-- Selection Sart-->
    <section class="content-inner-1 pt-5 overflow-hidden" v-if="ourSelection.length">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title ">
                  <i class="iconly-Curved-TicketStar me-1"></i>
                  Notre Sélection
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider :products="ourSelection"/>
      </div>
    </section>
    <!-- Selection Stop-->




    <section class="content-inner   overflow-hidden d-none  d-lg-block">
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
                <RouterLink to="/shop?category=844">
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
                <RouterLink to="/shop?category=836">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/PC-LAP-GS.png?w=896&ssl=1" alt="/"  />
                </RouterLink>
              </div>

            </li>


            <li class="card-container  col-md-6">

              <div class="dz-media rounded-5">
                <RouterLink to="/shop?category=2714">
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
        class="video-wrapper bg-img-fix"
        :style="`background-image: url(https://lh3.googleusercontent.com/p/AF1QipN19apdG8TofDnbwxWFcRNsYi1oSl2YzxrwbsdL=s1360-w1360-h1020-rw)`"
      >
        <div class="container">
          <div class="d-flex justify-content-center d-none">
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

          <div class="col-md-4  d-none  d-lg-block">
            <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS_997.png?resize=531%2C1024&ssl=1" class="h-100 rounded-4" alt="">
          </div>


          <div class="col-md-8">

            <div class="left-content mb-3">
              <h2 class="title mb-0 ">Découvrez nos nouvelles consoles en magasin !</h2>
              <p class="mb-0">Nouvelles consoles en stock !</p>
            </div>

            <div class="row gy-3 gx-3">

              <div class="col-6 col-md-4" v-for="console in consoles">

                  <ProductCard :show-stock="false" :product="console"  />

              </div>


            </div>


          </div>

        </div>

      </div>
    </section>


  <!--    Start Testemonials-->

    <section class="content-inner bg-white">


        <div id="JFWebsiteWidget-019ccb4c526477e79d3bdd4b5afa7c84f074"></div>


    </section>
  <!--    End Testemonials-->


    <!-- Products Section Start-->


    <section class="content-inner-3 companies-section  bg-white">
      <div class="container ">
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
              to="/shop"
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
            class="item-wrap  gy-5 g-lg-5 row"
          >
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class=" rounded-4 overflow-hidden ">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS14.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS16.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS15.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS126.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS17.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>
            <div class="item col-6 col-md-4">
              <NuxtLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS125.png?w=448&ssl=1" alt="" class="rounded-5" />
                </div>
              </NuxtLink>
            </div>


          </div>
        </div>

    </section>

    <!-- Services Start -->
    <section class="content-inner pb-0">
      <div class="container">
        <div
          class="section-head style-1 wow fadeInUp d-md-flex justify-content-between align-items-center"
          data-wow-delay="0.1s"
        >
        </div>
        <div class="row blog-shap">
          <div class="col-12 col-sm-6 col-md-3 m-lg-b30 m-b50 wow fadeInUp">

            <div class="bg-white rounded-4 shadow-sm p-3 text-center vstack gap-3 ">
              <i class="fa fa-3x fa-shield text-dark"></i>
              <h4>Garantie Gameshop</h4>

            </div>

          </div>



          <div class="col-12   col-sm-6 col-md-3  m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-3 ">
              <i class="fa fa-3x fa-truck-fast text-dark"></i>
              <h4>Livraision Express</h4>
            </div>
          </div>

          <div class="col-12 col-sm-6  col-md-3 m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-3 ">
            <i class="fa fa-3x fa-users text-dark"></i>
            <h4>Service Client Dynamique</h4>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3  m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-3 ">
              <i class="fa fa-3x fa-certificate text-dark"></i>
              <h4>Produits certifiés</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- Services End -->

    <!-- Feature Box -->
    <div class="content-inner ">
      <div class="container">

        <h3 class="text-center">Rejoignez nous sur nos réseaux officiels</h3>


          <ul class="hstack gap-4 align-items-center justify-content-center social-media py-4">
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

.portfolio-gallery2 ,.swiper-slide,.portfolio-box ,swiper-wrapper{
  min-height: 385px;
  max-height: 480px;
}

.slick-arrow {
  background: #164094;
  width: 45px;

  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #fff0df;
  z-index: 5;
  outline: none;
  cursor: pointer;
}

.swiper-button-prev {
  left: 0;
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
}

.swiper-button-next {
  right: 0;
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
}

.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 22px;
}

.shortcuts > div {
  cursor: pointer;
}

.shortcuts i {

  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 6s ease infinite;
  background-size: 400% 400%;
}

@keyframes gradientMove {
  0% {background-position:0% 50%;}
  50% {background-position:100% 50%;}
  100% {background-position:0% 50%;}
}

</style>
