// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: process.env.ENV_PORT ? Number(process.env.ENV_PORT) : 3000,
  },
  future: {
    compatibilityVersion: 4,
  },
  ssr: true,
  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },
  app: {
    buildAssetsDir: 'assets',
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk/[hash].js',
          entryFileNames: 'assets/entry/[hash].js',
          assetFileNames: 'assets/[ext]/[hash].[ext]',
        },
      },
    },
  },
  css: [],
  modules: [
    '@nuxt/fonts',
    'vuetify-nuxt-module',
    '@nuxt/eslint',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@formkit/auto-animate',
    '@unocss/nuxt',
    'nuxt-auth-utils',
  ],
  appConfig: {
    baseUrl: {
      weburl: process.env.ENV_WEB_BASE_URL,
      apiurl: process.env.ENV_API_BASE_URL,
    },
  },
  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },
      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/style/override/settings.scss',
      },
    },
  },
})
