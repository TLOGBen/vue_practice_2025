// plugins/dayjs.ts
import { defineNuxtPlugin } from '#app'
import dayjs from 'dayjs'
import type { PluginFunc } from 'dayjs'

// Optional Day.js plugins
import utc from 'dayjs/plugin/utc'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import timezone from 'dayjs/plugin/timezone'

// Load your preferred plugins
dayjs.extend(utc)
dayjs.extend(customParseFormat)
dayjs.extend(timezone)

// 民國年擴充
const minguoEraPlugin: PluginFunc = (option, dayjsClass) => {
  const prototype = dayjsClass.prototype
  const originalFormat = prototype.format

  prototype.format = function (formatString: string) {
    const yearOffset = 1911
    const formattedString = formatString.replace(/(\[[^\]]+])|BBBB|BB/g, (match, literal) => {
      if (literal) return literal
      const minguoYear = String(this.year() - yearOffset)
      return match === 'BB' ? minguoYear.slice(-2) : minguoYear
    })
    return originalFormat.bind(this)(formattedString)
  }
}

dayjs.extend(minguoEraPlugin)

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs,
    },
  }
})
