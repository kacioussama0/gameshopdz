<script setup lang="ts">
</script>
<template>
  <footer class="site-footer footer-map footer-dark">
    <!-- Footer Top -->
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-sm-12 px-0">
          <div class="map-iframe map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1598.8926975884606!2d3.1540340000000002!3d36.727715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e526db9752f07%3A0x63b2fec8afa5c3e5!2sGame%20Shop!5e0!3m2!1sen!2sus!4v1771103548678!5m2!1sen!2sus"
                style="
                border: 0;
                width: 100%;
                min-height: 100%;
                margin-bottom: -8px;
              "
                allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-sm-12">
          <div class="footer-top m-t30">
            <div class="row">
              <div class="col-xl-6 col-md-12">
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
    </div>
    <!-- Footer Top End -->
  </footer>
</template>
