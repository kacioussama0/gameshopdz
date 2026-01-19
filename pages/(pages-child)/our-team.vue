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
    <CommonBanner :img="bg" name="Home" title="Our Team" />
    <!--Banner End-->

    <section class="content-inner">
      <div class="container">
        <div class="row g-3 g-xl-4">
          <div
            class="col-xl-6 col-lg-8 col-md-12 col-sm-12 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div class="section-head">
              <h2 class="title">
                Meet our team of creators, designers, and world-class problem
                solvers
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
              <NuxtLink class="btn btn-secondary me-3" to="/registration"
                >Join Our Team</NuxtLink
              >
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic1.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">John Doe</NuxtLink>
                </h5>
                <span>CEO & Founder</span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic2.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">Ivan Mathews</NuxtLink>
                </h5>
                <span>iOS Developer</span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic3.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">Macauley Herring </NuxtLink>
                </h5>
                <span>Customer Success</span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic4.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">Alya Levine</NuxtLink>
                </h5>
                <span>CTO </span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic5.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">Rose Hernandez </NuxtLink>
                </h5>
                <span>Backend Developer</span>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
            data-wow-delay="0.7s"
          >
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <NuxtLink to="#"
                  ><img src="../../assets/images/team/pic6.jpg" alt=""
                /></NuxtLink>
                <ul class="team-social-icon">
                  <li>
                    <NuxtLink
                      to="https://www.facebook.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-facebook-f"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://twitter.com/dexignzone"
                      target="_blank"
                      ><i class="fab fa-twitter"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.instagram.com/dexignzone/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="https://www.linkedin.com/in/dexignzone/"
                      target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title">
                  <NuxtLink to="/our-team">Elen Benitez </NuxtLink>
                </h5>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
