// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Nuxt Layers architecture
  extends: [
    './layers/core',
    './layers/ui',
    './layers/seo',
  ],

  // Modules
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/seo',
    '@nuxtjs/color-mode',
  ],

  // Tailwind CSS v4 via Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  // Full SSG via Nitro — portable static build for pendrive deployment
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  // CSS entry point
  css: ['~/assets/css/main.css'],

  // Color mode — respect system preference
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  // Fonts — self-hosted for zero CLS
  fonts: {
    families: [
      { name: 'Inter', provider: 'bunny', weights: [400, 500, 600, 700, 800] },
    ],
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif'],
  },

  // Favicon
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  // Site metadata for @nuxtjs/seo
  site: {
    url: 'https://neksus.pl',
    name: 'Neksus — Serwis i Sklep Komputerowy Gdańsk',
    description: 'Profesjonalny serwis komputerowy w Gdańsku. Sprzedaż markowych podzespołów, naprawa laptopów, montaż komputerów, obsługa firm B2B. Od 1996 roku.',
    defaultLocale: 'pl',
  },

  // Disable dynamic OG image generation (static site — no runtime needed)
  ogImage: {
    zeroRuntime: true,
  },
})
