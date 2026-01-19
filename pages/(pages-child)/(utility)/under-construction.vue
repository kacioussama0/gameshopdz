<script lang="ts" setup>
definePageMeta({
  layout: "utility",
});
</script>
<template>
  <section class="px-3 overflow-hidden bg-light">
    <div class="row under-construct">
      <div class="col-xxl-6 col-xl-5 col-lg-6 construct-box-1 single-page">
        <img
          src="../../../assets/images/circle-lines.png"
          class="bg-img"
          alt=""
        />
        <div class="logo">
          <NuxtLink to="/"
            ><img src="../../../assets/images/logo.png" alt=""
          /></NuxtLink>
        </div>
        <div class="dz-content">
          <div class="dz-media-title">
            <img src="../../../assets/images/vlc.png" alt="" />Oops!
          </div>
          <h2 class="dz-title">Our website in Under Construction</h2>
          <form class="dzSubscribe" action="script/mailchamp.php" method="post">
            <div class="dzSubscribeMsg"></div>
            <div class="ft-row m-b15 d-flex align-items-center">
              <input
                name="dzEmail"
                type="email"
                placeholder="Your Email Address"
                class="form-control bg-light"
              />
              <button
                name="submit"
                value="Submit"
                type="submit"
                class="btn btn-secondary"
              >
                Subscribe
              </button>
            </div>
          </form>
          <div class="dz-social-icon style-2">
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
        </div>
      </div>
      <div
        class="col-xxl-6 col-xl-7 col-lg-6 construct-box-2 px-xl-0 d-lg-block d-none"
      >
        <div class="construct-media">
          <img src="../../../assets/images/registration/pic1.png" alt="" />
        </div>
        <div class="banner-social-media style-1">
          <ul>
            <li>
              <NuxtLink
                target="_blank"
                to="https://www.instagram.com/dexignzone/"
                >Instagram</NuxtLink
              >
            </li>
            <li>
              <NuxtLink target="_blank" to="https://www.facebook.com/dexignzone"
                >Facebook</NuxtLink
              >
            </li>
            <li>
              <NuxtLink target="_blank" to="https://twitter.com/dexignzones"
                >twitter</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
