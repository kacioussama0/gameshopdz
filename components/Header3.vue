<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Menu from "@/elements/Menu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import Canvas from "@/components/Canvas.vue";

const menu = ref(false);

const { itemsCount, pending } = useWcCart()


const suggSearch = ref('');
const suggProducts = ref([]);

const searchProduct = async () => {
  try {

    const { data, error } = await useFetch(
        `https://woo.gameshopdz.com/fibosearch/?s=${suggSearch.value}`
    )

    if (error.value) {
      console.error("Search error:", error.value)
      return
    }

    if (!data.value?.suggestions) return


    const filtredProducts = data.value.suggestions
        .filter(product => product.type === 'product' && product.post_id)



    suggProducts.value = filtredProducts;

  } catch (err) {
    console.error("Unexpected error:", err)
  }
}


const isMenu = ref(false);
const isFixed = ref(false);

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
    <div class="main-bar clearfix">
      <div class="container clearfix d-lg-flex align-items-center d-block">
        <!-- Website Logo -->
        <div class="logo-header logo-dark">
          <NuxtLink to="/">
            <img src="../assets/images/logo.svg" alt="logo"/>
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
              to="/shop"
              class="cart-btn"
          >
            <i class="iconly-Broken-Buy" ></i>

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
              ><img src="../assets/images/logo.svg" alt=""
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
                  <i class="iconly-Light-Search"></i>
                </NuxtLink>
              </li>
              <li class="nav-item cart-link ">
                <NuxtLink
                  to="/cart"
                  class="nav-link cart-btn"

                >
                  <i class="iconly-Broken-Buy" ></i>
                  <span class="badge badge-circle"> {{itemsCount}}</span>

                </NuxtLink>
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
    class="dz-search-area dz-offcanvas offcanvas offcanvas-top"
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
      <form class="header-item-search">
        <div class="input-group search-input">
          <input
            type="search"
            class="form-control"
            placeholder="Search Product"
            v-model="suggSearch"
            @input="searchProduct"
          />
          <button class="btn" type="button">
            <i class="iconly-Light-Search"></i>
          </button>
        </div>

      </form>
      <div class="row"  v-if="suggProducts.length">
        <div class="col-xl-12">
          <h5 class="mb-3">You May Also Like</h5>
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

            <SwiperSlide class="swiper-slide" v-for="product in suggProducts" :key="product.post_id">
              <div class="shop-card">
                <div class="dz-media mb-3" v-html="product.thumb_html" />


                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink :to="`/shop/product/${product.url.split('/produit/')[1].replace('/', '')}`" class="stretched-link">{{product.value}}</NuxtLink>
                  </h6>
                  <h6 class="price" v-html="product.price"></h6>
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



</style>