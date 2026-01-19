<script lang="ts" setup>
import bg from "@/assets/images/portfolio/details/portfolio-detail-4/banner-bg.jpg";
import PortfolioDetailSlider from "@/elements/PortfolioDetailSlider.vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IMAGES } from "@/constent/theme";
import Header from "~/components/Header.vue";

const gallery = [{ img: IMAGES.portfolio_detail4Pic1 }, { img: IMAGES.portfolio_detail4Pic2 }, { img: IMAGES.portfolio_detail4Pic3 }, { img: IMAGES.portfolio_detail4Pic4 }];
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="container-fluid px-0 portfolio-detail-4">
      <div class="portfolio-detail-inner column">
        <div class="detail-inner-area left">
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
        </div>
        <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="detail-inner-area right" id="lightgallery">
          <div class="row">
            <div class="col-12">
              <div class="dz-detail-box border-0 p-0 text-justify">
                <h2>Research & Planning</h2>
                <p class="m-b30 m-lg-b20">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                  editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>

                <p class="m-b35 m-lg-b20">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-sm-6 col-6 m-b30" v-for="({ img }, ind) in gallery" :key="ind">
              <div class="dz-box portfolio-bx style-1">
                <div class="dz-media rounded">
                  <a class="mfp-link lg-item" :href="img" :data-src="img">
                    <i class="feather icon-maximize dz-maximize top-right"></i>
                    <img :src="img" alt="image" class="d-none" />
                  </a>
                  <img :src="img" alt="image" />
                </div>
              </div>
            </div>
            <div class="col-xl-12 m-t50 m-sm-t0">
              <div class="post-pagination style-1">
                <div class="post-prev">
                  <RouterLink to="/portfolio-details-3" class="post-inner">
                    <div class="inner-icon">
                      <i class="icon feather icon-chevron-left"></i>
                    </div>
                    <div class="dz-media me-3">
                      <img src="../assets/images/portfolio/details/portfolio-detail-4/post-pagination/post-1.jpg" alt="" />
                    </div>
                    <div class="dz-info m-0">
                      <span>Swagger</span>
                      <h6 class="m-b0">Sophisticated Swagger Suit</h6>
                    </div>
                  </RouterLink>
                </div>
                <div class="post-next">
                  <RouterLink to="/portfolio-details-5" class="post-inner">
                    <div class="dz-info">
                      <span>Sweater</span>
                      <h6 class="m-b0">Cozy Knit Cardigan Sweater</h6>
                    </div>
                    <div class="dz-media">
                      <img src="../assets/images/portfolio/details/portfolio-detail-4/post-pagination/post-2.jpg" alt="" />
                    </div>
                    <div class="inner-icon">
                      <i class="icon feather icon-chevron-right"></i>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="m-b80 m-t80 m-sm-b20 m-sm-t20 overflow-hidden releted-portfolio">
                <div class="section-head style-2">
                  <div class="left-content">
                    <h2 class="title mb-0">Related Projects</h2>
                  </div>
                </div>
                <PortfolioDetailSlider />
              </div>
            </div>
          </div>
        </Lightgallery>
      </div>
    </div>
  </div>
</template>
