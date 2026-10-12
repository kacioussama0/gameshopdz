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
      <a>
        <span class="iconly-Curved-Game me-2"></span>
        <span>{{ $t('menu.games') }}</span>
      </a>
      <div class="mega-menu shop-menu" @click.stop>
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color: #00439C ">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 5
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=817">{{ $t('menu.gamesPs5') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1115">{{ $t('menu.exclusivePs') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #0070D1">
                  <i class="fa fa-brands fa-playstation" />
                  Playstation 4
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=816">{{ $t('menu.gamesPs4') }}</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color: #107C10">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox Series X & S
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=818">{{ $t('menu.gamesXboxSeries') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=882">{{ $t('menu.exclusiveXbox') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color: #3A3A3A">
                  <i class="fa fa-brands fa-xbox" />
                  Xbox One
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=819">{{ $t('menu.gamesXboxOne') }}</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch
                </RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=820">{{ $t('menu.gamesSwitch') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1012">{{ $t('menu.exclusiveSwitch') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title" style="color:#E60F11">
                  <i class="fa fa-gamepad" />
                  Nintendo Switch 2
                </RouterLink>

                <ul>
                  <li><RouterLink to="/shop?category=2951">{{ $t('menu.gamesSwitch2') }}</RouterLink></li>
                </ul>

              </div>

            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/GS-All-games-Banner.png?w=896&ssl=1" alt="/"  />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="fa-brands iconly-Curved-Bag me-2"></span>
        <span>{{ $t('menu.consoles') }}</span>

      </a>
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
                <RouterLink to="" class="menu-title">{{ $t('menu.portableConsole') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=2888">{{ $t('menu.pcHandhelds') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2889">{{ $t('menu.portableEmulation') }}</RouterLink></li>
                </ul>

              </div>
            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/GS-All-Consoles-Banner.png?w=896&ssl=1" alt="/"  />
            </div>
          </div>

        </div>

      </div>


    </li>

    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="iconly-Curved-Discount me-2"></span>
        <span>{{ $t('menu.used') }}</span>
      </a>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.videoGames') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2876">{{ $t('menu.usedPs5Games') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2874">{{ $t('menu.usedPs4Games') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2880">{{ $t('menu.usedXboxSeriesGames') }}</RouterLink></li>
                  <li><RouterLink to="/shop?category=860">{{ $t('menu.usedSwitchGames') }}</RouterLink></li>
                  <li><RouterLink to="/shop">{{ $t('menu.usedSwitch2Games') }}</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.consoles') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2905">{{ $t('menu.usedPs5Consoles') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2906">{{ $t('menu.usedPs4Consoles') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2907">{{ $t('menu.usedXboxXConsoles') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2908">{{ $t('menu.usedXboxSConsoles') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2909">{{ $t('menu.usedSwitchConsoles') }}</RouterLink></li>
                </ul>
              </div>


              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.controllers') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?brand=2882">{{ $t('menu.usedPs5Controller') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2883">{{ $t('menu.usedPs4Controller') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2884">{{ $t('menu.usedXboxController') }}</RouterLink></li>
                  <li><RouterLink to="/shop?brand=2885">{{ $t('menu.usedSwitchController') }}</RouterLink></li>

                </ul>
              </div>


            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/GS-All-occasion-Banner.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="iconly-Curved-Setting me-2"></span>
        <span>{{ $t('menu.accessories') }}</span>
      </a>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.consoleAccessories') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=86">{{ $t('menu.controllerBattery') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1593">{{ $t('menu.chargingStation') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2400">{{ $t('menu.coolingStation') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2622">{{ $t('menu.controllerStand') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1916">{{ $t('menu.headsets') }}</RouterLink></li>
                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.controllers') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=652">{{ $t('menu.ps5Controller') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=999">{{ $t('menu.ps4Controller') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=700">{{ $t('menu.xboxController') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2910">{{ $t('menu.switchController') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=580">{{ $t('menu.pdpController') }}</RouterLink></li>

                </ul>
              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.utilities') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?category=833">{{ $t('menu.consoleSkins') }}</RouterLink></li>
                  <li><RouterLink to="/shop?category=834">{{ $t('menu.consoleCases') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2389">{{ $t('menu.gamingHeadset') }}</RouterLink></li>
                  <li><RouterLink to="/shop?category=831">{{ $t('menu.psHeadset') }}</RouterLink></li>
                  <li><RouterLink to="/shop?category=832">{{ $t('menu.xboxHeadset') }}</RouterLink></li>

                </ul>
              </div>


            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/GS-All-accessoires-Banner.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="iconly-Curved-Wallet me-2"></span>
        <span>{{ $t('menu.digital') }}</span>
      </a>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.prepaidCards') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=944">{{ $t('menu.prepaidPs') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=943">{{ $t('menu.prepaidXbox') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1289">{{ $t('menu.prepaidSteam') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1392">{{ $t('menu.prepaidNintendo') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">{{ $t('menu.fullDigital') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1294">{{ $t('menu.digitalGame') }}</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.subscriptions') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=525">Xbox Game Pass</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2315">PlayStation Plus</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1906">Nintendo Online</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">{{ $t('menu.digitalConsole') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1971">PlayStation 5 Digital</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2556">PlayStation 5 PRO</RouterLink></li>
                  <li><RouterLink to="/shop?tag=529">Xbox Series S</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.streaming') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=644">Netflix</RouterLink></li>
                  <li><RouterLink to="/shop?tag=833">Disney +</RouterLink></li>
                </ul>


              </div>



            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/DIGTAL-GS.png?w=896&ssl=1" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </li>


    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="iconly-Curved-Star me-2"></span>
        <span>{{ $t('menu.collector') }}</span>
      </a>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.collectors') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=986">Steelbooks</RouterLink></li>
                  <li><RouterLink to="/shop?category=848">{{ $t('menu.collectors') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2570">{{ $t('menu.consoleEditions') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">{{ $t('menu.miniature') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=939">Hotwheels</RouterLink></li>
                  <li><RouterLink to="/shop?tag=935">Majorette</RouterLink></li>
                </ul>

              </div>


              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.decoration') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=597">{{ $t('menu.gamingLamp') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1303">{{ $t('menu.controllerHolder') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=703">{{ $t('menu.figurines') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">{{ $t('menu.textile') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=1184">{{ $t('menu.tshirt') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2474">{{ $t('menu.backpack') }}</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.setupDeco') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=676">{{ $t('menu.mousepad') }}</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1202">{{ $t('menu.headsetHolder') }}</RouterLink></li>
                </ul>


              </div>



            </div>
          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/Collector-GS.png?w=896&ssl=1" alt="/" />
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
<!--                <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/PC-LAP-GS.png?w=896&ssl=1" alt="/" />-->
<!--              </div>-->
<!--            </div>-->

<!--            </div>-->
<!--          </div>-->



<!--    </li>-->


    <li class="has-mega-menu sub-menu-down">
      <a>
        <span class="iconly-Curved-TimeCircle me-2"></span>
        <span>{{ $t('menu.retro') }}</span>
      </a>
      <div class="mega-menu shop-menu">
        <div class="row">
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="row">

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.retroConsoles') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop?tag=2957">PlayStation 1 (PS1)</RouterLink></li>
                  <li><RouterLink to="/shop?tag=3037">PlayStation 2 (PS2)</RouterLink></li>
                  <li><RouterLink to="/shop?tag=1799">Xbox Classic</RouterLink></li>
                  <li><RouterLink to="/shop?search=nintendo%2064">Nintendo 64</RouterLink></li>
                  <li><RouterLink to="/shop?tag=2717">GameCube</RouterLink></li>
                  <li><RouterLink to="/shop?tag=569">Game Boy / Advance</RouterLink></li>
                  <li><RouterLink to="/shop?tag=582">Super Nintendo</RouterLink></li>

                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.retroGames') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">{{ $t('menu.sealedNew') }}</RouterLink></li>
                  <li><RouterLink to="/shop">{{ $t('menu.completeBox') }}</RouterLink></li>
                  <li><RouterLink to="/shop">{{ $t('menu.usedRetroGames') }}</RouterLink></li>
                </ul>

                <RouterLink to="" class="menu-title">{{ $t('menu.retroAccessories') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">{{ $t('menu.originalRetroControllers') }}</RouterLink></li>
                  <li><RouterLink to="/shop">{{ $t('menu.memoryConnectors') }}</RouterLink></li>
                </ul>

              </div>

              <div class="col-md-4 col-sm-6">
                <RouterLink to="" class="menu-title">{{ $t('menu.collectorGoodies') }}</RouterLink>
                <ul>
                  <li><RouterLink to="/shop">{{ $t('menu.retroCollector') }}</RouterLink></li>
                  <li><RouterLink to="/shop">{{ $t('menu.retroFigurines') }}</RouterLink></li>

                </ul>
              </div>


            </div>

          </div>
          <div class="col-md-4 d-none d-lg-block">
            <div class="adv-media">
              <img src="https://i0.wp.com/woo.gameshopdz.com/wp-content/uploads/2023/08/Retro-GS.png?w=896&ssl=1" alt="/" />
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
    padding:  10px;
  }
}

.site-header.style-2 .main-bar .header-nav .nav > li > a > span {
  font-size: 13px !important;
}



.header-menu .header-nav .nav > li > a {
  color: red !important;
  line-height: 24px;
  padding: 30px 50px;
  width: 100%;
}
@media only screen and (max-width: 1199px) {
  .header-menu .header-nav .nav > li > a {
    padding: 20px;
  }
}
@media only screen and (max-width: 991px) {
  .header-menu .header-nav .nav > li > a {
    padding: 10px 0;
  }
}


</style>