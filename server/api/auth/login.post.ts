import { z } from 'zod'

export const loginFormVin = z.object({
  username: z.string({
    required_error: '請輸入 email',
  }).email({
    message: '請輸入有效的 email',
  }), password: z.string({
    required_error: '請輸入密碼',
  }).min(8, {
    message: '密碼至少 8 個字元',
  }),
})
export default defineEventHandler(async (event) => {
  await clearUserSession(event)
  const { username, password } = await readValidatedBody(event, loginFormVin.parse)
  if (username === 'admin@admin.com' && password === '12345678') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'John Doe',
      },
    })
    return {
      success: true, message: '登入成功',
    }
  }
  throw createError({
    statusCode: 401, message: 'Bad credentials',
  })
})
