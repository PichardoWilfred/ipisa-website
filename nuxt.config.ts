export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IPISA',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: './favicon.ico'
        },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss', // styles
    '@pinia/nuxt', // state management
    'nuxt-icon', // importing preset icons
    'nuxt-icons', // importing svgs with sub-folder
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        'EB+Garamond': {
          wght: [100, 200, 300, 400, 500, 600],
        },
        Inter: {
          wght: [100, 200, 300, 400, 500, 600],
          ital: [100]
        },
        Raleway: {
          wght: [100, 200, 300, 400, 500, 600],
          ital: [100]
        },
      }
  }],
  ],
})
