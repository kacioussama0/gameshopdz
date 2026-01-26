<script setup lang="ts">
import bg from "@/assets/images/portfolio/details/portfolio-detail-2/banner-bg.jpg";
import RelatedProduct from "~/elements/RelatedProduct.vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IMAGES } from "@/constent/theme";
import Header from "~/components/Header.vue";

const data = [
  { className: "col-xl-4 col-lg-4 m-b30", img: IMAGES.portfolio_detail2Pic1 },
  { className: "col-xl-8 col-lg-8 m-b30" },
  { className: "col-xl-4 col-md-4 col-sm-6 col-6 m-b30", img: IMAGES.portfolio_detail2Pic2 },
  { className: "col-xl-4 col-md-4 col-sm-6 col-6 m-b30", img: IMAGES.portfolio_detail2Pic3 },
  { className: "col-xl-4 col-md-4 m-b30", img: IMAGES.portfolio_detail2Pic4 },
];
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr dz-bnr-inr-lg overlay-black-middle text-center overflow-hidden" :style="`background-image: url(${bg})`">
      <div class="container">
        <div class="post-header dz-bnr-inr-entry blog-single style-1">
          <RouterLink to="/portfolio-details-1" class="mb-4">
            <span class="badge badge-primary mb-3">fashion</span>
          </RouterLink>
          <h1 class="dz-title text-white mx-auto">Make your fashion look mire charming</h1>
          <div class="detail-list-box style-2">
            <ul>
              <li>
                <span class="title">Client</span>
                <span>Martin Stewart</span>
              </li>
              <li>
                <span class="title">Seatpad</span>
                <span>100% Polyester</span>
              </li>
              <li>
                <span class="title">Location</span>
                <span>London, UK</span>
              </li>
              <li>
                <span class="title">Shipping</span>
                <span>Free Shipping</span>
              </li>
              <li>
                <span class="title">Category</span>
                <span>Child Trolly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Lightgallery class="content-inner portfolio-detail-2" id="lightgallery" :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="row">
              <div v-for="{ className, img } in data" :class="className">
                <div class="dz-box portfolio-bx style-1" v-if="className !== 'col-xl-8 col-lg-8 m-b30'">
                  <div class="dz-media rounded">
                    <a class="mfp-link lg-item" :href="img" :data-src="img">
                      <img :src="img" alt="image" class="d-none" />
                      <i class="feather icon-maximize dz-maximize top-right"></i>
                    </a>
                    <img :src="img" alt="image" />
                  </div>
                </div>
                <div class="dz-detail-box style-2" v-else>
                  <h2>Research &amp; Planning</h2>
                  <p class="m-b30 m-sm-b20">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                  </p>

                  <p class="mb-0">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery>
    <!-- Post Pagination -->
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="post-pagination style-1">
            <div class="post-prev">
              <RouterLink to="/portfolio-details-5" class="post-inner">
                <div class="inner-icon">
                  <i class="icon feather icon-chevron-left"></i>
                </div>
                <div class="dz-media me-3">
                  <img src="../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-1.jpg" alt="" />
                </div>
                <div class="dz-info m-0">
                  <span>Swagger</span>
                  <h6 class="m-b0">Sophisticated Swagger Suit</h6>
                </div>
              </RouterLink>
            </div>
            <div class="post-next">
              <RouterLink to="/portfolio-details-2" class="post-inner">
                <div class="dz-info">
                  <span>Sweater</span>
                  <h6 class="m-b0">Cozy Knit Cardigan Sweater</h6>
                </div>
                <div class="dz-media">
                  <img src="../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-2.jpg" alt="" />
                </div>
                <div class="inner-icon">
                  <i class="icon feather icon-chevron-right"></i>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="content-inner-1 overflow-hidden releted-portfolio">
      <div class="container">
        <div class="section-head style-2">
          <div class="left-content">
            <h2 class="title mb-0">Related Projects</h2>
          </div>
        </div>
        <RelatedProduct />
      </div>
    </section>
  </div>
</template>
