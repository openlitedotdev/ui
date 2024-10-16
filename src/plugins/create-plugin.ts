import type { ConfigThemes, DefaultThemeType } from '@/types/theme'
import plugin from 'tailwindcss/plugin.js'
import { commonColors } from './colors'

import { config } from './config'
import { baseStyles, DEFAULT_TRANSITION_DURATION, tailwind } from './ui'

export function definePlugin(themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string, addCommonColors: boolean,
) {
  const resolved = config(themes, defaultTheme, prefix)

  return plugin(({ addBase, addUtilities, addVariant }) => {
    addBase({
      ':root, [data-theme]': {
        ...baseStyles(prefix),
      },
    })

    addUtilities({ ...resolved?.utilities })

    resolved?.variants.forEach((variant) => {
      addVariant(variant.name, variant.definition)
    })
  }, {
    theme: {
      extend: {
        colors: {
          ...(addCommonColors ? commonColors : {}),
          ...resolved?.colors,
        },
        scale: {
          80: '0.8',
          85: '0.85',
        },
        transitionDuration: {
          0: '0ms',
          250: '250ms',
          400: '400ms',
          DEFAULT: DEFAULT_TRANSITION_DURATION,
        },
        ...tailwind(prefix),
      },
    },
  })
}
