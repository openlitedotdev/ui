import plugin from 'tailwindcss/plugin.js'
import type { OpenUIPluginConfig } from './interfaces/config'
import type { DefaultThemeType } from './interfaces/utils'
import type { ConfigTheme } from './interfaces/theme'
import { baseStyles, utilities } from './styles'
import { config } from './config'

const DEFAULT_PREFIX = 'openui'

function createPlugin(themes: ConfigTheme = {}, defaultTheme: DefaultThemeType, prefix: string) {
  const resolved = config(themes, defaultTheme, prefix)

  return plugin(({ addBase, addUtilities, addVariant }) => {
    addBase({
      ':root, [data-theme]': {
        ...baseStyles(prefix),
      },
    })

    addUtilities({ ...resolved?.utilities, ...utilities })

    resolved.variants.forEach((variant) => {
      addVariant(variant.name, variant.definition)
    })
  }, {
    theme: {
      extend: {
        ...resolved.colors,
      },
    },
  })
}

export function openui(config: OpenUIPluginConfig = {}): ReturnType<typeof plugin> {
  const {
    themes: themeObject = {},
    defaultTheme = 'light',
    layout: userLayout,
    defaultExtendTheme = 'light',
    prefix: defaultPrefix = DEFAULT_PREFIX,
  } = config

  // logic

  const themes = {}

  return createPlugin(themes, defaultTheme, defaultPrefix)
}
