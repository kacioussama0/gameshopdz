<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { ref } from "vue";
import Footer2 from "~/components/Footer2.vue";

const text = ref();
const copy = ref(false);

function copyHandler() {
  text.value = document.querySelector("#copyTarget")?.textContent;
  navigator.clipboard.writeText(text.value);
  copy.value = true;
  setTimeout(() => {
    copy.value = false;
  }, 2000);
}

definePageMeta({
  layout: "utility",
});
</script>

<template>
  <header class="site-header mo-left header">
    <Header />
  </header>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Footer Style 2" />
    <!--Banner End-->

    <div class="content-inner">
      <div class="container">
        <div class="row align-items-center">
          <div class="code-copy">
            <RouterLink to="" id="copyButton" class="btn" @click="copyHandler">{{ copy ? "!Copied" : "Copy" }}</RouterLink>
            <pre class="code-box" id="copyTarget">
&lt;footer class="site-footer footer-dark"&gt;
&lt;div class="footer-top"&gt;
	&lt;div class="container"&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-xl-3 col-md-4"&gt;
				&lt;div class="widget widget_about"&gt;
					&lt;div class="footer-logo logo-white"&gt;
						&lt;a to="/"&gt;&lt;img src="images/logo-white.svg" alt=""&gt;&lt;/a&gt;
					&lt;/div&gt;
					&lt;ul class="widget-address"&gt;
						&lt;li&gt;
							&lt;p&gt;&lt;span&gt;Address&lt;/span&gt; : 451 Wall Street, UK, London&lt;/p&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;p&gt;&lt;span&gt;E-mail&lt;/span&gt; : example@info.com&lt;/p&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;p&gt;&lt;span&gt;Phone&lt;/span&gt; : (064) 332-1233&lt;/p&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
					&lt;div class="subscribe_widget"&gt;
						&lt;h6 class="title fw-medium text-capitalize"&gt;subscribe to our newsletter&lt;/h6&gt;
						&lt;form class="dzSubscribe style-1" action="script/mailchamp.php" method="post"&gt;
							&lt;div class="dzSubscribeMsg"&gt;&lt;/div&gt;
							&lt;div class="form-group"&gt;
								&lt;div class="input-group mb-0"&gt;
									&lt;input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email Address"&gt;
									&lt;div class="input-group-addon"&gt;
										&lt;button name="submit" value="Submit" type="submit" class="btn"&gt;
											&lt;i class="icon feather icon-arrow-right"&gt;&lt;/i&gt;
										&lt;/button&gt;
									&lt;/div&gt;
								&lt;/div&gt;
							&lt;/div&gt;
						&lt;/form&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-xl-3 col-md-4"&gt;
				&lt;div class="widget widget_post"&gt;
					&lt;h5 class="footer-title"&gt;Recent Posts&lt;/h5&gt;
					&lt;ul&gt;
						&lt;li&gt;
							&lt;div class="dz-media"&gt;
								&lt;img src="images/shop/product/small/1.png" alt=""&gt;
							&lt;/div&gt;
							&lt;div class="dz-content"&gt;
								&lt;h6 class="name"&gt;&lt;a to=""&gt;Cozy Knit Cardigan Sweater&lt;/a&gt;&lt;/h6&gt;
								&lt;span class="time"&gt;July 23, 2023&lt;/span&gt;
							&lt;/div&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;div class="dz-media"&gt;
								&lt;img src="images/shop/product/small/2.png" alt=""&gt;
							&lt;/div&gt;
							&lt;div class="dz-content"&gt;
								&lt;h6 class="name"&gt;&lt;a to=""&gt;Sophisticated Swagger Suit&lt;/a&gt;&lt;/h6&gt;
								&lt;span class="time"&gt;July 23, 2023&lt;/span&gt;
							&lt;/div&gt;
						&lt;/li&gt;
						&lt;li&gt;
							&lt;div class="dz-media"&gt;
								&lt;img src="images/shop/product/small/3.png" alt=""&gt;
							&lt;/div&gt;
							&lt;div class="dz-content"&gt;
								&lt;h6 class="name"&gt;&lt;a to=""&gt;Athletic Mesh Sports Leggings&lt;/a&gt;&lt;/h6&gt;
								&lt;span class="time"&gt;July 23, 2023&lt;/span&gt;
							&lt;/div&gt;
						&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-xl-2 col-md-3"&gt;
				&lt;div class="widget widget_services"&gt;
					&lt;h5 class="footer-title"&gt;Our Stores&lt;/h5&gt;
					&lt;ul&gt;
						&lt;li&gt;&lt;a to=""&gt;New York&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;London SF&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Edinburgh&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Los Angeles&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Chicago&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Las Vegas&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-xl-2 col-md-3"&gt;
				&lt;div class="widget widget_services"&gt;
					&lt;h5 class="footer-title"&gt;Useful Links&lt;/h5&gt;
					&lt;ul&gt;
						&lt;li&gt;&lt;a to=""&gt;Privacy Policy&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Returns&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Terms &amp; Conditions&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Contact Us&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Latest News&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Our Sitemap&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-xl-2 col-md-3"&gt;
				&lt;div class="widget widget_services"&gt;
					&lt;h5 class="footer-title"&gt;Footer Menu&lt;/h5&gt;
					&lt;ul&gt;
						&lt;li&gt;&lt;a to=""&gt;Instagram profile&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;New Collection&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Woman Dress&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Contact Us&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to=""&gt;Latest News&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer-bottom"&gt;
	&lt;div class="container"&gt;
		&lt;div class="row fb-inner"&gt;
			&lt;div class="col-lg-6 col-md-12 text-start"&gt;
				&lt;p class="copyright-text"&gt;©  &lt;span class="current-year"&gt;2024&lt;/span&gt;   &lt;a to="https://www.dexignzone.com/"&gt;DexignZone&lt;/a&gt; Theme. All Rights Reserved.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-lg-6 col-md-12 text-end"&gt;
				&lt;div class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end"&gt;
					&lt;span class="me-3"&gt;We Accept: &lt;/span&gt;
					&lt;img src="images/footer-img.png" alt=""&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
&lt;/footer&gt;
					</pre
            >
          </div>
        </div>
      </div>
      <!-- Code Box End -->
    </div>
  </div>
  <Footer2 />
</template>
