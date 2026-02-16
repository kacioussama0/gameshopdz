<script setup lang="ts">
</script>
<template>
  <footer class="site-footer footer-map footer-dark">
    <!-- Footer Top -->
    <div class="container">
      <div class="row">


          <div class="footer-top m-t30">
            <div class="row">
              <div class="col-xl-3 col-md-12">
                <div class="widget widget_about">
                  <div class="footer-logo logo-white">
                    <NuxtLink to="/"
                    ><img src="../assets/images/logo-white.svg" alt=""
                    /></NuxtLink>
                  </div>
                  <p>Magasin spécialisé dans la vente, achat, échange et réparation de jeux video en Algérie.</p>
                </div>
              </div>
              <div class="col-md-8 col-lg-4 col-sm-12">
                <div class="widget widget_about">
                  <h5 class="footer-title">Le Magazin</h5>
                  <ul class="widget-address">
                    <li>
                      <p><span>Address</span> : 77 Bis 01 Rue Ouled Sidi Chikh Mohammadia, Alger</p>
                    </li>
                    <li>
                      <p><span>E-mail</span> : contact@gamezonedz.com</p>
                    </li>
                    <li>
                      <p><span>Phone</span> : (213) 550-779-973</p>
                    </li>
                  </ul>

                </div>
              </div>
              <div class="col-lg-5">
                <div class="">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1598.8926975884606!2d3.1540340000000002!3d36.727715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e526db9752f07%3A0x63b2fec8afa5c3e5!2sGame%20Shop!5e0!3m2!1sen!2sus!4v1771103548678!5m2!1sen!2sus"
                      style="
                border: 0;
                height: 250px;
                margin-bottom: -8px;
              "
                      class=" w-100"
                      allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <div class="fb-inner">
              <div class="text-start">
                <p class="copyright-text">
                  ©
                  <span class="current-year">{{ new Date().getFullYear() }}</span>
                  <NuxtLink to="https://www.gameshopdz.com/" class="mx-1">GameShopDZ</NuxtLink>
                  Tous les droits sont réservés.
                </p>
              </div>
            </div>
          </div>
          <!-- Footer Bottom End -->
        </div>

    </div>

    <!-- Footer Top End -->

    <section class="position-fixed bottom-0 end-0 w-100 border-top d-block d-lg-none bg-white z-3 ">
      <div class="d-flex justify-content-between  align-items-center container w-100 py-3">
        <NuxtLink to="/" class="vstack text-dark align-items-center"><i class="iconly-Curved-Home text-dark"></i>Accueil</NuxtLink>
        <NuxtLink to="/shop" class="vstack text-dark align-items-center"><i class="iconly-Curved-Search text-dark"></i>Recharche</NuxtLink>
        <NuxtLink to="/contact" class="vstack text-dark align-items-center"><i class="iconly-Curved-Bag2 text-dark "></i>Shop</NuxtLink>
        <NuxtLink to="/contact" class="vstack text-dark align-items-center"><i class="iconly-Curved-Call text-dark "></i>Contact</NuxtLink>
      </div>
    </section>

  </footer>
</template>
