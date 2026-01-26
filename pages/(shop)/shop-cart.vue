<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import { IMAGES } from "@/constent/theme";
import CommonBanner from "@/elements/CommonBanner.vue";
import { reactive } from "vue";
import Header from "~/components/Header.vue";

const cartdata = reactive([
  { qty: 1, img: IMAGES.shop_cartpic1, title: "Sophisticated Swagger Suit" },
  { qty: 1, img: IMAGES.shop_cartpic2, title: "Cozy Knit Cardigan Sweater" },
  { qty: 1, img: IMAGES.shop_cartpic3, title: "Athletic Mesh Sports Leggings" },
  { qty: 1, img: IMAGES.shop_cartpic4, title: "Plaid Wool Winter Coat" },
  { qty: 1, img: IMAGES.shop_cartpic5, title: "Satin Wrap Party Blouse" },
  { qty: 1, img: IMAGES.shop_cartpic6, title: "Suede Ankle Booties Collection" },
]);

function quantity(btntype: string, index: number) {
  switch (btntype) {
    case "plus":
      cartdata[index].qty++;
      break;
    case "minus":
      cartdata[index].qty > 1 ? cartdata[index].qty-- : cartdata[index].qty;
      break;

    default:
      break;
  }
}
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Shop Cart" />
    <!--Banner End-->

    <!-- contact area -->
    <section class="content-inner shop-account">
      <!-- Product -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="table-responsive">
              <table class="table check-tbl">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="({ img, title, qty }, ind) in cartdata" :key="ind">
                    <td class="product-item-img"><img :src="img" alt="/" /></td>
                    <td class="product-item-name">{{ title }}</td>
                    <td class="product-item-price">$40.00</td>
                    <td class="product-item-quantity">
                      <div class="quantity btn-quantity style-1 me-3">
                        <div class="input-group bootstrap-touchspin">
                          <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                          ><input type="text" :value="qty" name="demo_vertical2" class="form-control" style="display: block" /><span
                            class="input-group-addon bootstrap-touchspin-postfix"
                            style="display: none"
                          ></span
                          ><span class="input-group-btn-vertical"
                            ><button @click="quantity('plus', ind)" class="btn btn-default bootstrap-touchspin-up" type="button">
                              <i class="fa-solid fa-plus"></i></button
                            ><button @click="quantity('minus', ind)" class="btn btn-default bootstrap-touchspin-down" type="button">
                              <i class="fa-solid fa-minus"></i></button
                          ></span>
                        </div>
                      </div>
                    </td>
                    <td class="product-item-totle">$160.00</td>
                    <td class="product-item-close">
                      <RouterLink to=""><i class="ti-close"></i></RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row shop-form m-t30">
              <div class="col-md-6">
                <div class="form-group">
                  <div class="input-group mb-0">
                    <input name="dzEmail" type="text" class="form-control" placeholder="Coupon Code" />
                    <div class="input-group-addon">
                      <button name="submit" value="Submit" type="submit" class="btn coupon">Apply Coupon</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 text-end">
                <RouterLink to="/shop-cart" class="btn btn-secondary">UPDATE CART</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <h4 class="title mb15">Cart Total</h4>
            <div class="cart-detail">
              <RouterLink to="" class="btn btn-outline-secondary w-100 m-b20">Bank Offer 5% Cashback</RouterLink>
              <div class="icon-bx-wraper style-4 m-b15">
                <div class="icon-bx">
                  <i class="flaticon flaticon-ship"></i>
                </div>
                <div class="icon-content">
                  <span class="font-14">FREE</span>
                  <h6 class="dz-title">Enjoy The Product</h6>
                </div>
              </div>
              <div class="icon-bx-wraper style-4 m-b30">
                <div class="icon-bx">
                  <img src="../../assets/images/shop/shop-cart/icon-box/pic2.png" alt="/" />
                </div>
                <div class="icon-content">
                  <h6 class="dz-title">Enjoy The Product</h6>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
              <div class="save-text">
                <i class="icon feather icon-check-circle"></i>
                <span class="m-l10">You will save ₹504 on this order</span>
              </div>
              <table>
                <tbody>
                  <tr class="total">
                    <td>
                      <h6 class="mb-0">Total</h6>
                    </td>
                    <td class="price">$125.75</td>
                  </tr>
                </tbody>
              </table>
              <RouterLink to="/shop-checkout" class="btn btn-secondary w-100">Valider la commande</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Product END -->
    </section>
    <!-- contact area End-->
  </div>
</template>
