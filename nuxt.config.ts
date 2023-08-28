export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  app: {
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
    '@nuxtjs/tailwindcss',
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
