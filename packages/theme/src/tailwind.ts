import type plugin from 'tailwindcss/plugin.js'
import deepMerge from 'deepmerge'
import { forEach, get, omit } from 'lodash'
import type { OpenUIPluginConfig } from './interfaces/config'
import type { ConfigTheme } from './interfaces/theme'
import {
  darkTheme,
  defatulTheme,
  lightTheme,
  colors as semanticColors,
} from './styles'
import { definePlugin } from './create-plugin'
import { isBaseTheme } from './utils/functions'

const DEFAULT_PREFIX = 'openui'

export type ConfigThemes = Record<string, ConfigTheme>

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

  return definePlugin(themes, defaultTheme, defaultPrefix)
}
