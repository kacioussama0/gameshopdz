<script setup lang="ts">
import ProductRelaited from "@/elements/ProductRelaited.vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import { Thumbs } from "swiper/modules";
import { ref } from "vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";

const qty = ref(1);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: null) => {
  thumbsSwiper.value = swiper;
};

let product = ref({});

const id = useRoute().params.id;


useFetch("/api/wc/products/", {
  params: {
    slug: id,
  },
}).then(( response) => {
  product.value = response.data.value[0];
  console.log(product.value)
}).catch((error) => {
  console.error("Error fetching latest products:", error);
});

</script>

<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>

  <div class="page-content bg-light">
    <div class="d-flex  justify-content-between container-fluid py-3 bg-light">
      <nav aria-label="breadcrumb" class="breadcrumb-row">
        <ul class="breadcrumb mb-0">
          <li class="breadcrumb-item"><NuxtLink to="/"> Home</NuxtLink></li>
          <li class="breadcrumb-item">Product Full Width</li>
        </ul>
      </nav>
    </div>
    <section class="content-inner py-0 bg-light">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div class="dz-product-detail sticky-top style-3">
              <div class="swiper-btn-center-lr">
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
                    <h4 class="title mb-1">
                      {{product.name}}
                    </h4>
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
                <p class="para-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div class="meta-content m-b20 d-flex align-items-end">
                  <div class="me-3">
                    <span class="form-label">Prix</span>
                    <span class="price">{{product.price}} DA <!-- <del>$132.17</del> --></span>
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
                  <NuxtLink
                      to="/shop-cart"
                      class="btn btn-secondary text-uppercase"
                  >Add To Cart</NuxtLink
                  >
                  <NuxtLink
                      to="/shop-wishlist"
                      class="btn btn-outline-secondary btn-icon"
                  >
                    <svg
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z"
                          fill="black"
                      ></path>
                    </svg>
                    Add To Wishlist
                  </NuxtLink>
                </div>
                <div class="dz-info">
                  <ul v-if="product.sku">
                    <li><strong>SKU:</strong></li>
                    <li>{{product.sku}}</li>
                  </ul>
                  <ul v-if="product.categories">
                    <li><strong>Category:</strong></li>

                    <li v-for="(category,index) in product.categories">
                      <NuxtLink :to="`/shop?category=${category.id}`">{{category.name}} {{product.categories.length != index + 1 ? "," : ""}}</NuxtLink>
                    </li>

                  </ul>
                  <ul v-if="product.tags">
                    <li><strong>Tags:</strong></li>
                    <li v-for="(tag,index) in product.tags">
                      <NuxtLink :to="`/shop?category=${tag.id}`">{{tag.name}} {{product.tags.length != index + 1 ? "," : ""}}</NuxtLink>
                    </li>
                  </ul>
                  <ul class="social-icon">
                    <li><strong>Share:</strong></li>
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
            <h2 class="title mb-0">Related products</h2>
          </div>
          <NuxtLink
              to="/shop-list"
              class="text-secondary font-14 d-flex align-items-center gap-1"
          >See all products
            <i class="icon feather icon-chevron-right font-18"></i>
          </NuxtLink>
        </div>
        <ProductRelaited />
      </div>
    </section>
  </div>
</template>
