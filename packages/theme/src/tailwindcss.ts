import plugin from 'tailwindcss/plugin.js'
import { forEach, get, omit } from 'lodash'
import deepMerge from 'deepmerge'
import type { OpenUIPluginConfig } from './interfaces/config'
import type { DefaultThemeType } from './interfaces/utils'
import type { ConfigTheme } from './interfaces/theme'
import { baseStyles, darkTheme, defatulTheme, lightTheme, colors as semanticColors, utilities } from './styles'
import { config } from './config'
import { isBaseTheme } from './utils/functions'

const DEFAULT_PREFIX = 'openui'

export type ConfigThemes = Record<string, ConfigTheme>

function createPlugin(themes: ConfigThemes = {}, defaultTheme: DefaultThemeType, prefix: string) {
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
        fontSize: {
          small: [`var(--${prefix}-font-size-small)`, `var(--${prefix}-line-height-small)`],
          medium: [`var(--${prefix}-font-size-medium)`, `var(--${prefix}-line-height-medium)`],
          large: [`var(--${prefix}-font-size-large)`, `var(--${prefix}-line-height-large)`],
        },
        borderRadius: {
          small: `var(--${prefix}-radius-small)`,
          medium: `var(--${prefix}-radius-medium)`,
          large: `var(--${prefix}-radius-large)`,
        },
        borderWidth: {
          small: `var(--${prefix}-border-width-small)`,
          medium: `var(--${prefix}-border-width-medium)`,
          large: `var(--${prefix}-border-width-large)`,
        },
        boxShadow: {
          small: `var(--${prefix}-box-shadow-small)`,
          medium: `var(--${prefix}-box-shadow-medium)`,
          large: `var(--${prefix}-box-shadow-large)`,
        },
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

  const userLightColors = get(themeObject, 'light.colors', {})
  const userDarkColors = get(themeObject, 'dark.colors', {})

  const defaultLayoutObj = userLayout && typeof userLayout === 'object'
    ? deepMerge(defatulTheme, userLayout)
    : defatulTheme

  const baseLayouts = {
    light: {
      ...defaultLayoutObj,
      ...lightTheme,
    },
    dark: {
      ...defaultLayoutObj,
      ...darkTheme,
    },
  }

  const otherThemes = omit(themeObject, ['light', 'dark']) || {}

  forEach(otherThemes, ({ extend, colors, layout }, themeName) => {
    const baseTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme

    if (colors && typeof colors === 'object')
      otherThemes[themeName].colors = deepMerge(semanticColors[baseTheme], colors)

    if (layout && typeof layout === 'object')
      otherThemes[themeName].layout = deepMerge(extend ? baseLayouts[extend] : defaultLayoutObj, layout)
  })

  const light: ConfigTheme = {
    layout: deepMerge(baseLayouts.light, get(themeObject, 'light.layout', {})),
    colors: deepMerge(semanticColors.light, userLightColors),
  }

  const dark = {
    layout: deepMerge(baseLayouts.dark, get(themeObject, 'dark.layout', {})),
    colors: deepMerge(semanticColors.dark, userDarkColors),
  }

  const themes = {
    light,
    dark,
    ...otherThemes,
  }

  return createPlugin(themes, defaultTheme, defaultPrefix)
}
