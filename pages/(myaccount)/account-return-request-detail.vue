<script lang="ts" setup>
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Return Request Detail" />
    <!--Banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="row">
              <div class="col-lg-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">
                      Request No: <span class="text-primary">#1374837</span>
                    </h6>
                  </div>
                  <NuxtLink
                    to="/account-return-request-detail"
                    class="order-cancel-box"
                  >
                    <div class="cancel-media">
                      <img
                        src="../../assets/images/shop/small/pic1.png"
                        alt=""
                      />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Collar Casual Shirt</h5>
                      <p class="mb-2">
                        Quantity: <strong class="text-black">1</strong>
                      </p>
                      <h6 class="mb-0">$105</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">
                      Request No: <span class="text-primary">#1374837</span>
                    </h6>
                  </div>
                  <NuxtLink
                    to="/account-return-request-detail"
                    class="order-cancel-box"
                  >
                    <div class="cancel-media">
                      <img
                        src="../../assets/images/shop/small/pic2.png"
                        alt=""
                      />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Collar Casual Shirt</h5>
                      <p class="mb-2">
                        Quantity: <strong class="text-black">1</strong>
                      </p>
                      <h6 class="mb-0">$304</h6>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 m-b30">
                <h4>What do you want to return?</h4>
                <div class="custom-control custom-checkbox mb-1">
                  <input
                    class="form-check-input radio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1"
                    >Refund</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input
                    class="form-check-input radio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label class="form-check-label" for="flexRadioDefault2"
                    >Replacment</label
                  >
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-control style-1">
                  <input
                    class="form-check-input radio"
                    type="radio"
                    name="Methods1"
                    id="Methods7"
                  />
                  <label
                    class="custom-checkbox form-check-label payment"
                    for="Methods7"
                  >
                    <span>
                      <span class="title">Direct bank Transfer</span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-control style-1">
                  <input
                    class="form-check-input radio"
                    type="radio"
                    name="Methods1"
                    id="Methods8"
                  />
                  <label
                    class="custom-checkbox form-check-label payment"
                    for="Methods8"
                  >
                    <span>
                      <span class="title">Gifte Card Wallet</span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="col-md-6 m-t10">
                <NuxtLink
                  to="/shop-wishlist"
                  class="btn btn-secondary me-xl-3 me-2 btnhover20"
                  >Submit Request</NuxtLink
                >
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="site-footer style-1 bg-light">
      <!-- Footer Top -->
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div class="widget widget_about me-2">
                <div class="footer-logo logo-white">
                  <NuxtLink to="/"
                    ><img src="../../assets/images/logo.svg" alt=""
                  /></NuxtLink>
                </div>
                <ul class="widget-address">
                  <li>
                    <p><span>Address</span> : 451 Wall Street, UK, London</p>
                  </li>
                  <li>
                    <p><span>E-mail</span> : example@info.com</p>
                  </li>
                  <li>
                    <p><span>Phone</span> : (064) 332-1233</p>
                  </li>
                </ul>
                <div class="subscribe_widget">
                  <h6 class="title fw-medium text-capitalize">
                    subscribe to our newsletter
                  </h6>
                  <form
                    class="dzSubscribe style-1"
                    action="script/mailchamp.php"
                    method="post"
                  >
                    <div class="dzSubscribeMsg"></div>
                    <div class="form-group">
                      <div class="input-group mb-0">
                        <input
                          name="dzEmail"
                          type="email"
                          class="form-control"
                          placeholder="Your Email Address"
                        />
                        <div class="input-group-addon">
                          <button
                            name="submit"
                            value="Submit"
                            type="submit"
                            class="btn"
                          >
                            <i class="icon feather icon-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="widget widget_post">
                <h5 class="footer-title">Recent Posts</h5>
                <ul>
                  <li>
                    <div class="dz-media">
                      <img
                        src="../../assets/images/shop/product/small/1.png"
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
                        src="../../assets/images/shop/product/small/2.png"
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
                        src="../../assets/images/shop/product/small/3.png"
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
                </ul>
              </div>
            </div>
            <div
              class="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="widget widget_services">
                <h5 class="footer-title">Our Stores</h5>
                <ul>
                  <li><NuxtLink to="">New York</NuxtLink></li>
                  <li><NuxtLink to="">London SF</NuxtLink></li>
                  <li><NuxtLink to="">Edinburgh</NuxtLink></li>
                  <li><NuxtLink to="">Los Angeles</NuxtLink></li>
                  <li><NuxtLink to="">Chicago</NuxtLink></li>
                  <li><NuxtLink to="">Las Vegas</NuxtLink></li>
                </ul>
              </div>
            </div>
            <div
              class="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div class="widget widget_services">
                <h5 class="footer-title">Useful Links</h5>
                <ul>
                  <li><NuxtLink to="">Privacy Policy</NuxtLink></li>
                  <li><NuxtLink to="">Returns</NuxtLink></li>
                  <li><NuxtLink to="">Terms & Conditions</NuxtLink></li>
                  <li><NuxtLink to="">Contact Us</NuxtLink></li>
                  <li><NuxtLink to="">Latest News</NuxtLink></li>
                  <li><NuxtLink to="">Our Sitemap</NuxtLink></li>
                </ul>
              </div>
            </div>
            <div
              class="col-xl-2 col-md-4 col-sm-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div class="widget widget_services">
                <h5 class="footer-title">Footer Menu</h5>
                <ul>
                  <li><NuxtLink to="">Instagram profile</NuxtLink></li>
                  <li><NuxtLink to="">New Collection</NuxtLink></li>
                  <li><NuxtLink to="">Woman Dress</NuxtLink></li>
                  <li><NuxtLink to="">Contact Us</NuxtLink></li>
                  <li><NuxtLink to="">Latest News</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Top End -->

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row fb-inner wow fadeInUp" data-wow-delay="0.1s">
            <div class="col-lg-6 col-md-12 text-start">
              <p class="copyright-text">
                © <span class="current-year">2024</span>
                <NuxtLink to="https://www.dexignzone.com/">DexignZone</NuxtLink>
                Theme. All Rights Reserved.
              </p>
            </div>
            <div class="col-lg-6 col-md-12 text-end">
              <div
                class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end"
              >
                <span class="me-3">We Accept: </span>
                <img src="../../assets/images/footer-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom End -->
    </footer>
    <!-- Footer End -->
    <button class="scroltop" type="button">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>
