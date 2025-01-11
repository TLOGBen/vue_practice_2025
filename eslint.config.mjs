// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'
import pluginVue from 'eslint-plugin-vue'

export default withNuxt(
  // Your custom configs here
  stylistic.configs['recommended-flat'],
  pluginVue.configs['flat/recommended'],
).overrideRules({
  // 1. 禁用規則 "vue/multi-word-component-names", 因為 nuxt 會預設使用 pages name 組成 router name
  'vue/multi-word-component-names': 'off',
})
