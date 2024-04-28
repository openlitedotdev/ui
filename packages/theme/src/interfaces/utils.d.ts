export type DefaultThemeType = 'light' | 'dark'
export type Color = | Partial<{ foreground: string, DEFAULT: string }> | string

export interface Colors {
  dark: Color
  primary: Color
  secondary: Color
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
