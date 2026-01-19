<script lang="ts" setup>
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header6 from "~/components/Header6.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header6 />
  </header>

  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Payment Methods" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <form action="#">
                <div class="row m-b30">
                  <div class="col-md-12">
                    <h4 class="title m-b15 text-capitalize">Payment Methods</h4>
                  </div>
                  <div class="col-md-6">
                    <div class="custom-control style-1">
                      <input class="form-check-input radio" type="radio" name="Methods1" id="Methods5" />
                      <label class="custom-checkbox form-check-label payment" for="Methods5">
                        <img src="../../assets/images/shop/payment/paypal.svg" alt="/" />
                        <span>
                          <span class="title">Paypal</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="custom-control style-1">
                      <input class="form-check-input radio" type="radio" name="Methods1" id="Methods6" />
                      <label class="custom-checkbox form-check-label payment" for="Methods6">
                        <img src="../../assets/images/shop/payment/debit.svg" alt="/" />
                        <span>
                          <span class="title">Credit or Debit Card</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="custom-control style-1">
                      <input class="form-check-input radio" type="radio" name="Methods1" id="Methods7" />
                      <label class="custom-checkbox form-check-label payment" for="Methods7">
                        <img src="../../assets/images/shop/payment/bank.svg" alt="/" />
                        <span>
                          <span class="title">Direct bank Transfer</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="custom-control style-1">
                      <input class="form-check-input radio" type="radio" name="Methods1" id="Methods8" />
                      <label class="custom-checkbox form-check-label payment" for="Methods8">
                        <img src="../../assets/images/shop/payment/cash.svg" alt="/" />
                        <span>
                          <span class="title">Cash on Delivery</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group m-b25">
                      <label class="label-title">Card Number</label>
                      <input type="number" name="dzNumber" class="form-control" placeholder="1234 4567 8910 1112" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group m-b25">
                      <label class="label-title">Expiry Date</label>
                      <input type="date" class="form-control" aria-label="calendar outline" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group m-b25">
                      <label class="label-title">CVC/CVV</label>
                      <input type="number" class="form-control" placeholder="1234" />
                    </div>
                  </div>
                </div>
                <RouterLink to="/account-order-confirmation" class="btn btn-secondary mt-2">Confirm Order</RouterLink>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
