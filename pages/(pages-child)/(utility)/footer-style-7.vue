<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { ref } from "vue";
import Footer7 from "~/components/Footer7.vue";
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
    <CommonBanner :img="bg" name="Home" title="Footer Style 7" />
    <!--Banner End-->

    <div class="content-inner">
      <div class="container">
        <div class="row align-items-center">
          <div class="code-copy">
            <RouterLink to="" id="copyButton" class="btn" @click="copyHandler">{{ copy ? "!Copied" : "Copy" }}</RouterLink>
            <pre class="code-box" id="copyTarget">
&lt;footer class="site-footer  footer-dark"&gt;
&lt;div class="footer-top"&gt;
	&lt;div class="container"&gt;
		&lt;div class="row"&gt;
			&lt;div class="col-md-12"&gt;
				&lt;div class="widget widget_about me-2 text-center"&gt;
					&lt;div class="footer-logo logo-white"&gt;
						&lt;a to="/"&gt;&lt;img src="images/logo-white.svg" alt=""&gt;&lt;/a&gt;
					&lt;/div&gt;
				&lt;/div&gt;
			&lt;/div&gt;
			&lt;div class="col-md-12"&gt;
				&lt;div class="widget widget_services text-center"&gt;
					&lt;ul class="nav-inline mb-3 text"&gt;
						&lt;li&gt;&lt;a to="/about-us"&gt;About Us&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="/blog-dark-2-column-sidebar"&gt;Latest News&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="/faqs-2"&gt;Help Desk&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="/contact-us-1"&gt;Contact Us&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
					&lt;ul class="nav-inline"&gt;
						&lt;li&gt;&lt;a to="javascript:void();" target="_blank" class="site-button-link facebook hover"&gt;&lt;i class="fab fa-facebook-f"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="javascript:void();" target="_blank" class="site-button-link google-plus hover"&gt;&lt;i class="fab fa-google-plus-g"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="javascript:void();" target="_blank" class="site-button-link linkedin hover"&gt;&lt;i class="fab fa-linkedin-in"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="javascript:void();" target="_blank" class="site-button-link instagram hover"&gt;&lt;i class="fab fa-instagram"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a to="javascript:void();" target="_blank" class="site-button-link twitter hover"&gt;&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;&lt;/a&gt;&lt;/li&gt;
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
				&lt;p class="copyright-text"&gt;©  &lt;span class="current-year"&gt;2024&lt;/span&gt; &lt;a to="https://www.dexignzone.com/"&gt;DexignZone&lt;/a&gt; Theme. All Rights Reserved.&lt;/p&gt;
			&lt;/div&gt;
			&lt;div class="col-lg-6 col-md-12 text-end"&gt;
				&lt;div class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-lg-end"&gt;
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
  <Footer7 />
</template>
