<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper/modules";
import ProductRelaited from "@/elements/ProductRelaited.vue";
// import Lightgallery from "lightgallery/vue";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
import img1 from "@/assets/images/products/lady-1.png";
import img2 from "@/assets/images/products/lady-2.png";
import img3 from "@/assets/images/products/lady-3.png";
import Header from "~/components/Header.vue";

const slide = [{ img: img1 }, { img: img2 }, { img: img3 }];

const qty = ref<number>(1);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: null) => {
  thumbsSwiper.value = swiper;
};

function hoverEffect(e: any) {
  const targetRect = e.target.getBoundingClientRect();

  let xValue = ((e.clientX - targetRect.left) / targetRect.width) * 100;
  let yValue = ((e.clientY - targetRect.top) / targetRect.height) * 100;

  e.target.setAttribute(
    "style",
    `cursor: pointer; transition: 0.1s; transform: scale(1.5); transform-origin: ${xValue}% ${yValue}%`
  );
}

function removeHover(e: any) {
  e.target.setAttribute(
    "style",
    `cursor: pointer; transition: 0.1s; transform: scale(1); transform-origin: 0% 0%`
  );
}
</script>

<template>
  <header class="site-header mo-left header border-bottom">
    <Header />
  </header>
  <div class="page-content bg-light">
    <div class="d-sm-flex justify-content-between container-fluid py-3">
      <nav aria-label="breadcrumb" class="breadcrumb-row">
        <ul class="breadcrumb mb-0">
          <li class="breadcrumb-item"><NuxtLink to="/"> Home</NuxtLink></li>
          <li class="breadcrumb-item">Product Thumbnail</li>
        </ul>
      </nav>
    </div>

    <section class="content-inner py-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-6 col-md-6">
            <div class="dz-product-detail sticky-top">
              <!-- <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="swiper-btn-center-lr"> -->
              <Swiper
                class="swiper product-gallery-swiper2"
                :modules="[Thumbs]"
                :thumbs="{ swiper: thumbsSwiper }"
              >
                <SwiperSlide
                  class="swiper-slide"
                  v-for="({ img }, ind) in slide"
                  :key="ind"
                >
                  <div class="dz-media DZoomImage rounded">
                    <a class="mfp-link lg-item" :href="img" :data-src="img">
                      <i
                        class="feather icon-maximize dz-maximize top-right"
                      ></i>
                      <img :src="img" alt="image" class="d-none" />
                    </a>
                    <img
                      @mouseenter="hoverEffect"
                      @mouseout="removeHover"
                      :src="img"
                      alt="image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <!-- @vue-skip -->
              <Swiper
                class="swiper product-gallery-swiper thumb-swiper-lg swiper-vertical"
                :modules="[Thumbs]"
                watch-slides-progress
                @swiper="setThumbsSwiper"
              >
                <SwiperSlide class="swiper-slide">
                  <img :src="img1" alt="image" />
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <img :src="img2" alt="image" />
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <img :src="img3" alt="image" />
                </SwiperSlide>
              </Swiper>
              <!-- </Lightgallery> -->
            </div>
          </div>
          <div class="col-xl-6 col-md-6">
            <div class="dz-product-detail style-2 p-t50">
              <div class="dz-content">
                <div class="dz-content-footer">
                  <div class="dz-content-start">
                    <span class="badge bg-purple mb-2">SALE 20% Off</span>
                    <h4 class="title mb-1">
                      Women Red &amp; White Striped Crepe Top
                    </h4>
                    <div class="review-num">
                      <ul class="dz-rating me-2">
                        <li>
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                              fill="#FF8A00"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                              fill="#FF8A00"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                              fill="#FF8A00"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                              fill="#5E626F"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M6.74805 0.234375L8.72301 4.51608L13.4054 5.07126L9.9436 8.27267L10.8625 12.8975L6.74805 10.5944L2.63355 12.8975L3.5525 8.27267L0.090651 5.07126L4.77309 4.51608L6.74805 0.234375Z"
                              fill="#5E626F"
                            ></path>
                          </svg>
                        </li>
                      </ul>
                      <span class="text-secondary me-2">4.7 Rating</span>
                      <NuxtLink to="">(5 customer reviews)</NuxtLink>
                    </div>
                  </div>
                </div>
                <p class="para-text">
                  This comfortable cotton crop-top features the Divi Engine logo
                  on the front expressing how easy “data Divi Engine life” is.
                  It is the perfect tee for any occasion.
                </p>
                <div class="meta-content m-b20">
                  <span class="price-name">Price</span>
                  <span class="price">$125.75 <del>$132.17</del></span>
                </div>
                <div class="product-num gap-md-2 gap-xl-0">
                  <div class="btn-quantity light">
                    <label class="form-label">Quantity</label>
                    <div class="input-group bootstrap-touchspin">
                      <input
                        type="text"
                        v-model="qty"
                        name="demo_vertical2"
                        class="form-control"
                        style="display: block"
                      /><span class="input-group-btn-vertical"
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
                  <div class="d-block">
                    <label class="form-label">Size</label>
                    <div class="btn-group product-size m-0">
                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio1"
                        id="btnradio101"
                      />
                      <label class="btn" for="btnradio101">S</label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio1"
                        id="btnradiol02"
                      />
                      <label class="btn" for="btnradiol02">M</label>

                      <input
                        type="radio"
                        class="btn-check"
                        name="btnradio1"
                        id="btnradiol03"
                      />
                      <label class="btn" for="btnradiol03">L</label>
                    </div>
                  </div>
                  <div class="meta-content">
                    <label class="form-label">Color</label>
                    <div class="d-flex align-items-center color-filter">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel21"
                          value="#24262B"
                          aria-label="..."
                        />
                        <span style="background-color: rgb(36, 38, 43)"></span>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel22"
                          value="#8CB2D1"
                          aria-label="..."
                        />
                        <span
                          style="background-color: rgb(140, 178, 209)"
                        ></span>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel23"
                          value="#0D775E"
                          aria-label="..."
                        />
                        <span style="background-color: rgb(13, 119, 94)"></span>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel24"
                          value="#FEC4C4"
                          aria-label="..."
                        />
                        <span
                          style="background-color: rgb(254, 196, 196)"
                        ></span>
                      </div>
                    </div>
                  </div>
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
                    <i class="icon feather icon-heart"></i>
                    Add To Wishlist
                  </NuxtLink>
                </div>
                <div class="dz-info">
                  <ul>
                    <li><strong>SKU:</strong></li>
                    <li>PRT584E63A</li>
                  </ul>
                  <ul>
                    <li><strong>Category:</strong></li>
                    <li><NuxtLink to="/shop-standard">Dresses,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Jeans,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Swimwear,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Summer,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Clothing,</NuxtLink></li>
                  </ul>
                  <ul>
                    <li><strong>Tags:</strong></li>
                    <li><NuxtLink to="/shop-standard">Casual,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Athletic,</NuxtLink></li>
                    <li><NuxtLink to="/shop-standard">Workwear,</NuxtLink></li>
                    <li>
                      <NuxtLink to="/shop-standard">Accessories,</NuxtLink>
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
                <ul class="d-md-flex d-none align-items-center">
                  <li class="icon-bx-wraper style-3 me-xl-4 me-2">
                    <div class="icon-bx">
                      <i class="flaticon flaticon-ship"></i>
                    </div>
                    <div class="info-content">
                      <span>FREE</span>
                      <h6 class="dz-title mb-0">Shipping</h6>
                    </div>
                  </li>
                  <li class="icon-bx-wraper style-3">
                    <div class="icon-bx">
                      <i class="flaticon-fast-delivery-1"></i>
                    </div>
                    <div class="info-content">
                      <span>Easy Returns</span>
                      <h6 class="dz-title mb-0">30 Days</h6>
                    </div>
                  </li>
                </ul>
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
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Reviews (12)
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
                <div class="row">
                  <div class="col-lg-6 m-lg-b0 m-md-b30">
                    <div class="section-head style-2 d-block">
                      <h2 class="title">Fits women</h2>
                      <p>
                        Designed for superior child comfort, OneFit™ provides
                        extra rear-facing legroom and multiple recline options
                        in every mode of use. With the widest range of height
                        adjustments, the easy-adjust headrest system adjusts
                        with the harness to grow with your child. OneFit™
                        accommodates tiny passengers from the very start with a
                        removable head and body support insert for newborns
                        weighing 5-11 lbs.
                      </p>
                    </div>
                    <div class="product-specification">
                      <h4 class="specification-title">Specifications</h4>
                      <ul>
                        <li>
                          Assembled Dimensions (L x W x H):
                          <span>71.1 x 45.7 x 7.6 cm; 700 Grams</span>
                        </li>
                        <li>Assembled Product Weight: <span>25 lbs.</span></li>
                      </ul>
                    </div>
                    <ul class="specification-list m-b40">
                      <li class="list-info">
                        Manufacturer <span>Indra Hosiery Mills</span>
                      </li>
                      <li class="list-info">ASIN<span>B07WK128569</span></li>
                      <li class="list-info">
                        Country of Origin<span>India</span>
                      </li>
                      <li class="list-info">Department<span>Women</span></li>
                      <li class="list-info">
                        Included Components<span>Women's Jacket</span>
                      </li>
                      <li class="list-info">
                        Item Dimensions LxWxH<span>
                          71.1 x 45.7 x 7.6 Centimeters</span
                        >
                      </li>
                      <li class="list-info">
                        Manufacture<span> Indra Hosiery Mills</span>
                      </li>
                    </ul>
                    <div class="product-media row g-xl-4 g-2 m-b40">
                      <div class="col-md-3 col-3 col-sm-3 product-media-inner">
                        <NuxtLink to="/shop-list" class="dz-media">
                          <img
                            src="../../assets/images/products/dress1.png"
                            alt="/"
                          />
                        </NuxtLink>
                      </div>
                      <div class="col-md-3 col-3 col-sm-3 product-media-inner">
                        <NuxtLink to="/shop-list" class="dz-media">
                          <img
                            src="../../assets/images/products/dress2.png"
                            alt="/"
                          />
                        </NuxtLink>
                      </div>
                      <div class="col-md-3 col-3 col-sm-3 product-media-inner">
                        <NuxtLink to="/shop-list" class="dz-media">
                          <img
                            src="../../assets/images/products/dress3.png"
                            alt="/"
                          />
                        </NuxtLink>
                      </div>
                      <div class="col-md-3 col-3 col-sm-3 product-media-inner">
                        <NuxtLink to="/shop-list" class="dz-media">
                          <img
                            src="../../assets/images/products/dress4.png"
                            alt="/"
                          />
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="product-info">
                      <div class="product-info-inner">
                        <h4 class="info-title">Fabric Content</h4>
                        <ul class="d-lg-flex d-block align-items-center">
                          <li>
                            <h6>Seatpad: <span>100% Cotton</span></h6>
                          </li>
                          <li>
                            <h6>Insert: <span>100% Cotton</span></h6>
                          </li>
                        </ul>
                      </div>
                      <div class="product-info-inner">
                        <h4 class="info-title">Chemical Statement</h4>
                        <p class="info-text">
                          The OneFit ClearTex All-In-One Car Seat is produced
                          without the use of intentionally added fire retardant
                          chemical treatments, PFAS, BPA and phthalates.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 m-sm-b20 m-b30">
                        <NuxtLink
                          to="/shop-standard"
                          class="about-product-wrapper"
                        >
                          <div class="producṭ-content bg-light">
                            <h4 class="product-title">All-in-One Dress</h4>
                            <p class="product-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </NuxtLink>
                      </div>
                      <div class="col-lg-6 col-md-6 m-sm-b20 m-b30">
                        <NuxtLink
                          to="/shop-standard"
                          class="about-product-wrapper"
                        >
                          <div class="producṭ-content bg-light">
                            <h4 class="product-title">Looking wise good</h4>
                            <p class="product-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </NuxtLink>
                      </div>
                      <div class="col-lg-6 col-md-6 m-sm-b20 m-b30">
                        <NuxtLink
                          to="/shop-standard"
                          class="about-product-wrapper"
                        >
                          <div class="producṭ-content bg-light">
                            <h4 class="product-title">100% Made In India</h4>
                            <p class="product-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </NuxtLink>
                      </div>
                      <div class="col-lg-6 col-md-6 m-sm-b20 m-b30">
                        <NuxtLink
                          to="/shop-standard"
                          class="about-product-wrapper"
                        >
                          <div class="producṭ-content bg-light">
                            <h4 class="product-title">100% Cotton</h4>
                            <p class="product-text">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                    <div class="dz-product-media dz-media rounded">
                      <img
                        src="../../assets/images/shop/product-details/product-style-1/product-details-1.png"
                        alt="/"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <div class="clear" id="comment-list">
                  <div class="post-comments comments-area style-1 clearfix">
                    <h4 class="comments-title mb-2">Comments (02)</h4>
                    <p class="dz-title-text">
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div id="comment">
                      <ol class="comment-list">
                        <li
                          class="comment even thread-even depth-1 comment"
                          id="comment-2"
                        >
                          <div class="comment-body">
                            <div class="comment-author vcard">
                              <img
                                src="../../assets/images/profile4.jpg"
                                alt="/"
                                class="avatar"
                              />
                              <cite class="fn">Michel Poe</cite>
                            </div>
                            <div class="comment-content dz-page-text">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                            <div class="reply">
                              <NuxtLink
                                rel="nofollow"
                                class="comment-reply-link"
                                to=""
                                >Reply</NuxtLink
                              >
                            </div>
                          </div>
                          <ol class="children">
                            <li
                              class="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment"
                              id="comment-3"
                            >
                              <div class="comment-body" id="div-comment-3">
                                <div class="comment-author vcard">
                                  <img
                                    src="../../assets/images/profile3.jpg"
                                    alt="/"
                                    class="avatar"
                                  />
                                  <cite class="fn">Celesto Anderson</cite>
                                </div>
                                <div class="comment-content dz-page-text">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                  </p>
                                </div>
                                <div class="reply">
                                  <NuxtLink class="comment-reply-link" to="">
                                    Reply</NuxtLink
                                  >
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                        <li
                          class="comment even thread-odd thread-alt depth-1 comment"
                          id="comment-4"
                        >
                          <div class="comment-body" id="div-comment-4">
                            <div class="comment-author vcard">
                              <img
                                src="../../assets/images/profile2.jpg"
                                alt="/"
                                class="avatar"
                              />
                              <cite class="fn">Monsur Rahman Lito</cite>
                            </div>
                            <div class="comment-content dz-page-text">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                            </div>
                            <div class="reply">
                              <NuxtLink class="comment-reply-link" to="">
                                Reply</NuxtLink
                              >
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div
                      class="default-form comment-respond style-1"
                      id="respond"
                    >
                      <h4 class="comment-reply-title mb-2" id="reply-title">
                        Good Comments
                      </h4>
                      <p class="dz-title-text">
                        There are many variations of passages of Lorem Ipsum
                        available.
                      </p>
                      <div class="comment-form-rating d-flex">
                        <label class="pull-left m-r10 m-b20 text-secondary"
                          >Your Rating</label
                        >
                        <div class="rating-widget">
                          <!-- Rating Stars Box -->
                          <div class="rating-stars">
                            <ul id="stars">
                              <li class="star" title="Poor" data-value="1">
                                <i class="fas fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Fair" data-value="2">
                                <i class="fas fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Good" data-value="3">
                                <i class="fas fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="Excellent" data-value="4">
                                <i class="fas fa-star fa-fw"></i>
                              </li>
                              <li class="star" title="WOW!!!" data-value="5">
                                <i class="fas fa-star fa-fw"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix">
                        <form
                          method="post"
                          id="comments_form"
                          class="comment-form"
                          novalidate
                        >
                          <p class="comment-form-author">
                            <input
                              id="name"
                              placeholder="Author"
                              name="author"
                              type="text"
                              value=""
                            />
                          </p>
                          <p class="comment-form-email">
                            <input
                              id="email"
                              placeholder="Email"
                              name="email"
                              type="email"
                              value=""
                            />
                          </p>
                          <p class="comment-form-comment">
                            <textarea
                              id="comments"
                              placeholder="Type Comment Here"
                              class="form-control4"
                              name="comment"
                              cols="45"
                              rows="3"
                            ></textarea>
                          </p>
                          <p class="col-md-12 col-sm-12 col-xs-12 form-submit">
                            <button
                              id="submit"
                              type="submit"
                              class="submit btn btn-secondary btnhover3 filled"
                            >
                              Submit Now
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
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
