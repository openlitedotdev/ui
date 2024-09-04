import plugin from 'tailwindcss/plugin.js'
import { config } from './config'
import { commonColors } from './colors'

import { DEFAULT_TRANSITION_DURATION, baseStyles, tailwind } from './ui'
import type { ConfigThemes, DefaultThemeType } from '@/types/theme'

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
