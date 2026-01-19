<script lang="ts" setup>
import bg from "@/assets/images/background/bg1.jpg";
import profile3 from "@/assets/images/profile3.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import { ref } from "vue";
import Header from "~/components/Header.vue";

const avatar = ref(profile3);

function updateAvat(event: any) {
  avatar.value = URL.createObjectURL(event.target.files[0]);
}
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Account Profile" />
    <!--Banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <div class="profile-edit">
                <div class="avatar-upload d-flex align-items-center">
                  <div class="position-relative">
                    <div class="avatar-preview thumb">
                      <div id="imagePreview" :style="`background-image: url(${avatar})`"></div>
                    </div>
                    <div class="change-btn thumb-edit d-flex align-items-center flex-wrap">
                      <input type="file" class="form-control d-none" id="imageUpload" accept=".png, .jpg, .jpeg" @change="updateAvat" />
                      <label for="imageUpload" class="btn btn-light ms-0"><i class="fa-solid fa-camera"></i></label>
                    </div>
                  </div>
                </div>
                <div class="clearfix">
                  <h2 class="title mb-0">John Doe</h2>
                  <span class="text text-primary">johndoe@example.com</span>
                </div>
              </div>
              <form action="#" class="row">
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">First Name</label>
                    <input name="dzName" required class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">Last Name</label>
                    <input name="dzName" required class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">Email address</label>
                    <input type="email" name="dzEmail" required class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">Phone</label>
                    <input type="email" name="dzPhone" required class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">New password (leave blank to leave unchanged)</label>
                    <input type="password" name="dzOldPassword" required class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group m-b25">
                    <label class="label-title">Confirm new password</label>
                    <input type="password" name="dzNewPassword" required class="form-control" />
                  </div>
                </div>
              </form>
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                <div class="form-group">
                  <div class="custom-control custom-checkbox text-black">
                    <input type="checkbox" class="form-check-input" id="basic_checkbox_1" />
                    <label class="form-check-label" for="basic_checkbox_1">Subscribe me to Newsletter</label>
                  </div>
                </div>
                <button class="btn btn-primary mt-3 mt-sm-0" type="button">Update profile</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
