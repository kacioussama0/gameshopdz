<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Shop Style 2" />
    <!--Banner End-->

    <section class="content-inner-1">
      <div class="container">
        <div class="row m-auto gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3 justify-content-center">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b50 m-sm-b0 m-b70">
            <div class="shop-card style-2">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/shart/1.png" alt="image" />
              </div>
              <div class="dz-content">
                <div>
                  <span class="sale-title">up to 79% off</span>
                  <h5 class="title"><RouterLink to="/shop-list">Printed Spread Collar Casual Shirt</RouterLink></h5>
                </div>
                <h6 class="price">
                  $80
                  <del>$95</del>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b50 m-sm-b0 m-b70">
            <div class="shop-card style-2">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/shart/2.png" alt="image" />
              </div>
              <div class="dz-content">
                <div>
                  <span class="sale-title">up to 79% off</span>
                  <h5 class="title"><RouterLink to="/shop-list">Checkered Slim Collar Casual Shirt</RouterLink></h5>
                </div>
                <h6 class="price">
                  $80
                  <del>$95</del>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b50 m-sm-b0 m-b70">
            <div class="shop-card style-2">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/shart/3.png" alt="image" />
              </div>
              <div class="dz-content">
                <div>
                  <span class="sale-title">up to 79% off</span>
                  <h5 class="title"><RouterLink to="/shop-list">Solid Cut Away Collar Casual Shirt</RouterLink></h5>
                </div>
                <h6 class="price">
                  $80
                  <del>$95</del>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b50 m-sm-b0 m-b70">
            <div class="shop-card style-2">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/shart/4.png" alt="image" />
              </div>
              <div class="dz-content">
                <div>
                  <span class="sale-title">up to 79% off</span>
                  <h5 class="title"><RouterLink to="/shop-list">Printed Spread Collar Casual Shirt</RouterLink></h5>
                </div>
                <h6 class="price">
                  $80
                  <del>$95</del>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b50 m-sm-b0 m-b70">
            <div class="shop-card style-2">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/shart/5.png" alt="image" />
              </div>
              <div class="dz-content">
                <div>
                  <span class="sale-title">up to 79% off</span>
                  <h5 class="title"><RouterLink to="/shop-list">Checkered Spread Collar Casual Shirt</RouterLink></h5>
                </div>
                <h6 class="price">
                  $80
                  <del>$95</del>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
