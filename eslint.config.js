import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  typescript: true,

  ignores: ['/**/node_modules/**'],
})
