// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vesp/nuxt-fontawesome", "nuxt-security"],

  fontawesome: {
    icons: {
      solid: ["arrow-left", "arrow-right"],
    },
  },

  security: {
    corsHandler: {
      origin: "localhost:3001",
    },
  },
});
