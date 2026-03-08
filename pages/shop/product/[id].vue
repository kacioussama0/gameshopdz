<script setup lang="ts">
import RelatedProduct from "~/elements/RelatedProduct.vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Thumbs } from "swiper/modules";
import {ref, watch} from "vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";
import img1 from "assets/images/products/lady-1.png";
import img2 from "assets/images/products/lady-2.png";
import img3 from "assets/images/products/lady-3.png";

const qty = ref(1);
const thumbsSwiper = ref(null);
const route = useRoute()
const currentUrl = computed(() => {
  return process.client
      ? window.location.origin + route.fullPath
      : ''
})

const variation = ref([])


const variationVal = ref('')

const { $aa } = useNuxtApp()

watch(variationVal,function (val) {
  variation.value[0]['value'] = val
})

const addedCart = ref(false)


const addToCart = async (productId,variationId = null) => {
  try {
    addedCart.value = true

    const result = await useWcCart().addItem(productId, qty.value,variation.value)

    const objectID = String(product.value?.objectID || product.value?.id || productId)
    if (!objectID) return result

    const qid = localStorage.getItem('algolia:lastQueryID')
    const qidAt = Number(localStorage.getItem('algolia:lastQueryIDAt') || 0)
    const TTL_MS = 30 * 60 * 1000
    const isFresh = qid && qidAt && (Date.now() - qidAt) < TTL_MS

    if (isFresh) {
      $aa('convertedObjectIDsAfterSearch', {
        eventName: 'Product Added To Cart',
        index: 'products',
        objectIDs: [String(objectID)],
        queryID: qid,
      })
    } else {
      $aa('convertedObjectIDs', {
        eventName: 'Product Added To Cart',
        index: 'products',
        objectIDs: [String(objectID)],
      })
    }


    return result
  } catch (error) {
    console.log(error)
  }
}

function getShortDescription(description, maxLength = 240) {

  if (!description) return ''


  const text = description.replace(/<[^>]*>?/gm, '').trim()

  return text.length > maxLength
      ? text.slice(0, maxLength) + '…'
      : text
}

const setThumbsSwiper = (swiper: null) => {
  thumbsSwiper.value = swiper;
};

let product = ref({});

let relatedProducts = ref([])

const id = useRoute().params.id;


useFetch("/api/wc/products/", {

  params: {
    slug: id,
  }

}).then(( response) => {


  product.value = response.data.value.products[0];

  if(product.value.attributes.length) {
    variation.value = [
      {
        'attribute': product.value.attributes[0].name,
        'value': product.value.attributes[0].options[0]
      }
    ]
  }

  console.log(product.value)


  const ids = product.value['related_ids'];

  console.log(ids)

  if(ids.length) {
    useFetch('/api/wc/products/', {
      params: {
        include: ids.join(','),
        per_page: ids.length,
      }
    }).then((response)=> {
      relatedProducts.value = response.data.value.products.map((product) => {
          return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            thumbnail: product.images[0]?.thumbnail || '',
            price: product.price,
            on_sale: product.on_sale,
            regular_price: product.regular_price,
            stock: product.stock_status,
          }
      })

    })


  }

  useHead({

    title: product.value.name + ' - Gameshopdz',

    meta: [
      { name: 'description', content: getShortDescription(product.value.description) },
      { property: 'og:title', content: product.value.name },
      { property: 'og:description', content: getShortDescription(product.value.description) },
      { property: 'og:image', content: product.value.thumbnail },
      { property: 'og:url', content: currentUrl.value },
      { property: 'og:type', content: 'product' },
    ]
  })



}).catch((error) => {
  console.error("Error fetching latest products:", error);
});



</script>

<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light py-3">
    <div class="d-flex  justify-content-between container-fluid py-3 bg-light" v-if="product.name">
      <nav aria-label="breadcrumb" class="breadcrumb-row">
        <ul class="breadcrumb mb-0">
          <li class="breadcrumb-item"><NuxtLink to="/shop"> Store</NuxtLink></li>
          <li class="breadcrumb-item">{{product.name}}</li>
        </ul>
      </nav>
    </div>
    <section class="content-inner py-0 bg-light">
      <div class="container-fluid">
        <div class="row">

          <div class="col-xl-6 col-md-6">
            <div class="dz-product-detail sticky-top">
              <!-- <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="swiper-btn-center-lr"> -->
              <Swiper
                  class="swiper product-gallery-swiper2"
                  :modules="[Thumbs]"
                  v-if="product.images"
                  :thumbs="{ swiper: thumbsSwiper }"
              >
                <SwiperSlide
                    class="swiper-slide"
                    v-for="(img, ind) in product.images"
                    :key="ind"
                >

                  <div class="dz-media DZoomImage rounded">
                    <a class="mfp-link lg-item" :href="img.thumbnail" :data-src="img.thumbnail">
                      <i
                          class="feather icon-maximize dz-maximize top-right"
                      ></i>
                      <img :src="img.src" alt="image" class="d-none" />
                    </a>
                    <img
                        @mouseenter="hoverEffect"
                        @mouseout="removeHover"
                        :src="img.src"
                        style="height: 600px"
                        class="object-fit-contain image-slider"
                        alt="image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <!-- @vue-skip -->
<!--              <Swiper-->
<!--                  class="swiper product-gallery-swiper thumb-swiper-lg swiper-vertical overf"-->
<!--                  :modules="[Thumbs]"-->
<!--                  watch-slides-progress-->
<!--                  @swiper="setThumbsSwiper"-->
<!--              >-->
<!--                <SwiperSlide class="swiper-slide" v-for="(img, ind) in product.images">-->
<!--                  <img :src="img.thumbnail" alt="image" />-->
<!--                </SwiperSlide>-->

<!--              </Swiper>-->
              <!-- </Lightgallery> -->
            </div>
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-none">


            <div class="dz-product-detail sticky-top style-3">
              <div class="swiper-btn-center-lr ">

                <Swiper
                    class="swiper product-gallery-swiper2"
                    :modules="[Thumbs]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    v-if="product.images"
                >
                  <SwiperSlide class="swiper-slide" v-for="image in product.images">

                    <NuxtImg
                        :src="image.src"
                        :alt="product.name"
                        placeholder
                        format="webp"
                        width="300"
                        height="300"
                        class="product-img"
                        loading="lazy"
                    />


                  </SwiperSlide>

                </Swiper>

                <div class="placeholder-glow" v-else>
                  <span class="placeholder col-12" style="height: 600px"></span>

                </div>

                <!-- @vue-skip -->
                <Swiper
                    class="swiper product-gallery-swiper thumb-swiper-lg swiper-vertical"
                    :modules="[Thumbs]"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    v-if="product.images"
                >
                  <SwiperSlide class="swiper-slide" v-for="image in product.images">
                    <img
                        :src="image.thumbnail"
                        alt="image"
                    />

                    <NuxtImg
                        :src="image.src"
                        :alt="product.name"
                        placeholder
                        format="webp"
                        width="300"
                        height="300"
                        class="product-img"
                        loading="lazy"
                    />

                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="dz-product-detail style-2 p-t50 bg-transparent">
              <div class="dz-content">
                <div class="dz-content-footer">
                  <div class="dz-content-start">
                    <span class="badge text-bg-primary mb-2"  v-if="product.on_sale">Promo - تخـفيــض</span>
                    <h4 class="title mb-1" v-if="product.name">
                      {{product.name}}
                      <span class="badge text-bg-danger rounded-circle d-inline-flex justify-content-center align-items-center fw-bolder" style="width: 40px ; height: 40px"  v-if="product.on_sale">{{Math.floor(((product.regular_price - product.price) / product.regular_price) * 100)}} % </span>

                    </h4>

                    <div class="placeholder-glow" v-else>
                      <span class="placeholder col-12"></span>
                      <span class="placeholder col-12"></span>
                    </div>

<!--                    <div class="review-num">-->
<!--                      <ul class="dz-rating me-2">-->
<!--                        <li>-->
<!--                          <svg-->
<!--                              width="14"-->
<!--                              height="13"-->
<!--                              viewBox="0 0 14 13"-->
<!--                              fill="none"-->
<!--                              xmlns="http://www.w3.org/2000/svg"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"-->
<!--                                fill="#FF8A00"-->
<!--                            ></path>-->
<!--                          </svg>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <svg-->
<!--                              width="14"-->
<!--                              height="13"-->
<!--                              viewBox="0 0 14 13"-->
<!--                              fill="none"-->
<!--                              xmlns="http://www.w3.org/2000/svg"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"-->
<!--                                fill="#FF8A00"-->
<!--                            ></path>-->
<!--                          </svg>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <svg-->
<!--                              width="14"-->
<!--                              height="13"-->
<!--                              viewBox="0 0 14 13"-->
<!--                              fill="none"-->
<!--                              xmlns="http://www.w3.org/2000/svg"-->
<!--                          >-->
<!--                            <path-->
<!--                                d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"-->
<!--                                fill="#FF8A00"-->
<!--                            ></path>-->
<!--                          </svg>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <svg-->
<!--                              width="14"-->
<!--                              height="13"-->
<!--                              viewBox="0 0 14 13"-->
<!--                              fill="none"-->
<!--                              xmlns="http://www.w3.org/2000/svg"-->
<!--                          >-->
<!--                            <path-->
<!--                                opacity="0.2"-->
<!--                                d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"-->
<!--                                fill="#5E626F"-->
<!--                            ></path>-->
<!--                          </svg>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                          <svg-->
<!--                              width="14"-->
<!--                              height="13"-->
<!--                              viewBox="0 0 14 13"-->
<!--                              fill="none"-->
<!--                              xmlns="http://www.w3.org/2000/svg"-->
<!--                          >-->
<!--                            <path-->
<!--                                opacity="0.2"-->
<!--                                d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"-->
<!--                                fill="#5E626F"-->
<!--                            ></path>-->
<!--                          </svg>-->
<!--                        </li>-->
<!--                      </ul>-->
<!--                      <span class="text-secondary me-2">4.7 Rating</span>-->
<!--                      <NuxtLink to="">(5 customer reviews)</NuxtLink>-->
<!--                    </div>-->
                  </div>
                </div>


                <div class="mb-3">
                   <span class=" text-bg-success badge fw-bold rounded-pill" v-if="product.stock_status == 'instock'">
                      Available - Disponible - متوفر
                  </span>
                  <span class="badge text-bg-danger fw-bold rounded-pill" v-else-if="product.stock_status == 'outofstock'">
                      Non disponible - غـيـر مـتـوفر
                  </span>

                  <span class="placeholder-glow" v-else>
                    <span class="placeholder col-6"></span>
                  </span>

                </div>

                <p class="para-text" v-if="product.description">
                  {{getShortDescription(product.description)}}
                </p>

                <span class="placeholder-glow mb-3" v-else>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                    <span class="placeholder col-12"></span>
                  </span>

                <div class="meta-content m-b20 d-flex align-items-end">
                  <div class="me-3">
                    <span class="form-label">Prix</span>
                    <span class="price" v-if="product.on_sale === false">{{product.price}} DA</span>
                    <span class="price text-danger" v-else-if="product.on_sale === true"><del class="text-secondary">{{product.regular_price}} DA</del> {{product.price}} DA</span>
                    <span class="placeholder-glow mb-3" v-else>
                      <span class="placeholder col-12"></span>
                    </span>
                  </div>



                  <div
                      class="btn-quantity quantity-sm light d-xl-none d-blcok d-sm-block"
                  >
                    <label class="form-label">Quantité</label>
                    <div class="input-group bootstrap-touchspin">
                      <span
                          class="input-group-addon bootstrap-touchspin-prefix"
                          style="display: none"
                      ></span
                      ><input
                        type="text"
                        :value="qty"
                        name="demo_vertical2"
                        class="form-control"
                        style="display: block"
                    /><span
                        class="input-group-addon bootstrap-touchspin-postfix"
                        style="display: none"
                    ></span
                    ><span class="input-group-btn-vertical"
                    ><button
                        @click="qty++"
                        class="btn btn-default bootstrap-touchspin-up"
                        type="button"
                    >
                          <i class="fa-solid fa-plus"></i></button
                    ><button
                        @click="qty > 1 ? qty-- : qty"
                        class="btn btn-default bootstrap-touchspin-down"
                        type="button"
                    >
                          <i class="fa-solid fa-minus"></i></button
                    ></span>
                    </div>
                  </div>
                </div>


                <div class="product-num">
                  <div class="btn-quantity light d-xl-block d-sm-none d-none">
                    <label class="form-label">Quantity</label>
                    <div class="input-group bootstrap-touchspin">
                      <span
                          class="input-group-addon bootstrap-touchspin-prefix"
                          style="display: none"
                      ></span
                      ><input
                        type="text"
                        v-model="qty"
                        :readonly="product.stock_status != 'instock'"
                        name="demo_vertical2"
                        class="form-control"
                        style="display: block"
                    /><span
                        class="input-group-addon bootstrap-touchspin-postfix"
                        style="display: none"
                    ></span
                    ><span class="input-group-btn-vertical"
                    ><button
                        @click="qty++"
                        class="btn  new-gradient btn-default bootstrap-touchspin-up"
                        type="button"
                        :disabled="product.stock_status != 'instock'"
                    >
                          <i class="fa-solid fa-plus"></i></button
                    ><button
                        @click="qty > 1 ? qty-- : qty"
                        class="btn btn-default new-gradient bootstrap-touchspin-down"
                        type="button"
                        :disabled="product.stock_status != 'instock'"
                    >
                          <i class="fa-solid fa-minus"></i></button
                    ></span>
                    </div>
                  </div>
                  <div class="d-block" v-if="product.attributes">

                    <div v-for="attribute in product.attributes">
                      <label class="form-label">{{attribute.name}}</label>
                      <div class="btn-group product-size m-0" >

                          <select   :name="'attribute-0'+attribute.id" id="" class="form-select"   v-model="variationVal">
                            <option  :selected="index == 0" :value="option"  v-for="(option,index) in attribute.options">{{`${index+1} - ${option}`}}</option>
                          </select>


                      </div>
                    </div>


                  </div>

                </div>
                <div class="btn-group cart-btn">

                  <button
                      to="?"
                      class="btn btn-secondary text-uppercase rounded-0 new-gradient"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      @click="addToCart(product.id,variationId)"
                      :disabled="product.stock_status != 'instock'"
                  >

                    <i class="fa fa-cart-plus me-2"></i>
                    Ajouter au Panier

                  </button>


                </div>


                <div class="dz-info">
                  <ul v-if="product.sku">
                    <li><strong>SKU:</strong></li>
                    <li>{{product.sku}}</li>
                  </ul>
                  <ul v-if="product.categories">
                    <li><strong>Catégorie:</strong></li>

                    <li v-for="(category,index) in product.categories">
                      <NuxtLink :to="`/shop?category=${category.id}`">{{category.name}} {{product.categories.length != index + 1 ? "," : ""}}</NuxtLink>
                    </li>

                  </ul>
                  <ul v-if="product.tags">
                    <li><strong>Mot clés :</strong></li>
                    <li v-for="(tag,index) in product.tags">
                      <NuxtLink :to="`/shop?tag=${tag.id}`">{{tag.name}} {{product.tags.length != index + 1 ? "," : ""}}</NuxtLink>
                    </li>
                  </ul>
                  <ul class="social-icon">
                    <li><strong>Partager:</strong></li>

                    <li>
                      <a
                          :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
                          target="_blank"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>

                    <li>
                      <a
                          :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`"
                          target="_blank"
                      >
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>

                    <li>
                      <a
                          :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`"
                          target="_blank"
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    </li>

                    <li>
                      <a
                          :href="`https://wa.me/?text=${shareText}%20${currentUrl}`"
                          target="_blank"
                      >
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-inner-3 pb-0">
      <div class="container">
        <div class="product-description">
          <div class="dz-tabs">
            <ul class="nav nav-tabs center" id="myTab1" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                >
                  Description
                </button>
              </li>

            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                  class="tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabindex="0"
              >
                <div class="detail-bx text-center" v-html="product.description">


                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-inner-1 overflow-hidden" v-if="relatedProducts.length">
      <div class="container">
        <div
            class="section-head style-2 d-md-flex align-items-center justify-content-between"
        >
          <div class="left-content">
            <h2 class="title mb-0">Produits associés</h2>
          </div>
          <NuxtLink
              to="/shop"
              class="text-secondary font-14 d-flex align-items-center gap-1"
          >
            Voir tous les produits
            <i class="icon feather icon-chevron-right font-18"></i>
          </NuxtLink>
        </div>
        <RelatedProduct :products="relatedProducts" />
      </div>
    </section>
  </div>
</template>

<style>


@media screen and (max-width: 600px) {
  .image-slider {
    height: 250px !important;
  }
}

.new-gradient {
  background: linear-gradient(135deg, #0f2f6d, #164094, #6a3df0) !important;
}


</style>