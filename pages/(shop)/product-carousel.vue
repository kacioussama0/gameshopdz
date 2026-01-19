<script setup lang="ts">
import ProductRelaited from "@/elements/ProductRelaited.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { ref } from "vue";

const qty = ref(1);
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
          <li class="breadcrumb-item">Product Carousel</li>
        </ul>
      </nav>
      <div class="pagination-align style-2">
        <div
          class="portfolio-button-prev swiper-button-prev"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-fe43105ce7a133823"
        >
          Prev
        </div>
        <div
          class="portfolio-button-next swiper-button-next"
          tabindex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-fe43105ce7a133823"
        >
          Next
        </div>
      </div>
    </div>
    <div class="content-inner py-0 overflow-hidden">
      <div class="swiper-pagination-two"></div>
      <div class="container-fluid">
        <Swiper
          class="swiper portfolio-gallery3"
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :modules="[Navigation]"
          :breakpoints="{
            1200: { slidesPerView: 3 },
            775: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }"
          :navigation="{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }"
        >
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-1">
              <div class="dz-media">
                <img
                  src="../../assets/images/portfolio/portfolio9/pic1.jpg"
                  alt="/"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-1">
              <div class="dz-media">
                <img
                  src="../../assets/images/portfolio/portfolio9/pic2.jpg"
                  alt="/"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-1">
              <div class="dz-media">
                <img
                  src="../../assets/images/portfolio/portfolio9/pic3.jpg"
                  alt="/"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-1">
              <div class="dz-media">
                <img
                  src="../../assets/images/portfolio/portfolio9/pic1.jpg"
                  alt="/"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <div class="portfolio-box style-1">
              <div class="dz-media">
                <img
                  src="../../assets/images/portfolio/portfolio9/pic2.jpg"
                  alt="/"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="banner-social-media">
          <ul>
            <li>
              <NuxtLink
                class="text-dark"
                to="https://www.instagram.com/dexignzone/"
                >Instagram</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="text-dark"
                to="https://www.facebook.com/dexignzone"
                >Facebook</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="text-dark" to="https://twitter.com/dexignzones"
                >twitter</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <section class="content-inner-3 pb-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="dz-product-detail style-2 mw-100 ps-0">
              <div class="dz-content">
                <div class="dz-content-footer">
                  <div class="dz-content-start">
                    <span class="badge bg-secondary mb-2">SALE 20% Off</span>
                    <h4 class="title mb-1">Lady Red Coat Black Jeans</h4>
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
                  <ul class="d-lg-flex align-items-center d-none">
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
                <p class="para-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div
                  class="meta-content m-b20 d-flex align-items-end justify-content-between justify-content-sm-start"
                >
                  <div class="me-5">
                    <span class="form-label mb-0 mb-md-2">Price</span>
                    <span class="price">$125.75 <del>$132.17</del></span>
                  </div>
                  <div class="btn-quantity light d-md-block d-none me-0">
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
                  <div
                    class="btn-quantity light quantity-sm d-md-none d-block me-0"
                  >
                    <label class="form-label">Quantity</label>
                    <div class="input-group bootstrap-touchspin">
                      <span
                        class="input-group-addon bootstrap-touchspin-prefix"
                        style="display: none"
                      ></span
                      ><input
                        type="text"
                        value="1"
                        name="demo_vertical2"
                        class="form-control"
                        style="display: block"
                      /><span
                        class="input-group-addon bootstrap-touchspin-postfix"
                        style="display: none"
                      ></span
                      ><span class="input-group-btn-vertical"
                        ><button
                          class="btn btn-default bootstrap-touchspin-up"
                          type="button"
                        >
                          <i class="fa-solid fa-plus"></i></button
                        ><button
                          class="btn btn-default bootstrap-touchspin-down"
                          type="button"
                        >
                          <i class="fa-solid fa-minus"></i></button
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="btn-group cart-btn">
                  <NuxtLink
                    to="/shop-cart"
                    class="btn btn-secondary text-uppercase me-md-4"
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
                <div class="dz-info style-2">
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
                  tabindex="-1"
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
                        src="../../assets/images/feature/product-feature-3/1.png"
                        alt="/"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4 col-6">
                    <div class="related-img dz-media">
                      <img
                        src="../../assets/images/feature/product-feature-3/2.png"
                        alt="/"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 col-md-4 col-sm-4">
                    <div class="related-img dz-media">
                      <img
                        src="../../assets/images/feature/product-feature-3/3.png"
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
