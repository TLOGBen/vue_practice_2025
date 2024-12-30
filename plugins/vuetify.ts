import '@mdi/font/css/materialdesignicons.css'
import '@/asserts/scss/override/global.scss'
import '@/asserts/scss/index.scss'

import { createVuetify, type ThemeDefinition } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'my2025theme',
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 2,
        darken: 3,
      },
      themes: {
        my2025theme,
      },
    },
  })
  app.vueApp.use(vuetify)
})

const my2025theme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#8e4d2f',
    'on-primary': '#ffffff',
    secondary: '#865318',
    'on-secondary': '#ffffff',
    background: '#fff8f6',
    'on-background': '#231a16',
    surface: '#F6EAE5',
    'on-surface': '#53443e',
    'surface-bright': '#F6EAE5',
    'surface-variant': '#e8d6d0',
    'on-surface-variant': '#4e403a',
    success: '#4d662a',
    'on-success': '#ffffff',
    warning: '#6e528b',
    'on-warning': '#ffffff',
    error: '#690005',
    'on-error': '#ffb4ab',
    info: '#7e7544',
    'on-info': '#ffffff',
  },
}