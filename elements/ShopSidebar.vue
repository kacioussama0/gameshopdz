<script lang="ts" setup>
import { RouterLink } from "vue-router";
import MultiRangeSlide from "./MultiRangeSlide.vue";

const categories = ref([]);

useFetch("/api/wc/categories", {
}).then(( response) => {

  categories.value = response.data.value;

}).catch((error) => {
  console.error("Error fetching categories:", error);
});

console.log(categories)

</script>

<template>
  <div class="sticky-xl-top">
    <RouterLink to="?" class="panel-close-btn">
      <svg width="35" height="35" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.748 12.5L12.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M12.748 12.5L37.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </RouterLink>
    <div class="shop-filter mt-xl-2 mt-0">
      <RouterLinkside>
        <div class="d-flex align-items-center justify-content-between m-b30">
          <h6 class="title mb-0 fw-normal d-flex">
            <i class="flaticon-filter me-3"></i>
            Filter
          </h6>
        </div>
        <div class="widget widget_search">
          <div class="form-group">
            <div class="input-group">
              <input name="dzSearch" required type="search" class="form-control" placeholder="Search Product" />
              <div class="input-group-addon">
                <button name="submit" value="Submit" type="submit" class="btn">
                  <i class="icon feather icon-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="widget">
          <h6 class="widget-title">Filtrer par prix</h6>
          <MultiRangeSlide />
        </div>



        <div class="widget widget_categories">
          <h6 class="widget-title">Filtrer par Catégories</h6>
          <ul v-for="category in categories">
            <li class="cat-item cat-item-26"><RouterLink :to="`/shop?category=${category.id}`">{{category.name}}</RouterLink></li>
          </ul>
        </div>

        <div class="widget widget_tag_cloud">
          <h6 class="widget-title">Tags</h6>
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
        <RouterLink to="?" class="btn btn-sm font-14 btn-secondary btn-sharp">RESET</RouterLink>
      </RouterLinkside>
    </div>
  </div>
</template>
