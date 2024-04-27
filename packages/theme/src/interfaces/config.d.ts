import type { ConfigThemes } from '../tailwindcss'
import type { ConfigTheme, LayoutTheme } from './theme'
import type { DefaultThemeType } from './utils'

export interface OpenUIPluginConfig {
  /**
   * The prefix for the css variables.
   * @default "openui"
   */
  prefix?: string
  /**
   * Common layout definitions. These definitions are applied to all themes.
   */
  layout?: LayoutTheme
  /**
   * The theme definitions.
   */
  themes?: ConfigThemes
  /**
   * The default theme to use is light
   * @default "light"
   */
  defaultTheme?: DefaultThemeType
  /**
   * The default theme to extend.
   * @default "light"
   */
  defaultExtendTheme?: DefaultThemeType
}
