<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Menu from "@/elements/Menu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import Canvas from "@/components/Canvas.vue";

const menu = ref(false);

const { itemsCount, pending } = useWcCart()


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
              :class="`navbar-toggler rounded-3 collapsed navicon justify-content-end ${
            isMenu ? 'open' : ''
          }`"
              type="button"
              @click="isMenu = !isMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <span class="cart-link position-relative">
          <NuxtLink
              to="/shop"
              class="cart-btn"

          >
            <i class="iconly-Broken-Buy" ></i>
            <span class="badge  position-absolute top-0 end-0" style="font-size: 8px"> {{itemsCount}}</span>

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
                  to="https://www.facebook.com/dexignzone"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-twitter"
                  target="_blank"
                  to="https://twitter.com/dexignzones"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-linkedin-in"
                  target="_blank"
                  to="https://www.linkedin.com/showcase/3686700/admin/"
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
        <div class="extra-nav">
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
                  to="/shop-cart"
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
          <div class="dropdown bootstrap-select default-select">
            <CustomeSelect
              :options="[
                { title: 'All Categories' },
                { title: 'Clothes' },
                { title: 'UrbanSkirt' },
                { title: 'VelvetGown' },
                { title: 'LushShorts' },
                { title: 'Vintage' },
                { title: 'Wedding' },
                { title: 'Cotton' },
                { title: 'Linen' },
                { title: 'Navy' },
                { title: 'Urban' },
                { title: 'Business Meeting' },
                { title: 'Formal' },
              ]"
            />
          </div>
          <input
            type="search"
            class="form-control"
            placeholder="Search Product"
          />
          <button class="btn" type="button">
            <i class="iconly-Light-Search"></i>
          </button>
        </div>
        <ul class="recent-tag">
          <li class="pe-0"><span>Quick Search :</span></li>
          <li><NuxtLink to="/shop-list">Clothes</NuxtLink></li>
          <li><NuxtLink to="/shop-list">UrbanSkirt</NuxtLink></li>
          <li><NuxtLink to="/shop-list">VelvetGown</NuxtLink></li>
          <li><NuxtLink to="/shop-list">LushShorts</NuxtLink></li>
        </ul>
      </form>
      <div class="row">
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
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/2.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ClassicCapri</NuxtLink>
                  </h6>
                  <h6 class="price">$20.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-prev">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/5.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">DapperCoat</NuxtLink>
                  </h6>
                  <h6 class="price">$70.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-active">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/6.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ComfyLeggings</NuxtLink>
                  </h6>
                  <h6 class="price">$45.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-next">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/7.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">DenimDream Jeans</NuxtLink>
                  </h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">SilkBliss Dress</NuxtLink>
                  </h6>
                  <h6 class="price">$60.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/1.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">SilkBliss Dress</NuxtLink>
                  </h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/3.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">GlamPants</NuxtLink>
                  </h6>
                  <h6 class="price">$30.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ComfyLeggings</NuxtLink>
                  </h6>
                  <h6 class="price">$35.00</h6>
                </div>
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