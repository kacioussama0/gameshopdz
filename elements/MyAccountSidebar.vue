<script setup lang="ts"></script>

<template>
  <div class="col-xl-3">
    <div class="toggle-info">
      <h5 class="title mb-0">Account Navbar</h5>
      <RouterLink class="toggle-btn" to="#accountSidebar">Account Menu</RouterLink>
    </div>
    <div class="sticky-top account-sidebar-wrapper">
      <div class="account-sidebar" id="accountSidebar">
        <div class="profile-head">
          <div class="user-thumb">
            <img class="rounded-circle" src="../assets/images/profile4.jpg" alt="Susan Gardner" />
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
</template>
