<script lang="ts" setup>
import { IMAGES } from "@/constent/theme";
import MultiRangeSlide from "@/elements/MultiRangeSlide.vue";
import { reactive, ref } from "vue";
import { RouterLink } from "vue-router";

const cartItems = reactive([
  { img: IMAGES.shop_cartpic1, name: "Sophisticated Swagger Suit", price: "50.00", qty: 1 },
  { img: IMAGES.shop_cartpic2, name: "Cozy Knit Cardigan Sweater", price: "40.00", qty: 1 },
  { img: IMAGES.shop_cartpic3, name: "Athletic Mesh Sports Leggings", price: "65.00", qty: 1 },
]);

function quantity(ind: number, category: string) {
  switch (category) {
    case "plus":
      cartItems[ind].qty++;
      break;
    case "minus":
      cartItems[ind].qty > 1 ? cartItems[ind].qty-- : cartItems[ind].qty;
      break;

    default:
      break;
  }
}

function removeItems(ind: number) {
  document.querySelectorAll(".cart_items")[ind].remove();
}
</script>

<template>
  <div class="offcanvas dz-offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
    <div class="offcanvas-body">
      <div class="product-description">
        <div class="dz-tabs">
          <ul class="nav nav-tabs center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="shopping-cart"
                data-bs-toggle="tab"
                data-bs-target="#shopping-cart-pane"
                type="button"
                role="tab"
                aria-controls="shopping-cart-pane"
                aria-selected="true"
              >
                Shopping Cart
                <span class="badge badge-light">5</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="wishlist" data-bs-toggle="tab" data-bs-target="#wishlist-pane" type="button" role="tab" aria-controls="wishlist-pane" aria-selected="false" tabindex="-1">
                Wishlist
                <span class="badge badge-light">2</span>
              </button>
            </li>
          </ul>
          <div class="tab-content pt-4" id="dz-shopcart-sidebar">
            <div class="tab-pane fade show active" id="shopping-cart-pane" role="tabpanel" aria-labelledby="shopping-cart" tabindex="0">
              <div class="shop-sidebar-cart">
                <ul class="sidebar-cart-list">
                  <li v-for="({ img, name, price, qty }, ind) in cartItems" :key="ind">
                    <div class="cart-widget">
                      <div class="dz-media me-3">
                        <img :src="img" alt="" />
                      </div>
                      <div class="cart-content">
                        <h6 class="title">
                          <RouterLink to="/product-thumbnail">{{ name }}</RouterLink>
                        </h6>
                        <div class="d-flex align-items-center">
                          <div class="btn-quantity light quantity-sm me-3">
                            <div class="input-group bootstrap-touchspin">
                              <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                              ><input type="text" :value="qty" name="demo_vertical2" class="form-control" style="display: block" /><span
                                class="input-group-addon bootstrap-touchspin-postfix"
                                style="display: none"
                              ></span>
                              <span class="input-group-btn-vertical"
                                ><button @click="quantity(ind, 'plus')" class="btn btn-default bootstrap-touchspin-up" type="button">
                                  <i class="fa-solid fa-plus"></i></button
                                ><button @click="quantity(ind, 'minus')" class="btn btn-default bootstrap-touchspin-down" type="button">
                                  <i class="fa-solid fa-minus"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                          <h6 class="dz-price mb-0">${{ price }}</h6>
                        </div>
                      </div>
                      <RouterLink to="" class="dz-close">
                        <i class="ti-close"></i>
                      </RouterLink>
                    </div>
                  </li>
                </ul>
                <div class="cart-total">
                  <h5 class="mb-0">Subtotal:</h5>
                  <h5 class="mb-0">300.00$</h5>
                </div>
                <div class="mt-auto">
                  <div class="shipping-time">
                    <div class="dz-icon">
                      <i class="flaticon flaticon-ship"></i>
                    </div>
                    <div class="shipping-content">
                      <h6 class="title pe-4">Congratulations , you've got free shipping!</h6>
                      <div class="progress">
                        <div class="progress-bar progress-animated border-0" style="width: 75%" role="progressbar">
                          <span class="sr-only">75% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <RouterLink to="/shop-checkout" class="btn btn-outline-secondary btn-block m-b20">Checkout</RouterLink>
                  <RouterLink to="/shop-cart" class="btn btn-secondary btn-block">View Cart</RouterLink>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="wishlist-pane" role="tabpanel" aria-labelledby="wishlist" tabindex="0">
              <div class="shop-sidebar-cart">
                <ul class="sidebar-cart-list">
                  <li v-for="({ img, name, price }, ind) in cartItems" :key="ind" class="cart_items">
                    <div class="cart-widget">
                      <div class="dz-media me-3">
                        <img :src="img" alt="" />
                      </div>
                      <div class="cart-content">
                        <h6 class="title">
                          <RouterLink to="/product-thumbnail">{{ price }}</RouterLink>
                        </h6>
                        <div class="d-flex align-items-center">
                          <h6 class="dz-price mb-0">${{ name }}</h6>
                        </div>
                      </div>
                      <RouterLink to="" class="dz-close" @click="removeItems(ind)">
                        <i class="ti-close"></i>
                      </RouterLink>
                    </div>
                  </li>
                </ul>
                <div class="mt-auto">
                  <RouterLink to="/shop-wishlist" class="btn btn-secondary btn-block">Check Your Favourite</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offcanvas dz-offcanvas offcanvas-end" tabindex="-1" id="offcanvasLeft" aria-modal="true" role="dialog">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
    <div class="offcanvas-body">
      <div class="product-description">
        <div class="widget widget_search">
          <div class="form-group">
            <div class="input-group">
              <input name="dzSearch" required type="search" class="form-control" placeholder="Search Product" />
              <div class="input-group-addon">
                <button name="submit" value="Submit" type="submit" class="btn">
                  <i class="icon feather icon-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="widget">
          <h6 class="widget-title">Price</h6>
          <div class="price-slide range-slider">
            <div class="price">
              <div class="range-slider style-1"><MultiRangeSlide /></div>
            </div>
          </div>
        </div>
        <div class="widget">
          <h6 class="widget-title">Color</h6>
          <div class="d-flex align-items-center flex-wrap color-filter ps-2">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="#000000" aria-label="..." checked />
              <span style="background-color: rgb(0, 0, 0)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" value="#9BD1FF" aria-label="..." />
              <span style="background-color: rgb(155, 209, 255)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3" value="#21B290" aria-label="..." />
              <span style="background-color: rgb(33, 178, 144)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel4" value="#FEC4C4" aria-label="..." />
              <span style="background-color: rgb(254, 196, 196)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel5" value="#FF7354" aria-label="..." />
              <span style="background-color: rgb(255, 115, 84)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel6" value="#51EDC8" aria-label="..." />
              <span style="background-color: rgb(81, 237, 200)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel7" value="#B77CF3" aria-label="..." />
              <span style="background-color: rgb(183, 124, 243)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel8" value="#FF4A76" aria-label="..." />
              <span style="background-color: rgb(255, 74, 118)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel9" value="#3E68FF" aria-label="..." />
              <span style="background-color: rgb(62, 104, 255)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabe20" value="#7BEF68" aria-label="..." />
              <span style="background-color: rgb(123, 239, 104)"></span>
            </div>
          </div>
        </div>

        <div class="widget">
          <h6 class="widget-title">Size</h6>
          <div class="btn-group product-size">
            <input type="radio" class="btn-check" name="btnradio1" id="btnradio11" />
            <label class="btn" for="btnradio11">4</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio21" />
            <label class="btn" for="btnradio21">6</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio31" />
            <label class="btn" for="btnradio31">8</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio41" />
            <label class="btn" for="btnradio41">10</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio51" />
            <label class="btn" for="btnradio51">12</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio61" />
            <label class="btn" for="btnradio61">14</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio71" />
            <label class="btn" for="btnradio71">16</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio81" />
            <label class="btn" for="btnradio81">18</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio91" />
            <label class="btn" for="btnradio91">20</label>
          </div>
        </div>
        <div class="widget widget_categories">
          <h6 class="widget-title">Category</h6>
          <ul>
            <li class="cat-item cat-item-26"><RouterLink to="/blog-category">Dresses</RouterLink> (10)</li>
            <li class="cat-item cat-item-36"><RouterLink to="/blog-category">Top &amp; Blouses</RouterLink> (5)</li>
            <li class="cat-item cat-item-43"><RouterLink to="/blog-category">Boots</RouterLink> (17)</li>
            <li class="cat-item cat-item-27"><RouterLink to="/blog-category">Jewelry</RouterLink> (13)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Makeup</RouterLink> (06)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Fragrances</RouterLink> (17)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Shaving &amp; Grooming</RouterLink> (13)</li>
            <li class="cat-item cat-item-43"><RouterLink to="/blog-category">Jacket</RouterLink> (06)</li>
            <li class="cat-item cat-item-36"><RouterLink to="/blog-category">Coat</RouterLink> (22)</li>
          </ul>
        </div>

        <div class="widget widget_tag_cloud">
          <h6 class="widget-title">Tags</h6>
          <div class="tagcloud">
            <RouterLink to="/blog-tag">Vintage </RouterLink>
            <RouterLink to="/blog-tag">Wedding</RouterLink>
            <RouterLink to="/blog-tag">Cotton</RouterLink>
            <RouterLink to="/blog-tag">Linen</RouterLink>
            <RouterLink to="/blog-tag">Navy</RouterLink>
            <RouterLink to="/blog-tag">Urban</RouterLink>
            <RouterLink to="/blog-tag">Business Meeting</RouterLink>
            <RouterLink to="/blog-tag">Formal</RouterLink>
          </div>
        </div>
        <RouterLink to="" class="btn btn-sm font-14 btn-secondary btn-sharp">RESET</RouterLink>
      </div>
    </div>
  </div>
</template>
