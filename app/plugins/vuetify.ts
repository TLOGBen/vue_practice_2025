import { md3 } from 'vuetify/blueprints'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:before-create', (options) => {
    if (import.meta.client) {
      console.log('vuetify:before-create', options)
      // use m3 system
      options.vuetifyOptions.blueprint = md3
    }
  })
})
