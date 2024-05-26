// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  plugins: ["~/plugins/preline.client.ts"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }


})