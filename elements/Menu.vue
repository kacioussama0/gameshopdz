<script lang="ts" setup>
import { ref } from "vue";
import { onMounted } from "vue";

const timer = ref({
  day: "",
  hour: "",
  min: "",
  sec: "",
});
onMounted(() => {
  let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

  let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    timer.value.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    timer.value.hour = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    timer.value.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    timer.value.sec = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      countDownDate = new Date(`Jan 5, 2026 15:37:25`).getTime();
    }
  }, 1000);
});
</script>

<template>



  <ul class="nav navbar-nav">

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-Game me-2"></span>
        <span>Jeux</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color: #00439C ">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 5
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=817">Jeux Playstation 5</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1115">Exclusivité Playstation</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #0070D1">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 4
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=816">Jeux PlayStation 4</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color: #107C10">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox Series X & S
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=818">Jeux Xbox Series X|S</RouterLink></li>
                  <li><RouterLink to="/shop?tag=882">Exclusivité Xbox</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #3A3A3A">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox One
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=819">Jeux Xbox One</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=820">Jeux Nintendo Switch</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1012">Exclusivité Nintendo Switch</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch 2
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=2951">Jeux Nintendo Switch 2</RouterLink></li>
                </ul>

              </div>

            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-games-Banner.png?w=896&ssl=1" alt="/"  />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">

        <span class="fa-brands iconly-Curved-Bag me-2"></span>
        <span>Consoles</span>

      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">PlayStation</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=823">Playstation 5</RouterLink></li>
                  <li><RouterLink to="/shop?category=822">Playstation 4</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2607">Playstation Portal</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1282">Playstation VR</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2611">Playstation VR 2</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2881">PlayStation 30th Anniversary</RouterLink></li>
                </ul>


              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Xbox</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=824">Xbox Series X</RouterLink></li>
                  <li><RouterLink to="/shop?category=824">Xbox Series S</RouterLink></li>
                  <li><RouterLink to="/shop?category=825">Xbox One</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Nintendo</RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=826">Nintendo Switch</RouterLink></li>
                  <li><RouterLink to="/shop?category=2926">Nintendo Switch 2</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Console portable</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=2888">Consoles PC Portables</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2889">Emulation Portable</RouterLink></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-Consoles-Banner.png?w=896&ssl=1" alt="/"  />
            </div>
          </div>

        </div>

      </div>


    </li>

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-Discount me-2"></span>
        <span>Occasions</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Jeux Vidéo</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2876">Jeux Occasion PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2874">Jeux Occasion PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2880">Jeux Occasion Xbox Series X</RouterLink></li>
                  <li><RouterLink to="/shop?category=860">Jeux Occasion Switch</RouterLink></li>
                  <li><RouterLink to="/shop">Jeux Occasion Switch 2</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Consoles</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2905">Consoles PS5 Occasion</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2906">Consoles PS4 Occasion</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2907">Consoles Xbox Series X Occasion</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2908">Consoles Xbox Series S Occasion</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2909">Consoles Switch Occasion</RouterLink></li>
                </ul>
              </div>


              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Manettes</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2882">Manette Occasion PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2883">Manette Occasion PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2884">Manette Occasion Xbox</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2885">Manette Occasion Switch</RouterLink></li>

                </ul>
              </div>


            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-occasion-Banner.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-Setting me-2"></span>
        <span>Accessoires</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Accessoires Consoles</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=86">Batterie Manette</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1593">Station de Charges</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2400">Station de refroidissement</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2622">Support Manette</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1916">Casques</RouterLink></li>
                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Manettes</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=652">Manette PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop?tag=999">Manette PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop?tag=700">Manette Xbox</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2910">Manette Switch</RouterLink></li>
                  <li><RouterLink to="/shop?tag=580">Manette PDP</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Utilitaires</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=833">Skin Consoles</RouterLink></li>
                  <li><RouterLink to="/shop?category=834">Pochette Consoles</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2389">Casque Gaming</RouterLink></li>
                  <li><RouterLink to="/shop?category=831">Casque PlayStation</RouterLink></li>
                  <li><RouterLink to="/shop?category=832">Casque Xbox</RouterLink></li>

                </ul>
              </div>


            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/GS-All-accessoires-Banner.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-Wallet me-2"></span>
        <span>Digital</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Cartes Prépayées</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=944">Cartes prépayées PS</RouterLink></li>
                  <li><RouterLink to="/shop?tag=943">Cartes prépayées Xbox</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1289">Cartes prépayées Steam</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1392">Cartes prepayées Nintendo</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">100% Digital</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1294">Jeu Digital</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Abonnements</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=525">Xbox Game Pass</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2315">PlayStation Plus</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1906">Nintendo Online</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Console Digitale</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1971">PlayStation 5 Digital</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2556">PlayStation 5 PRO</RouterLink></li>
                  <li><RouterLink to="/shop?tag=529">Xbox Series S</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Streaming</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=644">Netflix</RouterLink></li>
                  <li><RouterLink to="/shop?tag=833">Disney +</RouterLink></li>
                </ul>


              </div>



            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/DIGTAL-GS.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>


    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-Star me-2"></span>
        <span>Collector & Goodies</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Collectors</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=986">Steelbooks</RouterLink></li>
                  <li><RouterLink to="/shop?category=848">Collectors</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2570">Console Editions</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Miniature</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=939">Hotwheels</RouterLink></li>
                  <li><RouterLink to="/shop?tag=935">Majorette</RouterLink></li>
                </ul>

              </div>


              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Décoration</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=597">Lampe Gaming</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1303">Porte Manette</RouterLink></li>
                  <li><RouterLink to="/shop?tag=703">Figurines</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Textile</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1184">T-Shirt</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2474">Sac à dos</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Déco Setup</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=676">Tapis de souris</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1202">Porte casque</RouterLink></li>
                </ul>


              </div>



            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/Collector-GS.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>

<!--    <li class="has-mega-menu sub-menu-down">-->
<!--      <RouterLink to="">-->
<!--        <span class="iconly-Curved-Category me-2"></span>-->
<!--        <span>PC</span>-->
<!--      </RouterLink>-->
<!--      <div class="mega-menu shop-menu">-->
<!--        <div class="row">-->


<!--            <div class="col-lg-8 col-md-12 col-sm-12">-->
<!--            <div class="row">-->

<!--              <div class="col-md-4 col-sm-6">-->
<!--                <RouterLink to="" class="menu-title">Composants PC</RouterLink>-->
<!--                <ul>-->
<!--                  <li><RouterLink to="/shop?tag=2358">Processeur CPU</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=92">Carte Graphique GPU</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=685">RAM</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=1106">SSD</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?search=carte+mere">Carte Mere</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=572">Alimentation PC</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=1323">Boitier / Case</RouterLink></li>-->
<!--                </ul>-->

<!--              </div>-->

<!--              <div class="col-md-4 col-sm-6">-->
<!--                <RouterLink to="" class="menu-title">Périphérique PC</RouterLink>-->
<!--                <ul>-->
<!--                  <li><RouterLink to="/shop?tag=1614">Ecrans PC / Moniteurs</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=43">Clavier</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=585">Souris</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=562">Casque</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=676">Tapis de souris</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=2731">Support Casque</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?tag=913">Microphones</RouterLink></li>-->
<!--                </ul>-->
<!--              </div>-->

<!--              <div class="col-md-4 col-sm-6">-->
<!--                <RouterLink to="" class="menu-title">PC et Pre-Builds</RouterLink>-->
<!--                <ul>-->
<!--                  <li><RouterLink to="/shop?category=1795">Laptops</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?search=pc+gamer">PC Gamer</RouterLink></li>-->
<!--                  <li><RouterLink to="/shop?search=pc">PC Bureau</RouterLink></li>-->
<!--                </ul>-->
<!--              </div>-->


<!--            </div>-->

<!--            </div>-->



<!--            <div class="col-md-4 d-none d-lg-block">-->
<!--              <div class="adv-media">-->
<!--                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/PC-LAP-GS.png?w=896&ssl=1" alt="/" />-->
<!--              </div>-->
<!--            </div>-->

<!--            </div>-->
<!--          </div>-->



<!--    </li>-->


    <li class="has-mega-menu sub-menu-down">
      <RouterLink to="#">
        <span class="iconly-Curved-TimeCircle me-2"></span>
        <span>Retro</span>
      </RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Console Retro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=2957">PlayStation 1 (PS1)</RouterLink></li>
                  <li><RouterLink to="/shop?tag=3037">PlayStation 2 (PS2)</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1799">Xbox Classic</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Nintendo 64</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2717">GameCube</RouterLink></li>
                  <li><RouterLink to="/shop?tag=569">Game Boy / Advance</RouterLink></li>
                  <li><RouterLink to="/shop?tag=582">Super Nintendo</RouterLink></li>

                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Jeux Retro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">Neuf sous blister</RouterLink></li>
                  <li><RouterLink to="/shop">Complet boîte + notice</RouterLink></li>
                  <li><RouterLink to="/shop">Jeux Rétro Occasion</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Accessoires Rétro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">Manettes Rétro d’origine</RouterLink></li>
                  <li><RouterLink to="/shop">Mémoire & Connectique</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">Collector & Goodies</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">Rétro Éditions collector</RouterLink></li>
                  <li><RouterLink to="/shop">Figurines Rétro</RouterLink></li>

                </ul>
              </div>


            </div>

          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/Retro-GS.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>



  </ul>
</template>

<style scoped>



@media screen and (min-width: 900px) {
  .site-header.style-2 .main-bar .header-nav .nav > li > a {
    color: #FFFFFF !important;
    padding:  20px;
  }
}

.site-header.style-2 .main-bar .header-nav .nav > li > a > span {
  font-size: 16px !important;
}


</style>