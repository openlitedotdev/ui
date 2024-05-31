import type { ConfigThemes } from './tailwindcss'

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
   * The default line height applied across the components.
   *
   * @default
   * {
   *    small: "1.25rem",
   *    medium: "1.5rem",
   *    large: "1.75rem",
   *    DEFAULT: "1.5rem",
   * }
   */
  lineHeight?: BaseUnit
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
  /**
   * The border width applied across the components.
   * @default
   * {
   *    small: '0.063rem',
   *    medium: '0.125rem',
   *    lg: '0.188rem',
   * }
   *
   */
  borderWidth?: BaseUnit
  /**
   * The box shadow applied across the components.
   *
   * @default
   * {
   *   small: 0 1px 2px 0 rgb(0 0 0 / 0.05),
   *   medium: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1),
   *   large: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1),
   * }
   */
  boxShadow?: BaseUnit
}

export interface ConfigTheme {
  extend?: 'light' | 'dark'
  layout?: LayoutTheme
  colors?: Partial<Colors>
}

export type DefaultThemeType = 'light' | 'dark'
export type Color = | Partial<{ foreground: string, DEFAULT: string }> | string

export interface Colors {
  background: Color
  foreground: Color
  default: Color
  primary: Color
  success: Color
  warn: Color
  error: Color
}

export interface BaseColors {
  light: Colors
  dark: Colors
}
export interface BaseUnit {
  small?: string
  medium?: string
  large?: string
}

export interface OpacityValue { opacityValue: string, opacityVariable: string }

export type OpacityColor = ({ opacityValue, opacityVariable }: OpacityValue) => string

export interface Resolved {
  variants: { name: string, definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<string, OpacityColor>
}
