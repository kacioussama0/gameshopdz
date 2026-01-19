<script setup lang="ts"></script>

<template>
  <footer class="site-footer footer-dark">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="widget widget_about me-2">
              <div class="footer-logo logo-white">
                <NuxtLink to="/"
                  ><img src="../assets/images/logo-white.svg" alt=""
                /></NuxtLink>
              </div>
              <ul class="widget-address nav-inline">
                <li>
                  <p><span>E-mail</span> : example@info.com</p>
                </li>
                <li>
                  <p><span>Phone</span> : (064) 332-1233</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="widget widget_services text-lg-end">
              <ul class="nav-inline mb-3">
                <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                <li>
                  <NuxtLink to="/blog-dark-2-column-sidebar"
                    >Latest News</NuxtLink
                  >
                </li>
                <li><NuxtLink to="/faqs-2">Help Desk</NuxtLink></li>
                <li><NuxtLink to="/contact-us-1">Contact Us</NuxtLink></li>
              </ul>
              <ul class="nav-inline">
                <li>
                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="site-button-link facebook hover"
                    ><i class="fab fa-facebook-f"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="site-button-link google-plus hover"
                    ><i class="fab fa-google-plus-g"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="site-button-link linkedin hover"
                    ><i class="fab fa-linkedin-in"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="site-button-link instagram hover"
                    ><i class="fab fa-instagram"></i
                  ></NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    target="_blank"
                    class="site-button-link twitter hover"
                    ><i class="fab fa-twitter"></i
                  ></NuxtLink>
                </li>
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
        <div class="row fb-inner">
          <div class="col-lg-6 col-md-12 text-start">
            <p class="copyright-text">
              © <span class="current-year">2024</span>
              <NuxtLink to="https://www.dexignzone.com/">DexignZone</NuxtLink>
              Theme. All Rights Reserved.
            </p>
          </div>
          <div class="col-lg-6 col-md-12 text-end">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-lg-end"
            >
              <span class="me-3">We Accept: </span>
              <img src="../assets/images/footer-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom End -->
  </footer>
</template>
