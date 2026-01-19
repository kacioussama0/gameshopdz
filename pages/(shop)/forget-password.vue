<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header header-transparent">
    <Header />
  </header>
  <div class="page-content bg-light">
    <section class="px-3">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
          <div class="dz-bnr-inr-entry">
            <h1>Forgot Password</h1>
            <nav aria-label="breadcrumb text-align-start" class="breadcrumb-row">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                <li class="breadcrumb-item">Forgot Password</li>
              </ul>
            </nav>
          </div>
          <div class="registration-media">
            <img src="../../assets/images/registration/pic3.png" alt="/" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 end-side-content justify-content-center">
          <div class="login-area">
            <h2 class="text-secondary text-center">Forgot Password</h2>
            <p class="text-center m-b25">Enter your e-mail address below to reset your password.</p>
            <form>
              <div class="m-b30">
                <label class="label-title">Email Address</label>
                <input name="dzName" class="form-control" placeholder="Email Address" type="email" />
              </div>
              <div class="d-flex justify-content-between">
                <RouterLink to="/login" class="btn btn-outline-secondary btnhover text-uppercase">Back</RouterLink>
                <RouterLink to="" class="btn btn-secondary btnhover text-uppercase submit-btn form-toggle">Submit</RouterLink>
              </div>
            </form>
          </div>
          <div class="forget-password-area">
            <h2 class="text-secondary text-center">Reset Password</h2>
            <p class="text-center m-b25">Almost done, enter your new password and you're all set to go</p>
            <form>
              <div class="m-b30">
                <label class="label-title">New Password</label>
                <div class="secure-input">
                  <input type="password" name="password" class="form-control dz-password" placeholder="New Password" />
                  <div class="show-pass">
                    <i class="eye-open fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="m-b30">
                <label class="label-title">Confirm Password</label>
                <div class="secure-input">
                  <input type="password" name="password" class="form-control dz-password" placeholder="Confirm Password" />
                  <div class="show-pass">
                    <i class="eye-open fa-regular fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <RouterLink to="/account-dashboard" class="btn btn-secondary btnhover text-uppercase sign-btn">Reset Password</RouterLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
