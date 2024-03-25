import plugin from 'tailwindcss/plugin'
import { config, cssBase, cssBaseDark } from '@desing-system/theme'

export const react = plugin(({ addBase }) => {
  addBase({ ...cssBase, ...cssBaseDark })
}, config)
