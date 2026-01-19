<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary">
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <h1>Banner With Bg-Color</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><NuxtLink to="/"> Home</NuxtLink></li>
              <li class="breadcrumb-item">Banner With Bg-Color</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <section class="content-inner">
      <div class="container">
        <div class="row about-style2 align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 m-b30">
            <div class="about-thumb">
              <img src="../../assets/images/men.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="about-content">
              <div class="section-head style-1 d-block">
                <h3 class="title">
                  About Pixio Our Story and Mission in Ecommerce
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet. It uses a dictionary of over 200
                  Latin words, combined with a handful of model sentence
                  structures, to generate Lorem Ipsum which looks reasonable.
                  The generated Lorem Ipsum is therefore always free from
                  repetition, injected humour, or non-characteristic words etc.
                </p>
              </div>
              <div class="about-bx-detail">
                <div class="about-bx-pic radius">
                  <img
                    src="../../assets/images/testimonial/testimonial4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <h6 class="name">Kenneth Fong</h6>
                  <span class="position">Postgraduate Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get In Touch -->
    <section class="get-in-touch">
      <div class="m-r100 m-md-r0 m-sm-r0">
        <h3 class="dz-title mb-lg-0 mb-3">
          Questions ?
          <span>Our experts will help find the grar that’s right for you</span>
        </h3>
      </div>
      <NuxtLink to="/contact-us-3" class="btn btn-light">Get In Touch</NuxtLink>
    </section>
    <!-- Get In Touch End -->

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
