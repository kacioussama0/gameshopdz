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
    <CommonBanner :img="bg" name="Home" title="Shipping Methods" />
    <!--Banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <form class="row g-3">
                <div class="col-md-12">
                  <h4 class="title m-b15 text-capitalize">Shipping Methods</h4>
                </div>
                <div class="col-lg-6">
                  <div class="custom-control style-1 style-thumb mb-0">
                    <input class="form-check-input radio" type="radio" name="Methods1" id="Methods1" />
                    <label class="custom-checkbox form-check-label" for="Methods1">
                      <img class="thumb" src="../../assets/images/shop/payment/fedex.svg" alt="/" />
                      <span>
                        <span class="title">FedEx,</span>
                        <span class="text">Delivery, Tomorrow</span>
                      </span>
                      <span class="price">$0.99</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="custom-control style-1 style-thumb mb-0">
                    <input class="form-check-input radio" type="radio" name="Methods1" id="Methods2" />
                    <label class="custom-checkbox form-check-label" for="Methods2">
                      <img class="thumb" src="../../assets/images/shop/payment/american.svg" alt="/" />
                      <span>
                        <span class="title">American</span>
                        <span class="text">Delivery, Today</span>
                      </span>
                      <span class="price">$0.99</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="custom-control style-1 style-thumb mb-0">
                    <input class="form-check-input radio" type="radio" name="Methods1" id="Methods3" />
                    <label class="custom-checkbox form-check-label" for="Methods3">
                      <img class="thumb" src="../../assets/images/shop/payment/dhl.svg" alt="/" />
                      <span>
                        <span class="title">DHL Express</span>
                        <span class="text">Delivery, Today</span>
                      </span>
                      <span class="price">$0.99</span>
                    </label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="custom-control style-1 style-thumb mb-0">
                    <input class="form-check-input radio" type="radio" name="Methods1" id="Methods4" />
                    <label class="custom-checkbox form-check-label" for="Methods4">
                      <img class="thumb" src="../../assets/images/shop/payment/retrieve.svg" alt="/" />
                      <span>
                        <span class="title">DHL Express</span>
                        <span class="text">Delivery, Today</span>
                      </span>
                      <span class="price">$0.99</span>
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <RouterLink to="/account-payment-methods" class="btn btn-secondary mt-2">Continue to payment</RouterLink>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
