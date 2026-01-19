<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Masonry Grid" />
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
          <ul ref="lightgallery" id="masonry" class="lightgallery row" data-masonry='{"percentPosition": true}'>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 All Formal-wear Tops">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic1.jpg" alt="/" />
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
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 All Formal-wear Outerwear Dresses">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic2.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Jacket</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Water-Resistant Windbreaker Jacket</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 All Tops Jacket">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic3.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Jeans</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-3">Classic Denim Skinny Jeans</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 Dresses All Tops Jacket Outerwear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic5.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Stylish Fedora Hat Collection</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 All Tops Formal-wear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic6.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Winter</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-5">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-4 col-lg-4 col-md-6 col-sm-6 m-b30 All Outerwear Formal-wear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio5/pic4.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-primary">Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Suede Ankle Booties Collection</RouterLink></h4>
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

    const setFilter = (filter: any) => {
      addActive.value = filter;
      isotopeInstance.arrange({
        filter: filter === "*" ? "*" : filter, // Applies the selected filter or shows all
      });
    };

    // Initialize Isotope on mounted
    onMounted(() => {
      isotopeInstance = new Isotope(lightgallery.value, {
        itemSelector: ".card-container", // Select the items in the grid
        masonry: {
          columnWidth: 1, // Adjust column width if needed
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
