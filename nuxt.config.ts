// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // 模塊配置
  modules: [
    '@nuxt/fonts',
    'vuetify-nuxt-module',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@formkit/auto-animate',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
    '@nuxt/icon',
    'nuxt-security',
    '@sidebase/nuxt-auth',
  ],

  // SSR 配置
  ssr: true,

  // auto import 配置
  imports: {
    dirs: [
      '~/types',
    ],
  },

  // 開發工具和服務器配置
  devtools: { enabled: true },

  // 應用配置
  app: {
    buildAssetsDir: 'assets',
    baseURL: '/test/',
  },

  // CSS 配置
  css: [],

  router: {
    options: {
      hashMode: false,
    },
  },

  // 應用程序配置
  appConfig: {
    baseUrl: {
      weburl: process.env.ENV_WEB_BASE_URL,
      apiurl: process.env.ENV_API_BASE_URL,
    },
    loginUrl: '/login',
  },

  // 構建配置
  build: {
    transpile: ['vuetify'],
  },

  // 基本配置
  devServer: {
    port: process.env.ENV_PORT ? Number(process.env.ENV_PORT) : 3000,
  },

  // 未來版本兼容性配置
  future: {
    compatibilityVersion: 4,
  },

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },
  compatibilityDate: '2024-11-01',

  // Vite 配置
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  // auth 配置
  auth: {
    provider: {
      type: 'local',
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Vuetify 配置
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
