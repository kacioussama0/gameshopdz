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
    <CommonBanner :img="bg" name="Home" title="Downloads" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <div class="table-responsive download-table">
                <table class="table check-tbl">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="product-item-price">1</td>
                      <td class="product-item-img"><img src="../../assets/images/shop/small/pic1.png" alt="/" /></td>
                      <td class="product-item-name"><h6>Collar Casual Shirt</h6></td>
                      <td><RouterLink to="/product-default" class="btn btn-md btn-outline-secondary btnhover20">Download</RouterLink></td>
                    </tr>
                    <tr>
                      <td class="product-item-price">2</td>
                      <td class="product-item-img"><img src="../../assets/images/shop/small/pic2.png" alt="/" /></td>
                      <td class="product-item-name"><h6>Collar Tranding Shirt</h6></td>
                      <td><RouterLink to="/product-default" class="btn btn-md btn-outline-secondary btnhover20">Download</RouterLink></td>
                    </tr>
                    <tr>
                      <td class="product-item-price">3</td>
                      <td class="product-item-img"><img src="../../assets/images/shop/small/pic1.png" alt="/" /></td>
                      <td class="product-item-name"><h6>Casual Full Shirt</h6></td>
                      <td><RouterLink to="/product-default" class="btn btn-md btn-outline-secondary btnhover20">Download</RouterLink></td>
                    </tr>
                    <tr>
                      <td class="product-item-price">4</td>
                      <td class="product-item-img"><img src="../../assets/images/shop/small/pic2.png" alt="/" /></td>
                      <td class="product-item-name"><h6>Tranding Full Shirt</h6></td>
                      <td><RouterLink to="/product-default" class="btn btn-md btn-outline-secondary btnhover20">Download</RouterLink></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
