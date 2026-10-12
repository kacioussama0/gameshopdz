// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  vite: {
    server: {
      allowedHosts: [
        '048e-105-98-31-217.ngrok-free.app',
        'slick-pay.com',
        'gameshopdz.com',
      ]
    }
  },

  runtimeConfig: {
    wcConsumerKey: process.env.WC_CONSUMER_KEY,
    wcConsumerSecret: process.env.WC_CONSUMER_SECRET,
    public: {
      wcStoreUrl: process.env.WC_STORE_URL,
      // Absolute site URL for canonical links, Open Graph and the sitemap
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://gameshopdz.com',
    },
  },

  ssr: true,
  nitro: { preset: 'node-server' },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  css: [
    "~/assets/other/swiper/swiper-bundle.css",
    "~/assets/css/skin/skin-1.css",
    "~/assets/css/style.css",
    "~/assets/css/design-system.css",
    "~/assets/css/rtl.css",
  ],

  plugins: [
    // "~/plugins/bootstrap.client.mjs",
  ],

  app: {
    head: {
      title: "Gameshopdz - Leader Gaming Shop en Algérie",
      meta: [
        // Browser UI colour on mobile, matching the header
        { name: "theme-color", content: "#0F3375" },
        { name: "application-name", content: "Gameshopdz" },
        { name: "apple-mobile-web-app-title", content: "Gameshopdz" },
        {
          name: "description",
          content:
            "Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        // Icons: .ico for old browsers, PNG for tabs/bookmarks, Apple + manifest for home screens
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Cairo:wght@400;500;600;700;800&display=swap" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js",
        },
        // the Jotform reviews script is loaded on demand by components/ReviewsWidget.vue
      ],
    },
  },

  modules: ["@nuxtjs/algolia", "@nuxt/image", "@nuxtjs/i18n"],

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://gameshopdz.com",
    strategy: "no_prefix",
    defaultLocale: "fr",
    langDir: "locales",
    locales: [
      { code: "fr", language: "fr-DZ", name: "Français", dir: "ltr", file: "fr.json" },
      { code: "ar", language: "ar-DZ", name: "العربية", dir: "rtl", file: "ar.json" },
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_lang",
      redirectOn: "root",
      fallbackLocale: "fr",
    },
  },
  image: {
    domains: ["woo.gameshopdz.com"],
  },
});

declare class Isotope {
  constructor(element: HTMLElement | null, options: any);
  arrange(options: { filter: string }): void;
}