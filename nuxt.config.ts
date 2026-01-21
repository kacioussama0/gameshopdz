// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    wcConsumerKey: process.env.WC_CONSUMER_KEY,
    wcConsumerSecret: process.env.WC_CONSUMER_SECRET,
    public: {
      wcStoreUrl: process.env.WC_STORE_URL,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "lightgallery/css/lg-zoom.css",
    "lightgallery/css/lg-thumbnail.css",
    "lightgallery/css/lightgallery.css",
    "~/assets/other/swiper/swiper-bundle.css",
    "~/assets/css/skin/skin-1.css",
    "~/assets/css/style.css",
  ],
  plugins: [
    // "~/plugins/bootstrap.client.mjs",
  ],
  app: {
    head: {
      title: "Gameshopdz - Leader Gaming Shop en Algérie",
      meta: [

        {
          name: "description",
          content:
            "Gameshopdz est le leader des boutiques de jeux vidéo en Algérie, offrant une vaste sélection de jeux, consoles et accessoires pour tous les passionnés de gaming.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Roboto:wght@100;300;400;500;700;900&display=swap" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },
        {
          src: "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js",
        },
      ],
    },
  },
});

declare class Isotope {
  constructor(element: HTMLElement | null, options: any);
  arrange(options: { filter: string }): void;
}
