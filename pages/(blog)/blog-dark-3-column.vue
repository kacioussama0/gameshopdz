<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import Header from "~/components/Header.vue";
</script>
<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Blog Dark 3 Column" />
    <!--Banner End-->

    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row">
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/1.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >Trendsetter Chronicles: Unveiling the Latest in
                    Fashion</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/2.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >Runway Rundown: Decoding Fashion Week’s Best
                    Looks</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/3.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >Closet Confidential: Behind-the-Scenes of a
                    Fashionista</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/4.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >DIY Couture: Crafting Your Own Fashion
                    Masterpieces</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/5.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >Street Style Safari: Global Fashion Influences</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="dz-card style-2 dark">
              <div class="dz-media">
                <img src="../../assets/images/blog/grid/1.jpg" alt="" />
                <div class="post-date">17 May 2022</div>
              </div>
              <div class="dz-info">
                <h4 class="dz-title mb-0">
                  <NuxtLink to="/post-standard"
                    >Sustainable Style: Eco-Friendly Fashion Choices</NuxtLink
                  >
                </h4>
                <ul class="blog-social">
                  <li>
                    <NuxtLink class="share-btn" to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7 7H17V17"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </NuxtLink>
                    <ul class="sub-team-social">
                      <li>
                        <NuxtLink to="https://www.facebook.com/" target="_blank"
                          ><i class="fab fa-facebook-f"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://twitter.com/" target="_blank"
                          ><i class="fab fa-twitter"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="https://www.instagram.com/"
                          target="_blank"
                          ><i class="fab fa-instagram"></i
                        ></NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="https://www.linkedin.com/" target="_blank"
                          ><i class="fa-brands fa-linkedin-in"></i
                        ></NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-12 text-center mt-sm-4 mt-2 wow fadeInUp"
            data-wow-delay="1.0s"
          >
            <NuxtLink to="/blog-dark-3-column" class="btn btn-secondary">
              Loadmore
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
