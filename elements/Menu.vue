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
      <RouterLink to="/"
      ><span>Accueil</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>

    </li>


    <li class="has-mega-menu sub-menu-down">
      <RouterLink to=""
        ><span>Jeux</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title" style="color: #00439C ">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 5
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Playstation 5</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Exclusivité Playstation</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #0070D1">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 4
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop-standard">Jeux PlayStation 4</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title" style="color: #107C10">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox Series X & S
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Xbox Series X|S</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Exclusivité Xbox</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #3A3A3A">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox One
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Xbox One</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Nintendo Switch</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Exclusivité Nintendo Switch</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch 2
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Nintendo Switch 2</RouterLink></li>
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
      <RouterLink to=""
      ><span>Consoles</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">PlayStation</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Playstation 5</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Playstation 4</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Playstation Portal</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Playstation VR</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Playstation VR 2</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PlayStation 30th Anniversary</RouterLink></li>
                </ul>


              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Xbox</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Xbox Series X</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Xbox Series S</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Xbox One</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Nintendo</RouterLink>

                <ul>
                  <li><RouterLink to="/shop-standard">Nintendo Switch</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Nintendo Switch 2</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Console portable</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Consoles PC Portables</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Emulation Portable</RouterLink></li>
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
      <RouterLink to=""
      ><span>Occasions</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Jeux Vidéo</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Jeux Occasion PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Jeux Occasion PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Jeux Occasion Xbox Series X</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Jeux Occasion Switch</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Jeux Occasion Switch 2</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Consoles</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Consoles PS5 Occasion</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Consoles PS4 Occasion</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Consoles Xbox Series X Occasion</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Consoles Xbox Series S Occasion</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Consoles Switch Occasion</RouterLink></li>
                </ul>
              </div>


              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Manettes</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Manette Occasion PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette Occasion PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette Occasion Xbox</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette Occasion Switch</RouterLink></li>

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
      <RouterLink to=""
      ><span>Accessoires</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Accessoires Consoles</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Batterie Manette</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Station de Charges</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Station de refroidissement</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Support Manette</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Casques</RouterLink></li>
                </ul>
              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Manettes</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Manette PlayStation 5</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette PlayStation 4</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette Xbox</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette Switch</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Manette PDP</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Utilitaires</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Skin Consoles</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Pochette Consoles</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Casque Gaming</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Casque PlayStation</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Casque Xbox</RouterLink></li>

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
      <RouterLink to=""
      ><span>Digital</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Cartes Prépayées</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Cartes prépayées PS</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Cartes prépayées Xbox</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Cartes prépayées Steam</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Cartes prepayées Nintendo</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">100% Digital</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Jeu Digital</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Pass de Combat</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Abonnements</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Xbox Game Pass</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PlayStation Plus</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Nintendo Online</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Console Digitale</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">PlayStation 5 Digital</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PlayStation 5 PRO</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Xbox Series S</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Streaming</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Netflix</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Crunchyroll</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Disney +</RouterLink></li>
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
      <RouterLink to=""
      ><span>Collector & Goodies</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Collectors</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Steelbooks</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Collectors</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Console Editions</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Miniature</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Hotwheels</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Majorette</RouterLink></li>
                </ul>

              </div>


              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Décoration</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Lampe Gaming</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Porte Manette</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Figurines</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Textile</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">T-Shirt</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Sac à dos</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Déco Setup</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Tapis de souris</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Porte casque</RouterLink></li>
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

    <li class="has-mega-menu sub-menu-down">
      <RouterLink to=""
      ><span>PC</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">


            <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Composants PC</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Processeur CPU</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Carte Graphique GPU</RouterLink></li>
                  <li><RouterLink to="/shop-standard">RAM</RouterLink></li>
                  <li><RouterLink to="/shop-standard">SSD</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Carte Mere</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Alimentation PC</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Boitier / Case</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Périphérique PC</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Ecrans PC / Moniteurs</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Clavier</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Souris</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Casque</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Tapis de souris</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Support Casque</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Microphones</RouterLink></li>
                </ul>
              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">PC et Pre-Builds</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Laptops</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PC Gamer</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PC Bureau</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Build Game Shop</RouterLink></li>
                </ul>
              </div>


            </div>

            </div>



            <div class="col-md-4 d-none d-lg-block">
              <div class="adv-media">
                <img src="https://i0.wp.com/gameshopdz.com/wp-content/uploads/2023/08/PC-LAP-GS.png?w=896&ssl=1" alt="/" />
              </div>
            </div>

            </div>
          </div>



    </li>


    <li class="has-mega-menu sub-menu-down">
      <RouterLink to=""
      ><span>Retro</span><i class="fas fa-chevron-down tabindex"></i
      ></RouterLink>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Console Retro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">PlayStation 1 (PS1)</RouterLink></li>
                  <li><RouterLink to="/shop-standard">PlayStation 2 (PS2)</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Xbox Classic</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Nintendo 64</RouterLink></li>
                  <li><RouterLink to="/shop-standard">GameCube</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Game Boy / Advance</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Super Nintendo</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Autres Consoles</RouterLink></li>

                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Jeux Retro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Neuf sous blister</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Complet boîte + notice</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Jeux Rétro Occasion</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">Accessoires Rétro</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Manettes Rétro d’origine</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Mémoire & Connectique</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-6">
                <RouterLink to="" class="menu-title">Collector & Goodies</RouterLink>
                <ul>
                  <li><RouterLink to="/shop-standard">Rétro Éditions collector</RouterLink></li>
                  <li><RouterLink to="/shop-standard">Figurines Rétro</RouterLink></li>

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
