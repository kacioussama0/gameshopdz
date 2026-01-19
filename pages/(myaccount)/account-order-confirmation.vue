<script setup lang="ts">
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
    <CommonBanner :img="bg" name="Home" title="Order Confirmation" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="confirmation-card account-card">
              <div class="thumb">
                <img src="../../assets/images/confirmation.png" alt="" />
              </div>
              <div class="text-center mt-4">
                <h4 class="mb-3 text-capitalize">Your Order Is Completed !</h4>
                <p class="mb-2">You will receive an order confirmation email with details of your order.</p>
                <p class="mb-0">Order ID: 267676GHERT105467</p>
                <div class="mt-4 d-sm-flex gap-3 justify-content-center">
                  <RouterLink to="/account-order-details" class="btn my-1 btn-secondary">View Order </RouterLink>
                  <RouterLink to="/" class="btn btn-outline-secondary my-1 btnhover20">Back To Home </RouterLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
