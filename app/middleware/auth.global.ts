import { boolean } from 'zod'

// 定義 Nuxt 路由 middleware (檔名結尾如果是 .global.ts 則為全域 middleware, 否則為局部 middleware)
export default defineNuxtRouteMiddleware((to) => {
  // 獲取使用者登入狀況
  const { status } = useAuth()
  // 獲取 app.config 設定
  const appConfig = useAppConfig()

  // 如果使用者已經登入，或者 route 不需要身份驗證，則直接返回
  if (status.value === 'authenticated' || to.meta.auth === false) {
    return
  }

  // 判斷 route 是否需要身份驗證, 默認應該是空值, 如果是空值則默認需要身份驗證
  const requiresAuth = to.meta.auth instanceof boolean ? to.meta.auth : true
  // 如果需要身份驗證，則跳轉到登入頁面
  if (requiresAuth) {
    return navigateTo(appConfig.loginUrl, { redirectCode: 302 })
  }
})
