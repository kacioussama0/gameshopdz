<script setup lang="ts"></script>
<template>
  <footer class="site-footer footer-map footer-dark">
    <!-- Footer Top -->
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 px-0">
          <div class="map-iframe map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1500819483219"
              style="
                border: 0;
                width: 100%;
                min-height: 100%;
                margin-bottom: -8px;
              "
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12">
          <div class="footer-top m-t30">
            <div class="row">
              <div class="col-xl-6 col-md-12">
                <div class="widget widget_about">
                  <div class="footer-logo logo-white">
                    <NuxtLink to="/"
                      ><img src="../assets/images/logo-white.svg" alt=""
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
              <div class="col-xl-3 col-6">
                <div class="widget widget_services">
                  <h5 class="footer-title">Useful Links</h5>
                  <ul>
                    <li><NuxtLink to="">Privacy Policy</NuxtLink></li>
                    <li><NuxtLink to="">Returns</NuxtLink></li>
                    <li><NuxtLink to="">Terms &amp; Conditions</NuxtLink></li>
                    <li><NuxtLink to="">Contact Us</NuxtLink></li>
                    <li><NuxtLink to="">Latest News</NuxtLink></li>
                    <li><NuxtLink to="">Our Sitemap</NuxtLink></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-6">
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
          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <div class="fb-inner">
              <div class="text-start">
                <p class="copyright-text">
                  © <span class="current-year">2024</span>
                  <NuxtLink to="https://www.dexignzone.com/"
                    >DexignZone</NuxtLink
                  >
                  Theme. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <!-- Footer Bottom End -->
        </div>
      </div>
    </div>
    <!-- Footer Top End -->
  </footer>
</template>
