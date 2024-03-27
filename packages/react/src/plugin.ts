import plugin from 'tailwindcss/plugin'
import { config, cssBase } from '@desing-system/theme'

export const react = plugin(({ addBase }) => {
  addBase({ ...cssBase })
}, config)
