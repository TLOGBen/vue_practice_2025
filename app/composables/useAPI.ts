import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(url: string | (() => string), options?: UseFetchOptions<T>) {
  return new Promise((resolve, reject) => {
    useFetch(url, {
      ...options, $fetch: useNuxtApp().$api as typeof $fetch,
    }).then(resolve).catch(reject)
  })
}
