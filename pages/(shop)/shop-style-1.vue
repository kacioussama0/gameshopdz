<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";

function lickHandler(e: any) {
  e.currentTarget.classList.toggle("active");
}

function cartHandler(e: any) {
  e.currentTarget.classList.toggle("active");
}
</script>
<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Shop Style 1" />
    <!--Banner End-->

    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row m-auto gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/1.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/2.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/3.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/4.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Athletic Mesh Sports Leggings</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/5.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Vintage Denim Overalls Shorts</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/6.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Satin Wrap Party Blouse</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/7.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Plaid Wool Winter Coat</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/8.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Water-Resistant Windbreaker Jacket</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-6 m-md-b15 m-sm-b0 m-b30">
            <div class="shop-card style-1">
              <div class="dz-media">
                <img src="../../assets/images/shop/product/9.png" alt="image" />
                <div class="shop-meta">
                  <RouterLink to="#" @click.prevent class="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-eye d-md-none d-block"></i>
                    <span class="d-md-block d-none">Quick View</span>
                  </RouterLink>
                  <div class="btn btn-primary meta-icon dz-wishicon" @click="lickHandler">
                    <i class="icon feather icon-heart dz-heart"></i>
                    <i class="icon feather icon-heart-on dz-heart-fill"></i>
                  </div>
                  <div class="btn btn-primary meta-icon dz-carticon" @click="cartHandler">
                    <i class="flaticon flaticon-basket"></i>
                    <i class="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                  </div>
                </div>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Comfy Lounge Jogger Pants</RouterLink></h5>
                <h5 class="price">$80</h5>
              </div>
              <div class="product-tag">
                <span class="badge">Get 20% Off</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row page mt-0">
          <div class="col-md-6">
            <p class="page-text">Showing 1–5 Of 50 Results</p>
          </div>
          <div class="col-md-6">
            <nav aria-label="Blog Pagination">
              <ul class="pagination style-1">
                <li class="page-item"><RouterLink class="page-link active" to="">1</RouterLink></li>
                <li class="page-item"><RouterLink class="page-link" to="">2</RouterLink></li>
                <li class="page-item"><RouterLink class="page-link" to="">3</RouterLink></li>
                <li class="page-item"><RouterLink class="page-link next" to="">Next</RouterLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
