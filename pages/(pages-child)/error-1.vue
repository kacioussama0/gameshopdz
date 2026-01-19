<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header border-bootom">
    <Header />
  </header>
  <div class="page-content bg-light">
    <section class="content-inner-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10 col-md-12">
            <div class="error-page style-1">
              <div class="dz-error-media">
                <img src="../../assets/images/pic-404.png" alt="" />
              </div>
              <div class="error-inner">
                <h1 class="dz_error">404</h1>
                <p class="error-head">Oh, no! This page does not exist.</p>
                <RouterLink to="/" class="btn btn-secondary text-uppercase">Go to Main Page</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
