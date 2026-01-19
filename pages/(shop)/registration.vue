<script setup lang="ts">
import { ref } from "vue";
import Header from "~/components/Header.vue";

const password = ref(false);
</script>

<template>
  <header class="site-header mo-left header header-transparent">
    <Header />
  </header>
  <div class="page-content bg-light">
    <section class="px-3">
      <div class="row align-center-center">
        <div class="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
          <div class="dz-bnr-inr-entry">
            <h1>Registration</h1>
            <nav aria-label="breadcrumb text-align-start" class="breadcrumb-row">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                <li class="breadcrumb-item">Shop Registration</li>
              </ul>
            </nav>
          </div>
          <div class="registration-media">
            <img src="../../assets/images/registration/pic3.png" alt="/" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
          <div class="login-area">
            <h2 class="text-secondary text-center">Registration Now</h2>
            <p class="text-center m-b30">Welcome please registration to your account</p>
            <form>
              <div class="m-b25">
                <label class="label-title">Username</label>
                <input name="dzName" class="form-control" placeholder="Username" type="text" />
              </div>
              <div class="m-b25">
                <label class="label-title">Email Address</label>
                <input name="dzName" class="form-control" placeholder="Email Address" type="email" />
              </div>
              <div class="m-b40">
                <label class="label-title">Password</label>
                <div class="secure-input">
                  <input :type="!password ? 'password' : 'text'" name="password" class="form-control dz-password" placeholder="Password" />
                  <div :class="`show-pass ${password ? 'active' : ''}`" @click="password = !password">
                    <i class="eye-open fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <RouterLink to="/registration" class="btn btn-secondary btnhover text-uppercase me-2">Register</RouterLink>
                <RouterLink to="/login" class="btn btn-outline-secondary btnhover text-uppercase">Sign In</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
