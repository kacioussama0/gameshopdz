<script setup lang="ts">
import { IMAGES } from "@/constent/theme";
import { reactive, ref } from "vue";

const addActive = ref("ALL");
const products = reactive([
  { img: IMAGES.product1, name: "Cozy Knit Cardigan Sweater", tags: "ALL Tops" },
  { img: IMAGES.product2, name: "Sophisticated Swagger Suit", tags: "ALL Dresses Jacket" },
  { img: IMAGES.product3, name: "Classic Denim Skinny Jeans", tags: "ALL Dresses" },
  { img: IMAGES.product4, name: "Athletic Mesh Sports Leggings", tags: "ALL Tops Jacket" },
  { img: IMAGES.product5, name: "Vintage Denim Overalls Shorts", tags: "ALL Dresses" },
  { img: IMAGES.product6, name: "Satin Wrap Party Blouse", tags: "ALL Outerwear" },
  { img: IMAGES.product7, name: "Plaid Wool Winter Coat", tags: "ALL Dresses" },
  { img: IMAGES.product8, name: "Water-Resistant Windbreaker Jacket", tags: "ALL Tops" },
]);

const buttons = [{ title: "Tous" }, { title: "Jeux" }, { title: "Consoles" }, { title: "Accessoires" }, { title: "Retro" }];

const productData = ref(products);

const filterHandler = (category: string) => {
  const filtered = products.filter((el) => el.tags.includes(category));
  productData.value = filtered;
  addActive.value = category;
};
</script>

<template>
  <div class="row justify-content-md-between align-items-start">
    <div class="col-lg-6 col-md-12">
      <div class="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s">
        <div class="left-content">
          <h2 class="title">Notre produits</h2>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="site-filters clearfix style-1 align-items-center wow fadeInUp ms-lg-auto" data-wow-delay="0.4s">
        <ul class="filters">
          <li :class="`btn ${addActive == title ? 'active' : ''}`" @click="filterHandler(title)" v-for="({ title }, ind) in buttons" :key="ind">
            <RouterLink to="">{{ title }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="clearfix">
    <transition-group tag="ul" class="row g-xl-4 g-3" enter-active-class="slide-in" leave-active-class="slide-out">
      <li class="card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 Tops" v-for="({ img, name }, ind) in productData" :key="ind">
        <div class="shop-card">
          <div class="dz-media">
            <img :src="img" alt="image" />
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
          <div class="dz-content">
            <h5 class="title">
              <RouterLink to="/shop-list">{{ name }}</RouterLink>
            </h5>
            <h5 class="price">$80</h5>
          </div>
          <div class="product-tag">
            <span class="badge">Get 20% Off</span>
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
.slide-in {
  animation: slideIn 0.5s forwards;
}

.slide-out {
  animation: slideOut 0.5s forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%) scale(0);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-100%) scale(0);
  }
}

.card-container {
  transition: all 0.5s ease;
}
</style>
