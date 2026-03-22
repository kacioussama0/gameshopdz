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


const  logos = ref([
  "https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-black-badge-01-22sep20?$400px--t$",
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/PlayStation_logo_and_wordmark.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Xbox_logo_%282019%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Xbox_Game_Pass_new_logo_-_colored_version.svg/1280px-Xbox_Game_Pass_new_logo_-_colored_version.svg.png",
  "https://www.hatchwise.com/wp-content/uploads/2023/02/image-48.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfNR-GjrukHGen1bho6CZBVm3DJ0s9LLaxw&s",
  "https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/HyperX_Logo.svg/1280px-HyperX_Logo.svg.png",
  "https://media.printables.com/media/prints/78f9e114-141b-4b28-b1aa-eda3c5a7e3e6/images/10282283_c8fd3225-5d0e-4c96-ad74-105f80f3def9_77213108-93f3-45ca-9a27-1f9cf1b1a3d2/thumbs/inside/1280x960/png/gamesir-logo-new.webp",
    "https://www.dobe-game.com/uploads/image/20200608/1591609282.png"
])

const comingSoon = ref([
  {
    'name': 'Life Is Strange Reunion',
    'image': 'https://www.micromania.fr/on/demandware.static/-/Sites-Micromania-Library/default/dw3ad32437/Homepage/HitaVenir/tuile-life-is-strange.png',
    'day': '26',
    'month': 'Mars',
  },
  {
    'name': 'Super Mario Bros  Wonder Switch 2',
    'image': 'https://www.micromania.fr/on/demandware.static/-/Sites-Micromania-Library/default/dwe67dea32/Homepage/HitaVenir/mario-wonder-parc-bellabel.png',
    'day': '26',
    'month': 'Mars',
  },
  {
    'name': 'Starfield PS5',
    'image': 'https://www.micromania.fr/on/demandware.static/-/Sites-Micromania-Library/default/dw4d5110e5/Homepage/HitaVenir/Starfield.png',
    'day': '7',
    'month': 'Avril',
  },
  {
    'name': 'Xenoblade Chronicles X Definitive Edition SWITCH 2',
    'image': 'https://www.micromania.fr/on/demandware.static/-/Sites-Micromania-Library/default/dw0cebc789/Homepage/HitaVenir/xenoblade-switch2.png',
    'day': '16',
    'month': 'Avril',
  }
])

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
const topSales = ref([])


useFetch("/api/wc/products", {
  query: { per_page: 10, page: 2 ,status:'publish',  orderby: 'popularity',stock_status:'instock'}
}).then(( response) => {

  topSales.value = response.data.value.products.map((product: any) => ({
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
  query: { per_page: 10, page: 1  ,status:'publish',category: '821',stock_status:'instock'}
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
              :speed="300"
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
                      class="vw-100"
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
            <RouterLink  to="/shop?category=815&stock_status=instock">
              <i class="fa fa-gamepad mb-3" style="font-size: 30px"></i>
              <h6>Jeux</h6>
            </RouterLink>
          </div>


          <div class="col-6 col-md-2">

            <RouterLink  to="/shop?category=821&stock_status=instock">
              <span class="d-flex gap-2 align-items-center mb-3 justify-content-center">
                 <i class="fa-brands fa-playstation" style="font-size: 30px"></i>
                 <i class="fa-brands fa-xbox" style="font-size: 30px"></i>
                 <img src="../assets/nintendo.svg" width="30px" height="30px" />
              </span>
              <h6>Console</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=829&stock_status=instock">
              <i class="fa fa-headset mb-3" style="font-size: 30px"></i>
              <h6>Accessoires</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=854&stock_status=instock" >
              <i class="fa fa-recycle mb-3" style="font-size: 30px"></i>
              <h6>Occasions</h6>
            </RouterLink>
          </div>


          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?on_sale=1&stock_status=instock">
              <i class="fa fa-percent mb-3" style="font-size: 30px"></i>
              <h6>Promotions</h6>
            </RouterLink>
          </div>

          <div class="col-6 col-md-2">
            <RouterLink  to="/shop?category=2714&stock_status=instock">
              <i class="fa fa-clock-rotate-left mb-3" style="font-size: 30px"></i>
              <h6>Retro</h6>
            </RouterLink>
          </div>


        </div>

      </div>
    </section>
    <!-- Shortcuts-->



    <!-- Top Sales Start-->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="topSales.length">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title" >
                  <i class="iconly-Curved-Star me-1"></i>
                  Top Ventes
                </h2>
              </div>
            </div>
          </div>

        </div>

        <ProductSlider  :products="topSales"/>
      </div>
    </section>
    <!-- Top Sales Stop-->



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


    <!-- Preorders -->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden">
      <div class="container-fluid">
        <div class="row justify-content-md-between align-items-center">
          <div class="col-lg-6 col-md-8 col-sm-12">
            <div
                class="section-head style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title" >
                  <i class="iconly-Curved-TimeCircle me-1"></i>
                  Bientôt disponible
                </h2>
              </div>
            </div>
          </div>

        </div>


        <div class="row my-3">

          <div class="col-6 col-md-4 col-lg-3" v-for="product in comingSoon">

            <div class="card position-relative overflow-hidden coming-soon" style="height: 250px">


              <div class="coming-soon-bg z-2 position-absolute start-0 top-0 w-100 h-100"></div>

              <NuxtImg
                  :src="product.image"
                  placeholder
                  format="webp"
                  height="310"
                  class="position-absolute start-0 top-0 w-100 h-100 object-fit-cover"
                  loading="lazy"
              />

              <div class="badge new-gradient position-absolute start-0 top-0 m-1 z-3">
                <h4 class="text-warning mb-1">{{product.day}}</h4>
                <span>{{product.month}}</span>
              </div>


              <div class="w-100  p-4 text-center position-absolute start-50 top-50 translate-middle bg-transparent  z-3">
                <h3 class="text-warning">{{product.name}}</h3>

                <!--                <NuxtLink-->
                <!--                    to="#"-->
                <!--                    class="btn btn-primary add-btn mt-3 new-gradient"-->
                <!--                >-->
                <!--                  <i class="fa fa-cart-arrow-down me-2"></i>-->
                <!--                  Je Précommande-->

                <!--                </NuxtLink>-->

              </div>


            </div>

          </div>

        </div>

      </div>
    </section>
    <!-- Preorders -->



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
    <div class="content-inner new-gradient category-section my-5">

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
    <section class="content-inner" v-if="consoles.length">
      <div class="container">


            <div class="left-content mb-3">
              <h2 class="title mb-0 ">Découvrez nos nouvelles consoles en magasin !</h2>
              <p class="mb-0">Nouvelles consoles en stock !</p>
            </div>


            <ProductSlider :products="consoles" />



          </div>



    </section>


  <!--    Start Testemonials-->

    <section class="content-inner bg-white">


        <div id="JFWebsiteWidget-019ccb4c526477e79d3bdd4b5afa7c84f074"></div>


    </section>
  <!--    End Testemonials-->


    <!-- Products Section Start-->


    <section class="content-inner-3 py-0 companies-section  new-gradient">
      <div class="container-fluid">


        <div class="companies-slider-wrapper">
          <div class="companies-slider">

            <Swiper
                class="swiper-five"
                :modules="[Autoplay, Pagination]"
                :loop="true"
                :pagination="{ clickable: true }"
                :speed="1200"
                :space-between="20"
                :breakpoints="{
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 }
      }"
                :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }"
            >

              <SwiperSlide v-for="(logo,i) in logos" :key="i">
                <div class="company-card p-3">
                  <img :src="logo">
                </div>
              </SwiperSlide>

            </Swiper>

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

            <div class="bg-white rounded-4 shadow-sm p-3 text-center vstack gap-2 justify-content-center align-items-center">
              <img src="https://woo.gameshopdz.com/wp-content/uploads/elementor/thumbs/GS120-qgyvaqnagtyzhqqyulzst61fl8h2ztgsc77u3ymfag.png" width="100"  alt="produit-certifier">
              <h4>Garantie Gameshop</h4>
            </div>

          </div>



          <div class="col-12   col-sm-6 col-md-3  m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-2 justify-content-center align-items-center">
              <img src="https://woo.gameshopdz.com/wp-content/uploads/elementor/thumbs/GS121-qgyvaqnagtyzhqqyulzst61fl8h2ztgsc77u3ymfag.png" width="100"  alt="produit-certifier">
              <h4>Livraision Express</h4>
            </div>
          </div>

          <div class="col-12 col-sm-6  col-md-3 m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-2 justify-content-center align-items-center">
              <img src="https://woo.gameshopdz.com/wp-content/uploads/elementor/thumbs/GS124-qgyvaqnagtyzhqqyulzst61fl8h2ztgsc77u3ymfag.png" width="100"  alt="produit-certifier">
              <h4>Service Client Dynamique</h4>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-3  m-lg-b30 m-b50 wow fadeInUp">
            <div class=" bg-white rounded-4 shadow-sm  p-3 text-center vstack gap-2 justify-content-center align-items-center">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/GS123.png?w=300&ssl=1" width="100"  alt="produit-certifier">
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
                  target="_blank"
                  to="https://www.facebook.com/gameshopdz2"
              >
                <svg class="social-icon" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path class="outline" d="M21 42C9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21-9.402 21-21 21zm0-1.715c10.65 0 19.285-8.634 19.285-19.285 0-10.65-8.634-19.285-19.285-19.285C10.35 1.715 1.715 10.349 1.715 21c0 10.65 8.634 19.285 19.285 19.285z" fill="#DCE0E3" fill-rule="nonzero"></path><path d="M30.625 10.5h-19.25a.875.875 0 00-.875.875v19.25c0 .483.392.875.875.875h10.281v-7.875h-2.625v-3.281h2.625v-2.625c0-2.713 1.718-4.047 4.137-4.047a22.6 22.6 0 012.445.124v2.835l-1.678.001c-1.315 0-1.622.625-1.622 1.543v2.169h3.28l-.655 3.281h-2.625l.052 7.875h5.635a.875.875 0 00.875-.875v-19.25a.875.875 0 00-.875-.875" fill="#435FA0"></path></g></svg>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                  target="_blank"
                  to="https://www.tiktok.com/@gameshop.dz"
              >
                <svg class="social-icon" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path class="outline" d="M21 42C9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21-9.402 21-21 21zm0-1.715c10.65 0 19.285-8.634 19.285-19.285 0-10.65-8.634-19.285-19.285-19.285C10.35 1.715 1.715 10.349 1.715 21c0 10.65 8.634 19.285 19.285 19.285z" fill="#DCE0E3" fill-rule="nonzero"></path><circle fill="#000" cx="21" cy="21" r="15.75"></circle><path d="M17.978 27.289a2.498 2.498 0 01-.595-1.612c0-1.469 1.307-2.66 2.918-2.66.3 0 .601.043.885.125v-3.215a6.9 6.9 0 00-1.01-.052v2.5a3.242 3.242 0 00-.885-.125c-1.61 0-2.918 1.195-2.918 2.664 0 1.037.652 1.938 1.605 2.375zm9.958-11.194c-.693-.691-1.147-1.583-1.246-2.568v-.402h-.956c.24 1.25 1.061 2.323 2.202 2.97zm-1.246 3.173a8.8 8.8 0 004.81 1.402v-3.147c-.339 0-.678-.03-1.01-.096v2.477a8.8 8.8 0 01-4.81-1.402v6.42c0 3.209-2.854 5.814-6.38 5.814a6.776 6.776 0 01-3.55-.985c1.16 1.082 2.774 1.749 4.56 1.749 3.526 0 6.38-2.603 6.38-5.814v-6.418z" fill="#EE1D52"></path><path d="M24.3 16.113a7.84 7.84 0 004.575 1.46V14.99a4.603 4.603 0 01-2.429-1.39 4.592 4.592 0 01-2.094-3.101h-2.393v13.108a2.774 2.774 0 01-2.775 2.764 2.776 2.776 0 01-2.21-1.091 2.78 2.78 0 01-1.53-2.481 2.779 2.779 0 013.621-2.646v-2.609a6.064 6.064 0 00-4.21 10.302A6.067 6.067 0 0024.3 22.81v-6.696z" fill="#FFF"></path><path d="M19.629 18.44v-.754a5.156 5.156 0 00-.785-.058c-3.158 0-5.719 2.752-5.719 6.142 0 2.128 1.006 4.003 2.536 5.105-1.009-1.108-1.63-2.623-1.63-4.295 0-3.35 2.495-6.072 5.598-6.14zm4.983-7.13a4.345 4.345 0 01-.05-.382V10.5h-3.11v13.27c-.006 1.549-1.175 2.802-2.617 2.802a2.51 2.51 0 01-1.177-.299c.478.675 1.232 1.106 2.083 1.106 1.44 0 2.61-1.25 2.616-2.8V11.31h2.255zm4.263 4.544v-.705a4.06 4.06 0 01-2.29-.702 4.244 4.244 0 002.29 1.407z" fill="#69C9D0"></path></g></svg>

              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  target="_blank"
                  to="https://www.instagram.com/gameshop.dz/"
              >
                <svg class="social-icon" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="87.952%" y1="13.972%" x2="17.921%" y2="87.584%" id="ainstagram"><stop stop-color="#C10292" offset="0%"></stop><stop stop-color="#EA001D" offset="63.081%"></stop><stop stop-color="orange" offset="100%"></stop></linearGradient></defs><g fill="none"><path class="outline" d="M21 42C9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21-9.402 21-21 21zm0-1.715c10.65 0 19.285-8.634 19.285-19.285 0-10.65-8.634-19.285-19.285-19.285C10.35 1.715 1.715 10.349 1.715 21c0 10.65 8.634 19.285 19.285 19.285z" fill="#DCE0E3"></path><path d="M15.892 10.5a5.4 5.4 0 00-5.392 5.392v10.216a5.4 5.4 0 005.392 5.392h10.216a5.4 5.4 0 005.392-5.392V15.892a5.4 5.4 0 00-5.392-5.392H15.892zm0 1.703h10.216c2.059 0 3.69 1.63 3.69 3.689v10.216a3.663 3.663 0 01-3.69 3.69H15.892a3.663 3.663 0 01-3.69-3.69V15.892a3.663 3.663 0 013.69-3.69zm10.784 1.702a1.134 1.134 0 10-.002 2.27 1.134 1.134 0 00.002-2.27zM21 15.892A5.12 5.12 0 0015.892 21 5.12 5.12 0 0021 26.108 5.12 5.12 0 0026.108 21 5.12 5.12 0 0021 15.892zm0 1.703A3.392 3.392 0 0124.405 21 3.392 3.392 0 0121 24.405 3.392 3.392 0 0117.595 21 3.392 3.392 0 0121 17.595z" fill="url(#ainstagram)"></path></g></svg>

              </NuxtLink>
            </li>


          </ul>
        </div>


      </div>
    </div>
    <!-- Feature Box End -->



</template>

<style scoped>


.social-media  li {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .1s;
  cursor: pointer;
}





.social-media li:hover {

  background: #FFFFFF;
  border: 1px solid #0F1E4A;
}

.social-media li:hover a{

  color: #0F1E4A;

}

.portfolio-gallery2 ,.swiper-slide,.portfolio-box ,.swiper-wrapper{
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

/* Center wrapper */

.companies-slider-wrapper{
  display:flex;
  justify-content:center;
  width:100%;
}

/* Control slider width */

.companies-slider{
  width:90%;
  max-width:1200px;
  position:relative;
}

/* Center slides */

.swiper-slide{
  display:flex;
  justify-content:center;
  align-items:center;
}

/* Card */

.company-card{
  width:100%;
  height:110px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
  border-radius:12px;
  border:1px solid #eee;
}

.company-card img{
  max-width:100%;
  max-height:70px;
  object-fit:contain;
}

.coming-soon-bg {
  background: linear-gradient(135deg, rgba(15, 47, 109, 0.5), rgba(22, 64, 148, 0.5), rgba(106, 61, 240, 0.5));
}

@media screen and (max-width: 500px) {

  .coming-soon {
    height: 150px !important;
  }

  .coming-soon h3 {
    display: none;
  }

  .coming-soon .badge {
    padding: 5px;
  }

  .coming-soon .badge * {
    font-size: 11px !important;
  }
}

.category-section .dz-media {
  box-shadow: 0 3px 30px rgba(255,255,255,.2);
}

</style>
