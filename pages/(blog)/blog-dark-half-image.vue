<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import { RouterLink } from "vue-router";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Blog Dark Half Image" />
    <!--Banner End-->
    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.1s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic1.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">10 Sep 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.2s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic2.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">27 Mar 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Chic & Unique: Personalized Fashion Finds</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.3s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic3.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">20 Apr 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Runway Rundown: Decoding Fashion Week’s Best Looks</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.4s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic4.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">15 Mar 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Closet Confidential: Behind-the-Scenes of a Fashionista</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.5s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic5.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">27 June 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Dress to Impress: Elevate Your Everyday Style</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.6s">
            <div class="dz-card blog-half style-5">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-4/pic6.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">10 May 2023</li>
                  </ul>
                </div>
                <h4 class="dz-title">
                  <RouterLink to="/blog-both-sidebar">Fashion Forward: Spotlight on Emerging Designers</RouterLink>
                </h4>
                <RouterLink to="/blog-both-sidebar" class="font-14 read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.7s">
            <RouterLink to="/blog-dark-half-image" class="btn btn-secondary"> Loadmore </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
