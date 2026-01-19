<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Portfolio Tiles" />
    <!--Banner End-->

    <section class="content-inner pt-0 z-index-unset">
      <div class="site-filters style-2 clearfix center">
        <ul class="filters" data-bs-toggle="buttons">
          <li @click="setFilter('*')" :class="`btn ${addActive === '*' ? 'active' : ''}`">
            <RouterLink to="?">All</RouterLink>
          </li>
          <li @click="setFilter('.Dresses')" :class="`btn ${addActive === '.Dresses' ? 'active' : ''}`">
            <RouterLink to="?">Dresses</RouterLink>
          </li>
          <li @click="setFilter('.Tops')" :class="`btn ${addActive === '.Tops' ? 'active' : ''}`">
            <RouterLink to="?">Tops</RouterLink>
          </li>
          <li @click="setFilter('.Outerwear')" :class="`btn ${addActive === '.Outerwear' ? 'active' : ''}`">
            <RouterLink to="?">Outerwear</RouterLink>
          </li>
          <li @click="setFilter('.Jacket')" :class="`btn ${addActive === '.Jacket' ? 'active' : ''}`">
            <RouterLink to="?">Jacket</RouterLink>
          </li>
          <li @click="setFilter('.Formal-wear')" :class="`btn ${addActive === '.Formal-wear' ? 'active' : ''}`">
            <RouterLink to="?">Formal wear</RouterLink>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="clearfix">
          <ul ref="lightgallery" id="masonry" class="lightgallery row">
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Tops">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic1.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Party Blouse</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Satin Wrap Party Blouse</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Outerwear Formal-wear">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic2.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Jogger Pants</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Comfy Lounge Jogger Pants</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Dresses">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic3.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Gear Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-3">Hiking Outdoor Gear Collection</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Tops">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic4.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Overalls </span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Vintage Denim Overalls Shorts</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Outerwear Jacket Formal-wear">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic5.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Winter Coat</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-5">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 m-b30 All Dresses Jacket">
              <div class="portfolio-box style-1">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio1/pic6.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Leggings</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Athletic Mesh Sports Leggings</RouterLink></h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import Header from "~/components/Header.vue";

export default {
  components: { CommonBanner, Header },
  setup() {
    const lightgallery = ref(null);
    const addActive = ref("*");
    let isotopeInstance: any = null;

    function setFilter(filter: any) {
      addActive.value = filter;
      isotopeInstance.arrange({
        filter: filter === "*" ? "*" : filter,
      });
    }
    onMounted(() => {
      isotopeInstance = new Isotope(lightgallery.value, {
        itemSelector: ".card-container",
        masonry: {
          columnWidth: 1,
        },
      });

      setTimeout(() => {
        setFilter(addActive.value);
      }, 100);
    });

    return {
      lightgallery,
      setFilter,
      addActive,
      bg,
    };
  },
};
</script>
