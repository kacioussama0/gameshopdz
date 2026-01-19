<script setup lang="ts"></script>

<template>
  <footer class="site-footer style-1">
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
                  ><img src="../assets/images/logo.svg" alt=""
                /></NuxtLink>
              </div>
              <ul class="widget-address">
                <li>
                  <p><span>Address</span> : 77 Bis 01 Rue Ouled Sidi Chikh Mohammadia, Alger</p>
                </li>
                <li>
                  <p><span>E-mail</span> : contact@gamezonedz.com</p>
                </li>
                <li>
                  <p><span>Phone</span> : (213) 550-779-973</p>
                </li>
              </ul>

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
              ©
              <span class="current-year">{{ new Date().getFullYear() }}</span>
              <NuxtLink to="https://www.gameshopdz.com/">GameShopDZ</NuxtLink>
              Theme. All Rights Reserved.
            </p>
          </div>
          <div class="col-lg-6 col-md-12 text-end">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end"
            >
              <span class="me-3">Nous acceptons: </span>
              <img src="https://airalgerie.dz/wp-content/uploads/2022/10/algerie-post.svg" alt="" class="me-3" />
              <img src="https://airalgerie.dz/wp-content/uploads/2022/10/cib.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom End -->
  </footer>
</template>
