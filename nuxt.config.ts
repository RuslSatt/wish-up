// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/supabase',
  ],
  css: ['~/assets/styles/main.css'],
  supabase: {
    redirectOptions: {
      login: '/auth/login',
      callback: '/auth/confirm',
    },
  },
})
