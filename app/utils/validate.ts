import z, { ZodError } from 'zod'

export const validateStrLen = (str: string, min: number = 1, max: number = Number.MAX_VALUE) => {
  try {
    z.string().min(min, `至少需要${min}個字`).max(max, `最多只能${max}個字`).parse(str)
    return true
  }
  catch (err) {
    if (err instanceof ZodError) {
      return err.issues[0]?.message || '輸入錯誤'
    }
    else {
      return '輸入錯誤'
    }
  }
}
