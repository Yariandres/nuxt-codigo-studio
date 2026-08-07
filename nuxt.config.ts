// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Server-only secrets (filled from NUXT_* env vars)
    stripeSecretKey: '',
    stripeWebhookSecret: '',
    resendApiKey: '',
    emailFrom: '',
    public: {
      // Public base URL used for Stripe redirect + email links
      siteUrl: 'http://localhost:3000',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pl' },
      title: 'AI Business Starter System — workbook dla właścicieli firm',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Praktyczny system, który pokazuje, gdzie AI ma sens w Twojej firmie — i jak zbudować pierwszy działający proces w 7 dni. Interaktywny workbook, 50 stron.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap',
        },
      ],
    },
  },
})
