import type { BaseUnit, Colors } from './utils'

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
  lineHeight?: FontThemeUnit
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
