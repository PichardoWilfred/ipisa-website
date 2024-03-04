export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [ '@/assets/css/main.css'],
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
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com',
      modifiers: {
        effect: 'sharpen:100',
        quality: 'auto:best',
      }
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    // domains: ['https://stellular-nasturtium-aaff86.netlify.app/']
  },
  modules: [
    '@nuxt/image',
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
          wght: [100, 200, 300, 400, 500, 600, 700, 900],
          ital: [100, 200, 300, 400, 500, 600, 700, 900]
        },
      }
    }],
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }]
  ],
})