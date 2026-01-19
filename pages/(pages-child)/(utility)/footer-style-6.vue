<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { ref } from "vue";
import Footer6 from "~/components/Footer6.vue";
import Header from "~/components/Header.vue";

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
    <CommonBanner :img="bg" name="Home" title="Footer Style 6" />
    <!--Banner End-->

    <div class="content-inner">
      <div class="container">
        <div class="row align-items-center">
          <div class="code-copy">
            <RouterLink to="" id="copyButton" class="btn" @click="copyHandler">{{ copy ? "!Copied" : "Copy" }}</RouterLink>
            <pre class="code-box" id="copyTarget">
&lt;footer class="site-footer footer-map footer-dark"&gt;
&lt;div class="container"&gt;
	&lt;div class="row"&gt;
		&lt;div class="col-md-4 col-lg-4 col-sm-12 px-0"&gt;
			&lt;div class="map-iframe map"&gt;
				&lt;iframe class="" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14444.846145183914!2d75.84806889203723!3d25.16233421040968!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1517832215254" style="border:0; min-height:300px;	height:100%; vertical-align: middle; width:100%;" allowfullscreen=""&gt;&lt;/iframe&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;div class="col-md-8 col-lg-8 col-sm-12"&gt;

			&lt;div class="footer-top m-t30"&gt;
				&lt;div class="row"&gt;
					&lt;div class="col-xl-6 col-md-12"&gt;
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
													&lt;svg width="21" height="21" viewBox="0 0 21 21" fill="none"&gt;
														&lt;path d="M4.20972 10.7344H15.8717" stroke="#0D775E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;
														&lt;path d="M10.0408 4.90112L15.8718 10.7345L10.0408 16.5678" stroke="#0D775E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"&gt;&lt;/path&gt;
													&lt;/svg&gt;
												&lt;/button&gt;
											&lt;/div&gt;
										&lt;/div&gt;
									&lt;/div&gt;
								&lt;/form&gt;
							&lt;/div&gt;
						&lt;/div&gt;
					&lt;/div&gt;
					&lt;div class="col-xl-3 col-6"&gt;
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
					&lt;div class="col-xl-3 col-6"&gt;
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
			&lt;div class="footer-bottom"&gt;
				&lt;div class="fb-inner"&gt;
					&lt;div class="text-start"&gt;
						&lt;p class="copyright-text"&gt;©  &lt;span class="current-year"&gt;2024&lt;/span&gt; &lt;a to="https://www.dexignzone.com/"&gt;DexignZone&lt;/a&gt; Theme. All Rights Reserved.&lt;/p&gt;
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
  <Footer6 />
</template>
