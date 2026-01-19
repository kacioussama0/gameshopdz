<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { RouterLink } from "vue-router";
import Header from "~/components/Header.vue";
</script>
<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Blog Light 2 Column" />
    <!--Banner End-->

    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="dz-card style-1 light">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-3/pic1.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/post-standard">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                </h3>
                <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="dz-card style-1 light">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-3/pic2.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">10 June 2023</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/post-standard">Chic & Unique: Personalized Fashion Finds</RouterLink>
                </h3>
                <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="dz-card style-1 light">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-3/pic3.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">15 May 2023</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/post-standard">Runway Rundown: Decoding Fashion Week’s Best Looks</RouterLink>
                </h3>
                <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="dz-card style-1 light">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-3/pic4.jpg" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">7 Sep 2023</li>
                  </ul>
                </div>
                <h3 class="dz-title">
                  <RouterLink to="/post-standard">Closet Confidential: Behind-the-Scenes of a Fashionista</RouterLink>
                </h3>
                <RouterLink to="/post-standard" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.5s">
            <RouterLink to="/blog-light-2-column" class="btn btn-secondary"> Loadmore </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
