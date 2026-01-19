<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import Canvas from "@/components/Canvas.vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const isMenu = ref(false);
const timer = ref({
  day: "",
  hour: "",
  min: "",
  sec: "",
});

onMounted(() => {
  const menus = document.querySelectorAll(".navbar-nav > li");
  menus.forEach(function (el, ind) {
    el.addEventListener("click", function () {
      el.classList.toggle("open");
      menus.forEach(function (ell, index) {
        if (ind !== index) {
          ell.classList.remove("open");
        }
      });
    });
  });
});

onMounted(() => {
  let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

  let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    timer.value.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    timer.value.hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    timer.value.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    timer.value.sec = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      countDownDate = new Date(`Jan 5, 2026 15:37:25`).getTime();
    }
  }, 1000);
});

const isFixed = ref(false);
function scrollHandler() {
  if (window.scrollY > 60) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div
    :class="`sticky-header main-bar-wraper navbar-expand-lg ${
      isFixed ? 'is-fixed' : ''
    }`"
  >
    <div class="main-bar clearfix">
      <div class="container-fluid clearfix d-lg-flex d-block">
        <!-- Website Logo -->
        <div class="logo-header logo-dark me-md-5">
          <NuxtLink to="/"
            ><img src="../assets/images/logo.svg" alt="logo"
          /></NuxtLink>
        </div>

        <!-- Nav Toggle Button -->

        <button
          :class="`navbar-toggler collapsed navicon justify-content-end ${
            isMenu ? 'open' : ''
          }`"
          type="button"
          @click="isMenu = !isMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Main Nav -->
        <div
          :class="`header-nav w3menu navbar-collapse justify-content-start ${
            isMenu ? 'show' : ''
          }`"
          id="navbarNavDropdown"
        >
          <div class="logo-header logo-dark">
            <NuxtLink to="/"
              ><img src="../assets/images/logo.svg" alt=""
            /></NuxtLink>
          </div>
          <ul class="nav navbar-nav">
            <li class="has-mega-menu sub-menu-down auto-width menu-left">
              <NuxtLink to="" class="menu_item"
                ><span>Home</span><i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <div class="mega-menu">
                <ul class="demo-menu mb-0">
                  <li>
                    <NuxtLink to="/">
                      <img src="../assets/images/demo/demo-1.png" alt="/" />
                      <span class="menu-title">01 Home Page</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-2">
                      <img src="../assets/images/demo/demo-2.png" alt="/" />
                      <span class="menu-title">02 Home Page</span>
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/index-3">
                      <img src="../assets/images/demo/demo-3.png" alt="/" />
                      <span class="menu-title">03 Home Page</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down">
              <NuxtLink to="" class="menu_item"
                ><span>Shop</span><i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <div class="mega-menu shop-menu">
                <ul>
                  <li class="side-left">
                    <ul>
                      <li>
                        <NuxtLink to="" class="menu-title"
                          >Shop Structure</NuxtLink
                        >
                        <ul>
                          <li>
                            <NuxtLink to="/shop-standard"
                              >Shop Standard</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/shop-list">Shop List</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/shop-with-category"
                              >Shop With Category</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/shop-filters-top-bar"
                              >Shop Filters Top Bar</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/shop-sidebar">Shop Sidebar</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/shop-style-1">Shop Style 1</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/shop-style-2">Shop Style 2</NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NuxtLink to="" class="menu-title"
                          >Product Structure</NuxtLink
                        >
                        <ul>
                          <li>
                            <NuxtLink to="/product-default">Default</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/product-thumbnail"
                              >Thumbnail</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/product-grid-media"
                              >Grid Media</NuxtLink
                            >
                          </li>
                          <li>
                            <NuxtLink to="/product-carousel">Carousel</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/product-full-width"
                              >Full Width</NuxtLink
                            >
                          </li>
                        </ul>
                      </li>
                      <li>
                        <NuxtLink to="" class="menu-title">Shop Pages</NuxtLink>
                        <ul>
                          <li>
                            <NuxtLink to="/shop-wishlist">Wishlist</NuxtLink>
                          </li>
                          <li><NuxtLink to="/shop-cart">Cart</NuxtLink></li>
                          <li>
                            <NuxtLink to="/shop-checkout">Checkout</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/shop-compare">Compare</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/shop-order-tracking"
                              >Order Tracking</NuxtLink
                            >
                          </li>
                          <li><NuxtLink to="/login">Login</NuxtLink></li>
                          <li>
                            <NuxtLink to="/registration">Registration</NuxtLink>
                          </li>
                          <li>
                            <NuxtLink to="/forget-password"
                              >Forget Password
                            </NuxtLink>
                          </li>
                        </ul>
                      </li>
                      <li class="month-deal">
                        <div class="clearfix me-3">
                          <h3>Deal of the month</h3>
                          <p class="mb-0">
                            Yes! Send me exclusive offers, personalised, and
                            unique gift ideas, tips for shopping on Pixio
                            <NuxtLink to="/shop-standard" class="dz-link-2"
                              >View All Products</NuxtLink
                            >
                          </p>
                        </div>
                        <div class="sale-countdown">
                          <div class="countdown text-center">
                            <div class="date">
                              <span class="time days text-primary">{{
                                timer.day
                              }}</span>
                              <span class="work-time">Days</span>
                            </div>
                            <div class="date">
                              <span class="time hours text-primary">{{
                                timer.hour
                              }}</span>
                              <span class="work-time">Hours</span>
                            </div>
                            <div class="date">
                              <span class="time mins text-primary">{{
                                timer.min
                              }}</span>
                              <span class="work-time">Minutess</span>
                            </div>
                            <div class="date">
                              <span class="time secs text-primary">{{
                                timer.sec
                              }}</span>
                              <span class="work-time">Second</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="side-right">
                    <div class="adv-media">
                      <img src="../assets/images/adv-1.png" alt="/" />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down auto-width">
              <NuxtLink to="" class="menu_item"
                ><span>Blog</span><i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <div class="mega-menu">
                <ul>
                  <li>
                    <NuxtLink to="" class="menu-title"
                      >Blog Dark Style</NuxtLink
                    >
                    <ul>
                      <li>
                        <NuxtLink to="/blog-dark-2-column"
                          >Blog 2 Column</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-dark-2-column-sidebar"
                          >Blog 2 Column Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-dark-3-column"
                          >Blog 3 Column</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-dark-half-image"
                          >Blog Half Image</NuxtLink
                        >
                      </li>
                    </ul>
                    <NuxtLink to="" class="menu-title"
                      >Blog Light Style</NuxtLink
                    >
                    <ul>
                      <li>
                        <NuxtLink to="/blog-light-2-column"
                          >Blog 2 Column</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-light-2-column-sidebar"
                          >Blog 2 Column Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-light-half-image"
                          >Blog Half Image</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-exclusive">Blog Exclusive</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Blog Sidebar</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/blog-left-sidebar"
                          >Blog left Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-right-sidebar"
                          >Blog Right Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-both-sidebar"
                          >Blog Both Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/blog-wide-sidebar"
                          >Blog Wide Sidebar</NuxtLink
                        >
                      </li>
                    </ul>
                    <NuxtLink to="" class="menu-title">Blog Page</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/blog-archive">Blog Archive</NuxtLink>
                      </li>
                      <li><NuxtLink to="/blog-author">Author</NuxtLink></li>
                      <li>
                        <NuxtLink to="/blog-category">Blog Category</NuxtLink>
                      </li>
                      <li><NuxtLink to="/blog-tag">Blog Tag</NuxtLink></li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Blog Details</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/post-standard">Post Standard</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/post-left-sidebar"
                          >Post Left Sidebar</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-header-image"
                          >Post Header Image</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-slide-show"
                          >Post Slide Show</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-side-image"
                          >Post Side Image</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-gallery">Post Gallery</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/post-gallery-alternative"
                          >Post Gallery Alternative</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-open-gutenberg"
                          >Post Open Gutenberg</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/post-link">Post Link</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/post-audio">Post Audio</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/post-video">Post Video</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="post-menu">
                    <NuxtLink to="" class="menu-title">Recent Posts</NuxtLink>
                    <div class="widget widget_post pt-2">
                      <ul>
                        <li>
                          <div class="dz-media">
                            <img
                              src="../assets/images/shop/product/small/1.png"
                              alt=""
                            />
                          </div>
                          <div class="dz-content">
                            <h6 class="name">
                              <NuxtLink to="/post-standard"
                                >Cozy Knit Cardigan Sweater</NuxtLink
                              >
                            </h6>
                            <span class="time">July 23, 2023</span>
                          </div>
                        </li>
                        <li>
                          <div class="dz-media">
                            <img
                              src="../assets/images/shop/product/small/2.png"
                              alt=""
                            />
                          </div>
                          <div class="dz-content">
                            <h6 class="name">
                              <NuxtLink to="/post-standard"
                                >Sophisticated Swagger Suit</NuxtLink
                              >
                            </h6>
                            <span class="time">July 23, 2023</span>
                          </div>
                        </li>
                        <li>
                          <div class="dz-media">
                            <img
                              src="../assets/images/shop/product/small/3.png"
                              alt=""
                            />
                          </div>
                          <div class="dz-content">
                            <h6 class="name">
                              <NuxtLink to="/post-standard"
                                >Athletic Mesh Sports Leggings</NuxtLink
                              >
                            </h6>
                            <span class="time">July 23, 2023</span>
                          </div>
                        </li>
                        <li>
                          <div class="dz-media">
                            <img
                              src="../assets/images/shop/product/small/4.png"
                              alt=""
                            />
                          </div>
                          <div class="dz-content">
                            <h6 class="name">
                              <NuxtLink to="/post-standard"
                                >Satin Wrap Party Blouse</NuxtLink
                              >
                            </h6>
                            <span class="time">July 23, 2023</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down">
              <NuxtLink to="" class="menu_item"
                ><span>Portfolio</span
                ><i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <div class="mega-menu portfolio-menu">
                <ul>
                  <li class="side-left">
                    <ul class="portfolio-nav-link">
                      <li>
                        <NuxtLink to="/portfolio-tiles">
                          <img
                            src="../assets/images/portfolio/icons/portfolio-tiles.svg"
                            alt="/"
                          />
                          <span>Portfolio Tiles</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/collage-style-1">
                          <img
                            src="../assets/images/portfolio/icons/collage-style-1.svg"
                            alt="/"
                          />
                          <span>Collage Style 1</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/collage-style-2">
                          <img
                            src="../assets/images/portfolio/icons/collage-style-2.svg"
                            alt="/"
                          />
                          <span>Collage Style 2</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/masonry-grid">
                          <img
                            src="../assets/images/portfolio/icons/masonry-grid.svg"
                            alt="/"
                          />
                          <span>Masonry Grid</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/cobble-style-1">
                          <img
                            src="../assets/images/portfolio/icons/cobble-style-1.svg"
                            alt="/"
                          />
                          <span>Cobble Style 1</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/cobble-style-2">
                          <img
                            src="../assets/images/portfolio/icons/cobble-style-2.svg"
                            alt="/"
                          />
                          <span>Cobble Style 2</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-thumbs-slider">
                          <img
                            src="../assets/images/portfolio/icons/portfolio-thumbs-slider.svg"
                            alt="/"
                          />
                          <span>Portfolio Thumbs Slider</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-film-strip">
                          <img
                            src="../assets/images/portfolio/icons/portfolio-film-strip.svg"
                            alt="/"
                          />
                          <span>Portfolio Film Strip</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/carousel-showcase">
                          <img
                            src="../assets/images/portfolio/icons/carousel-showcase.svg"
                            alt="/"
                          />
                          <span>Carousel Showcase</span>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-split-slider">
                          <img
                            src="../assets/images/portfolio/icons/portfolio-split-slider.svg"
                            alt="/"
                          />
                          <span>Portfolio Split Slider</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="side-right line-left">
                    <NuxtLink to="" class="menu-title"
                      >Portfolio Details</NuxtLink
                    >
                    <ul>
                      <li>
                        <NuxtLink to="/portfolio-details-1"
                          >Portfolio Details 1</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-details-2"
                          >Portfolio Details 2</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-details-3"
                          >Portfolio Details 3</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-details-4"
                          >Portfolio Details 4</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/portfolio-details-5"
                          >Portfolio Details 5</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down wide-width">
              <NuxtLink to="" class="menu_item"
                ><span>Pages</span><i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <div class="mega-menu">
                <ul>
                  <li>
                    <NuxtLink to="" class="menu-title">Pages</NuxtLink>
                    <ul>
                      <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                      <li><NuxtLink to="/about-me">About Me</NuxtLink></li>
                      <li>
                        <NuxtLink to="/pricing-table">Pricing Table</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/our-gift-vouchers"
                          >Our Gift Vouchers</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/what-we-do">What We Do</NuxtLink>
                      </li>
                      <li><NuxtLink to="/faqs-1">Faqs 1</NuxtLink></li>
                      <li><NuxtLink to="/faqs-2">Faqs 2</NuxtLink></li>
                      <li><NuxtLink to="/our-team">Our Team</NuxtLink></li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Contact Us</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/contact-us-1">Contact Us 1</NuxtLink>
                      </li>
                      <li><NuxtLink to="/">Contact Us 2</NuxtLink></li>
                      <li>
                        <NuxtLink to="/contact-us-3">Contact Us 3</NuxtLink>
                      </li>
                    </ul>
                    <NuxtLink to="" class="menu-title">Web Pages</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/error-1">Error 404 1</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/error-2">Error 404 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/coming-soon">Coming Soon</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/under-construction"
                          >Under Construction</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Banner Style</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/banner-with-bg-color"
                          >Banner with BG Color</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/banner-with-image"
                          >Banner with Image</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/banner-with-video"
                          >Banner with Video</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/banner-with-kanbern"
                          >Banner with Kanbern</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/banner-small">Banner Small</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/banner-medium">Banner Medium</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/banner-large">Banner Large</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Header Style</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/header-style-1">Header Style 1</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-2">Header Style 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-3">Header Style 3</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-4">Header Style 4</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-5">Header Style 5</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-6">Header Style 6</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/header-style-7">Header Style 7</NuxtLink>
                      </li>
                      <li class="w3menulink">
                        <NuxtLink to="/w3menu">Menu Styles</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Footer Style</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/footer-style-1">Footer Style 1</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-2">Footer Style 2</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-3">Footer Style 3</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-4">Footer Style 4</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-5">Footer Style 5</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-6">Footer Style 6</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/footer-style-7">Footer Style 7</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NuxtLink to="" class="menu-title">Dashboard</NuxtLink>
                    <ul>
                      <li>
                        <NuxtLink to="/account-dashboard">Dashboard</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/account-orders">Orders</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/account-order-details"
                          >Orders Details</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/account-order-confirmation"
                          >Orders Confirmation</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/account-downloads">Downloads</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/account-return-request"
                          >Return Request</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/account-return-request-detail"
                          >Return Request Detail</NuxtLink
                        >
                      </li>
                      <li>
                        <NuxtLink to="/account-refund-requests-confirmed"
                          >Return Request Confirmed</NuxtLink
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sub-menu-down">
              <NuxtLink to=""
                ><span>My Account</span>
                <i class="fas fa-chevron-down tabindex"></i
              ></NuxtLink>
              <ul class="sub-menu">
                <li>
                  <NuxtLink to="/account-dashboard">Dashboard</NuxtLink>
                </li>
                <li><NuxtLink to="/account-orders">Orders</NuxtLink></li>
                <li>
                  <NuxtLink to="/account-order-details"
                    >Orders Details</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-order-confirmation"
                    >Orders Confirmation</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-downloads">Downloads</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/account-return-request"
                    >Return Request</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-return-request-detail"
                    >Return Request Detail</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-refund-requests-confirmed"
                    >Return Request Confirmed</NuxtLink
                  >
                </li>
                <li><NuxtLink to="/account-profile">Profile</NuxtLink></li>
                <li><NuxtLink to="/account-address">Address</NuxtLink></li>
                <li>
                  <NuxtLink to="/account-shipping-methods"
                    >Shipping methods</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-payment-methods"
                    >Payment Methods</NuxtLink
                  >
                </li>
                <li><NuxtLink to="/account-review">Review</NuxtLink></li>
                <li>
                  <NuxtLink to="/account-billing-address"
                    >Billing address</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-shipping-address"
                    >Shipping address</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/account-cancellation-requests"
                    >Cancellation Requests</NuxtLink
                  >
                </li>
              </ul>
            </li>
          </ul>
          <div class="dz-social-icon">
            <ul>
              <li>
                <NuxtLink
                  class="fab fa-facebook-f"
                  target="_blank"
                  to="https://www.facebook.com/dexignzone"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-twitter"
                  target="_blank"
                  to="https://twitter.com/dexignzones"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-linkedin-in"
                  target="_blank"
                  to="https://www.linkedin.com/showcase/3686700/admin/"
                ></NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="fab fa-instagram"
                  target="_blank"
                  to="https://www.instagram.com/dexignzone/"
                ></NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- EXTRA NAV -->
        <div class="extra-nav">
          <div class="extra-cell">
            <ul class="header-right">
              <li class="nav-item login-link">
                <NuxtLink class="nav-link" to="/login">
                  Login / Register
                </NuxtLink>
              </li>
              <li class="nav-item search-link">
                <NuxtLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i class="iconly-Light-Search"></i>
                </NuxtLink>
              </li>
              <li class="nav-item wishlist-link">
                <NuxtLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Light-Heart2"></i>
                </NuxtLink>
              </li>
              <li class="nav-item cart-link">
                <NuxtLink
                  to="#"
                  @click.prevent
                  class="nav-link cart-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Broken-Buy"></i>
                  <span class="badge badge-circle">5</span>
                </NuxtLink>
              </li>
              <li class="nav-item filte-link">
                <NuxtLink
                  to="#"
                  @click.prevent
                  class="nav-link filte-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLeft"
                  aria-controls="offcanvasLeft"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 13"
                    fill="none"
                  >
                    <rect y="11" width="30" height="2" fill="black"></rect>
                    <rect width="30" height="2" fill="black"></rect>
                  </svg>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="dz-search-area dz-offcanvas offcanvas offcanvas-top"
    tabindex="-1"
    id="offcanvasTop"
    aria-modal="true"
    role="dialog"
  >
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    >
      ×
    </button>
    <div class="container">
      <form class="header-item-search">
        <div class="input-group search-input">
          <div class="dropdown bootstrap-select default-select">
            <CustomeSelect
              :options="[
                { title: 'All Categories' },
                { title: 'Clothes' },
                { title: 'UrbanSkirt' },
                { title: 'VelvetGown' },
                { title: 'LushShorts' },
                { title: 'Vintage' },
                { title: 'Wedding' },
                { title: 'Cotton' },
                { title: 'Linen' },
                { title: 'Navy' },
                { title: 'Urban' },
                { title: 'Business Meeting' },
                { title: 'Formal' },
              ]"
            />
          </div>
          <input
            type="search"
            class="form-control"
            placeholder="Search Product"
          />
          <button class="btn" type="button">
            <i class="iconly-Light-Search"></i>
          </button>
        </div>
        <ul class="recent-tag">
          <li class="pe-0"><span>Quick Search :</span></li>
          <li><NuxtLink to="/shop-list">Clothes</NuxtLink></li>
          <li><NuxtLink to="/shop-list">UrbanSkirt</NuxtLink></li>
          <li><NuxtLink to="/shop-list">VelvetGown</NuxtLink></li>
          <li><NuxtLink to="/shop-list">LushShorts</NuxtLink></li>
        </ul>
      </form>
      <div class="row">
        <div class="col-xl-12">
          <h5 class="mb-3">You May Also Like</h5>
          <Swiper
            class="swiper category-swiper2 swiper-initialized swiper-horizontal swiper-backface-hidden"
            :slides-per-view="6"
            :autoplay="{ delay: 3000 }"
            :modules="[Autoplay]"
            :space-between="30"
            :breakpoints="{
              1200: { slidesPerView: 6 },
              991: { slidesPerView: 5 },
              775: { slidesPerView: 4 },
              575: { slidesPerView: 3 },
              240: { slidesPerView: 2 },
            }"
          >
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/2.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ClassicCapri</NuxtLink>
                  </h6>
                  <h6 class="price">$20.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-prev">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/5.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">DapperCoat</NuxtLink>
                  </h6>
                  <h6 class="price">$70.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-active">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/6.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ComfyLeggings</NuxtLink>
                  </h6>
                  <h6 class="price">$45.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-next">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/7.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">DenimDream Jeans</NuxtLink>
                  </h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">SilkBliss Dress</NuxtLink>
                  </h6>
                  <h6 class="price">$60.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/1.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">SilkBliss Dress</NuxtLink>
                  </h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/3.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">GlamPants</NuxtLink>
                  </h6>
                  <h6 class="price">$30.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title">
                    <NuxtLink to="/shop-list">ComfyLeggings</NuxtLink>
                  </h6>
                  <h6 class="price">$35.00</h6>
                </div>
              </div>
            </SwiperSlide>

            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  <Canvas />
</template>
