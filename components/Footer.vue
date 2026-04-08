<script setup lang="ts">

const { itemsCount} = useWcCart()

</script>
<template>
  <footer class="site-footer footer-map new-gradient footer-dark">
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
                      <p><span class="iconly-Curved-Location"></span> 77 Bis 01 Rue Ouled Sidi Chikh Mohammadia, Alger</p>
                    </li>

                    <li>
                      <p><span class="iconly-Curved-Call"></span> (213) 550-779-973</p>
                    </li>
                    <li>
                      <p><span class="iconly-Curved-Call"></span> (213) 793-333-023</p>
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
            <div class="fb-inner d-flex justify-content-between align-items-center flex-wrap">

                <p class="copyright-text text-white">
                  ©
                  <span class="current-year">{{ new Date().getFullYear() }}</span>
                  GameshopDZ
                  Tous les droits sont réservés.
                </p>

                <ul class="hstack gap-4 align-items-center justify-content-center ">
                <li>
                  <NuxtLink
                      class="fa-brands fa-2x fa-facebook"
                      target="_blank"
                      to="https://www.facebook.com/gameshopdz2"
                  >

                  </NuxtLink>
                </li>

                <li>
                  <NuxtLink
                      class="fa-brands fa-2x fa-tiktok"
                      target="_blank"
                      to="https://www.tiktok.com/@gameshop.dz"
                  >

                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                      class="fa-brands fa-2x fa-instagram"
                      target="_blank"
                      to="https://www.instagram.com/gameshopbackup/"
                  >

                  </NuxtLink>
                </li>


              </ul>


            </div>
          </div>
          <!-- Footer Bottom End -->
        </div>

    </div>

    <!-- Footer Top End -->

    <section class="position-fixed bottom-0  new-gradient  end-0 w-100  d-block d-lg-none  z-3">
      <div class="container">
        <div class="d-flex justify-content-between  align-items-center  w-100 py-2 ">
          <NuxtLink to="/" class="vstack text-dark justify-content-center align-items-center text-white"><i class="iconly-Curved-Home"></i>Accueil</NuxtLink>
          <NuxtLink to="/cart" class="vstack justify-content-center align-items-center position-relative">
          <span>
              <span class="badge badge-circle position-absolute top-0 ms-3 d-flex justify-content-center align-items-center" style="width: 25px ; height: 25px"> {{itemsCount}}</span>
              <i class="iconly-Curved-Bag "></i>
          </span>
            Panier
          </NuxtLink>
          <NuxtLink to="/shop" class="vstack justify-content-center  text-dark align-items-center text-white"><i class="iconly-Curved-Game "></i>Shop</NuxtLink>
          <NuxtLink to="tel:0550779973" class="vstack justify-content-center text-dark align-items-center text-white"><i class="iconly-Curved-Call "></i>Contact</NuxtLink>
        </div>
      </div>

    </section>

  </footer>
</template>
