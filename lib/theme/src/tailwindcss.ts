import createPlugin from 'tailwindcss/plugin.js'
import { colors } from './colors'
import { defaultTheme } from './default-theme'

const defineConfig = {
  theme: {
    extend: {
      colors,
      ...defaultTheme,
    },
  },
}

export function designSystem() {
  return createPlugin(designSystem, defineConfig)
}
