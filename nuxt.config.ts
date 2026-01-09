// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/preloader.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/slick.css',
    '~/assets/css/metisMenu.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/animate.min.css',
    '~/assets/css/jquery.fancybox.min.css',
    '~/assets/css/fontAwesome5Pro.css',
    '~/assets/css/ionicons.min.css',
    '~/assets/css/default.css',
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      script: [
        { src: '/assets/js/vendor/jquery.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/bootstrap.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/metisMenu.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/slick.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery.fancybox.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/isotope.pkgd.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/owl.carousel.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/jquery-ui-slider-range.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/ajax-form.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/wow.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/imagesloaded.pkgd.min.js', tagPosition: 'bodyClose' },
        { src: '/assets/js/main.js', tagPosition: 'bodyClose' },
      ]
    }
  }

})
