<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const props = defineProps<{
  products: { thumbnail: string, name: string,slug: string,price:number,regular_price:numbers, object,stock:string,occasion: boolean,on_sale: boolean}[];
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
      <SwiperSlide class="swiper-slide" v-if="products" v-for="(product, ind) in products" :key="ind">
        <div class="shop-card wow fadeInUp">
          <div class="dz-media position-relative border-1 border-primary">

            <img :src="product.thumbnail" alt="image" class="object-fit-contain" />

            <div class="dz-content d-flex flex-column p-3">
              <h5 class="mb-1 clamp-text-2"  style="height: 40px">
                <NuxtLink :to="`/shop/product/${product.slug}`" class="stretched-link">{{ product.name }}</NuxtLink>
              </h5>
              <span class="price fs-5" v-if="!product.on_sale">{{product.price}} DA</span>
              <span class="price text-danger fs-5" v-else><del class="text-secondary">{{product.regular_price}} DA</del> {{product.price}} DA</span>


              <div>
                 <span class=" text-success fw-bold rounded-pill" v-if="product.stock == 'instock'">
                Available - Disponible - متوفر
                </span>
                <span class=" text-danger fw-bold rounded-pill" v-else>
                Non disponible - غـيـر مـتـوفر
              </span>
              </div>



            </div>

          </div>

          <span class="badge text-bg-warning rounded-pill position-absolute start-0  ms-2 mt-2 top-0 " v-if="product.occasion" style="font-size: 11px">Occasion</span>
          <span class="badge text-bg-info rounded-pill position-absolute start-0  ms-2 mt-2 top-0 " v-else="product.occasion" style="font-size: 11px">Neuf</span>
          <span class="badge text-bg-danger rounded-pill position-absolute end-0  me-2  mt-2 top-0" v-if="product.on_sale">{{Math.floor(((product.regular_price - product.price) / product.regular_price) * 100)}} %</span>

        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>

.clamp-text-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2   ; /* Number of lines to show */
  -webkit-box-orient: vertical;
  line-clamp: 2;
  font-size: 14px;
}


</style>