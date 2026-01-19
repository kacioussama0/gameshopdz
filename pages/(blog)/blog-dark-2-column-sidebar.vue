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
    <CommonBanner :img="bg" name="Home" title="Blog Dark 2 Column Sidebar" />
    <!--Banner End-->

    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="row">
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.1s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic1.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">20 Apr 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 mt-auto read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.2s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic2.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">10 June 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">Runway Rundown: Decoding Fashion Week’s Best Looks</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.3s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic3.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">16 Sep 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">Closet Confidential: Behind-the-Scenes of a Fashionista</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.4s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic4.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">17 May 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">Fashion Forward: Spotlight on Emerging Designers</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.5s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic5.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">9 Nov 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">Accessorize Me: The Power of Statement Pieces</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" data-wow-delay="0.6s">
                <div class="dz-card style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-5/pic6.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">25 May 2023</li>
                      </ul>
                    </div>
                    <h4 class="dz-title">
                      <RouterLink class="text-white" to="/post-left-sidebar">DIY Couture: Crafting Your Own Fashion Masterpieces</RouterLink>
                    </h4>
                    <RouterLink to="/post-left-sidebar" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.7s">
                <RouterLink to="/blog-dark-2-column-sidebar" class="btn btn-secondary"> Loadmore </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <RouterLink to="" class="side-bar sticky-top mt-lg-0 mt-md-5 mt-3">
              <div class="widget">
                <h5 class="widget-title">Search</h5>
                <div class="search-bx">
                  <form role="search" method="post">
                    <div class="input-group">
                      <input name="text" class="form-control" placeholder="Search Here" type="text" />
                      <span class="input-group-btn">
                        <button class="btn">
                          <i class="icon feather icon-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="widget widget_categories style-1">
                <h5 class="widget-title">Category</h5>
                <ul>
                  <li class="cat-item"><RouterLink to="/blog-category">Dresses</RouterLink> (10)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Top & Blouses</RouterLink> (5)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Boots</RouterLink> (17)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Jewelry</RouterLink> (13)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Makeup</RouterLink> (06)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Fragrances</RouterLink> (17)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Shaving & Grooming</RouterLink> (13)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Jacket</RouterLink> (06)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Coat</RouterLink> (22)</li>
                </ul>
              </div>
              <div class="widget recent-posts-entry">
                <h5 class="widget-title">Latest Post</h5>
                <div class="widget-post-bx">
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic1.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">The Anatomy of an Effective Shopping Cart Page</RouterLink></h6>
                    </div>
                  </div>
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic2.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">Shopping Cart Design User-Friendly Tips and Best Practices</RouterLink></h6>
                    </div>
                  </div>
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic3.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">Shopping Cart Security Keeping Your Customers' Data Safe</RouterLink></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget widget_tag_cloud">
                <h5 class="widget-title">Tags</h5>
                <div class="tagcloud">
                  <RouterLink to="/blog-tag">Vintage </RouterLink>
                  <RouterLink to="/blog-tag">Wedding</RouterLink>
                  <RouterLink to="/blog-tag">Cotton</RouterLink>
                  <RouterLink to="/blog-tag">Linen</RouterLink>
                  <RouterLink to="/blog-tag">Navy</RouterLink>
                  <RouterLink to="/blog-tag">Urban</RouterLink>
                  <RouterLink to="/blog-tag">Business Meeting</RouterLink>
                  <RouterLink to="/blog-tag">Formal</RouterLink>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
