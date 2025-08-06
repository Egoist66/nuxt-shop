// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
   features: {
    devLogs: true,

   },
  components: [
    {
      path: "~/components",
    },
    {
      path: "~/widgets",
    },
  ],
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
  ],

  vue: {
    propsDestructure: true,
    
  },
  experimental: {
    asyncContext: true,
    componentIslands: true,
  },

  css: ["~/assets/css/tailwind.css", "~/assets/css/main.scss"],
  typescript: {
    typeCheck: import.meta.dev,
  },
});
