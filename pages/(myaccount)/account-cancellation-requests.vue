<script lang="ts" setup>
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Cancellation Requests" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <div class="col-xl-3">
            <div class="toggle-info">
              <h5 class="title mb-0">Account Navbar</h5>
              <RouterLink class="toggle-btn" to="#accountSidebar">Account Menu</RouterLink>
            </div>
            <div class="sticky-top account-sidebar-wrapper">
              <div class="account-sidebar" id="accountSidebar">
                <div class="profile-head">
                  <div class="user-thumb">
                    <img class="rounded-circle" src="../../assets/images/profile4.jpg" alt="Susan Gardner" />
                  </div>
                  <h5 class="title mb-0">Ronald M. Spino</h5>
                  <span class="text text-primary">info@example.com</span>
                </div>
                <div class="account-nav">
                  <div class="nav-title bg-light">DASHBOARD</div>
                  <ul>
                    <li><RouterLink to="/account-dashboard">Dashboard</RouterLink></li>
                    <li><RouterLink to="/account-orders">Orders</RouterLink></li>
                    <li><RouterLink to="/account-downloads">Downloads</RouterLink></li>
                    <li><RouterLink to="/account-return-request">Return request</RouterLink></li>
                  </ul>
                  <div class="nav-title bg-light">ACCOUNT SETTINGS</div>
                  <ul class="account-info-list">
                    <li><RouterLink to="/account-profile">Profile</RouterLink></li>
                    <li><RouterLink to="/account-address">Address</RouterLink></li>
                    <li><RouterLink to="/account-shipping-methods">Shipping methods</RouterLink></li>
                    <li><RouterLink to="/account-payment-methods">Payment Methods</RouterLink></li>
                    <li><RouterLink to="/account-review">Review</RouterLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section class="col-xl-9 account-wrapper">
            <div class="row">
              <div class="col-md-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                  </div>
                  <RouterLink to="/account-return-request-detail" class="order-cancel-box">
                    <div class="cancel-media">
                      <img src="../../assets/images/shop/small/pic1.png" alt="" />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Collar Casual Shirt</h5>
                      <p class="mb-2">Quantity: <strong class="text-black">1</strong></p>
                      <h6 class="mb-0">$105</h6>
                    </div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                  </div>
                  <RouterLink to="/account-return-request-detail" class="order-cancel-box">
                    <div class="cancel-media">
                      <img src="../../assets/images/shop/small/pic2.png" alt="" />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Collar Casual Shirt</h5>
                      <p class="mb-2">Quantity: <strong class="text-black">1</strong></p>
                      <h6 class="mb-0">$304</h6>
                    </div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-lg-6 m-b30">
                <h4>Reason For Cancellation</h4>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">I have changed my mind</label>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">Expected delivery time is very long</label>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label class="form-check-label" for="flexRadioDefault3">I want to change address for the order</label>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label class="form-check-label" for="flexRadioDefault4">I want to convert my order to Prepaid</label>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label class="form-check-label" for="flexRadioDefault5">Price for the product has decreased</label>
                </div>
                <div class="custom-control custom-checkbox mb-1">
                  <input class="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                  <label class="form-check-label" for="flexRadioDefault6">I have purchased the product elsewhere</label>
                </div>
              </div>
              <div class="col-lg-6">
                <h4>Refund status</h4>
                <p>There will be no refund as the order is purchased using Cash-On-Delivery</p>
                <RouterLink to="/account-refund-requests-confirmed" class="btn btn-secondary me-xl-3 me-2 btnhover20">Submit Request</RouterLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
