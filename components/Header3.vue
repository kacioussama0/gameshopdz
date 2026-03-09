<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Menu from "@/elements/Menu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import Canvas from "@/components/Canvas.vue";
import {navigateTo} from "nuxt/app";

const { $algolia } = useNuxtApp()


const menu = ref(false);

const { itemsCount, pending } = useWcCart()

const suggSearch = ref('');
const suggProducts = ref([]);

let lastQueryID: string | null = null

const { $aa } = useNuxtApp()

function searchProducts() {
  navigateTo('/')
  navigateTo('/shop?search=' + suggSearch.value)
}


let timeout = null
let currentSearchId = 0


const route = useRoute()

watch(route, () => {
  document.querySelector('.navbar-toggler').click()
})

watch(suggSearch, (value, oldValue) => {

  clearTimeout(timeout)

  const term = value?.trim() || ''


  if (term.length < 2) {
    suggProducts.value = []
    return
  }

  if(term === oldValue) return

  timeout = setTimeout(async () => {

    const searchId = ++currentSearchId

    try {
      const index = $algolia.initIndex('products')

      const res = await index.search(term, {
        hitsPerPage: 8,
        clickAnalytics: true,
      })

      // 🔒 منع نتيجة قديمة تظهر
      if (searchId !== currentSearchId) return

      const qid = res.queryID || null
      lastQueryID = qid

      // 💾 تخزين queryID مع TTL
      if (process.client && qid) {
        localStorage.setItem('algolia:lastQueryID', qid)
        localStorage.setItem('algolia:lastQueryIDAt', String(Date.now()))
      }

      // 🧠 ربط queryID بكل نتيجة
      suggProducts.value = (res.hits || []).map(hit => ({
        ...hit,
        __queryID: qid,
      }))

      // 👁️ إرسال Viewed Event (أفضل طريقة)
      if (res.hits?.length && qid) {
        $aa('viewedObjectIDsAfterSearch', {
          eventName: 'Autocomplete Results Viewed',
          index: 'products',
          objectIDs: res.hits.map(h => String(h.objectID)),
          queryID: qid,
        })
      }

    } catch (err) {
      console.error('Algolia search error:', err)
    }

  }, 700)

})

function onSuggestionClick(hit) {
  if (!hit.__queryID) return

  $aa('clickedObjectIDsAfterSearch', {
    eventName: 'Product Clicked',
    index: 'products',
    objectIDs: [String(hit.objectID)],
    queryID: hit.__queryID,
    positions: [hit.__position]
  })

  localStorage.setItem('algolia:lastQueryID', hit.__queryID)
  localStorage.setItem('algolia:lastQueryIDAt', String(Date.now()))

  navigateTo(`/shop/product/${hit.slug}`)
}


const isMenu = ref(false);
const isFixed = ref(false);

onUpdated(()=> {
  document.body.style.overflow = ""
  document.documentElement.style.overflow = ""
})


onMounted(() => {
  const menus = document.querySelectorAll(".navbar-nav > li");
  menus.forEach(function (el, ind) {
    el.addEventListener("click", function () {
      el.classList.toggle("open");
      menus.forEach(function (ell, index) {
        if (ind !== index) {
          ell.classList.remove("open");
        }
      });
    });
  });
});

function scrollHandler() {
  if (window.scrollY > 90) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>


  <!-- Main Header -->
  <div
    :class="`sticky-header main-bar-wraper navbar-expand-lg ${
      isFixed ? 'is-fixed' : ''
    }`"
  >
    <div class="main-bar  bg-primary gradient clearfix">
      <div class="container  d-flex align-items-center justify-content-between">
        <!-- Website Logo -->
        <div class="logo-header">
          <NuxtLink to="/">
            <img src="../assets/images/logo-white.svg"  alt="logo"/>
          </NuxtLink>
        </div>

        <!-- Nav Toggle Button -->
        <div class="d-flex flex-row-reverse align-items-center">
          <button
              :class="`navbar-toggler rounded-2 collapsed navicon justify-content-end ${
            isMenu ? 'open' : ''
          }`"
              type="button"
              @click="isMenu = !isMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <span class="d-md-none d-block">
          <NuxtLink
              class="nav-link"
              to="#"
              @click.prevent
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
          >
                  <i class="iconly-Light-Search text-white"></i>

          </NuxtLink>
        </span>

        </div>
        <!-- Main Nav -->
        <div
          :class="`header-nav  justify-content-between navbar-collapse  ${
            isMenu ? 'show' : ''
          }`"
          id="navbarNavDropdown"
        >
          <div class="logo-header d-flex">
            <NuxtLink to="/"
              ><img src="../assets/images/logo-white.svg" width="150px" height="90px"
            /></NuxtLink>
          </div>

          <Menu class="w-100 justify-content-center" />
          <div class="dz-social-icon">
            <ul>
              <li>
                <NuxtLink
                  class="fab fa-facebook-f"
                  target="_blank"
                  to="https://web.facebook.com/gameshopdz2"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-snapchat"
                  target="_blank"
                  to="https://www.snapchat.com/@gameshop.dz?sender_web_id=1626268c-ffd5-4cbb-9b2d-4025523a74d7&device_type=desktop&is_copy_url=true"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-tiktok"
                  target="_blank"
                  to="https://www.tiktok.com/@gameshop.dz"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-instagram"
                  target="_blank"
                  to="https://www.instagram.com/gameshop.dz/"
                ></NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- EXTRA NAV -->
        <div class="extra-nav d-none d-lg-flex">
          <div class="extra-cell">
            <ul class="header-right">
              <li class="nav-item search-link">
                <NuxtLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i class="iconly-Light-Search text-white"></i>
                </NuxtLink>
              </li>
              <li class="nav-item cart-link ">
                <RouterLink
                    to="?"
                    class="nav-link cart-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                  <i class="iconly-Broken-Buy text-white" ></i>
                  <span class="badge badge-circle"> {{itemsCount}}</span>

                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Header End -->
  <!-- SearchBar -->
  <div
    class="dz-search-area py-3 dz-offcanvas offcanvas offcanvas-top"
    tabindex="-1"
    id="offcanvasTop"
    aria-modal="true"
    role="dialog"
  >
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      ×
    </button>
    <div class="container">
      <form class="header-item-search" @submit.prevent @submit="searchProducts">
        <div class="input-group search-input">
          <input
            type="search"
            class="form-control"
            placeholder="Rechercher PS5, GTA, FIFA, Xbox..."
            v-model="suggSearch"
          />

          <button class="btn" type="submit">
            <i class="iconly-Light-Search"></i>
          </button>

        </div>

<!--        <ul class="recent-tag">-->
<!--          <li class="pe-0"><span>Quick Search :</span></li>-->
<!--          <li><NuxtLink to="/shop-list">Clothes</NuxtLink></li>-->
<!--          <li><NuxtLink to="/shop-list">UrbanSkirt</NuxtLink></li>-->
<!--          <li><NuxtLink to="/shop-list">VelvetGown</NuxtLink></li>-->
<!--          <li><NuxtLink to="/shop-list">LushShorts</NuxtLink></li>-->
<!--        </ul>-->


      </form>
      <div class="row"  v-if="suggProducts.length">
        <div class="col-xl-12">

          <Swiper
            class="swiper category-swiper2 swiper-initialized swiper-horizontal swiper-backface-hidden"
            :slides-per-view="6"
            :autoplay="{ delay: 3000 }"
            :modules="[Autoplay]"
            :space-between="30"
            :breakpoints="{
              1200: { slidesPerView: 6 },
              991: { slidesPerView: 5 },
              775: { slidesPerView: 4 },
              575: { slidesPerView: 3 },
              240: { slidesPerView: 2 },
            }"
          >

            <SwiperSlide class="swiper-slide" v-for="(product,index) in suggProducts" :key="product.objectID">
              <div class="shop-card">
                <NuxtLink :to="`/shop/product/${product.slug}`" class="card-link" @click="onSuggestionClick(product)">

                  <div class="dz-media">
                    <img
                        :src="product.image"
                        :alt="product.name"
                        loading="lazy"
                        decoding="async"
                        width="300"
                        height="300"
                        class="product-img"
                    />
                  </div>

                  <div class="dz-content flex-column">
                    <h6 class="title">
                      {{ product.name }}
                    </h6>

                    <h6 class="price">
                      {{ product.price }} DA
                    </h6>
                  </div>

                </NuxtLink>
              </div>
            </SwiperSlide>

            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- SearchBar -->

  <Canvas />
</template>


<style scoped>

.cart-link {
  display: block !important;
}

.shop-card {
  border-radius: 18px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #fff;
}

.shop-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.dz-media {
  aspect-ratio: 1 / 1;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s ease;
}

.shop-card:hover .product-img {
  transform: scale(1.05);
}

.dz-content {
  padding: 12px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;  /* يمنع الاسم من تخريب التصميم */
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 36px;
}

.price {
  font-size: 15px;
  font-weight: 700;
  margin-top: 6px;
  color: var(--bs-primary);
}

.navicon {
  background: #164094 !important;
}



</style>