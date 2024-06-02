// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxt/fonts", "@nuxt/image"],

  plugins: ["~/plugins/preline.client.ts"],
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
  
})