<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper/modules";
import ProductRelaited from "@/elements/ProductRelaited.vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img1 from "@/assets/images/products/product-detail2/product1.png";
import img2 from "@/assets/images/products/product-detail2/product2.png";
import img3 from "@/assets/images/products/product-detail2/product3.png";
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
          <li class="breadcrumb-item">Product Default</li>
        </ul>
      </nav>
    </div>
    <section class="content-inner py-0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-4 col-md-4">
            <div class="dz-product-detail sticky-top">
              <Lightgallery
                :settings="{
                  speed: 500,
                  plugins: [lgThumbnail, lgZoom],
                  selector: '.lg-item',
                }"
                class="swiper-btn-center-lr"
              >
                <Swiper
                  class="swiper product-gallery-swiper2 rounded"
                  id="lightgallery2"
                  :modules="[Thumbs]"
                  :thumbs="{ swiper: thumbsSwiper }"
                >
                  <SwiperSlide
                    class="swiper-slide"
                    v-for="({ img }, ind) in slide"
                    :key="ind"
                  >
                    <div class="dz-media DZoomImage">
                      <a class="mfp-link lg-item" :href="img" :data-src="img">
                        <i
                          class="feather icon-maximize dz-maximize top-left"
                        ></i>
                        <img :src="img" alt="" class="d-none" />
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

                <!-- @vue-ignore -->
                <Swiper
                  class="swiper product-gallery-swiper thumb-swiper-lg"
                  :space-between="10"
                  :slides-per-view="3"
                  :modules="[Thumbs]"
                  watch-slides-progress
                  @swiper="setThumbsSwiper"
                >
                  <SwiperSlide class="swiper-slide">
                    <img
                      src="../../assets/images/products/product-detail2/thumb-img/1.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <img
                      src="../../assets/images/products/product-detail2/thumb-img/2.png"
                      alt="image"
                    />
                  </SwiperSlide>
                  <SwiperSlide class="swiper-slide">
                    <img
                      src="../../assets/images/products/product-detail2/thumb-img/3.png"
                      alt="image"
                    />
                  </SwiperSlide>
                </Swiper>
              </Lightgallery>
            </div>
          </div>
          <div class="col-xl-8 col-md-8">
            <div class="row">
              <div class="col-xl-7">
                <div class="dz-product-detail style-2 p-t20 ps-0">
                  <div class="dz-content">
                    <div class="dz-content-footer">
                      <div class="dz-content-start">
                        <span class="badge bg-secondary mb-2"
                          >SALE 20% Off</span
                        >
                        <h4 class="title mb-1">Curly Girl Beautiful Dress</h4>
                        <div class="review-num">
                          <ul class="dz-rating me-2">
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
                          <span class="text-secondary me-2">4.7 Rating</span>
                          <NuxtLink to="">(5 customer reviews)</NuxtLink>
                        </div>
                      </div>
                    </div>
                    <p class="para-text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div class="meta-content m-b20 d-flex align-items-end">
                      <div
                        class="btn-quantity quantity-sm light d-xl-none d-blcok d-sm-block"
                      >
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
                    </div>
                    <div class="product-num">
                      <div
                        class="btn-quantity light d-xl-block d-sm-none d-none"
                      >
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
                            <span
                              style="background-color: rgb(36, 38, 43)"
                            ></span>
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
                            <span
                              style="background-color: rgb(13, 119, 94)"
                            ></span>
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
                    <div class="dz-info">
                      <ul>
                        <li><strong>SKU:</strong></li>
                        <li>PRT584E63A</li>
                      </ul>
                      <ul>
                        <li><strong>Category:</strong></li>
                        <li>
                          <NuxtLink to="/shop-standard">Dresses,</NuxtLink>
                        </li>
                        <li><NuxtLink to="/shop-standard">Jeans,</NuxtLink></li>
                        <li>
                          <NuxtLink to="/shop-standard">Swimwear,</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-standard">Summer,</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-standard">Clothing,</NuxtLink>
                        </li>
                      </ul>
                      <ul>
                        <li><strong>Tags:</strong></li>
                        <li>
                          <NuxtLink to="/shop-standard">Casual,</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-standard">Athletic,</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/shop-standard">Workwear,</NuxtLink>
                        </li>
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
              <div class="col-xl-5">
                <div class="cart-detail">
                  <NuxtLink to="" class="btn btn-outline-secondary w-100 m-b20"
                    >Bank Offer 5% Cashback</NuxtLink
                  >
                  <div class="icon-bx-wraper style-4 m-b15">
                    <div class="icon-bx">
                      <i class="flaticon flaticon-ship"></i>
                    </div>
                    <div class="icon-content">
                      <span class="font-14">Easy Returns</span>
                      <h6 class="dz-title">30 Days</h6>
                    </div>
                  </div>
                  <div class="icon-bx-wraper style-4 m-b30">
                    <div class="icon-bx">
                      <img
                        src="../../assets/images/shop/shop-cart/icon-box/pic2.png"
                        alt="/"
                      />
                    </div>
                    <div class="icon-content">
                      <h6 class="dz-title">Enjoy The Product</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </p>
                    </div>
                  </div>
                  <div class="save-text">
                    <i class="icon feather icon-check-circle"></i>
                    <span class="m-l10">You will save ₹504 on this order</span>
                  </div>
                  <table>
                    <tbody>
                      <tr class="total">
                        <td>
                          <h6 class="mb-0">Total</h6>
                        </td>
                        <td class="price">$125.75</td>
                      </tr>
                    </tbody>
                  </table>
                  <NuxtLink
                    to="/shop-wishlist"
                    class="btn btn-outline-secondary btn-icon m-b20"
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
                  <NuxtLink to="/shop-cart" class="btn btn-secondary w-100"
                    >ADD TO CART</NuxtLink
                  >
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
                <div class="detail-bx text-center">
                  <h5 class="title">Flawless Denim Delights</h5>
                  <p class="para-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <ul class="feature-detail">
                    <li>
                      <i class="icon feather icon-check"></i>
                      <h5>Versatile, enduring style for all occasions</h5>
                    </li>
                    <li>
                      <i class="icon feather icon-check"></i>
                      <h5>Handcrafted Elegance, Comfort</h5>
                    </li>
                    <li>
                      <i class="icon feather icon-check"></i>
                      <h5>Versatile, enduring style for all occasions</h5>
                    </li>
                  </ul>
                </div>
                <div class="row g-lg-4 g-3">
                  <div class="col-xl-4 col-md-4 col-sm-4 col-6">
                    <div class="related-img dz-media">
                      <img
                        src="../../assets/images/feature/product-feature/1.png"
                        alt="/"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4 col-6">
                    <div class="related-img dz-media">
                      <img
                        src="../../assets/images/feature/product-feature/2.png"
                        alt="/"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4">
                    <div class="related-img dz-media">
                      <img
                        src="../../assets/images/feature/product-feature/3.png"
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
          class="section-head style-2 d-md-flex justify-content-between align-items-center"
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

<style scoped>
.DZoomImage a i {
  z-index: 1;
}
</style>
