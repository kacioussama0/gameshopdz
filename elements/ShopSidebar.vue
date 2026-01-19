<script lang="ts" setup>
import { RouterLink } from "vue-router";
import MultiRangeSlide from "./MultiRangeSlide.vue";
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
          <h6 class="widget-title">Price</h6>
          <MultiRangeSlide />
        </div>
        <div class="widget">
          <h6 class="widget-title">Color</h6>
          <div class="d-flex align-items-center flex-wrap color-filter ps-2">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel01" value="#000000" aria-label="..." checked />
              <span style="background-color: rgb(0, 0, 0)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel02" value="#9BD1FF" aria-label="..." />
              <span style="background-color: rgb(155, 209, 255)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel03" value="#21B290" aria-label="..." />
              <span style="background-color: rgb(33, 178, 144)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel04" value="#FEC4C4" aria-label="..." />
              <span style="background-color: rgb(254, 196, 196)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel05" value="#FF7354" aria-label="..." />
              <span style="background-color: rgb(255, 115, 84)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel06" value="#51EDC8" aria-label="..." />
              <span style="background-color: rgb(81, 237, 200)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel07" value="#B77CF3" aria-label="..." />
              <span style="background-color: rgb(183, 124, 243)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel08" value="#FF4A76" aria-label="..." />
              <span style="background-color: rgb(255, 74, 118)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel09" value="#3E68FF" aria-label="..." />
              <span style="background-color: rgb(62, 104, 255)"></span>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel20" value="#7BEF68" aria-label="..." />
              <span style="background-color: rgb(123, 239, 104)"></span>
            </div>
          </div>
        </div>

        <div class="widget">
          <h6 class="widget-title">Size</h6>
          <div class="btn-group product-size">
            <input type="radio" class="btn-check" name="btnradio1" id="btnradio101" checked />
            <label class="btn" for="btnradio101">4</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol02" />
            <label class="btn" for="btnradiol02">6</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol03" />
            <label class="btn" for="btnradiol03">8</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol04" />
            <label class="btn" for="btnradiol04">10</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol05" />
            <label class="btn" for="btnradiol05">12</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol06" />
            <label class="btn" for="btnradiol06">14</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol07" />
            <label class="btn" for="btnradiol07">16</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol08" />
            <label class="btn" for="btnradiol08">18</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradiol09" />
            <label class="btn" for="btnradiol09">20</label>
          </div>
        </div>

        <div class="widget widget_categories">
          <h6 class="widget-title">Category</h6>
          <ul>
            <li class="cat-item cat-item-26"><RouterLink to="/blog-category">Dresses</RouterLink> (10)</li>
            <li class="cat-item cat-item-36"><RouterLink to="/blog-category">Top &amp; Blouses</RouterLink> (5)</li>
            <li class="cat-item cat-item-43"><RouterLink to="/blog-category">Boots</RouterLink> (17)</li>
            <li class="cat-item cat-item-27"><RouterLink to="/blog-category">Jewelry</RouterLink> (13)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Makeup</RouterLink> (06)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Fragrances</RouterLink> (17)</li>
            <li class="cat-item cat-item-40"><RouterLink to="/blog-category">Shaving &amp; Grooming</RouterLink> (13)</li>
            <li class="cat-item cat-item-43"><RouterLink to="/blog-category">Jacket</RouterLink> (06)</li>
            <li class="cat-item cat-item-36"><RouterLink to="/blog-category">Coat</RouterLink> (22)</li>
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
