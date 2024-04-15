// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    layoutTransition: false,
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800;900&display=swap",
        },
      ],
      script: [],
    },
  },
  components: [
    { path: "~/components/", pathPrefix: false },
    { path: "node_modules/@jamescoyle/vue-icon/lib" },
  ],
});
