<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import { IMAGES } from "@/constent/theme";
import CommonBanner from "@/elements/CommonBanner.vue";
import { reactive } from "vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";

const { data: cart, pending, error, refresh } = await useFetch('/api/wc/cart', {
  credentials: 'include',
})

const removeItem = async (key) => {
  await $fetch('/api/wc/cart/remove-item', {
    method: 'POST',
    credentials: 'include',
    body: { key }
  })
  await refresh() // refresh تاع useFetch cart
 await useWcCart().refresh()
}


const items = computed(() => cart.value?.items ?? [])
const itemsCount = computed(() => cart.value?.items_count ?? 0)
const totalPrice = computed(() => cart.value?.totals?.total_price ?? 0)


</script>

<template>


  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>


  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Accueil" title="Panier" />
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
                    <th>Produit</th>
                    <th></th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Sous-total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, ind) in items" :key="ind">
                    <td class="product-item-img"><img :src="item.images[0].thumbnail" alt="/" /></td>
                    <td class="fs-6" style="width: 10%">{{ item.name }}</td>
                    <td class="product-item-price">{{item.prices.price}} DA</td>
                    <td class="product-item-quantity">
                      <div class="quantity btn-quantity style-1 me-3">
                        <div class="input-group bootstrap-touchspin">
                          <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                          ><input type="text" :value="item.quantity" name="demo_vertical2" class="form-control" style="display: block" /><span
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
                    <td class="product-item-totle">{{item.totals.line_subtotal}} DA</td>
                    <td class="product-item-close">
                      <RouterLink to="" @click="removeItem(item.key)"><i class="ti-close"></i></RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-4">
            <h4 class="title mb15">Total</h4>
            <div class="cart-detail">
              <div class="icon-bx-wraper style-4 m-b15">
                <div class="icon-bx">
                  <i class="flaticon flaticon-delivery-truck"></i>
                </div>
                <div class="icon-content fw-bolder">
                  <div class="font-14">Le montant de la livraison comprend les frais de transport , emballage et de service</div>
                  <div class="font-14">الدفع عند الإستلام يشمل رسوم الخدمة التغليف والشحن</div>
                </div>



              </div>

              <div class=" text-center mb-3 hstack align-items-center gap-3 wow fadeInUp">

                <i class="iconly-Curved-ShieldDone text-dark"></i>
                <h5 class="mb-0">Garantie Gameshop</h5>

              </div>



              <div class=" text-center mb-3 hstack gap-3  wow fadeInUp">

                <i class="iconly-Curved-TimeSquare text-dark"></i>
                <h5 class="mb-0">Livraision Express</h5>

              </div>

              <div class=" text-center mb-3 hstack gap-3  wow fadeInUp">

                <i class="iconly-Curved-User text-dark"></i>
                <h5 class="mb-0">Service Client Dynamique</h5>

              </div>

              <div class=" text-center mb-3 hstack gap-3 wow fadeInUp">

                <i class="iconly-Curved-Star text-dark"></i>
                <h5 class="mb-0">Produits certifiés</h5>

              </div>

              <table>
                <tbody>
                  <tr class="total">
                    <td>
                      <h6 class="mb-0">Total</h6>
                    </td>
                    <td class="price">{{totalPrice}} DA</td>
                  </tr>
                </tbody>
              </table>
              <RouterLink to="/checkout" class="btn btn-secondary w-100" >Valider la commande</RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- Product END -->
    </section>
    <!-- contact area End-->
  </div>
</template>
