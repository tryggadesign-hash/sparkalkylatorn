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
      title: 'Sparkalkylatorn — Räkna ut hur mycket du sparar på att samla lån | Trygga.com',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Gratis kalkylator för lånekonsolidering. Se hur mycket du kan spara varje månad genom att samla dina lån till ett — baserat på data från SCB, Finansinspektionen och Riksbanken.',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Trygga.com' },
        { name: 'keywords', content: 'samla lån, lånekonsolidering, spara pengar lån, jämför räntor, skuldsanering, samla lån kalkylator' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'sv_SE' },
        { property: 'og:site_name', content: 'Sparkalkylatorn — Trygga.com' },
        { property: 'og:image', content: 'https://sparkalkylatorn.trygga.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@trygga' },
        { name: 'twitter:image', content: 'https://sparkalkylatorn.trygga.com/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://sparkalkylatorn.trygga.com/' },
        // hreflang: svenska (Sverige) — primärt målspråk
        {
          rel: 'alternate',
          hreflang: 'sv-SE',
          href: 'https://sparkalkylatorn.trygga.com/',
        },
        // hreflang: x-default för alla andra språk/regioner
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: 'https://sparkalkylatorn.trygga.com/',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Trygga.com',
            url: 'https://trygga.com',
            logo: 'https://trygga.com/logo.png',
            description:
              'Trygga.com är en svensk låneförmedlare som hjälper privatpersoner att jämföra och samla lån för att spara pengar.',
            sameAs: [
              'https://www.facebook.com/trygga',
              'https://www.linkedin.com/company/trygga',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              availableLanguage: 'Swedish',
              url: 'https://trygga.com/kontakt',
            },
          }),
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})
