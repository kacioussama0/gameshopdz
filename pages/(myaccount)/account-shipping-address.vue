<script lang="ts" setup>
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Shipping Address" />
    <!--Banner End-->
    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <form class="row" action="#">
                <h3 class="m-b30">Shipping address</h3>
                <div class="col-md-6">
                  <div class="form-group m-b25">
                    <label class="label-title">First Name</label>
                    <input name="dzName" class="form-control" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group m-b25">
                    <label class="label-title">Last Name</label>
                    <input name="dzName" class="form-control" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group m-b25">
                    <label class="label-title">Company name (optional)</label>
                    <input name="dzName" class="form-control" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="m-b25">
                    <label class="label-title">Country / Region *</label>
                    <div class="dropdown bootstrap-select form-select default-select w-100">
                      <CustomeSelect :options="[{ title: 'India' }, { title: 'Another option' }, { title: 'UK' }, { title: 'Iraq' }]" />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group m-b25">
                    <label class="label-title">Street address *</label>
                    <input name="dzName" class="form-control m-b15" placeholder="House number and street name" />
                    <input name="dzName" class="form-control" placeholder="Apartment, suite, unit, etc. (optional)" />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="m-b25">
                    <label class="label-title">Town / City *</label>
                    <div class="dropdown bootstrap-select form-select default-select w-100">
                      <CustomeSelect :options="[{ title: 'Kota' }, { title: 'Another option' }, { title: 'Jaipur' }, { title: 'Udaipur' }]" />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="m-b25">
                    <label class="label-title">State*</label>
                    <div class="dropdown bootstrap-select form-select default-select w-100">
                      <CustomeSelect :options="[{ title: 'Rajasthan' }, { title: 'Another option' }, { title: 'Rajasthan' }, { title: 'Rajasthan' }]" />
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group m-b25">
                    <label class="label-title">pincode*</label>
                    <input name="dzName" class="form-control" />
                  </div>
                </div>
              </form>
              <button class="btn btn-secondary">Save changes</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
