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
    <CommonBanner :img="bg" name="Home" title="Refund Requests Confirmed" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card confirmed-request text-center">
              <div class="cancel-btn m-auto mb-sm-4 mb-2"><i class="fa-solid fa-check"></i></div>
              <h2>Cancellation Confirmed</h2>
              <RouterLink class="btn btn-outline-secondary btn-lg btnhover20 m-t15" to="/account-order-details">Check Status</RouterLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
