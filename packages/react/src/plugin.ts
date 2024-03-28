import plugin from 'tailwindcss/plugin'
import { config, cssBase } from '@openui-org/theme'

export const react = plugin(({ addBase }) => {
  addBase({ ...cssBase })
}, config)
