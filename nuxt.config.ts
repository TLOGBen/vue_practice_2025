// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // 基本配置
  compatibilityDate: '2024-11-01',

  // 開發工具和服務器配置
  devtools: { enabled: true },
  devServer: {
    port: process.env.ENV_PORT ? Number(process.env.ENV_PORT) : 3000,
  },

  // 未來版本兼容性配置
  future: {
    compatibilityVersion: 4,
  },

  // SSR 配置
  ssr: true,
  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  // 應用配置
  app: {
    buildAssetsDir: 'assets',
  },

  // 構建配置
  build: {
    transpile: ['vuetify'],
  },

  // Vite 配置
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  // CSS 配置
  css: [],

  // auto import 配置
  imports: {
    dirs: [
      '~/types',
    ],
  },

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

  // 應用程序配置
  appConfig: {
    baseUrl: {
      weburl: process.env.ENV_WEB_BASE_URL,
      apiurl: process.env.ENV_API_BASE_URL,
    },
    loginUrl: '/login',
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
})
