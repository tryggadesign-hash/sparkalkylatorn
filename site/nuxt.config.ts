// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  nitro: {
    preset: 'netlify',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'sv' },
      title: 'Sparkalkylatorn — Hur mycket kan du spara genom att samla dina lån?',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Räkna ut hur mycket du kan spara genom att samla dina lån. Baserat på data från SCB, Finansinspektionen och Riksbanken.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'sv_SE' },
        { property: 'og:site_name', content: 'Sparkalkylatorn — Trygga.com' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
