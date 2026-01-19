<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
</script>

<template>
  <!-- @vue-skip -->
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :speed="1500"
      :modules="[Navigation, Autoplay]"
      :autoplay="{
        delay: 1500,
      }"
      :navigation="{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
      }"
      :breakpoints="{
        1200: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide class="swiper-slide">
        <div class="shop-card style-1">
          <div class="dz-media">
            <img src="../assets/images/shop/product/1.png" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="shop-card style-1">
          <div class="dz-media">
            <img src="../assets/images/shop/product/2.png" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="shop-card style-1">
          <div class="dz-media">
            <img src="../assets/images/shop/product/3.png" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="shop-card style-1">
          <div class="dz-media">
            <img src="../assets/images/shop/product/4.png" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title"><RouterLink to="/shop-list">Athletic Mesh Sports Leggings</RouterLink></h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div class="shop-card style-1">
          <div class="dz-media">
            <img src="../assets/images/shop/product/5.png" alt="image" />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="
                  (e) => {
                    e.target.classList.toggle('active');
                  }
                "
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content">
            <h5 class="title"><RouterLink to="/shop-list">Vintage Denim Overalls Shorts</RouterLink></h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="pagination-align">
      <div class="tranding-button-prev btn-prev">
        <i class="flaticon flaticon-left-chevron"></i>
      </div>
      <div class="tranding-button-next btn-next">
        <i class="flaticon flaticon-chevron"></i>
      </div>
    </div>
  </div>
</template>
