<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";


const route = useRoute();
const orderId = route.query.orderId


useHead({
  title: 'Gameshopdz - Merci Pour Votre Commande',
  meta: [
    { name: 'description', content: 'Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.' },
  ],
})

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
            <img src="../assets/images/sucess-checkout.webp"  alt="" />
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

      </div>
    </div>
  </div>
</template>
