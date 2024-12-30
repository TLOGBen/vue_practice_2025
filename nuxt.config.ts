import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ 
          autoImport: true,
          styles: {
            configFile: '/asserts/scss/override/components.scss',
          },
       }))
      })
    },
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})