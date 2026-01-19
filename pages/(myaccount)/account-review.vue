<script lang="ts" setup>
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Review" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="row">
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile1.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Michel Poe</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile2.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Celesto Anderson</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile3.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Monsur Rahman Lito</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile4.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Johan Doe</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile1.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Michel Poe</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile2.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Celesto Anderson</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile3.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Monsur Rahman Lito</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
              <div class="col-md-6 m-b30">
                <div class="review-card">
                  <div class="review-head">
                    <div class="review-media">
                      <img src="../../assets/images/team/profile4.jpg" alt="" />
                    </div>
                    <div class="clearfix">
                      <h5 class="mb-0">Johan Doe</h5>
                      <div class="star-rating">
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow me-1"></i>
                        <i class="fa fa-star text-yellow"></i>
                      </div>
                    </div>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
