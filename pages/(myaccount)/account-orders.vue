<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
import Header from "~/components/Header.vue";
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Orders" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card">
              <div class="table-responsive table-style-1">
                <table class="table table-hover mb-3">
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Date Purchased</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#34VB5540K83</RouterLink></td>
                      <td>May 21, 2024</td>
                      <td>$358.75</td>
                      <td><span class="badge bg-info m-0">In Progress</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#78A643CD409</RouterLink></td>
                      <td>December 09, 2024</td>
                      <td><span>$760.50</span></td>
                      <td><span class="badge bg-danger m-0">Canceled</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="" class="fw-medium">#112P45A90V2</RouterLink></td>
                      <td>October 15, 2024</td>
                      <td>$1,264.00</td>
                      <td><span class="badge bg-warning m-0">Delayed</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#28BA67U0981</RouterLink></td>
                      <td>July 19, 2024</td>
                      <td>$198.35</td>
                      <td><span class="badge bg-success m-0">Delivered</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#502TR872W2</RouterLink></td>
                      <td>April 04, 2024</td>
                      <td>$2,133.90</td>
                      <td><span class="badge bg-success m-0">Delivered</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#47H76G09F33</RouterLink></td>
                      <td>March 30, 2024</td>
                      <td>$86.40</td>
                      <td><span class="badge bg-success m-0">Delivered</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#53U76G09E38</RouterLink></td>
                      <td>April 21, 2024</td>
                      <td>$86.40</td>
                      <td><span class="badge bg-success m-0">Delivered</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                    <tr>
                      <td><RouterLink to="/account-order-details" class="fw-medium">#31M76G09G76</RouterLink></td>
                      <td>May 07, 2024</td>
                      <td>$112.40</td>
                      <td><span class="badge bg-success m-0">Delivered</span></td>
                      <td><RouterLink to="/account-order-details" class="btn-link text-underline p-0">View</RouterLink></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Pagination-->
              <div class="d-flex justify-content-center">
                <nav aria-label="Table Pagination">
                  <ul class="pagination style-1">
                    <li class="page-item"><RouterLink class="page-link" to="">Prew</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">1</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">2</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">3</RouterLink></li>
                    <li class="page-item"><RouterLink class="page-link" to="">Next</RouterLink></li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
