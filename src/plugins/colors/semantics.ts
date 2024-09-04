import { readableColor } from 'color2k'
import { commonColors as common } from './commons'
import type { SemanticBaseColors, ThemeColors } from '@/types/color'
import { swapColorValues } from '@/utils/functions'

export const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: '#ffffff',
    },
    foreground: {
      ...common.neutral,
      DEFAULT: '#11181C',
    },
  },
  dark: {
    background: {
      DEFAULT: '#000000',
    },
    foreground: {
      ...swapColorValues(common.neutral),
      DEFAULT: '#ECEDEE',
    },
  },
}

export const themeColorsLight: ThemeColors = {
  ...base.light,
  default: {
    ...common.neutral,
    foreground: '#FFFFFF',
    DEFAULT: '#000000',
  },
  primary: {
    ...common.azure,
    foreground: readableColor(common.azure[500]),
    DEFAULT: common.azure[500],
  },
  success: {
    ...common.emerald,
    foreground: readableColor(common.emerald[500]),
    DEFAULT: common.emerald[500],
  },
  warn: {
    ...common.amber,
    foreground: readableColor(common.amber[500]),
    DEFAULT: common.amber[500],
  },
  error: {
    ...common.crimson,
    foreground: readableColor(common.crimson[500]),
    DEFAULT: common.crimson[500],
  },
}

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  default: {
    ...common.neutral,
    foreground: '#000000',
    DEFAULT: '#FFFFFF',
  },
  primary: {
    ...swapColorValues(common.azure),
    foreground: readableColor(common.azure[500]),
    DEFAULT: common.azure[500],
  },
  success: {
    ...swapColorValues(common.emerald),
    foreground: readableColor(common.emerald[500]),
    DEFAULT: common.emerald[500],
  },
  warn: {
    ...swapColorValues(common.amber),
    foreground: readableColor(common.amber[500]),
    DEFAULT: common.amber[500],
  },
  error: {
    ...swapColorValues(common.crimson),
    foreground: readableColor(common.crimson[500]),
    DEFAULT: common.crimson[500],
  },
}

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
}
