<script setup lang="ts">
const cart = useState<any[]>('local_cart', () => [])

const loadCart = () => {
  if (process.client) {
    cart.value = JSON.parse(localStorage.getItem('cart') || '[]')
  }
}

const saveCart = () => {
  if (process.client) {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
}

onMounted(loadCart)

const items = computed(() => cart.value)

const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => {
      return sum + Number(item.price || item.prices?.price || 0) * item.quantity
    }, 0)
)

const removeItem = (id: number) => {
  cart.value = cart.value.filter(item => item.id !== id)
  saveCart()
}

const updateQuantity = (id: number, quantity: number) => {
  if (quantity <= 0) {
    removeItem(id)
    return
  }

  const item = cart.value.find(item => item.id === id)
  if (item) {
    item.quantity = quantity
    saveCart()
  }
}
</script>

<template>
  <div class="offcanvas dz-offcanvas offcanvas offcanvas-end"  data-bs-scroll="true" tabindex="-1" id="offcanvasRight">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
    <div class="offcanvas-body">
      <div class="product-description" v-if="items.length">
        <div class="tab-content pt-4" id="dz-shopcart-sidebar">
          <div class="tab-pane fade show active" id="shopping-cart-pane" role="tabpanel" aria-labelledby="shopping-cart" tabindex="0">
            <div class="shop-sidebar-cart">
              <ul class="sidebar-cart-list" >
                <li v-for="item in items" :key="item.id">
                  <div class="cart-widget">
                    <div class="dz-media me-3">
                      <img :src="item.image" alt="" />
                    </div>
                    <div class="cart-content">
                      <h6 class="title">
                        <RouterLink to="/product-thumbnail">
                          {{ item.name }}
                          <span v-if="item.type === 'variation'">
                            <span v-for="v in item.variation" :key="v.attribute">
                              | {{ v.attribute }} : {{ v.value }}
                            </span>
                          </span>
                        </RouterLink>
                      </h6>
                      <div class="d-flex align-items-center">
                        <div class="btn-quantity light quantity-sm me-3">
                          <div class="input-group bootstrap-touchspin">
                              <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                              ><input type="text" :value="item.quantity" name="demo_vertical2" class="form-control" style="display: block" /><span
                              class="input-group-addon bootstrap-touchspin-postfix"
                              style="display: none"
                          ></span>
                            <span class="input-group-btn-vertical">
                              <button @click="updateQuantity(item.id, item.quantity + 1)" class="btn btn-default bootstrap-touchspin-up" type="button">
                                  <i class="fa-solid fa-plus"></i>
                              </button>

                              <button @click="updateQuantity(item.id, item.quantity - 1)" class="btn btn-default bootstrap-touchspin-down" type="button">
                                <i class="fa-solid fa-minus"></i>
                              </button>

                              </span>
                          </div>
                        </div>
                        <h6 class="dz-price mb-0">{{ item.price }} DA</h6>



                      </div>
                    </div>
                    <NuxtLink type="button" @click="removeItem(item.id)">
                      <i class="ti-close"></i>
                    </NuxtLink>
                  </div>
                </li>
              </ul>




              <div class="cart-total" v-if="totalPrice > 0">
                <h5 class="mb-0">Sous-total:</h5>
                <h5 class="mb-0">{{totalPrice}} DA</h5>
              </div>

              <div class="spinner-border text-dark mx-auto" role="status" v-if="pending">
                <span class="sr-only">Loading...</span>
              </div>

              <div class="mt-auto">

                <i class="fa fa-truck-fast fa-3x text-dark mb-4"></i>

                <p class="mb-0">
                  Payer à la livraison. Le prix de l’expédition (Livraison) compte les frais de livraison et services.
                </p>

                <p class="mb-5">
                  الدفع عند التسليم. سعر الشحن (التوصيل) يشمل التوصيل والخدمة
                </p>

                <RouterLink to="/cart" class="btn  btn-outline-secondary  btn-block m-b20">
                  Voir Mon Panier
                  <i class="ti-shopping-cart ms-2"></i>
                </RouterLink>
                <RouterLink to="/checkout" class="btn btn-lg btn-secondary btn-block new-gradient">
                  Finaliser Ma Commande
                  <i class="ti-arrow-circle-right ms-2" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card" v-if="!items.length">

        <div  class="text-center py-5 ">
          <i class="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>

          <h5 class="mb-2">Votre panier est vide</h5>

          <p class="text-muted mb-4">
            Ajoutez des produits à votre panier pour continuer vos achats.
          </p>

          <p class="text-muted mb-4">
            سلة التسوق فارغة، أضف منتجات للمتابعة.
          </p>

          <button
              class="btn btn-secondary"
              data-bs-dismiss="offcanvas"
              @click="$router.push('/shop')"
          >
            Continuer vos achats
          </button>


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
