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
    <CommonBanner :img="bg" name="Home" title="Wishlist" />
    <!--Banner End-->

    <!-- inner page banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="table-responsive">
              <table class="table check-tbl style-1">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-item-img"><img src="../../assets/images/shop/shop-cart/pic1.jpg" alt="/" /></td>
                    <td class="product-item-name">Sophisticated Swagger Suit</td>
                    <td class="product-item-price"><span>$45.00</span><strong>$28.00</strong></td>
                    <td class="product-item-stock">In Stock</td>
                    <td class="product-item-totle">
                      <RouterLink to="/shop-cart" class="btn btn-secondary btnhover text-nowrap">Add To Cart</RouterLink>
                    </td>
                    <td class="product-item-close">
                      <RouterLink to=""><i class="ti-close"></i></RouterLink>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-item-img"><img src="../../assets/images/shop/shop-cart/pic2.jpg" alt="/" /></td>
                    <td class="product-item-name">Cozy Knit Cardigan Sweater</td>
                    <td class="product-item-price"><span>$95.00</span><strong>$56.00</strong></td>
                    <td class="product-item-stock">In Stock</td>
                    <td class="product-item-totle">
                      <RouterLink to="/shop-cart" class="btn btn-secondary btnhover text-nowrap">Add To Cart</RouterLink>
                    </td>
                    <td class="product-item-close">
                      <RouterLink to=""><i class="ti-close"></i></RouterLink>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-item-img"><img src="../../assets/images/shop/shop-cart/pic3.jpg" alt="/" /></td>
                    <td class="product-item-name">Athletic Mesh Sports Leggings</td>
                    <td class="product-item-price"><span>$56.00</span><strong>$20.00</strong></td>
                    <td class="product-item-stock">In Stock</td>
                    <td class="product-item-totle">
                      <RouterLink to="/shop-cart" class="btn btn-secondary btnhover text-nowrap">Add To Cart</RouterLink>
                    </td>
                    <td class="product-item-close">
                      <RouterLink to=""><i class="ti-close"></i></RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
