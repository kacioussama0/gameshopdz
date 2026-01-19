<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import Header from "~/components/Header.vue";
import { CountUp } from "countup.js";


onMounted(() => {
  const countUp = new CountUp("about_count", 50, {
    duration: 50,
  });
  countUp.start();
});
</script>
<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="About Me" />
    <!--Banner End-->

    <section class="content-inner overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-head wow fadeInUp m-md-r100" data-wow-delay="0.1s">
              <h2 class="title">Pixio Your Style, Quality, Individuality - Redefining Fashion Together.</h2>
              <p>
                At Pixio, we are on a mission to redefine fashion by blending style, quality, and individuality into every garment we offer. We believe that what you wear is an extension of your
                unique personality, and it should reflect your values and aspirations.
              </p>
            </div>
            <div class="author-bx-detail m-b40 wow fadeInUp" data-wow-delay="0.2s">
              <div class="author-bx-pic radius">
                <img src="../../assets/images/testimonial/testimonial4.jpg" alt="" />
              </div>
              <div>
                <h6 class="name">Kenneth Fong</h6>
                <span class="position">Ceo and founder</span>
              </div>
            </div>
            <div class="accordion dz-accordion accordion-sm wow fadeInUp m-b50" data-wow-delay="0.3s" id="accordionFaq">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <RouterLink to="/#" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How can I contact customer support?
                    <span class="toggle-close"></span>
                  </RouterLink>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
                  <div class="accordion-body">
                    <p class="m-b0">
                      If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <RouterLink to="/#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Can I cancel my order?
                    <span class="toggle-close"></span>
                  </RouterLink>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
                  <div class="accordion-body">
                    <p class="m-b0">
                      If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <RouterLink to="/#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Do you offer international shipping?
                    <span class="toggle-close"></span>
                  </RouterLink>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
                  <div class="accordion-body">
                    <p class="m-b0">
                      If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <RouterLink to="/#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Can I track my order in real-time?
                    <span class="toggle-close"></span>
                  </RouterLink>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFaq">
                  <div class="accordion-body">
                    <p class="m-b0">
                      If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <RouterLink to="/#" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    How do I know if a product is in stock?
                    <span class="toggle-close"></span>
                  </RouterLink>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFaq">
                  <div class="accordion-body">
                    <p class="m-b0">
                      If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-sale">
              <div class="row">
                <div class="col-lg-5 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.4s">
                  <div class="about-content">
                    <h2 class="title d-flex align-item-center">
                      <span class="counter" id="about_count">0</span>+
                    </h2>
                    <p class="text">Items Sale</p>
                  </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-6 col-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="about-content">
                    <h2 class="title">400%</h2>
                    <p class="text">Return on investment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="row g-xl-4 g-md-4 g-3">
              <div class="col-xl-8 col-lg-8 col-sm-8 col-8 wow fadeInUp" data-wow-delay="0.4s">
                <div class="about-thumb">
                  <img src="../../assets/images/about/pic4.jpg" alt="" class="rounded" />
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.5s">
                <div class="about-thumb">
                  <img src="../../assets/images/about/pic5.jpg" alt="" class="rounded" />
                </div>
              </div>
              <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                <div class="about-thumb">
                  <img src="../../assets/images/about/pic6.jpg" alt="" class="rounded" />
                </div>
              </div>
              <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.7s">
                <div class="about-thumb">
                  <img src="../../assets/images/about/pic7.jpg" alt="" class="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Start-->
    <section class="about-style4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="side-content">
              <div class="about-thumb">
                <img src="../../assets/images/girl.png" alt="" />
              </div>
              <div class="our-customer wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp">
                <h6>Our Satisfied User</h6>
                <ul>
                  <li class="customer-image">
                    <img src="../../assets/images/testimonial/pic1.png" alt="" />
                  </li>
                  <li class="customer-image">
                    <img src="../../assets/images/testimonial/pic2.png" alt="" />
                  </li>
                  <li class="total-customer">
                    <span class="font-14">+12K</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-6 m-b30 aos-item wow fadeInUp order-lg-2 order-1" data-wow-delay="0.3s">
            <div>
              <div class="section-head">
                <h2 class="title">
                  What our clients say <br />
                  about us
                </h2>
              </div>
              <Swiper class="swiper swiper-five" :modules="[Navigation]" :navigation="{ nextEl: '.about-button-next', prevEl: '.about-button-prev' }" :loop="true" :speed="1200">
                <SwiperSlide class="swiper-slide">
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src="../../assets/images/testimonial/testimonial4.jpg" alt="" />
                      </div>
                      <div>
                        <h6 class="name">Kenneth Fong</h6>
                        <span class="position">Postgraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide class="swiper-slide">
                  <div class="about-content">
                    <p class="para-text">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <div class="about-bx-detail">
                      <div class="about-bx-pic radius">
                        <img src="../../assets/images/testimonial/testimonial4.jpg" alt="" />
                      </div>
                      <div>
                        <h6 class="name">Joe Do</h6>
                        <span class="position">Undergraduate Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <div class="pagination-align">
                  <div class="about-button-prev btn-prev">
                    <i class="flaticon flaticon-left-chevron"></i>
                  </div>
                  <div class="about-button-next btn-next">
                    <i class="flaticon flaticon-chevron"></i>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <img src="../../assets/images/line-shap.png" alt="" class="line" />
    </section>
    <!-- About End -->

    <!-- Companies -->
    <section class="content-inner-1 companies bg-light">
      <div class="container">
        <div class="section-inner">
          <div class="section-head style-3 wow fadeInUp" data-wow-delay="0.1s">
            <h2 class="title">We’re just keep growing with 6.3k trusted companies</h2>
            <p>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
          </div>
          <div class="row gx-3 companies-inner">
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.1s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo1.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.2s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo2.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.3s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo3.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.4s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo4.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.5s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo5.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.6s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo6.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.7s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo7.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.8s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo8.png" alt="" />
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Companies End -->
  </div>
</template>
