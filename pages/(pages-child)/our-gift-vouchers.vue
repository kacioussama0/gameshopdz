<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Our Gift Vouchers" />
    <!--Banner End-->

    <section class="content-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic1.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list">The perfect gift for any occasion</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic2.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list">Delight Someone with a Gift Voucher</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic3.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list"> Let Them Choose Their Perfect Gift</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic4.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list">Experience the Ultimate Gift</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic5.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list">Share the Joy with a Gift Voucher</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="gift-bx">
              <div class="gift-media">
                <img src="../../assets/images/gift-vouchers/pic6.jpg" alt="" />
              </div>
              <div class="gift-content">
                <h6 class="title"><RouterLink to="/shop-list">Gift a Voucher and Make Their Day</RouterLink></h6>
                <p class="text">Our gift cards are available in a range of denominations, so you can choose the perfect amount for any occasion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
