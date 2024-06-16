import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: true,
  typescript: true,
  markdown: true,
  ignores: ['*.{yaml,yml}'],
})
