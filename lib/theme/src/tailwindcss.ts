import createPlugin from 'tailwindcss/plugin.js'
import { colors } from './colors'
import { defaultTheme } from './default-theme'

function designSystem() {}

const defineConfig = {
  theme: {
    extend: {
      colors,
      ...defaultTheme,
    },
  },
}

export default createPlugin(designSystem, defineConfig)
