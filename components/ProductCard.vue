<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const props = defineProps<{
  product: Object;
}>();



</script>

<template>

        <div class="shop-card bg-white rounded-4 wow fadeInUp" v-if="product">
          <div class="dz-media position-relative border-1 border-primary">

            <img :src="product.thumbnail" alt="image" class="img-fluid" />

            <div class="dz-content d-flex flex-column p-3">
              <h5 class="mb-1 clamp-text-2"  style="height: 40px">
                <NuxtLink :to="`/shop/product/${product.slug}`" class="stretched-link">{{ product.name }}</NuxtLink>
              </h5>
              <span class="price fs-5" v-if="!product.on_sale">{{product.price}} DA</span>
              <span class="price text-danger fs-5" v-else><del class="text-secondary">{{product.regular_price}} DA</del> {{product.price}} DA</span>


              <div>
                 <span class=" text-success fw-bold rounded-pill" v-if="product.stock == 'instock'">
                  Disponible - مـتـوفـــر
                </span>
                <span class=" text-danger fw-bold rounded-pill" v-else>
                 Non disponible - غـيـر مـتـوفر
              </span>
              </div>


            </div>

          </div>

          <span class="badge text-bg-warning rounded-pill position-absolute start-0  ms-2 mt-2 top-0 " v-if="product.occasion || product.name.includes('OCCASION')" style="font-size: 11px">Occasion | مستعمل</span>
          <span class="badge text-bg-info rounded-pill position-absolute start-0  ms-2 mt-2 top-0 " v-else style="font-size: 11px">Neuf | جديد</span>
          <span class="badge text-bg-danger rounded-pill position-absolute end-0  me-2  mt-2 top-0" v-if="product.on_sale">{{Math.floor(((product.regular_price - product.price) / product.regular_price) * 100)}} %</span>

        </div>

        <div class="shop-card bg-white rounded-4 wow fadeInUp" v-else>

              <div class="dz-media position-relative border-1 border-primary">


                  <div class="placeholder-glow" >
                    <span class="placeholder col-12" style="height: 328px"></span>
                  </div>

                  <div class="dz-content d-flex flex-column p-3">

                    <div class="placeholder-glow" >
                      <span class="placeholder col-12"></span>
                      <span class="placeholder col-12"></span>
                    </div>


                    <div class="placeholder-glow" >
                      <span class="placeholder col-6"></span>
                    </div>

                    <div class="placeholder-glow" >
                      <span class="placeholder col-10"></span>
                    </div>

                  </div>

                </div>

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