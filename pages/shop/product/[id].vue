<script setup lang="ts">
import RelatedProduct from "~/elements/RelatedProduct.vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Thumbs } from "swiper/modules";
import { ref } from "vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";

const qty = ref(1);
const thumbsSwiper = ref(null);

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
  },
}).then(( response) => {
  product.value = response.data.value[0];


  useHead({
    title: product.value.name + ' - Gameshopdz',
    meta: [
      { name: 'description', content: 'My amazing site.' },
    ],
    bodyAttrs: {
      class: 'test',
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }],
  })


  const ids = product.value['related_ids'];

  if(ids.length) {
    useFetch('/api/wc/products/', {
      params: {
        include: ids.join(','),
        per_page: ids.length,
      }
    }).then((response)=> {

      relatedProducts.value = response.data.value.map((product) => {
          return {
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
          <li class="breadcrumb-item"><NuxtLink to="/shop"> Shop</NuxtLink></li>
          <li class="breadcrumb-item">{{product.name}}</li>
        </ul>
      </nav>
    </div>
    <section class="content-inner py-0 bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">

            <div class="dz-product-detail sticky-top style-3">
              <div class="swiper-btn-center-lr ">

                <Swiper
                    class="swiper product-gallery-swiper2"
                    :modules="[Thumbs]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    v-if="product.images"
                >
                  <SwiperSlide class="swiper-slide" v-for="image in product.images">
                    <img
                        :src="image.src"
                        alt="image"
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
                    <span class="badge text-bg-danger mb-2"  v-if="product.on_sale">{{Math.floor(((product.regular_price - product.price) / product.regular_price) * 100)}} % OFF</span>
                    <h4 class="title mb-1" v-if="product.name">
                      {{product.name}}
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
                        class="btn btn-default bootstrap-touchspin-up"
                        type="button"
                        :disabled="product.stock_status != 'instock'"
                    >
                          <i class="fa-solid fa-plus"></i></button
                    ><button
                        @click="qty > 1 ? qty-- : qty"
                        class="btn btn-default bootstrap-touchspin-down"
                        type="button"
                        :disabled="product.stock_status != 'instock'"
                    >
                          <i class="fa-solid fa-minus"></i></button
                    ></span>
                    </div>
                  </div>
<!--                  <div class="d-block">-->
<!--                    <label class="form-label">Size</label>-->
<!--                    <div class="btn-group product-size m-0">-->
<!--                      <input-->
<!--                          type="radio"-->
<!--                          class="btn-check"-->
<!--                          name="btnradio1"-->
<!--                          id="btnradio101"-->
<!--                      />-->
<!--                      <label class="btn" for="btnradio101">S</label>-->

<!--                      <input-->
<!--                          type="radio"-->
<!--                          class="btn-check"-->
<!--                          name="btnradio1"-->
<!--                          id="btnradiol02"-->
<!--                      />-->
<!--                      <label class="btn" for="btnradiol02">M</label>-->

<!--                      <input-->
<!--                          type="radio"-->
<!--                          class="btn-check"-->
<!--                          name="btnradio1"-->
<!--                          id="btnradiol03"-->
<!--                      />-->
<!--                      <label class="btn" for="btnradiol03">L</label>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="meta-content">-->
<!--                    <label class="form-label">Color</label>-->
<!--                    <div class="d-flex align-items-center color-filter">-->
<!--                      <div class="form-check">-->
<!--                        <input-->
<!--                            class="form-check-input"-->
<!--                            type="radio"-->
<!--                            name="radioNoLabel"-->
<!--                            id="radioNoLabel21"-->
<!--                            value="#24262B"-->
<!--                            aria-label="..."-->
<!--                        />-->
<!--                        <span style="background-color: rgb(36, 38, 43)"></span>-->
<!--                      </div>-->
<!--                      <div class="form-check">-->
<!--                        <input-->
<!--                            class="form-check-input"-->
<!--                            type="radio"-->
<!--                            name="radioNoLabel"-->
<!--                            id="radioNoLabel22"-->
<!--                            value="#8CB2D1"-->
<!--                            aria-label="..."-->
<!--                        />-->
<!--                        <span-->
<!--                            style="background-color: rgb(140, 178, 209)"-->
<!--                        ></span>-->
<!--                      </div>-->
<!--                      <div class="form-check">-->
<!--                        <input-->
<!--                            class="form-check-input"-->
<!--                            type="radio"-->
<!--                            name="radioNoLabel"-->
<!--                            id="radioNoLabel23"-->
<!--                            value="#0D775E"-->
<!--                            aria-label="..."-->
<!--                        />-->
<!--                        <span style="background-color: rgb(13, 119, 94)"></span>-->
<!--                      </div>-->
<!--                      <div class="form-check">-->
<!--                        <input-->
<!--                            class="form-check-input"-->
<!--                            type="radio"-->
<!--                            name="radioNoLabel"-->
<!--                            id="radioNoLabel24"-->
<!--                            value="#FEC4C4"-->
<!--                            aria-label="..."-->
<!--                        />-->
<!--                        <span-->
<!--                            style="background-color: rgb(254, 196, 196)"-->
<!--                        ></span>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
                <div class="btn-group cart-btn">
                  <button class="btn btn-secondary text-uppercase" :disabled="product.stock_status != 'instock'">Acheter maintenant</button>
                  <button
                      class="btn btn-outline-secondary btn-icon"
                      :disabled="product.stock_status != 'instock'"
                  >
                    <i class="fa fa-shopping-cart "></i>
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
                      <NuxtLink :to="`/shop?category=${tag.id}`">{{tag.name}} {{product.tags.length != index + 1 ? "," : ""}}</NuxtLink>
                    </li>
                  </ul>
                  <ul class="social-icon">
                    <li><strong>Partager:</strong></li>
                    <li>
                      <NuxtLink
                          to="https://www.facebook.com/dexignzone"
                          target="_blank"
                      >
                        <i class="fa-brands fa-facebook-f"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="https://www.linkedin.com/showcase/3686700/admin/"
                          target="_blank"
                      >
                        <i class="fa-brands fa-linkedin-in"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="https://www.instagram.com/dexignzone/"
                          target="_blank"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink
                          to="https://twitter.com/dexignzones"
                          target="_blank"
                      >
                        <i class="fa-brands fa-twitter"></i>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="banner-social-media">
                <ul>
                  <li>
                    <NuxtLink to="https://www.instagram.com/dexignzone/"
                    >Instagram</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="https://www.facebook.com/dexignzone"
                    >Facebook</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="https://twitter.com/dexignzones"
                    >twitter</NuxtLink
                    >
                  </li>
                </ul>
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

    <section class="content-inner-1 overflow-hidden">
      <div class="container">
        <div
            class="section-head style-2 d-md-flex align-items-center justify-content-between"
        >
          <div class="left-content">
            <h2 class="title mb-0">Produits associés</h2>
          </div>
          <NuxtLink
              to="/shop-list"
              class="text-secondary font-14 d-flex align-items-center gap-1"
          >Voir tous les produits
            <i class="icon feather icon-chevron-right font-18"></i>
          </NuxtLink>
        </div>
        <RelatedProduct :products="relatedProducts" />
      </div>
    </section>
  </div>
</template>
