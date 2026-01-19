<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Navigation, FreeMode, Autoplay } from "swiper/modules";

import lady1 from "@/assets/images/products/lady-1.png";
import lady2 from "@/assets/images/products/lady-2.png";
import lady3 from "@/assets/images/products/lady-3.png";

const modelData = [{ img: lady1 }, { img: lady2 }, { img: lady3 }];

const qty = ref(1);
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: null) => {
  thumbsSwiper.value = swiper;
};

function hoverEffect(e: any) {
  const targetRect = e.target.getBoundingClientRect();

  let xValue = ((e.clientX - targetRect.left) / targetRect.width) * 50;
  let yValue = ((e.clientY - targetRect.top) / targetRect.height) * 50;

  e.target.setAttribute("style", `cursor: pointer; transition: 0.1s; transform: scale(1.5); transform-origin: ${xValue}% ${yValue}%`);
}

function removeHover(e: any) {
  e.target.setAttribute("style", `cursor: pointer; transition: 0.1s; transform: scale(1); transform-origin: 0% 0%`);
}
</script>

<template>
  <div class="modal quick-view-modal modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" style="margin-top: 0px">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <i class="icon feather icon-x"></i>
        </button>
        <div class="modal-body">
          <div class="row g-xl-4 g-3">
            <div class="col-xl-6 col-md-6">
              <div class="dz-product-detail mb-0">
                <div class="swiper-btn-center-lr">
                  <Swiper class="swiper quick-modal-swiper2 swiper-initialized swiper-horizontal swiper-backface-hidden" :thumbs="{ swiper: thumbsSwiper }" :modules="[FreeMode, Navigation, Thumbs]">
                    <SwiperSlide class="swiper-slide" role="group" aria-label="1 / 3" v-for="({ img }, ind) in modelData" :key="ind">
                      <div class="dz-media DZoomImage">
                        <a class="mfp-link lg-item" :href="img">
                          <i class="feather icon-maximize dz-maximize top-right" style="opacity: 0; z-index: 1"></i>
                        </a>
                        <img
                          @mouseenter="hoverEffect"
                          @mouseout="removeHover"
                          :src="img"
                          alt="image"
                          style="cursor: pointer; transition: 0.1s; transform: scale(1); transform-origin: 13.0769% 32.9808%"
                        />
                      </div>
                    </SwiperSlide>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </Swiper>
                  <!-- @vue-ignore -->
                  <Swiper
                    class="swiper quick-modal-swiper thumb-swiper-lg thumb-sm swiper-vertical swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-thumbs swiper-backface-hidden"
                    @swiper="setThumbsSwiper"
                    :modules="[FreeMode, Navigation, Thumbs]"
                    :slides-per-view="3"
                  >
                    <SwiperSlide class="swiper-slide" role="group" v-for="({ img }, ind) in modelData" :key="ind">
                      <img :src="img" alt="image" />
                    </SwiperSlide>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                  </Swiper>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="dz-product-detail style-2 ps-xl-3 ps-0 pt-2 mb-0">
                <div class="dz-content">
                  <div class="dz-content-footer">
                    <div class="dz-content-start">
                      <span class="badge bg-secondary mb-2">SALE 20% Off</span>
                      <h4 class="title mb-1"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h4>
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
                        <RouterLink to="">(5 customer reviews)</RouterLink>
                      </div>
                    </div>
                  </div>
                  <p class="para-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.</p>
                  <div class="meta-content m-b20 d-flex align-items-end">
                    <div class="me-3">
                      <span class="form-label">Price</span>
                      <span class="price">$125.75 <del>$132.17</del></span>
                    </div>
                    <div class="btn-quantity light me-0">
                      <label class="form-label">Quantity</label>
                      <div class="input-group bootstrap-touchspin">
                        <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                        ><input type="text" v-model="qty" name="demo_vertical2" class="form-control" style="display: block" /><span
                          class="input-group-addon bootstrap-touchspin-postfix"
                          style="display: none"
                        ></span
                        ><span class="input-group-btn-vertical"
                          ><button @click="qty++" class="btn btn-default bootstrap-touchspin-up" type="button">
                            <i class="fa-solid fa-plus"></i></button
                          ><button @click="qty > 1 ? qty-- : qty" class="btn btn-default bootstrap-touchspin-down" type="button">
                            <i class="fa-solid fa-minus"></i></button
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div class="cart-btn">
                    <RouterLink to="/shop-cart" class="btn btn-secondary text-uppercase">Add To Cart</RouterLink>
                    <RouterLink to="/shop-wishlist" class="btn btn-md btn-outline-secondary btn-icon">
                      <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z"
                          fill="black"
                        ></path>
                      </svg>
                      Add To Wishlist
                    </RouterLink>
                  </div>
                  <div class="dz-info mb-0">
                    <ul>
                      <li><strong>SKU:</strong></li>
                      <li>PRT584E63A</li>
                    </ul>
                    <ul>
                      <li><strong>Category:</strong></li>
                      <li><RouterLink to="/shop-standard">Dresses,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Jeans,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Swimwear,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Summer,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Clothing</RouterLink></li>
                    </ul>
                    <ul>
                      <li><strong>Tags:</strong></li>
                      <li><RouterLink to="/shop-standard">Casual</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Athletic,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Workwear,</RouterLink></li>
                      <li><RouterLink to="/shop-standard">Accessories</RouterLink></li>
                    </ul>
                    <div class="dz-social-icon">
                      <ul>
                        <li>
                          <a target="_blank" class="text-dark" href="https://www.facebook.com/dexignzone">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" class="text-dark" href="https://twitter.com/dexignzones">
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" class="text-dark" href="https://www.youtube.com/@dexignzone1723">
                            <i class="fa-brands fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" class="text-dark" href="https://www.linkedin.com/showcase/3686700/admin/">
                            <i class="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" class="text-dark" href="https://www.instagram.com/dexignzone/">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
