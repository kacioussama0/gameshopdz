<script setup lang="ts">
</script>

<template>
  <footer class="site-footer style-1">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="widget widget_about me-2">
              <div class="footer-logo logo-white">
                <NuxtLink to="/"
                  ><img src="../assets/images/logo.svg" alt=""
                /></NuxtLink>
              </div>

              <p>
                Magasin spécialisé dans la vente, achat, échange et réparation de jeux video en Algérie.


              </p>


            </div>
          </div>
          <div
            class="col-xl-3 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
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
    </div>
    <!-- Footer Top End -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row fb-inner wow fadeInUp" data-wow-delay="0.1s">
          <div class="col-lg-6 col-md-12 text-start">
            <p class="copyright-text">
              ©
              <span class="current-year">{{ new Date().getFullYear() }}</span>
              <NuxtLink to="https://www.gameshopdz.com/" class="mx-1">GameShopDZ</NuxtLink>
               Tous les droits sont réservés.
            </p>
          </div>
          <div class="col-lg-6 col-md-12 text-end">
            <div
              class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end"
            >
              <span class="me-3">Nous acceptons: </span>
              <img src="https://airalgerie.dz/wp-content/uploads/2022/10/algerie-post.svg" alt="" class="me-3" />
              <img src="https://airalgerie.dz/wp-content/uploads/2022/10/cib.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom End -->
  </footer>
</template>
