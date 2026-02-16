<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import { IMAGES } from "@/constent/theme";
import CommonBanner from "@/elements/CommonBanner.vue";
import { reactive } from "vue";
import Header from "~/components/Header.vue";
import Header3 from "~/components/Header3.vue";


const categories = ref([])

useFetch("/api/wc/categories").then(( response) => {

  categories.value = response.data.value

}).catch((errors)=> {
  console.log('Failed to fetch categories')
})



</script>

<template>


  <header class="site-header mo-left header style-2">
    <Header3 />
  </header>


  <div class="page-content bg-light">



    <!-- contact area -->
    <section class="content-inner shop-account">
      <!-- Product -->
      <div class="container">

        <h1 class="fw-bolder mb-4">
          <i class="iconly-Curved-Category" style="font-size: 30px"></i>
          Categories
        </h1>


        <div class=" row g-5">

          <div class="card-container col-xl-4 col-lg-4 col-md-6" v-for="category in categories">
            <div class="portfolio-box style-2">
              <div class="dz-media">
                <RouterLink to="/portfolio-details-1">
                  <img src="/assets/images/background/bg1.jpg" alt="/" />
                </RouterLink>
              </div>
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-primary"></span>
                  </RouterLink>
                </div>
                <h4 class="title"><RouterLink :to="'/shop?category='+ category.id">{{category.name}}</RouterLink></h4>
              </div>
            </div>
          </div>

        </div>


      </div>
      <!-- Product END -->
    </section>
    <!-- contact area End-->
  </div>
</template>
