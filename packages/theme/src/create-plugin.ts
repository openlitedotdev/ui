import plugin from 'tailwindcss/plugin.js'
import type { DefaultThemeType } from './types'
import type { ConfigThemes } from './tailwindcss'
import { config } from './config'
import { animations, baseStyles, tailwind, utilities } from './theme'

export function definePlugin(themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string) {
  const resolved = config(themes, defaultTheme, prefix)

  return plugin(({ addBase, addUtilities, addVariant }) => {
    addBase({
      ':root, [data-theme]': {
        ...baseStyles(prefix),
      },
    })

    addUtilities({ ...resolved?.utilities, ...utilities })

    resolved?.variants.forEach((variant) => {
      addVariant(variant.name, variant.definition)
    })
  }, {
    theme: {
      extend: {
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        colors: {
          ...resolved?.colors,
        },
        scale: {
          80: '0.8',
          85: '0.85',
        },
        ...tailwind(prefix),
        ...animations,
      },
    },
  })
}
