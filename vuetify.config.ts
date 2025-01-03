import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { m3Light2025, m3Dark2025 } from './app/utils/vuetify/themes'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'm3Light2025',
    variations: {
      colors: ['primary', 'secondary', 'tertiary'],
      lighten: 9,
      darken: 8,
    },
    themes: {
      m3Light2025,
      m3Dark2025,
    },
  },
})
