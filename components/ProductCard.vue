<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const props = defineProps<{
  product: Object;
  showStock: {type:boolean,required:false}
}>();



</script>

<template>

        <div class="shop-card bg-white rounded-0 wow fadeInUp" v-if="product">
          <div class="dz-media position-relative rounded-0 border-1 border-primary">

            <img :src="product.thumbnail" alt="image" class="img-fluid" height="250" />

            <div class="dz-content d-flex flex-column p-3">
              <h5 class="mb-1 clamp-text-2"  style="height: 40px">
                <NuxtLink :to="`/shop/product/${product.slug}`" class="stretched-link">{{ product.name }}</NuxtLink>
              </h5>


              <span class="price fs-5 text-primary" v-if="!product.on_sale" style="font-size: 16px !important">{{product.price}} DA</span>
              <span class="price text-danger fs-5" v-else><del class="text-muted">{{product.regular_price}} DA</del> {{product.price}} DA</span>


              <div v-if="showStock">
                 <span class=" text-success fw-bold rounded-pill" v-if="product.stock == 'instock'">
                  Disponible - مـتـوفـــر
                </span>
                <span class=" text-danger fw-bold rounded-pill" v-else>
                 Non disponible - غـيـر مـتـوفر
              </span>
              </div>


              <button class="btn btn-primary rounded-0 mt-3" style="font-size: 12px !important;">
                <i class="fa fa-cart-plus me-2"></i>
                Ajouter au Panier
              </button>


            </div>




          </div>

          <span class="badge text-bg-warning  position-absolute start-0 rounded-0  ms-2 mt-2 top-0 " v-if="product.occasion || product.name.includes('OCCASION')" style="font-size: 11px">Occasion | مستعمل</span>
          <span class="badge text-bg-info position-absolute start-0 rounded-0  ms-2 mt-2 top-0 " v-else style="font-size: 11px">Neuf | جديد</span>
          <span class="badge text-bg-danger position-absolute end-0 rounded-0  me-2  mt-2 top-0" v-if="product.on_sale">{{Math.floor(((product.regular_price - product.price) / product.regular_price) * 100)}} %</span>


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