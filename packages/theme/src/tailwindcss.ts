import type plugin from 'tailwindcss/plugin.js'
import type { ConfigTheme, OpenUIPluginConfig } from '@theme/types'
import deepMerge from 'deepmerge'
import get from 'lodash.get'
import omit from 'lodash.omit'
import forEach from 'lodash.foreach'
import {
  darkTheme,
  defatulTheme,
  lightTheme,
  colors as semanticColors,
} from './theme'
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

  const customLightColors = get(themeObject, 'light.colors', {})
  const customDarkColors = get(themeObject, 'dark.colors', {})

  const mergedLayout = userLayout && typeof userLayout === 'object'
    ? deepMerge(defatulTheme, userLayout)
    : defatulTheme

  const mergedThemeLayouts = {
    light: {
      ...mergedLayout,
      ...lightTheme,
    },
    dark: {
      ...mergedLayout,
      ...darkTheme,
    },
  }

  const otherThemes = omit(themeObject, ['light', 'dark']) || {}

  forEach(otherThemes, ({ extend, colors, layout }, themeName) => {
    const defaultExtensionTheme = extend && isBaseTheme(extend) ? extend : defaultExtendTheme

    if (colors && typeof colors === 'object')
      otherThemes[themeName].colors = deepMerge(semanticColors[defaultExtensionTheme], colors)

    if (layout && typeof layout === 'object')
      otherThemes[themeName].layout = deepMerge(extend ? mergedThemeLayouts[extend] : mergedLayout, layout)
  })

  const light: ConfigTheme = {
    layout: deepMerge(mergedThemeLayouts.light, get(themeObject, 'light.layout', {})),
    colors: deepMerge(semanticColors.light, customLightColors),
  }

  const dark: ConfigTheme = {
    layout: deepMerge(mergedThemeLayouts.dark, get(themeObject, 'dark.layout'), {}),
    colors: deepMerge(semanticColors.dark, customDarkColors),
  }

  const themes = {
    light,
    dark,
    ...otherThemes,
  }

  return definePlugin(themes, defaultTheme, defaultPrefix)
}
