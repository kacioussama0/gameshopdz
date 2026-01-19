<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { ref } from "vue";
import Footer3 from "~/components/Footer3.vue";

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
    <CommonBanner :img="bg" name="Home" title="Footer Style 3" />
    <!--Banner End-->

    <div class="content-inner">
      <div class="container">
        <div class="row align-items-center">
          <div class="code-copy">
            <RouterLink
              to=""
              id="copyButton"
              class="btn"
              @click="copyHandler"
              >{{ copy ? "!Copied" : "Copy" }}</RouterLink
            >
            <pre class="code-box" id="copyTarget">
&lt;footer class="site-footer footer-dark style-3"&gt;
&lt;div class="container"&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-4 col-lg-4 col-md-12 px-0"&gt;
			&lt;div class="row dz-post g-0 spno"&gt;
				&lt;div class="col-lg-6 col-6"&gt;
					&lt;div class="dz-post-media"&gt;
						&lt;img src="../assets/images/posts/pic1.png" alt=""&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="col-lg-6 col-6"&gt;
					&lt;div class="dz-post-media"&gt;
						&lt;img src="../assets/images/posts/pic2.png" alt=""&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="col-lg-6  col-6"&gt;
					&lt;div class="dz-post-media"&gt;
						&lt;img src="../assets/images/posts/pic3.png" alt=""&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;div class="col-lg-6 col-6"&gt;
					&lt;div class="dz-post-media"&gt;
						&lt;img src="../assets/images/posts/pic4.png" alt=""&gt;
					&lt;/div&gt;
				&lt;/div&gt;
				&lt;a to="" class="instagram-link"&gt;
					&lt;div class="follow-link bg-white wow bounceIn" data-wow-delay="0.1s"&gt;
						&lt;div class="follow-link-icon"&gt;
							&lt;img src="../assets/images/insta-follow.png" alt=""&gt;
						&lt;/div&gt;
						&lt;div class="follow-link-content"&gt;
							&lt;h4&gt;Share with #Pixio&lt;/h4&gt;
							&lt;p&gt;Follow @Pixio for inspiration.&lt;/p&gt;
						&lt;/div&gt;
					&lt;/div&gt;
				&lt;/a&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="col-md-8 col-lg-8 col-md-12"&gt;
			&lt;div class="footer-top"&gt;
				&lt;div class="dz-custom-container"&gt;
					&lt;div class="row align-items-center logo-topbar gx-0 wow fadeInUp" data-wow-delay="0.1s"&gt;
						&lt;div class="col-12 col-sm-6"&gt;
							&lt;div class="footer-logo logo-white mb-0"&gt;
								&lt;a to="/"&gt;&lt;img src="../assets/images/logo-white.svg" alt=""&gt;&lt;/a&gt;
							&lt;/div&gt;
						&lt;/div&gt;
						&lt;div class="col-12 col-sm-6"&gt;
							&lt;div class="dz-social-icon style-1"&gt;
								&lt;ul&gt;
									&lt;li&gt;
										&lt;a to="/https://www.facebook.com/dexignzone" target="_blank"&gt;
											&lt;i class="fa-brands fa-facebook-f"&gt;&lt;/i&gt;
										&lt;/a&gt;
									&lt;/li&gt;
									&lt;li&gt;
										&lt;a to="/s" target="_blank"&gt;
											&lt;i class="fa-brands fa-twitter"&gt;&lt;/i&gt;
										&lt;/a&gt;
									&lt;/li&gt;
									&lt;li&gt;
										&lt;a to="/https://www.linkedin.com/showcase/3686700/admin/" target="_blank"&gt;
											&lt;i class="fa-brands fa-linkedin"&gt;&lt;/i&gt;
										&lt;/a&gt;
									&lt;/li&gt;
									&lt;li&gt;
										&lt;a to="/https://www.instagram.com/dexignzone/" target="_blank"&gt;
											&lt;i class="fa-brands fa-instagram"&gt;&lt;/i&gt;
										&lt;/a&gt;
									&lt;/li&gt;
								&lt;/ul&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/div&gt;
					&lt;div class="row"&gt;
						&lt;div class="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.2s"&gt;
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
						&lt;div class="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.3s"&gt;
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
						&lt;div class="col-lg-4 col-md-4 col-sm-4 col-12 wow fadeInUp" data-wow-delay="0.4s"&gt;
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
			&lt;div class="footer-bottom wow fadeInUp" data-wow-delay="0.5s"&gt;
				&lt;div class="fb-inner"&gt;
					&lt;div class="text-center"&gt;
						&lt;p class="copyright-text"&gt;© &lt;span class="current-year"&gt;2024&lt;/span&gt; &lt;a to="https://www.dexignzone.com/"&gt;DexignZone&lt;/a&gt; Theme. All Rights Reserved.&lt;/p&gt;
					&lt;/div&gt;
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
  <Footer3 />
</template>
