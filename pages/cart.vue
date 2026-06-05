<script setup lang="ts">
  import Header3 from "~/components/Header3.vue"

  const {
    cart,
    removeItem,
    updateItem,
    totalPrice
  } = useLocalCart()

  const items = computed(() => cart.value)

  const itemsCount = computed(() =>
      cart.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  useHead({
    title: 'Gameshopdz - Panier',
    meta: [
      {
        name: 'description',
        content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie.'
      }
    ]
  })

  const increaseQuantity = (item) => {
    updateItem(item.id, item.quantity + 1)
  }

  const decreaseQuantity = (item) => {
    updateItem(item.id, item.quantity - 1)
  }

</script>

<template>


  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>


  <div class="page-content bg-light">



    <!-- contact area -->
    <section class="content-inner shop-account">
      <!-- Product -->
      <div class="container">


        <span class="d-flex align-items-center mb-5">
          <img src="/assets/images/astro-cart.png" alt="" class="me-3" width="80px">
          <h1>
            Panier
          </h1>
        </span>


        <div class="row" v-if="items.length">
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
                <tr v-for="item in items" :key="item.id">
                  <td class="product-item-img">
                    <img :src="item.image" alt="/" />
                  </td>

                  <td class="fs-6" style="width: 10%">
                    {{ item.name }}

                    <span v-if="item.type === 'variation'">
      <span v-for="v in item.variation" :key="v.attribute">
        | {{ v.attribute }} : {{ v.value }}
      </span>
    </span>
                  </td>

                  <td class="product-item-price">
                    {{ item.price }} DA
                  </td>


                  <td class="product-item-quantity">
                    <div class="quantity btn-quantity style-1 me-3">
                      <div class="input-group bootstrap-touchspin">
                          <span class="input-group-addon bootstrap-touchspin-prefix" style="display: none"></span
                          ><input type="text" :value="item.quantity" readonly name="demo_vertical2" class="form-control" style="display: block" /><span
                          class="input-group-addon bootstrap-touchspin-postfix"
                          style="display: none"
                      ></span
                      ><span class="input-group-btn-vertical"
                      ><button class="btn btn-default bootstrap-touchspin-up" type="button" @click="updateItem(item.id, item.quantity + 1)">
                              <i class="fa-solid fa-plus"></i></button
                      ><button @click="updateItem(item.id, item.quantity - 1)" class="btn btn-default bootstrap-touchspin-down" type="button">
                              <i class="fa-solid fa-minus"></i></button
                      ></span>
                      </div>
                    </div>
                  </td>



                  <td class="product-item-totle">
                    {{ Number(item.price) * item.quantity }} DA
                  </td>

                  <td class="product-item-close">
                    <RouterLink to="" @click="removeItem(item.id)"><i class="ti-close"></i></RouterLink>
                  </td>


                </tr>
                </tbody>
              </table>



            </div>
          </div>
          <div class="col-lg-4">

            <div class="cart-detail">

              <h3 class="title m-b15">Total</h3>

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

              <RouterLink to="/checkout" class="btn btn-lg btn-secondary btn-block new-gradient">
                Finaliser Ma Commande
                <i class="ti-arrow-circle-right ms-2" />
              </RouterLink>

            </div>
          </div>
        </div>

        <div class="card shadom-sm" v-else>
          <div class="card-body text-center py-5">
            <i class="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>

            <h3 class="mb-2">Votre panier est vide</h3>

            <p class="text-muted mb-4">
              Découvrez nos produits et ajoutez vos articles préférés à votre panier.
            </p>

            <p class="text-muted mb-4">
              سلة التسوق فارغة، ابدأ بإضافة المنتجات التي ترغب في شرائها.
            </p>

            <NuxtLink to="/shop" class="btn btn-secondary">
              Commencer mes achats
            </NuxtLink>
          </div>
        </div>

      </div>
      <!-- Product END -->
    </section>
    <!-- contact area End-->
  </div>
</template>
