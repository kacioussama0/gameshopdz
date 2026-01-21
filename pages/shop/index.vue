<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import ShopSidebar from "@/elements/ShopSidebar.vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";
import {ref} from "vue";

const removeFilter = (e: any) => {
  e.target.parentNode.remove();
};



let allProducts = ref([]);

useFetch("/api/wc/products", {
  query: {
    per_page: 10,
    page: 1,
    on_sale: 'onsale'
  }
}).then(( response) => {
  console.log(response.data)
  allProducts.value = response.data.value.map((product: any) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    images: {
      thumbnail: product.images[0]?.thumbnail || '',
      gallery: product.images.map((img: any) => img.src) || []
    },
    prices: {
      sale_price: product.price,
    }
  }));
}).catch((error) => {
  console.error("Error fetching latest products:", error);




});



</script>
<template>

  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Notre Shop" />
    <!--Banner End-->

    <section class="content-inner-3 pt-3 z-index-unset">
      <div class="container-fluid">
        <div class="row mt-xl-2 mt-0">
          <div class="col-20 col-xl-3">
            <ShopSidebar />
          </div>
          <div class="col-80 col-xl-9">
<!--            <h4 class="mb-3">Category</h4>-->
<!--            <div class="row">-->
<!--              <div class="col-xl-12">-->
<!--                <Swiper-->
<!--                  class="swiper category-swiper"-->
<!--                  :slides-per-view="7"-->
<!--                  :space-between="30"-->
<!--                  :loop="true"-->
<!--                  :modules="[Autoplay]"-->
<!--                  :autoplay="{ delay: 2500 }"-->
<!--                  :breakpoints="{-->
<!--                    1200: { slidesPerView: 7 },-->
<!--                    1440: { slidesPerView: 5 },-->
<!--                    991: { slidesPerView: 4 },-->
<!--                    575: { slidesPerView: 3 },-->
<!--                    240: { slidesPerView: 2 },-->
<!--                  }"-->
<!--                >-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/1.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/3.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">GlamPants</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/2.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ClassicCapri</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/3.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">DapperCoat</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/2.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">DenimDream Jeans</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                  <SwiperSlide class="swiper-slide">-->
<!--                    <div class="shop-card">-->
<!--                      <div class="dz-media rounded">-->
<!--                        <img src="../../assets/images/shop/product/4.png" alt="image" />-->
<!--                      </div>-->
<!--                      <div class="dz-content">-->
<!--                        <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </SwiperSlide>-->
<!--                </Swiper>-->
<!--              </div>-->
<!--            </div>-->
            <div class="filter-wrapper p-t20">
              <div class="filter-left-area">
<!--                <ul class="filter-tag">-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Dresses-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Tops-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                  <li>-->
<!--                    <RouterLink to="" class="tag-btn"-->
<!--                      >Outerwear-->
<!--                      <i @click="removeFilter" class="icon feather icon-x tag-close"></i>-->
<!--                    </RouterLink>-->
<!--                  </li>-->
<!--                </ul>-->
                <span>Showing 1–5 Of 50 Results</span>
              </div>
              <div class="filter-right-area">
                <RouterLink to="" class="panel-btn">
                  <svg class="me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="20" height="20">
                    <g id="Layer_28" data-name="Layer 28">
                      <path
                        d="M2.54,5H15v.5A1.5,1.5,0,0,0,16.5,7h2A1.5,1.5,0,0,0,20,5.5V5h2.33a.5.5,0,0,0,0-1H20V3.5A1.5,1.5,0,0,0,18.5,2h-2A1.5,1.5,0,0,0,15,3.5V4H2.54a.5.5,0,0,0,0,1ZM16,3.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"
                      ></path>
                      <path
                        d="M22.4,20H18v-.5A1.5,1.5,0,0,0,16.5,18h-2A1.5,1.5,0,0,0,13,19.5V20H2.55a.5.5,0,0,0,0,1H13v.5A1.5,1.5,0,0,0,14.5,23h2A1.5,1.5,0,0,0,18,21.5V21h4.4a.5.5,0,0,0,0-1ZM17,21.5a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5Z"
                      ></path>
                      <path
                        d="M8.5,15h2A1.5,1.5,0,0,0,12,13.5V13H22.45a.5.5,0,1,0,0-1H12v-.5A1.5,1.5,0,0,0,10.5,10h-2A1.5,1.5,0,0,0,7,11.5V12H2.6a.5.5,0,1,0,0,1H7v.5A1.5,1.5,0,0,0,8.5,15ZM8,11.5a.5.5,0,0,1,.5-.5h2a.5.5,0,0,1,.5.5v2a.5.5,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5Z"
                      ></path>
                    </g>
                  </svg>
                  Filter
                </RouterLink>
                <div class="form-group">
                  <div class="dropdown bootstrap-select default-select">
                    <CustomeSelect :options="[{ title: 'Latest' }, { title: 'Popularity' }, { title: 'Average rating' }, { title: 'Latest' }, { title: 'Low to high' }, { title: 'high to Low' }]" />
                  </div>
                </div>
                <div class="form-group Category">
                  <div class="dropdown bootstrap-select default-select">
                    <CustomeSelect
                      :options="[{ title: 'Products' }, { title: '9 Products' }, { title: '12 Products' }, { title: '14 Products' }, { title: '18 Products' }, { title: '24 Products' }]"
                    />
                  </div>
                </div>
                <div class="shop-tab">
                  <ul class="nav" role="tablist" id="dz-shop-tab">
                    <li class="nav-item" role="presentation">
                      <RouterLink
                        to="#tab-list-list"
                        class="nav-link active"
                        id="tab-list-list-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#tab-list-list"
                        role="tab"
                        aria-controls="tab-list-list"
                        aria-selected="true"
                      >
                        <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_121_190)">
                            <path
                              d="M42.667 373.333H96C119.564 373.333 138.667 392.436 138.667 416V469.333C138.667 492.898 119.564 512 96 512H42.667C19.103 512 0 492.898 0 469.333V416C0 392.436 19.103 373.333 42.667 373.333Z"
                              fill="black"
                            ></path>
                            <path
                              d="M42.667 186.667H96C119.564 186.667 138.667 205.77 138.667 229.334V282.667C138.667 306.231 119.564 325.334 96 325.334H42.667C19.103 325.333 0 306.231 0 282.667V229.334C0 205.769 19.103 186.667 42.667 186.667Z"
                              fill="black"
                            ></path>
                            <path
                              d="M42.667 0H96C119.564 0 138.667 19.103 138.667 42.667V96C138.667 119.564 119.564 138.667 96 138.667H42.667C19.103 138.667 0 119.564 0 96V42.667C0 19.103 19.103 0 42.667 0Z"
                              fill="black"
                            ></path>
                            <path
                              d="M230.565 373.333H468.437C492.682 373.333 512.336 392.436 512.336 416V469.333C512.336 492.897 492.682 512 468.437 512H230.565C206.32 512 186.666 492.898 186.666 469.333V416C186.667 392.436 206.32 373.333 230.565 373.333Z"
                              fill="black"
                            ></path>
                            <path
                              d="M230.565 186.667H468.437C492.682 186.667 512.336 205.77 512.336 229.334V282.667C512.336 306.231 492.682 325.334 468.437 325.334H230.565C206.32 325.334 186.666 306.231 186.666 282.667V229.334C186.667 205.769 206.32 186.667 230.565 186.667Z"
                              fill="black"
                            ></path>
                            <path
                              d="M230.565 0H468.437C492.682 0 512.336 19.103 512.336 42.667V96C512.336 119.564 492.682 138.667 468.437 138.667H230.565C206.32 138.667 186.666 119.564 186.666 96V42.667C186.667 19.103 206.32 0 230.565 0Z"
                              fill="black"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_121_190">
                              <rect width="512" height="512" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </RouterLink>
                    </li>
                    <li class="nav-item" role="presentation">
                      <RouterLink
                        to="#tab-list-column"
                        class="nav-link"
                        id="tab-list-column-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#tab-list-column"
                        role="tab"
                        aria-controls="tab-list-column"
                        aria-selected="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style="enable-background: new 0 0 512 512"
                          xml:space="preserve"
                          width="512"
                          height="512"
                        >
                          <g>
                            <path
                              d="M85.333,0h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,234.667,0,196.462,0,149.333v-64C0,38.205,38.205,0,85.333,0z"
                            ></path>
                            <path
                              d="M362.667,0h64C473.795,0,512,38.205,512,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,38.205,315.538,0,362.667,0z"
                            ></path>
                            <path
                              d="M85.333,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64c0,47.128-38.205,85.333-85.333,85.333h-64   C38.205,512,0,473.795,0,426.667v-64C0,315.538,38.205,277.333,85.333,277.333z"
                            ></path>
                            <path
                              d="M362.667,277.333h64c47.128,0,85.333,38.205,85.333,85.333v64C512,473.795,473.795,512,426.667,512h-64   c-47.128,0-85.333-38.205-85.333-85.333v-64C277.333,315.538,315.538,277.333,362.667,277.333z"
                            ></path>
                          </g>
                        </svg>
                      </RouterLink>
                    </li>
                    <li class="nav-item" role="presentation">
                      <RouterLink
                        to="#tab-list-grid"
                        class="nav-link"
                        id="tab-list-grid-btn"
                        data-bs-toggle="pill"
                        data-bs-target="#tab-list-grid"
                        role="tab"
                        aria-controls="tab-list-grid"
                        aria-selected="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Capa_2"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                          style="enable-background: new 0 0 512 512"
                          xml:space="preserve"
                          width="512"
                          height="512"
                        >
                          <g>
                            <path
                              d="M42.667,373.333H96c23.564,0,42.667,19.103,42.667,42.667v53.333C138.667,492.898,119.564,512,96,512H42.667   C19.103,512,0,492.898,0,469.333V416C0,392.436,19.103,373.333,42.667,373.333z"
                            ></path>
                            <path
                              d="M416,373.333h53.333C492.898,373.333,512,392.436,512,416v53.333C512,492.898,492.898,512,469.333,512H416   c-23.564,0-42.667-19.102-42.667-42.667V416C373.333,392.436,392.436,373.333,416,373.333z"
                            ></path>
                            <path
                              d="M42.667,186.667H96c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667H42.667   C19.103,325.333,0,306.231,0,282.667v-53.333C0,205.769,19.103,186.667,42.667,186.667z"
                            ></path>
                            <path
                              d="M416,186.667h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.102,42.667-42.667,42.667H416   c-23.564,0-42.667-19.103-42.667-42.667v-53.333C373.333,205.769,392.436,186.667,416,186.667z"
                            ></path>
                            <path
                              d="M42.667,0H96c23.564,0,42.667,19.103,42.667,42.667V96c0,23.564-19.103,42.667-42.667,42.667H42.667   C19.103,138.667,0,119.564,0,96V42.667C0,19.103,19.103,0,42.667,0z"
                            ></path>
                            <path
                              d="M229.333,373.333h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.102-42.667-42.667V416C186.667,392.436,205.769,373.333,229.333,373.333z"
                            ></path>
                            <path
                              d="M229.333,186.667h53.333c23.564,0,42.667,19.103,42.667,42.667v53.333c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.103-42.667-42.667v-53.333C186.667,205.769,205.769,186.667,229.333,186.667z"
                            ></path>
                            <path
                              d="M229.333,0h53.333c23.564,0,42.667,19.103,42.667,42.667V96c0,23.564-19.103,42.667-42.667,42.667h-53.333   c-23.564,0-42.667-19.103-42.667-42.667V42.667C186.667,19.103,205.769,0,229.333,0z"
                            ></path>
                            <path
                              d="M416,0h53.333C492.898,0,512,19.103,512,42.667V96c0,23.564-19.102,42.667-42.667,42.667H416   c-23.564,0-42.667-19.103-42.667-42.667V42.667C373.333,19.103,392.436,0,416,0z"
                            ></path>
                          </g>
                        </svg>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 tab-content shop-" id="pills-tabContent">
                <div class="tab-pane fade" id="tab-list-list" role="tabpanel" aria-labelledby="tab-list-list-btn">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/1.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Sophisticated Swagger Suit </RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 250 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content m-0">
                                  <span class="price-name">Price</span>
                                  <span class="price">$40.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck1" />
                                  <label class="form-check-label" for="favoriteCheck1">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/2.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 650 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$94.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck2" />
                                  <label class="form-check-label" for="favoriteCheck2">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/3.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 458 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$35.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck3" />
                                  <label class="form-check-label" for="favoriteCheck3">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/4.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Athletic Mesh Sports Leggings</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 630 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$25.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck4" />
                                  <label class="form-check-label" for="favoriteCheck4">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/5.png" alt="image" />
                          <div class="product-tag">
                            <span class="badge badge-secondary">Sale</span>
                          </div>
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Vintage Denim Overalls Shorts</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 520 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$45.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck5" />
                                  <label class="form-check-label" for="favoriteCheck5">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/6.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Satin Wrap Party Blouse</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 256 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$70.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck6" />
                                  <label class="form-check-label" for="favoriteCheck6">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/7.png" alt="image" />
                          <div class="product-tag">
                            <span class="badge badge-secondary">Sale</span>
                          </div>
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Plaid Wool Winter Coat</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 776 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$75.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck7" />
                                  <label class="form-check-label" for="favoriteCheck7">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xxxl-6">
                      <div class="dz-shop-card style-2">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/8.png" alt="image" />
                        </div>
                        <div class="dz-content">
                          <div class="dz-header">
                            <div>
                              <h4 class="title mb-0"><RouterLink to="/shop-list">Water-Resistant Windbreaker Jacket</RouterLink></h4>
                              <ul class="dz-tags">
                                <li><RouterLink to="/shop-with-category">Accessories,</RouterLink></li>
                                <li><RouterLink to="/shop-with-category">Sunglasses</RouterLink></li>
                              </ul>
                            </div>
                            <div class="review-num">
                              <ul class="dz-rating">
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li class="star-fill">
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                                <li>
                                  <i class="flaticon-star-1"></i>
                                </li>
                              </ul>
                              <span><RouterLink to=""> 255 Review</RouterLink></span>
                            </div>
                          </div>
                          <div class="dz-body">
                            <div class="dz-rating-box">
                              <div>
                                <p class="dz-para">
                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                                  has.
                                </p>
                              </div>
                            </div>
                            <div class="rate">
                              <div class="d-flex align-items-center mb-xl-3 mb-2">
                                <div class="meta-content">
                                  <span class="price-name">Price</span>
                                  <span class="price">$36.00</span>
                                </div>
                              </div>
                              <div class="d-flex">
                                <RouterLink to="/shop-cart" class="btn btn-secondary btn-md btn-icon">
                                  <i class="icon feather icon-shopping-cart d-md-none d-block"></i>
                                  <span class="d-md-block d-none">Add to cart</span>
                                </RouterLink>
                                <div class="bookmark-btn style-1">
                                  <input class="form-check-input" type="checkbox" id="favoriteCheck8" />
                                  <label class="form-check-label" for="favoriteCheck8">
                                    <i class="fa-solid fa-heart"></i>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-list-column" role="tabpanel" aria-labelledby="tab-list-column-btn">
                  <div class="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
                    <div class="col-6 col-xl-4 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30">
                      <div class="shop-card style-1">
                        <div class="dz-media">
                          <img src="../../assets/images/shop/product/1.png" alt="image" />
                          <div class="shop-meta">
                            <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                    </div>

                  </div>
                </div>
                <div class="tab-pane fade active show" id="tab-list-grid" v-if="allProducts" role="tabpanel" aria-labelledby="tab-list-grid-btn">
                  <div class="row gx-xl-4 g-3">
                    <div class="col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-b30" v-for="product in allProducts">
                      <div class="shop-card style-1 border-1 border-primary rounded-4">
                        <div class="dz-media">
                          <img :src="product.images.thumbnail" alt="image" class="object-fit-contain" style="width: 600px ; height: 450px"  />
                          <div class="shop-meta">
                            <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                              <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div class="dz-content d-flex flex-column">
                          <h5 class="title"><RouterLink to="/shop-list">{{product.name}}</RouterLink></h5>

                          <h5 class="price text-primary">{{product.price}} DA</h5>
                        </div>
                        <div class="product-tag">
                          <span class="badge">Get 20% Off</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="row page mt-0">
              <div class="col-md-6">
                <p class="page-text">Showing 1–5 Of 50 Results</p>
              </div>
              <div class="col-md-6">
                <nav aria-label="Blog Pagination">
                  <ul class="pagination style-1">
                    <li class="page-item"><RouterLink class="page-link prev" to="">Prev</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link active" to="">1</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">2</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">3</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link next" to="">Next</RouterLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
