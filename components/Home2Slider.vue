<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const props = defineProps<{
  products: { id:number,images: string; name: string,slug: string,prices: object }[];
}>();

</script>

<template>
  <div class="swiper-btn-center-lr">
    <Swiper
      class="swiper swiper-four"
      :slides-per-view="4"
      :space-between="30"
      :loop="true"
      :modules="[Autoplay]"
      :speed="1500"
      :autoplay="{
        delay: 1500,
      }"
      :breakpoints="{
        1200: { slidesPerView: 4 },
        991: { slidesPerView: 3 },
        775: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }"
    >
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="product.id">
        <div class="shop-card wow fadeInUp">
          <div class="dz-media border-1 border-primary">
            <img :src="product.images.thumbnail" alt="image" class="object-fit-contain" style="width: 600px ; height: 450px"  />
            <div class="shop-meta">
              <RouterLink to="" class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-solid fa-eye d-md-none d-block"></i>
                <span class="d-md-block d-none">Quick View</span>
              </RouterLink>
              <div
                class="btn btn-primary meta-icon dz-wishicon"
                @click="(e)=>{
                (e.target as HTMLElement).classList.toggle('active')
              }"
              >
                <i class="icon feather icon-heart dz-heart"></i>
                <i class="icon feather icon-heart-on dz-heart-fill"></i>
              </div>
              <div
                class="btn btn-primary meta-icon dz-carticon"
                @click="(e)=>{
                (e.target as HTMLElement).classList.toggle('active')
              }"
              >
                <i class="flaticon flaticon-basket"></i>
                <i class="flaticon flaticon-basket-on dz-heart-fill"></i>
              </div>
            </div>
          </div>
          <div class="dz-content d-flex flex-column">
            <h5 class="title mb-1 fs-6 text-truncate">
              <NuxtLink :to="`/shop/product/${product.slug}`" >{{ product.name }}</NuxtLink>
            </h5>
            <h5 class="price text-primary">{{product.prices['sale_price'] + ' DA'}}</h5>
          </div>
<!--          <div class="product-tag">-->
<!--            <span class="badge">Get 20% Off</span>-->
<!--          </div>-->
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
