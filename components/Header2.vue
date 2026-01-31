<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";
import Menu from "@/elements/Menu.vue";
import Canvas from "@/components/Canvas.vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const isFixed = ref(false);
const isMenu = ref(false);

function scrollHandler() {
  if (window.scrollY > 90) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
}

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
      <div class="container-fluid clearfix d-lg-flex d-block">
        <!-- Website Logo -->
        <div class="logo-header me-md-5">
          <NuxtLink class="logo-light" to="/"
            ><img src="../assets/images/logo-white.png" alt="logo"
          /></NuxtLink>
          <NuxtLink class="logo-dark" to="/"
            ><img src="../assets/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>

        <!-- Nav Toggle Button -->
        <button
          :class="`navbar-toggler collapsed navicon justify-content-end ${
            isMenu ? 'open' : ''
          }`"
          type="button"
          @click="isMenu = !isMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Main Nav -->
        <div
          :class="`header-nav w3menu navbar-collapse justify-content-start ${
            isMenu ? 'show' : ''
          }`"
          id="navbarNavDropdown"
        >
          <div class="logo-header logo-dark">
            <NuxtLink to="/"
              ><img src="../assets/images/logo.svg" alt=""
            /></NuxtLink>
          </div>
          <Menu />
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
                  to="https://www.instagram.com/dexignzone/"
                ></NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- EXTRA NAV -->
        <div class="extra-nav">
          <div class="extra-cell">
            <ul class="header-right">
              <li class="nav-item login-link">
                <NuxtLink class="nav-link" to="/login">
                  Login / Register
                </NuxtLink>
              </li>
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
              <li class="nav-item wishlist-link">
                <NuxtLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Light-Heart2"></i>
                </NuxtLink>
              </li>
              <li class="nav-item cart-link">
                <NuxtLink
                  to="#"
                  @click.prevent
                  class="nav-link cart-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Broken-Buy"></i>
                  <span class="badge badge-circle">5</span>
                </NuxtLink>
              </li>
              <li class="nav-item filte-link">
                <NuxtLink
                  to="#"
                  @click.prevent
                  class="nav-link filte-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLeft"
                  aria-controls="offcanvasLeft"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 13"
                    fill="none"
                  >
                    <rect y="11" width="30" height="2" fill="black" />
                    <rect width="30" height="2" fill="black" />
                  </svg>
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
