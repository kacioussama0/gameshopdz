<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Cobble Style 1" />
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
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Jacket Dresses">
              <div class="portfolio-box style-2">
                <RouterLink to="/portfolio-details-1">
                  <div class="dz-media">
                    <img src="../../assets/images/portfolio/portfolio3/pic1.jpg" alt="/" />
                  </div>
                </RouterLink>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Sweater</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Cozy Knit Cardigan Sweater</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Outerwear Jacket Dresses">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic2.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Coat</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30 All Formal-wear Dresses">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic3.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Jacket</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-3">Water-Resistant Windbreaker Jacket</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Tops">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic4.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Pants</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Comfy Lounge Jogger Pants</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Jacket">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic5.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Bowl</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-5">Rustic Charm Meets Functionality With Wood</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30 All Outerwear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic6.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Coat</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Formal-wear Dresses">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic7.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Suede Ankle Booties Collection</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Tops">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic8.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Shorts</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-3">Vintage Denim Overalls Shorts</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Tops Formal-wear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic9.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Shorts</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Vintage Denim Overalls Shorts</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b30 All Tops Dresses Outerwear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio3/pic10.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content w-100">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-5">Hiking Outdoor Gear Collection</RouterLink></h4>
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
