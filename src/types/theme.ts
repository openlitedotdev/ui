import type { ThemeColors } from './color'

export interface ConfigTheme {
  extend?: 'light' | 'dark'
  layout?: LayoutTheme
  colors?: Partial<ThemeColors>
}

export interface BaseUnit {
  small?: string
  medium?: string
  large?: string
}

export type ConfigThemes = Record<string, ConfigTheme>

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
   * If true, the common nextui colors (e.g. "blue", "green", "purple") will not be extended on the theme.
   * @default false
   */
  addCommonColors?: boolean
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

export interface LayoutTheme {
  /**
   * The default font size applied across the components.
   *
   * @default
   * {
   *    small: "0.875rem",
   *    medium: "1rem",
   *    large: "1.125rem"
   * }
   */
  fontSize?: BaseUnit

  /**
   * The default radius applied across the components.
   * we recommend to use `rem` units.
   *
   * @default
   * {
   *  small: 'calc(0.5rem - 2px)',
   *  medium: 'calc(0.5rem - 4px)',
   *  lg: ' 0.5rem',
   *},
   */
  radius?: BaseUnit
}

export type DefaultThemeType = 'light' | 'dark'
export type Color = | Partial<{ foreground: string, DEFAULT: string }> | string

export interface OpacityValue { opacityValue: string, opacityVariable: string }

export type OpacityColor = ({ opacityValue, opacityVariable }: OpacityValue) => string

export interface Resolved {
  variants: { name: string, definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<string, OpacityColor>
}
