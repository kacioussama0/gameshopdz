<script setup lang="ts">
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
    <CommonBanner :img="bg" name="Home" title="Return Request" />
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
              <div class="col-12 m-b30">
                <h3 class="mb-0">REQUEST FOR PRODUCT RETURN (2)</h3>
              </div>
              <div class="col-lg-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                    <RouterLink to="" class="btn-link text-underline text-success">Return Made</RouterLink>
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
              <div class="col-lg-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                    <RouterLink to="" class="btn-link text-underline text-priamry">Request Submited</RouterLink>
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
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                    <RouterLink to="" class="btn-link text-underline text-priamry">Request Submited</RouterLink>
                  </div>
                  <RouterLink to="/account-return-request-detail" class="order-cancel-box">
                    <div class="cancel-media">
                      <img src="../../assets/images/shop/small/pic1.png" alt="" />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Classic Denim Skinny Jeans</h5>
                      <p class="mb-2">Quantity: <strong class="text-black">1</strong></p>
                      <h6 class="mb-0">$657</h6>
                    </div>
                  </RouterLink>
                </div>
              </div>
              <div class="col-lg-6 m-b30">
                <div class="order-cancel-card">
                  <div class="order-head">
                    <h6 class="mb-0">Request No: <span class="text-primary">#1374837</span></h6>
                    <RouterLink to="" class="btn-link text-underline text-priamry">Request Submited</RouterLink>
                  </div>
                  <RouterLink to="/account-return-request-detail" class="order-cancel-box">
                    <div class="cancel-media">
                      <img src="../../assets/images/shop/small/pic2.png" alt="" />
                    </div>
                    <div class="order-cancel-content">
                      <span>March 21, 2024</span>
                      <h5 class="title mb-0">Plaid Wool Winter Coat</h5>
                      <p class="mb-2">Quantity: <strong class="text-black">1</strong></p>
                      <h6 class="mb-0">$245</h6>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
