import type { ConfigTheme } from './interfaces/theme'
import type { DefaultThemeType } from './interfaces/utils'

interface OpacityValue { opacityValue: string, opacityVariable: string }

type OpacityColor = ({ opacityValue, opacityVariable }: OpacityValue) => string

interface Resolved {
  variants: { name: string, definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<string, OpacityColor>
}

export function config(themes: ConfigTheme = {}, defaultTheme: DefaultThemeType, prefix: string) {
  const resolved: Resolved = {
    variants: [],
    utilities: {},
    colors: {},
  }

  for (const [themeName, { extend, layout, colors }] of Object.entries(themes)) {
    let selector = `.${themeName},[data-theme="${themeName}"]`
    const scheme = themeName === 'light' || themeName === 'dark' ? themeName : extend

    if (themeName === defaultTheme)
      selector = `:root,${selector}`

    resolved.utilities[selector] = scheme ? { 'color-scheme': scheme } : {}
  }
  return resolved
}
