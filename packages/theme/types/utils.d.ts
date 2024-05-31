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
