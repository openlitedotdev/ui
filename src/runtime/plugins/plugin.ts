import type plugin from 'tailwindcss/plugin.js'
import deepMerge from 'deepmerge'
import get from 'lodash.get'
import omit from 'lodash.omit'
import forEach from 'lodash.foreach'
import type { ConfigTheme, OpenUIPluginConfig } from '../types/plugins'
import { isBaseTheme } from '../utils/functions'
import { baseTheme } from './base'
import {
  darkTheme,
  lightTheme,
  colors as semanticColors,
} from './ui'
import { definePlugin } from './create-plugin'

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
    ? deepMerge(baseTheme, userLayout)
    : baseTheme

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
