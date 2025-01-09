export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: process.env.ENV_API_BASE_URL,
    onRequest({ request, options, error }) {
      // console.log('onRequest', request, options, error)
      // TODO: add auth part
      // if (session.value?.token) {
      //   options.headers.set('Authorization', `Bearer ${session.value?.token}`)
      // }
    },
    async onResponseError({ response }) {
      // console.log('onResponseError', response)
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo('/login'))
      }
    },
  })

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  }
})
