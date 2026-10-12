<script lang="ts" setup>
import Header3 from "~/components/Header3.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const { t } = useI18n()
const { absolute } = useSiteUrl()

// Structured data: the physical store + the site's search box
useJsonLd('home-jsonld', () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Store',
      '@id': absolute('/#store'),
      name: 'Gameshopdz',
      url: absolute('/'),
      logo: absolute('/web-app-manifest-512x512.png'),
      image: absolute('/banner.jpg'),
      description: t('seo.description'),
      telephone: ['+213550779973', '+213793333023'],
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '77 Bis 01 Rue Ouled Sidi Chikh',
        addressLocality: 'Mohammadia',
        addressRegion: 'Alger',
        addressCountry: 'DZ',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 36.727715, longitude: 3.154034 },
      sameAs: [
        'https://www.facebook.com/gameshopdz2',
        'https://www.instagram.com/gameshop.dz/',
        'https://www.tiktok.com/@gameshop.dz',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': absolute('/#website'),
      name: 'Gameshopdz',
      url: absolute('/'),
      inLanguage: ['fr-DZ', 'ar-DZ'],
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: absolute('/shop?search={search_term_string}') },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}))

// Console categories (same ids as the "Consoles" menu)
const consolePlatforms = [
  { label: 'PS5', to: '/shop?category=823', icon: 'fa-brands fa-playstation' },
  { label: 'Xbox Series', to: '/shop?category=824', icon: 'fa-brands fa-xbox' },
  { label: 'Switch', to: '/shop?category=826', icon: 'fa-solid fa-gamepad' },
  { label: 'Switch 2', to: '/shop?category=2926', icon: 'fa-solid fa-gamepad' },
]

// Main categories with their banner artwork (hosted on the WooCommerce site)
const bannerUrl = (file: string, width: number) =>
    `https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/${file}?w=${width}&ssl=1`

const universes = [
  { to: '/shop?category=815', file: 'GS-All-games-Banner.png', icon: 'fa-solid fa-gamepad', title: 'home.uniGames', text: 'home.uniGamesText' },
  { to: '/shop?category=821', file: 'GS-All-Consoles-Banner.png', icon: 'fa-solid fa-tv', title: 'home.uniConsoles', text: 'home.uniConsolesText' },
  { to: '/shop?category=854', file: 'GS-All-occasion-Banner.png', icon: 'fa-solid fa-recycle', title: 'home.uniUsed', text: 'home.uniUsedText' },
  { to: '/shop?category=829', file: 'GS-All-accessoires-Banner.png', icon: 'fa-solid fa-headset', title: 'home.uniAccessories', text: 'home.uniAccessoriesText' },
  { to: '/shop?category=843', file: 'DIGTAL-GS.png', icon: 'fa-solid fa-cloud-arrow-down', title: 'home.uniDigital', text: 'home.uniDigitalText' },
  { to: '/shop?category=846', file: 'Collector-GS.png', icon: 'fa-solid fa-gem', title: 'home.uniCollector', text: 'home.uniCollectorText' },
  { to: '/shop?category=836', file: 'PC-LAP-GS.png', icon: 'fa-solid fa-laptop', title: 'home.uniPc', text: 'home.uniPcText' },
  { to: '/shop?category=2714', file: 'Retro-GS.png', icon: 'fa-solid fa-ghost', title: 'home.uniRetro', text: 'home.uniRetroText' },
]

// Official accounts (same links as the header and footer)
const socials = [
  { name: 'Facebook', handle: 'gameshopdz2', url: 'https://www.facebook.com/gameshopdz2', icon: 'fa-brands fa-facebook-f', color: '#1877f2' },
  { name: 'Instagram', handle: '@gameshopbackup', url: 'https://www.instagram.com/gameshopbackup/', icon: 'fa-brands fa-instagram', color: '#e1306c' },
  { name: 'TikTok', handle: '@gameshop.dz', url: 'https://www.tiktok.com/@gameshop.dz', icon: 'fa-brands fa-tiktok', color: '#111111' },
  { name: 'Snapchat', handle: '@gameshop.dz', url: 'https://www.snapchat.com/@gameshop.dz', icon: 'fa-brands fa-snapchat', color: '#f7c600' },
]

const trustItems = [
  { icon: 'fa-solid fa-shield-alt', title: 'cart.warranty', text: 'home.trustWarranty' },
  { icon: 'fa-solid fa-truck-fast', title: 'cart.express', text: 'home.trustDelivery' },
  { icon: 'fa-solid fa-hand-holding-dollar', title: 'checkout.cod', text: 'home.trustCod' },
  { icon: 'fa-solid fa-certificate', title: 'cart.certified', text: 'home.trustCertified' },
]

useHead({
  title: () => t('seo.title'),
  meta: [
    { name: 'description', content: () => t('seo.description') },
  ],
})


// Brands we sell (alt text = brand name)
const brands = [
  { name: 'PlayStation Plus', src: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-black-badge-01-22sep20?$400px--t$' },
  { name: 'PlayStation', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/PlayStation_logo_and_wordmark.svg' },
  { name: 'Xbox', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Xbox_logo_%282019%29.svg' },
  { name: 'Xbox Game Pass', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Xbox_Game_Pass_new_logo_-_colored_version.svg/1280px-Xbox_Game_Pass_new_logo_-_colored_version.svg.png' },
  { name: 'Nintendo', src: 'https://www.hatchwise.com/wp-content/uploads/2023/02/image-48.png' },
  { name: 'Logitech G', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfNR-GjrukHGen1bho6CZBVm3DJ0s9LLaxw&s' },
  { name: 'Razer', src: 'https://upload.wikimedia.org/wikipedia/en/4/40/Razer_snake_logo.svg' },
  { name: 'HyperX', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/HyperX_Logo.svg/1280px-HyperX_Logo.svg.png' },
  { name: 'GameSir', src: 'https://media.printables.com/media/prints/78f9e114-141b-4b28-b1aa-eda3c5a7e3e6/images/10282283_c8fd3225-5d0e-4c96-ad74-105f80f3def9_77213108-93f3-45ca-9a27-1f9cf1b1a3d2/thumbs/inside/1280x960/png/gamesir-logo-new.webp' },
  { name: 'DOBE', src: 'https://www.dobe-game.com/uploads/image/20200608/1591609282.png' },
]

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
const digitalProducts = ref([])


useFetch("/api/wc/products", {
  query: { per_page: 10, page: 2 ,status:'publish',  orderby: 'popularity',stock_status:'instock'}
}).then(( response) => {

  topSales.value = response.data.value.products.map((product: any) => ({
    id: product.id,
    name: product.name,
    categories: product.categories,
    slug: product.slug,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    type: product.type,
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
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
        categories: product.categories,
        slug: product.slug,
        thumbnail: product.images[0]?.thumbnail || '',
        image: product.images?.[0],
        hoverImage: product.images?.[1],
        type: product.type,
        variations: product.variations,
        is_epay: product.is_epay,
        is_prepay: product.is_prepay,
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
  query: { per_page: 10, page: 1 ,status:'publish',category: '3040',stock_status: 'instock'}
}).then(( response) => {
  hitsProducts.value = response.data.value.products.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    type: product.type,
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
    price: product.price,
    on_sale: product.on_sale,
    categories: product.categories,
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
    categories: product.categories,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    type: product.type,
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
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
    categories: product.categories,
    name: product.name,
    slug: product.slug,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    type: product.type,
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
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
    categories: product.categories,
    name: product.name,
    slug: product.slug,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    type: product.type,
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
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
  query: { per_page: 10, page: 1  ,status:'publish',category: '3039',stock_status:'instock'}
}).then(( response) => {
  carousel.value = response.data.value.products.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    images: product.images,
    type: product.type,
    categories: product.categories,
    grouped_products: product.grouped_products,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
    variations: product.variations,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
    price: product.price,
    on_sale: product.on_sale,
    regular_price: product.regular_price,
    stock: product.stock_status,
    occasion: product.categories.some((category) => category.slug == 'occasion')

  }));
  console.log(carousel.value);

}).catch((error) => {
  console.error("Error fetching latest products:", error);
});


useFetch("/api/wc/products", {
  query: { per_page: 10, page: 1  ,status:'publish',category: '3076',stock_status:'instock'}
}).then(( response) => {
  digitalProducts.value = response.data.value.products.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    images: product.images,
    is_epay: product.is_epay,
    is_prepay: product.is_prepay,
    variations: product.variations,
    type: product.type,
    categories: product.categories,
    thumbnail: product.images[0]?.thumbnail || '',
    image: product.images?.[0],
    hoverImage: product.images?.[1],
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
              v-if="carousel.length"
              class="swiper portfolio-gallery2 hero-swiper"
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
            <SwiperSlide
                class="swiper-slide hero-slide  position-relative "
                v-for="(product, index) in carousel"
                :key="product.id"
            >


              <div class="portfolio-boxstyle-2 position-relative w-100 rounded-0 ">

                <NuxtLink
                    :to="'/shop?include=' + product.grouped_products.join(',')"
                    v-if="product.type == 'grouped'"
                    class="stretched-link"
                    :aria-label="product.name"
                ></NuxtLink>


                <NuxtLink
                    :to="'/shop/product/' + product.slug"
                    class="stretched-link"
                    v-else
                >
                </NuxtLink>

                <div class="dz-media w-100 h-100">
                  <picture class="hero-picture w-100">
                    <!-- Desktop -->
                    <source
                        media="(min-width: 700px)"
                        :srcset="product.images[1]?.src"
                    />


                    <!-- Mobile -->
                    <!-- The first banner is the page's largest paint: load it right away -->
                    <img
                        :src="product.images[2]?.src || product.images[1]?.src"
                        :alt="product.name"
                        class="hero-img"
                        :loading="index === 0 ? 'eager' : 'lazy'"
                        :fetchpriority="index === 0 ? 'high' : 'auto'"
                        decoding="async"
                    />
                  </picture>

                </div>

                <div class="dz-content  w-100 start-0  bottom-0 position-absolute  z-3  justify-content-end">
                  <div class="container">
                    <!--                    <h6-->
                    <!--                        class="sub-title text-light mb-1 fw-light"-->
                    <!--                        style="letter-spacing: 2px"-->
                    <!--                    >-->
                    <!--                      DECOUVREZ-->
                    <!--                    </h6>-->

                    <h3 class="text-white d-none fs-3  mb-3  ">
                      <RouterLink :to="'/shop/product/' + product.slug" class="text-white">
                        {{ product.name }}
                      </RouterLink>
                    </h3>

                    <NuxtLink
                        :to="'/shop?include=' + product.grouped_products.join(',')"
                        class="btn btn-sm d-none  btn-outline-light mb-5"
                        v-if="product.type == 'grouped'"
                    >
                      {{ $t('home.buyNow') }}
                      <i class="fa fa-angles-right fa-1x ms-2"></i>
                    </NuxtLink>

                    <NuxtLink
                        :to="'/shop/product/' + product.slug"
                        class="btn btn-sm d-none  d-md-inline-block btn-outline-light mb-5"
                        v-else
                    >
                      {{ $t('home.buyNow') }}
                      <i class="fa fa-angles-right fa-1x ms-2"></i>

                    </NuxtLink>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <span class=" swiper-button-prev slick-arrow" ></span>
            <span class=" swiper-button-next slick-arrow" ></span>

          </Swiper>

          <div class="placeholder-glow my-0 " style="height: 50vh" v-else>
            <span class="placeholder col-12" style="height: 50vh"></span>
          </div>

        </div>
      </section>


    <!-- The hero is all images: give the page its main heading for search engines and screen readers -->
    <h1 class="visually-hidden">{{ $t('seo.title') }}</h1>

    <!-- Reassurance, right under the hero -->
    <section class="trust-bar">
      <div class="container home-wide">
        <ul class="trust-list">
          <li v-for="item in trustItems" :key="item.title">
            <span class="trust-icon" aria-hidden="true"><i :class="item.icon"></i></span>
            <span>
              <b>{{ $t(item.title) }}</b>
              <small>{{ $t(item.text) }}</small>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <CategoriesSlider />

    <!-- "Looking for more?" call to action (was a flat banner image) -->
    <section class="shop-cta-section">
      <div class="container home-wide">
        <div class="shop-cta">
          <span class="cta-shape cta-shape-1" aria-hidden="true"></span>
          <span class="cta-shape cta-shape-2" aria-hidden="true"></span>

          <div class="cta-content">
            <span class="cta-eyebrow"><i class="fa-solid fa-bolt"></i> {{ $t('home.ctaEyebrow') }}</span>
            <h2 class="cta-title">{{ $t('home.ctaTitle') }}</h2>
            <p class="cta-text">{{ $t('home.ctaText') }}</p>

            <div class="cta-actions">
              <NuxtLink to="/shop" class="btn btn-light btn-lg cta-primary">
                <i class="iconly-Curved-Game"></i> {{ $t('home.ctaShop') }}
              </NuxtLink>
              <NuxtLink to="/shop?new=1" class="btn btn-outline-light btn-lg">
                <i class="fa-solid fa-star"></i> {{ $t('home.ctaNew') }}
              </NuxtLink>
            </div>

            <ul class="cta-points">
              <li><i class="fa-solid fa-gamepad"></i> {{ $t('home.ctaPoint1') }}</li>
              <li><i class="fa-solid fa-truck-fast"></i> {{ $t('home.ctaPoint2') }}</li>
              <li><i class="fa-solid fa-hand-holding-dollar"></i> {{ $t('checkout.cod') }}</li>
            </ul>
          </div>

          <div class="cta-visual" aria-hidden="true">
            <span class="cta-ring"></span>
            <AstroBot mood="happy" :size="190" />
          </div>
        </div>
      </div>
    </section>



    <!-- Top Sales Start-->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="topSales.length">
      <div class="container home-wide">
        <div class="row justify-content-md-between align-items-center">
            <div
                class="section-head d-flex w-100 align-items-center justify-content-between flex-wrap style-1 m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title">
                  <NuxtLink to="/shop?orderby=popularity" />
                  <AstroBot head mood="star" badge="fa-trophy" :size="44" class="section-astro" />

                  {{ $t('home.topSales') }}
                </h2>
              </div>

              <div class="right-content">

                <NuxtLink to="/shop?orderby=popularity" class="stretched-link">
                  {{ $t('common.seeAll') }}
                  <i class="fa fa-chevron-right ms-1"></i>
                </NuxtLink>

              </div>

            </div>


        </div>

        <ProductSlider  :products="topSales"/>
      </div>
    </section>
    <!-- Top Sales Stop-->



    <!-- Discount Start-->
    <section class="content-inner-1 pt-5 overflow-hidden" v-if="discountProducts.length">
      <div class="container home-wide">
        <div class="row justify-content-md-between align-items-center">

            <div
                class="section-head style-1 d-flex w-100 align-items-center justify-content-between flex-wrap  m-b30 wow fadeInUp"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title text-danger">
                  <NuxtLink to="/shop?on_sale=1" class="stretched-link" />
                  <AstroBot head mood="heart" badge="fa-percent" :size="44" class="section-astro" />
                  {{ $t('home.promotions') }}
                </h2>
              </div>


              <div class="right-content">

                <NuxtLink to="/shop?on_sale=1" class="stretched-link">
                  {{ $t('common.seeAll') }}
                  <i class="fa fa-chevron-right ms-1"></i>
                </NuxtLink>

              </div>

            </div>


        </div>

        <ProductSlider :products="discountProducts"/>
      </div>
    </section>
    <!-- Discount Stop-->


    <!-- Preorders -->
<!--    <section class="content-inner-1 bg-white pt-5 overflow-hidden">-->
<!--      <div class="container-fluid">-->
<!--        <div class="row justify-content-md-between align-items-center">-->
<!--          <div class="col-lg-6 col-md-8 col-sm-12">-->
<!--            <div-->
<!--                class="section-head style-1 m-b30 wow fadeInUp"-->
<!--                data-wow-delay="0.2s"-->
<!--            >-->
<!--              <div class="left-content">-->
<!--                <h2 class="title" >-->
<!--                  <i class="iconly-Curved-TimeCircle me-1"></i>-->
<!--                  Bientôt disponible-->
<!--                </h2>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->


<!--        <div class="row my-3">-->

<!--          <div class="col-6 col-md-4 col-lg-3" v-for="product in comingSoon">-->

<!--            <div class="card position-relative overflow-hidden coming-soon" style="height: 250px">-->


<!--              <div class="coming-soon-bg z-2 position-absolute start-0 top-0 w-100 h-100"></div>-->

<!--              <NuxtImg-->
<!--                  :src="product.image"-->
<!--                  placeholder-->
<!--                  format="webp"-->
<!--                  height="310"-->
<!--                  class="position-absolute start-0 top-0 w-100 h-100 object-fit-cover"-->
<!--                  loading="lazy"-->
<!--              />-->

<!--              <div class="badge new-gradient position-absolute start-0 top-0 m-1 z-3">-->
<!--                <h4 class="text-warning mb-1">{{product.day}}</h4>-->
<!--                <span>{{product.month}}</span>-->
<!--              </div>-->


<!--              <div class="w-100  p-4 text-center position-absolute start-50 top-50 translate-middle bg-transparent  z-3">-->
<!--                <h3 class="text-warning">{{product.name}}</h3>-->

<!--                &lt;!&ndash;                <NuxtLink&ndash;&gt;-->
<!--                &lt;!&ndash;                    to="#"&ndash;&gt;-->
<!--                &lt;!&ndash;                    class="btn btn-primary add-btn mt-3 new-gradient"&ndash;&gt;-->
<!--                &lt;!&ndash;                >&ndash;&gt;-->
<!--                &lt;!&ndash;                  <i class="fa fa-cart-arrow-down me-2"></i>&ndash;&gt;-->
<!--                &lt;!&ndash;                  Je Précommande&ndash;&gt;-->

<!--                &lt;!&ndash;                </NuxtLink>&ndash;&gt;-->

<!--              </div>-->


<!--            </div>-->

<!--          </div>-->

<!--        </div>-->

<!--      </div>-->
<!--    </section>-->
    <!-- Preorders -->



    <!-- Gameshop hits Start-->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="hitsProducts.length">
      <div class="container home-wide">
        <div class="row justify-content-md-between align-items-center">

            <div
                class="section-head style-1 m-b30 wow fadeInUp  d-flex w-100 align-items-center justify-content-between flex-wrap"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title">
                  <NuxtLink to="/shop?category=3040" class="stretched-link" />
                  <AstroBot head mood="happy" badge="fa-fire" :size="44" class="section-astro" />
                  {{ $t('home.hits') }}

                </h2>
              </div>


              <div class="right-content">

                <NuxtLink to="/shop?category=3040" class="stretched-link" >
                  {{ $t('common.seeAll') }}
                  <i class="fa fa-chevron-right ms-1"></i>
                </NuxtLink>

              </div>

          </div>

        </div>

        <ProductSlider  :products="hitsProducts"/>
      </div>
    </section>
    <!-- Gameshop hits Stop-->



    <!-- Digital Sart-->
    <section class="content-inner-1 pt-5 overflow-hidden" v-if="digitalProducts.length">
      <div class="container home-wide">
        <div class="row justify-content-md-between align-items-center">

            <div
                class="section-head style-1 m-b30 wow fadeInUp  d-flex w-100 align-items-center justify-content-between flex-wrap"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title">
                  <NuxtLink to="/shop?category=3076" class="stretched-link" />
                  <AstroBot head mood="pixel" badge="fa-cloud-arrow-down" :size="44" class="section-astro" />
                  {{ $t('home.digital') }}
                </h2>
              </div>


              <div class="right-content">

                <NuxtLink to="/shop?category=3076" class="stretched-link" >
                  {{ $t('common.seeAll') }}
                  <i class="fa fa-chevron-right ms-1"></i>
                </NuxtLink>

              </div>

            </div>
          </div>


        <ProductSlider :products="digitalProducts"/>
      </div>
    </section>
    <!-- Digital Stop-->




    <!-- Selection Sart-->
    <section class="content-inner-1 bg-white pt-5 overflow-hidden" v-if="ourSelection.length">
      <div class="container home-wide">
        <div class="row justify-content-md-between align-items-center ">

            <div
                class="section-head style-1 m-b30 wow fadeInUp  d-flex w-100 align-items-center justify-content-between flex-wrap"
                data-wow-delay="0.2s"
            >
              <div class="left-content">
                <h2 class="title">
                  <NuxtLink to="/shop?orderby=popularity" class="stretched-link" />
                  <AstroBot head mood="wink" badge="fa-heart" :size="44" class="section-astro" />
                  {{ $t('home.selection') }}
                </h2>
              </div>

              <div class="right-content">

                <NuxtLink to="/shop?category=3041" class="stretched-link" >
                  {{ $t('common.seeAll') }}
                  <i class="fa fa-chevron-right ms-1"></i>
                </NuxtLink>

              </div>


            </div>
          </div>



        <ProductSlider :products="ourSelection"/>
      </div>
    </section>
    <!-- Selection Stop-->







    <!-- Shop universes: one card per main category -->
    <section class="universes-section">
      <div class="container home-wide">
        <div class="section-head style-1 d-flex w-100 align-items-center justify-content-between flex-wrap m-b30">
          <div class="left-content">
            <h2 class="title">
              <span class="universe-head-icon" aria-hidden="true"><i class="fa-solid fa-layer-group"></i></span>
              {{ $t('home.universesTitle') }}
            </h2>
          </div>
          <div class="right-content">
            <NuxtLink to="/shop">
              {{ $t('common.seeAll') }}
              <i class="fa fa-chevron-right ms-1"></i>
            </NuxtLink>
          </div>
        </div>

        <ul class="universe-grid">
          <li v-for="universe in universes" :key="universe.to">
            <NuxtLink :to="universe.to" class="universe-card">
              <span class="universe-media">
                <img
                    :src="bannerUrl(universe.file, 640)"
                    :srcset="`${bannerUrl(universe.file, 640)} 640w, ${bannerUrl(universe.file, 960)} 960w`"
                    sizes="(max-width: 767px) 50vw, (max-width: 1199px) 50vw, 25vw"
                    :alt="$t(universe.title)"
                    width="640"
                    height="401"
                    loading="lazy"
                    decoding="async"
                />
              </span>
              <span class="universe-body">
                <span class="universe-icon" aria-hidden="true"><i :class="universe.icon"></i></span>
                <span class="universe-text">
                  <b>{{ $t(universe.title) }}</b>
                  <small>{{ $t(universe.text) }}</small>
                </span>
                <i class="fa-solid fa-arrow-right universe-arrow flip-rtl" aria-hidden="true"></i>
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>


<!--    <section class="video-section">-->
<!--      <div-->
<!--        class="video-wrapper bg-img-fix"-->
<!--        :style="`background-image: url(https://lh3.googleusercontent.com/p/AF1QipN19apdG8TofDnbwxWFcRNsYi1oSl2YzxrwbsdL=s1360-w1360-h1020-rw)`"-->
<!--      >-->
<!--        <div class="container">-->
<!--          <div class="d-flex justify-content-center d-none">-->
<!--            <NuxtLink-->
<!--              class="icon-button popup-youtube"-->
<!--              to=""-->
<!--              @click="openVideo"-->
<!--            >-->
<!--              <div class="text-row word-rotate-box border-white c-black">-->
<!--                <svg-->
<!--                  class="badge__emoji"-->
<!--                  xmlns="http://www.w3.org/2000/svg"-->
<!--                  width="40"-->
<!--                  height="40"-->
<!--                  viewBox="0 0 40 40"-->
<!--                  fill="none"-->
<!--                >-->
<!--                  <g clip-path="url(#clip0_671_345)">-->
<!--                    <path-->
<!--                      d="M34.6779 15.3843L11.0529 0.821429C9.34369 -0.230839 7.2772 -0.274589 5.52493 0.704398C3.77266 1.68323 2.72656 3.46612 2.72656 5.47323V34.4664C2.72656 37.5013 5.17188 39.9835 8.17735 39.9999C8.18556 39.9999 8.19376 40 8.20181 40C9.14103 39.9999 10.1198 39.7056 11.0339 39.1478C11.7693 38.6991 12.0017 37.7392 11.5531 37.0039C11.1044 36.2685 10.1444 36.0361 9.40923 36.4848C8.98165 36.7456 8.56407 36.8805 8.19415 36.8804C7.06016 36.8742 5.84602 35.9028 5.84602 34.4665V5.47331C5.84602 4.6123 6.29477 3.84769 7.04634 3.42776C7.79798 3.00784 8.68431 3.02659 9.41658 3.47745L33.0417 18.0404C33.7518 18.4776 34.1581 19.2065 34.1564 20.0405C34.1547 20.8743 33.7454 21.6016 33.0314 22.0373L15.9503 32.4958C15.2156 32.9456 14.9847 33.9059 15.4346 34.6405C15.8843 35.3752 16.8446 35.6061 17.5792 35.1563L34.6583 24.6991C36.2935 23.7015 37.2721 21.9624 37.276 20.0467C37.2799 18.1312 36.3083 16.3881 34.6779 15.3843Z"-->
<!--                      fill="#FEEB9D"-->
<!--                    ></path>-->
<!--                  </g>-->
<!--                  <defs>-->
<!--                    <clipPath id="clip0_671_345">-->
<!--                      <rect width="40" height="40" fill="white"></rect>-->
<!--                    </clipPath>-->
<!--                  </defs>-->
<!--                </svg>-->
<!--                <span class="text__char" style="&#45;&#45;char-rotate: 0deg">s</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 13.333333333333334deg"-->
<!--                  >h</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 26.666666666666668deg"-->
<!--                  >o</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 40deg">p</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 53.333333333333336deg"-->
<!--                >-->
<!--                </span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 66.66666666666667deg"-->
<!--                  >-</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 80deg"> </span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 93.33333333333334deg"-->
<!--                  >s</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 106.66666666666667deg"-->
<!--                  >h</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 120deg">o</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 133.33333333333334deg"-->
<!--                  >p</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 146.66666666666669deg"-->
<!--                >-->
<!--                </span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 160deg">-</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 173.33333333333334deg"-->
<!--                >-->
<!--                </span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 186.66666666666669deg"-->
<!--                  >s</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 200deg">h</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 213.33333333333334deg"-->
<!--                  >o</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 226.66666666666669deg"-->
<!--                  >p</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 240deg"> </span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 253.33333333333334deg"-->
<!--                  >-</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 266.6666666666667deg"-->
<!--                >-->
<!--                </span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 280deg">s</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 293.33333333333337deg"-->
<!--                  >h</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 306.6666666666667deg"-->
<!--                  >o</span-->
<!--                ><span class="text__char" style="&#45;&#45;char-rotate: 320deg">p</span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 333.33333333333337deg"-->
<!--                >-->
<!--                </span-->
<!--                ><span-->
<!--                  class="text__char"-->
<!--                  style="&#45;&#45;char-rotate: 346.6666666666667deg"-->
<!--                  >-</span-->
<!--                >-->
<!--              </div>-->
<!--            </NuxtLink>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="dz-features-wrapper overflow-hidden">-->
<!--        <ul class="dz-features text-wrapper">-->
<!--          <li class="item">-->
<!--            <h2 class="title">Console</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">PS4 / PS5</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Abonnement</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Retro</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Jeux</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Collector & Goodies</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">PC</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Retro</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Occasions</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <h2 class="title">Jeux</h2>-->
<!--          </li>-->
<!--          <li class="item">-->
<!--            <svg-->
<!--              xmlns="http://www.w3.org/2000/svg"-->
<!--              width="61"-->
<!--              height="60"-->
<!--              viewBox="0 0 61 60"-->
<!--              fill="none"-->
<!--            >-->
<!--              <path-->
<!--                opacity="0.3"-->
<!--                d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z"-->
<!--                fill="black"-->
<!--              />-->
<!--            </svg>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </section>-->




    <!-- New consoles: feature panel + slider -->
    <section class="content-inner consoles-section" v-if="consoles.length">
      <div class="container home-wide">
        <div class="consoles-layout">
          <aside class="consoles-panel">
            <AstroBot mood="star" badge="fa-gamepad" :size="84" head />
            <h2>{{ $t('home.newConsoles') }}</h2>
            <p>{{ $t('home.newConsolesSub') }}</p>

            <div class="console-chips">
              <NuxtLink v-for="platform in consolePlatforms" :key="platform.to" :to="platform.to" class="console-chip">
                <i :class="platform.icon"></i>{{ platform.label }}
              </NuxtLink>
            </div>

            <NuxtLink to="/shop?category=821" class="btn btn-outline-light">
              {{ $t('home.allConsoles') }}
              <i class="fa-solid fa-arrow-right flip-rtl"></i>
            </NuxtLink>
          </aside>

          <div class="consoles-slider">
            <ProductSlider :products="consoles" />
          </div>
        </div>
      </div>
    </section>

    <!-- Customer reviews (Google, via Jotform) -->
    <ReviewsWidget />


    <!-- Products Section Start-->


    <!-- Brands -->
    <section class="brands-section" :aria-label="$t('home.brandsTitle')">
      <div class="container home-wide">
        <h2 class="brands-title">{{ $t('home.brandsTitle') }}</h2>

        <!-- the track is duplicated so the loop is seamless; the copy is hidden from screen readers -->
        <div class="brands-marquee">
          <ul class="brands-track">
            <li v-for="(brand, i) in [...brands, ...brands]" :key="i" class="brand-card" :aria-hidden="i >= brands.length ? 'true' : undefined">
              <img :src="brand.src" :alt="brand.name" loading="lazy" decoding="async" />
            </li>
          </ul>
        </div>
      </div>
    </section>


    <!-- Follow us -->
    <section class="follow-section">
      <div class="container home-wide">
        <div class="follow-head">
          <h2 class="follow-title">{{ $t('home.followUs') }}</h2>
          <p class="follow-sub">{{ $t('home.followSub') }}</p>
        </div>

        <ul class="follow-grid">
          <li v-for="social in socials" :key="social.name">
            <a :href="social.url" target="_blank" rel="noopener" class="follow-card" :style="{ '--brand': social.color }">
              <span class="follow-icon" aria-hidden="true"><i :class="social.icon"></i></span>
              <span class="follow-text">
                <b>{{ social.name }}</b>
                <small dir="ltr">{{ social.handle }}</small>
              </span>
              <span class="follow-btn">{{ $t('home.follow') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>


/* ---------- reassurance bar ---------- */
.trust-bar {
  padding: 18px 0;
  background: #fff;
  border-bottom: 1px solid #eef1f7;
}

.trust-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* Centered cards: icon on top, text below */
.trust-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
}

.trust-list li {
  padding: 14px 16px;
  border: 1px solid #eef1f7;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 2px 10px rgba(15, 30, 74, .04);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.trust-list li:hover {
  transform: translateY(-2px);
  border-color: rgba(106, 61, 240, .25);
  box-shadow: 0 10px 24px rgba(15, 30, 74, .08);
}

/* Brand-gradient icon tile */
.trust-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--gs-gradient);
  color: #fff;
  font-size: 19px;
  box-shadow: 0 6px 14px rgba(106, 61, 240, .25);
}

.trust-list span:not(.trust-icon) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  line-height: 1.3;
}

.trust-list b {
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
}

.trust-list small {
  color: #6b7390;
  font-size: 12.5px;
}

/* Phones: a swipeable strip instead of a cramped grid */
@media (max-width: 991.98px) {
  .trust-list {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    scrollbar-width: none;
  }

  .trust-list::-webkit-scrollbar {
    display: none;
  }

  .trust-list li {
    flex: 0 0 auto;
    min-width: 170px;
    scroll-snap-align: start;
  }
}

/* ---------- new consoles ---------- */
.consoles-layout {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;
}

.consoles-panel {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 28px 24px;
  border-radius: 24px;
  background:
      radial-gradient(circle at 100% 0%, rgba(255, 255, 255, .15), transparent 50%),
      var(--gs-gradient);
  color: #fff;
}

.consoles-panel h2 {
  margin: 6px 0 0;
  color: #fff;
  font-size: 24px;
  line-height: 1.25;
}

.consoles-panel p {
  margin: 0;
  color: rgba(255, 255, 255, .8);
}

.console-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 auto;
  padding-bottom: 16px;
}

.console-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  transition: background .15s ease;
}

.console-chip:hover {
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
}

.consoles-slider {
  min-width: 0;
}

:global([dir="rtl"] .flip-rtl) {
  transform: scaleX(-1);
}

@media (max-width: 991.98px) {
  .consoles-layout {
    grid-template-columns: 1fr;
  }

  .console-chips {
    margin-bottom: 4px;
    padding-bottom: 8px;
  }
}

/* ---------- "looking for more?" card ---------- */
.shop-cta-section {
  padding: 8px 0 24px;
  background: #fff;
}

.shop-cta {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 24px;
  padding: clamp(24px, 4vw, 44px) clamp(22px, 4vw, 56px);
  border-radius: 28px;
  background:
      radial-gradient(circle at 85% 20%, rgba(143, 107, 255, .55), transparent 45%),
      radial-gradient(circle at 10% 110%, rgba(10, 99, 216, .6), transparent 50%),
      linear-gradient(135deg, #0f2f6d, #164094 55%, #6a3df0);
  color: #fff;
  box-shadow: 0 24px 50px rgba(15, 47, 109, .25);
}

/* soft decorative circles */
.cta-shape {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, .12);
  pointer-events: none;
}

.cta-shape-1 {
  width: 360px;
  height: 360px;
  top: -160px;
  inset-inline-end: -80px;
}

.cta-shape-2 {
  width: 220px;
  height: 220px;
  bottom: -120px;
  inset-inline-start: 30%;
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 620px;
}

.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, .14);
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: .03em;
  text-transform: uppercase;
}

.cta-eyebrow i {
  color: #ffd166;
}

.cta-title {
  margin: 14px 0 8px;
  color: #fff;
  font-size: clamp(26px, 3.4vw, 40px);
  line-height: 1.15;
}

.cta-text {
  margin: 0 0 22px;
  color: rgba(255, 255, 255, .82);
  font-size: clamp(15px, 1.6vw, 17px);
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.cta-primary {
  border: 0 !important;
  background: #fff !important;
  color: var(--gs-ink, #0F1E4A) !important;
  box-shadow: 0 10px 24px rgba(8, 18, 60, .25);
}

.cta-primary:hover {
  transform: translateY(-2px);
}

.cta-points {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
  color: rgba(255, 255, 255, .85);
  font-size: 14px;
  font-weight: 600;
}

.cta-points i {
  margin-inline-end: 6px;
  color: #8fd8ff;
}

.cta-visual {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 240px;
  height: 240px;
}

.cta-ring {
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, .22), rgba(255, 255, 255, 0) 70%);
}

@media (max-width: 767.98px) {
  .shop-cta {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cta-content {
    max-width: none;
  }

  .cta-actions,
  .cta-points {
    justify-content: center;
  }

  .cta-actions .btn {
    flex: 1 1 100%;
  }

  /* Astro peeks in at the top on phones */
  .cta-visual {
    order: -1;
    width: 150px;
    height: 150px;
    margin: -8px auto -4px;
  }

  .cta-visual :deep(.astro) {
    width: 120px !important;
  }
}

/* ---------- shop universes ---------- */
.universes-section {
  padding: 48px 0 56px;
  background: #f6f7fb;
}

.universe-head-icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--gs-gradient);
  color: #fff;
  font-size: 17px;
}

.universe-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.universe-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eef1f7;
  box-shadow: 0 4px 14px rgba(15, 30, 74, .05);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.universe-media {
  display: block;
  overflow: hidden;
  aspect-ratio: 600 / 376;
  background: #0f2f6d;
}

.universe-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .45s ease;
}

.universe-body {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
}

.universe-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(10, 99, 216, .08);
  color: var(--gs-primary, #0A63D8);
  font-size: 16px;
  transition: background .25s ease, color .25s ease;
}

.universe-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  line-height: 1.3;
}

.universe-text b {
  color: var(--gs-ink, #0F1E4A);
  font-size: 16px;
}

.universe-text small {
  overflow: hidden;
  color: #6b7390;
  font-size: 12.5px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.universe-arrow {
  flex: none;
  color: #9aa1b5;
  transition: transform .25s ease, color .25s ease;
}

@media (hover: hover) {
  .universe-card:hover {
    transform: translateY(-4px);
    border-color: rgba(106, 61, 240, .25);
    box-shadow: 0 18px 36px rgba(15, 30, 74, .12);
  }

  .universe-card:hover .universe-media img {
    transform: scale(1.06);
  }

  .universe-card:hover .universe-icon {
    background: var(--gs-gradient);
    color: #fff;
  }

  .universe-card:hover .universe-arrow {
    color: var(--gs-primary, #0A63D8);
    transform: translateX(4px);
  }

  :global([dir="rtl"] .universe-card:hover .universe-arrow) {
    transform: scaleX(-1) translateX(4px);
  }
}

.universe-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(10, 99, 216, .35);
}

@media (max-width: 1199.98px) {
  .universe-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .universes-section {
    padding: 32px 0 40px;
  }

  .universe-grid {
    gap: 12px;
  }

  .universe-card {
    border-radius: 16px;
  }

  .universe-body {
    gap: 8px;
    padding: 10px;
  }

  .universe-icon,
  .universe-arrow {
    display: none;
  }

  .universe-text b {
    font-size: 14px;
  }

  .universe-text small {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

/* ---------- follow us ---------- */
.follow-section {
  padding: 48px 0 64px;
  background: #f6f7fb;
}

.follow-head {
  margin-bottom: 22px;
  text-align: center;
}

.follow-title {
  margin: 0;
  font-size: clamp(22px, 2.6vw, 28px);
}

.follow-sub {
  margin: 6px 0 0;
  color: #6b7390;
}

.follow-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.follow-card {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 100%;
  padding: 16px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #eef1f7;
  color: var(--gs-ink, #0F1E4A);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.follow-card:hover {
  transform: translateY(-3px);
  border-color: var(--brand);
  box-shadow: 0 12px 26px rgba(15, 30, 74, .1);
  color: var(--gs-ink, #0F1E4A);
}

.follow-icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--brand);
  color: #fff;
  font-size: 20px;
}

/* Instagram's gradient */
.follow-card[style*="#e1306c"] .follow-icon {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
}

.follow-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  line-height: 1.3;
}

.follow-text b {
  font-size: 15px;
}

.follow-text small {
  overflow: hidden;
  color: #6b7390;
  font-size: 12.5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: start;
}

.follow-btn {
  flex: none;
  padding: 6px 12px;
  border-radius: 999px;
  background: #f1f3f8;
  font-size: 12.5px;
  font-weight: 700;
  transition: background .2s ease, color .2s ease;
}

.follow-card:hover .follow-btn {
  background: var(--brand);
  color: #fff;
}

@media (max-width: 991.98px) {
  .follow-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 575.98px) {
  .follow-section {
    padding: 32px 0 40px;
  }

  .follow-grid {
    gap: 10px;
  }

  .follow-card {
    flex-direction: column;
    gap: 8px;
    padding: 14px 10px;
    text-align: center;
  }

  .follow-text small {
    text-align: center;
  }
}

/* ---------- brands ---------- */
.brands-section {
  padding: 40px 0 48px;
  background: #fff;
  border-top: 1px solid #eef1f7;
}

.brands-title {
  margin-bottom: 22px;
  color: #6b7390;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: .08em;
  text-align: center;
  text-transform: uppercase;
}

/* Runs left-to-right maths in both languages; edges fade out */
.brands-marquee {
  direction: ltr;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.brands-track {
  display: flex;
  gap: 18px;
  width: max-content;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  animation: brands-scroll 40s linear infinite;
}

.brands-marquee:hover .brands-track {
  animation-play-state: paused;
}

.brand-card {
  flex: none;
  display: grid;
  place-items: center;
  width: 170px;
  height: 88px;
  padding: 18px 22px;
  border-radius: 16px;
  background: #f6f7fb;
  border: 1px solid #eef1f7;
  transition: background .2s ease, box-shadow .2s ease;
}

.brand-card img {
  max-width: 100%;
  max-height: 44px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: .65;
  transition: filter .25s ease, opacity .25s ease;
}

.brand-card:hover {
  background: #fff;
  box-shadow: 0 8px 20px rgba(15, 30, 74, .08);
}

.brand-card:hover img {
  filter: none;
  opacity: 1;
}

/* the track holds two copies: moving by half (+ half a gap) loops seamlessly */
@keyframes brands-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-50% - 9px)); }
}

@media (prefers-reduced-motion: reduce) {
  .brands-track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }

  .brands-marquee {
    -webkit-mask-image: none;
    mask-image: none;
  }

  .brand-card[aria-hidden="true"] {
    display: none;
  }
}

@media (max-width: 575.98px) {
  .brand-card {
    width: 130px;
    height: 72px;
    padding: 14px 16px;
  }

  .brand-card img {
    max-height: 36px;
  }
}

/* "See all" as a pill */
.section-head .right-content a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #e1e5ef;
  border-radius: 999px;
  background: #fff;
  color: var(--gs-ink, #0F1E4A);
  font-size: 14px;
  font-weight: 600;
  transition: all .15s ease;
}

.section-head .right-content a:hover {
  border-color: var(--gs-primary, #0A63D8);
  color: var(--gs-primary, #0A63D8);
}

/* Astro head next to the section titles */
.section-head .title {
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-astro {
  flex: none;
}

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





/* Banners are ~3:1 on desktop and square on mobile: keep those proportions so
   they are shown whole and sharp instead of cropped and stretched to fit 50vh */
.hero-picture {
  display: block;
  aspect-ratio: 1 / 1;
}

@media (min-width: 700px) {
  .hero-picture {
    aspect-ratio: 3 / 1;
  }
}

/* The theme forces these images to 80vh / 75vh (!important, min 600px), which
   overflowed the frame and cropped the banner at every screen size */
.portfolio-gallery2 .swiper-wrapper .swiper-slide img.hero-img {
  width: 100%;
  height: 100% !important;
  min-height: 0 !important;
  max-height: none;
  object-fit: cover;
}


.slick-arrow {



  width: 45px;
  padding: 30px;
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  z-index: 5;
  outline: none;
  cursor: pointer;
}

.swiper-button-prev {
  left: 0;
  border-bottom-right-radius: 90px;
  border-top-right-radius: 90px;
  color: #787575;
  padding: 20px;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}

.swiper-button-next {
  right: 0;
  border-bottom-left-radius: 90px;
  border-top-left-radius: 90px;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  color: #787575;
  padding: 20px;
}

.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 22px;
}


.companies-section .companies-slider-wrapper {
  padding: 45px 15px;
}

.companies-section .swiper {
  margin-bottom: 0;
}

.shortcuts > div {
  cursor: pointer;
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

  .slick-arrow {
    display: none !important;
  }

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
  border-radius: 16px;

  box-shadow:
      0 10px 30px rgba(0,0,0,.25),
      0 0 20px rgba(117, 213, 239, .15);
  transition: .3s ease;
}


.category-section .dz-media:hover {
  transform: translateY(-5px);
  box-shadow:
      0 15px 40px rgba(0,0,0,.35),
      0 0 30px rgba(117, 213, 239, .3);
}

.hero-slide .portfolio-box {
  position: relative;
}

.hero-slide .dz-media {
  position: relative;
}



.portfolio-boxstyle-2:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) 50%,
      rgba(0,0,0,.5) 100%
  );
}


.marquee {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 20px;
  animation: marquee 15s linear infinite;
}

.company-card {
  width: 180px;
  height: 100px;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.company-card img {
  max-width: 140px;
  max-height: 60px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 10px));
  }
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}


@media screen and (max-width: 500px) {

  .purchase-btn {
    width: fit-content;
  }

}

</style>
