<script setup lang="ts">
definePageMeta({
  layout: "utility",
});
</script>

<template>
  <div class="page-content">
    <section class="overflow-hidden">
      <div class="row error-page style-2">
        <div class="col-lg-6 col-md-6 error-start-content">
          <div class="logo">
            <NuxtLink to="/"
              ><img src="../../../assets/images/logo-white.png" alt=""
            /></NuxtLink>
          </div>
          <div class="dz_error">404</div>
          <div class="dz-social-icon style-2 white">
            <ul>
              <li>
                <NuxtLink
                  to="https://www.facebook.com/dexignzone"
                  target="_blank"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="https://twitter.com/dexignzones" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://www.linkedin.com/showcase/3686700/admin/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
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
            </ul>
          </div>
          <img
            src="../../../assets/images/circle-lines3.png"
            class="bg-img"
            alt=""
          />
        </div>
        <div class="col-lg-6 col-md-6 error-end-content">
          <div class="error-inner">
            <h1 class="error-head">OOPS!</h1>
            <p class="error-para">Oh, no! This page does not exist.</p>
            <NuxtLink to="/" class="btn btn-secondary text-uppercase"
              >Go to Main Page</NuxtLink
            >
          </div>
          <img
            src="../../../assets/images/circle-lines4.png"
            class="bg-img2"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>
