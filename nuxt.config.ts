// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-QKL7B3VXD0',
    config: {
      page_title: 'ABID'
    }
  },
  
  css: ['animate.css'],
})
