<script lang="ts" setup>

const props = defineProps<{
  product: Object;
  showStock: {type:boolean,required:false},
}>();


const addToCart = async (productId) => {

  try {

    return await useWcCart().addItem(productId)

  }catch (error) {
    console.log(error)
  }


}

</script>

<template>
  <div class="shop-card" v-if="product">
    <div class="dz-media position-relative shadow-sm h-100">
      <img
          :src="product.thumbnail"
          :alt="product.name"
          class="product-img"
          loading="lazy"
      />

      <div class="dz-content d-flex flex-column p-3">
        <h5 class="title mb-1 fw-bolder clamp-text-2">
          <NuxtLink :to="`/shop/product/${product.slug}`" class="stretched-link text-primary">
            {{ product.name }}
          </NuxtLink>
        </h5>

        <div class="price-line mt-1">
          <span class="price" v-if="!product.on_sale">{{ product.price }} DA</span>
          <span class="price text-danger" v-else>
            <del class="text-muted me-1">{{ product.regular_price }} DA</del>
            {{ product.price }} DA
          </span>
        </div>

        <div v-if="showStock" class="stock mt-1">
          <span class="text-success fw-bold" v-if="product.stock == 'instock'">Disponible - متوفر</span>
          <span class="text-danger fw-bold" v-else>Non disponible - غير متوفر</span>
        </div>

        <button
            class="btn btn-primary add-btn mt-3"
            @click="addToCart(product.id)"
            v-if="product.stock == 'instock'"
        >
          <i class="fa fa-cart-plus me-2"></i>
          Ajouter au Panier
        </button>

        <NuxtLink
            :to="`/shop/product/${product.slug}`"
            class="btn btn-primary add-btn mt-3"
            v-else
        >
          <i class="fa fa-cart-plus me-2"></i>
          Lire la suite
        </NuxtLink>
      </div>

      <!-- Badges داخل dz-media باش position absolute تخدم صح -->
      <span class="badge badge-left"
            v-if="product.occasion || product.name.includes('OCCASION')">Occasion | مستعمل</span>
      <span class="badge badge-left badge-info" v-else>Neuf | جديد</span>
      <span class="badge badge-right"
            v-if="product.on_sale">{{ Math.floor(((product.regular_price - product.price) / product.regular_price) * 100) }}%</span>
    </div>
  </div>
</template>


<style scoped>
.shop-card {
  background: #fff;
}

/* card container */
.dz-media {
  border-radius: 0;
  overflow: hidden; /* مهم باش الصورة والبادجات ما يخرجوش */
}

/* image */
.product-img {
  width: 100%;
  max-height: 350px;
  object-fit: contain;
  background: #fff;
  display: block;
}

/* title clamp */
.clamp-text-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
}

/* title */
.title {
  font-size: 14px;
  min-height: 42px;
}

/* price */
.price-line .price {
  font-size: 16px;
  font-weight: 800;
}

/* stock */
.stock span {
  font-size: 13px;
}

/* button */
.add-btn {
  border-radius: 0;
  font-size: 12px;
  padding: 10px 12px;
  line-height: 1.1;
}

/* badges */
.badge {
  position: absolute;
  top: 10px;
  font-size: 11px;
  border-radius: 0;
  padding: 6px 8px;
}
.badge-left { left: 10px; background: #ffc107; color: #111; }
.badge-left.badge-info { background: #0dcaf0; color: #111; }
.badge-right { right: 10px; background: #dc3545; color: #fff; }

/* ✅ Phones */
@media (max-width: 576px) {
  .product-img {
    height: 190px;            /* أصغر بكثير في الهاتف */
  }

  .dz-content {
    padding: 12px !important;
  }

  .title {
    font-size: 12.5px;
    min-height: 36px;
  }

  .price-line .price {
    font-size: 14px;
  }

  .stock span {
    font-size: 12px;
  }

  .add-btn {
    font-size: 11px;
    padding: 9px 10px;
  }

  .badge {
    top: 8px;
    font-size: 10px;
    padding: 5px 7px;
  }
}

/* very small phones */
@media (max-width: 360px) {
  .product-img { height: 165px; }
  .add-btn { font-size: 10.5px; padding: 8px 9px; }
}

@media (max-width: 576px) {
  .add-btn { width: 100%; }
  .product-img {
    height: 200px;
    object-fit: cover;
  }
}

</style>