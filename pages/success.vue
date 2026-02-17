<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";


const route = useRoute();
const orderId = route.query.orderId

</script>

<template>
  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>
  <div class="page-content bg-light">


    <div class="content-inner-1">
      <div class="container">

        <div class="confirmation-card account-card">
          <h1 class="text-center">
            Jouez Avec Game Shop !
          </h1>
          <div class="thumb d-flex justify-content-center align-items-center  ">
            <img src="assets/images/sucess-checkout.webp"  alt="" />
          </div>
          <div class="text-center mt-4">
            <h4 class="mb-1 text-capitalize">
              <i class="fa fa-check-circle text-success fa-1 me-1"></i>
              Merci pour votre commande !
            </h4>
            <p class="mb-2">Notre avons bien reçu votre demande.</p>

            <div class="alert alert-warning my-4">
              <h4 class="alert-heading">
                <i class="fa fa-warning"></i>
                <span class="me-1">Important</span>
                -
                <span>هام</span>
              </h4>
              <p class="mb-0">Si nous ne parvenons pas à vous joindre, la commande pourra être annulée.</p>
              <p class="mb-0">في حال عدم الرد على الاتصال، قد يتم إلغاء الطلب</p>

            </div>

<!--            <p class="mb-0">ID de commande : {{orderId}}</p>-->
            <div class="row my-5">

              <div class="col-md-4">
               <div class="card">
                 <div class="card-body">
                   <i class="iconly-Broken-TwoUsers me-2"></i>
                   <p class="mb-0">Notre équipe vous contactera bientôt pour confirmer votre commande.</p>
                 </div>
               </div>
              </div>

              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <i class="iconly-Broken-Bag me-2"></i>
                    <p class="mb-0">Votre commande sera préparé et expédié rapidement.</p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card">
                  <div class="card-body">
                    <i class="iconly-Broken-Buy me-2"></i>
                    <p class="mb-0">Le paiement se fait à la livraison (Cash on Delivery)</p>
                  </div>
                </div>
              </div>

            </div>

            <div>
              <h5>Notre équipe est là pour vous aider ? 😊</h5>

              <div class="row mt-5">
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body d-flex align-items-center justify-content-evenly">
                      <i class="fa-brands fa-3x fa-whatsapp"></i>
                      <span>
                        <h5 class="mb-0">Discuter sur WhatsApp</h5>
                        <a href="https://wa.me/213550779976" class="stretched-link"></a>
                      </span>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body d-flex align-items-center justify-content-evenly">
                      <i class="fa fa-3x fa-phone"></i>
                      <span>
                         <h5 class="mb-0">Assistance téléphonique</h5>
                         <a href="tel:+213550779976" class="stretched-link"></a>
                      </span>
                    </div>
                  </div>
                </div>



              </div>

            </div>

            <div class="mt-4 d-sm-flex gap-3 justify-content-center">
              <RouterLink to="/account-order-details" class="btn my-1 btn-secondary">Voir la commande</RouterLink>
              <RouterLink to="/" class="btn btn-outline-secondary my-1 btnhover20">Retour à l’accueil</RouterLink>
            </div>
          </div>
        </div>

        <div class="account-card order-details"  v-if="false">
          <div class="order-head">
            <div class="head-thumb">
              <img src="../../assets/images/shop/small/pic1.png" alt="" />
            </div>
            <div class="clearfix m-l20">
              <div class="badge">In Progress</div>
              <h4 class="mb-0">Numéro de commande #17493</h4>
            </div>
          </div>
          <div class="row mb-sm-4 mb-2">
            <div class="col-sm-6">
              <div class="shiping-tracker-detail">
                <span>Item</span>
                <h6 class="title">casual shirt</h6>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="shiping-tracker-detail">
                <span>Courier</span>
                <h6 class="title">casual shirt</h6>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="shiping-tracker-detail">
                <span>Start Time</span>
                <h6 class="title">05 April 2024, 15:43:23</h6>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="shiping-tracker-detail">
                <span>Address</span>
                <h6 class="title">Address 451 Wall Street UK, London</h6>
              </div>
            </div>
          </div>
          <div class="content-btn m-b15">
            <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 m-b15 btnhover20">Export Details</RouterLink>
            <RouterLink to="/product-default" class="btn btn-outline-secondary m-b15 me-xl-3 me-2 btnhover20">Request Confirmation</RouterLink>
            <RouterLink to="/account-cancellation-requests" class="btn btn-outline-danger m-b15 btnhover20">Cancel Order</RouterLink>
          </div>
          <div class="clearfix">
            <div class="dz-tabs style-3">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                    class="nav-link active"
                    id="nav-order-history-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-order-history"
                    role="tab"
                    aria-controls="nav-order-history"
                    aria-selected="true"
                >
                  Order History
                </button>
                <button class="nav-link" id="nav-Item-tab" data-bs-toggle="tab" data-bs-target="#nav-Item" role="tab" aria-controls="nav-Item" aria-selected="false">Item Details</button>
                <button class="nav-link" id="nav-courier-tab" data-bs-toggle="tab" data-bs-target="#nav-courier" role="tab" aria-controls="nav-courier" aria-selected="false">Courier</button>
                <button class="nav-link" id="nav-receiver-tab" data-bs-toggle="tab" data-bs-target="#nav-receiver" role="tab" aria-controls="nav-receiver" aria-selected="false">Receiver</button>
              </div>
            </div>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-order-history" role="tabpanel" aria-labelledby="nav-order-history-tab" tabindex="0">
                <div class="widget-timeline style-1">
                  <ul class="timeline">
                    <li>
                      <div class="timeline-badge success"></div>
                      <div class="timeline-box">
                        <RouterLink class="timeline-panel" to="">
                          <h6 class="mb-0">Product Shiped</h6>
                          <span>08/04/2024 5:23pm</span>
                        </RouterLink>
                        <p><strong>Courier Service : </strong>UPS, R. Gosling</p>
                        <p><strong>Estimated Delivery Date : </strong>09/04/2024</p>
                      </div>
                    </li>
                    <li>
                      <div class="timeline-badge primary"></div>
                      <div class="timeline-box">
                        <RouterLink class="timeline-panel" to="">
                          <h6 class="mb-0">Product Shiped</h6>
                          <span>08/04/2024 5:23pm</span>
                        </RouterLink>
                        <p><strong>Tracking Number : </strong>3409-4216-8759</p>
                        <p><strong>Warehouse : </strong>Top Shirt 12b</p>
                      </div>
                    </li>
                    <li>
                      <div class="timeline-badge"></div>
                      <div class="timeline-box">
                        <RouterLink class="timeline-panel" to="">
                          <h6 class="mb-0">Product Packaging</h6>
                          <span>09/04/2024 4:34pm</span>
                        </RouterLink>
                      </div>
                    </li>
                    <li>
                      <div class="timeline-badge"></div>
                      <div class="timeline-box">
                        <RouterLink class="timeline-panel" to="">
                          <h6 class="mb-0">Order Palced</h6>
                          <span>10/04/2024 2:36pm</span>
                        </RouterLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-Item" role="tabpanel" aria-labelledby="nav-Item-tab" tabindex="0">
                <h5>Item Details</h5>
                <div class="tracking-item">
                  <div class="tracking-product"><img src="../../assets/images/shop/small/pic1.png" alt="" /></div>
                  <div class="tracking-product-content">
                    <h6 class="title">Collar Casual Shirt</h6>
                    <small class="d-block"><strong>Price</strong> : $150</small>
                    <small class="d-block"><strong>Size</strong> : Xl</small>
                  </div>
                </div>
                <div class="tracking-item-content">
                  <span>Total Price</span>
                  <h6>+ $150</h6>
                </div>
                <div class="tracking-item-content border-bottom border-light mb-2">
                  <span class="text-success">Total Discounts</span>
                  <h6>- $55</h6>
                </div>
                <div class="tracking-item-content">
                  <span>Order Total</span>
                  <h6>$95</h6>
                </div>
              </div>
              <div class="tab-pane fade" id="nav-courier" role="tabpanel" aria-labelledby="nav-courier-tab" tabindex="0">
                <p>
                  Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commyolk augue aliquam ornare.
                </p>
              </div>
              <div class="tab-pane fade" id="nav-receiver" role="tabpanel" aria-labelledby="nav-receiver-tab" tabindex="0">
                <h5 class="text-success mb-4">Thank you Your order has been received</h5>
                <ul class="tracking-receiver">
                  <li>Order Number : <strong>#17493</strong></li>
                  <li>Date : <strong>17/04/2024, 02:34pm</strong></li>
                  <li>Total : <strong>$95</strong></li>
                  <li>Payment Methods : <strong>Cash on Delivery</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
