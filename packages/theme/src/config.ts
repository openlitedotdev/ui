import { kebabCase, mapKeys } from 'lodash'
import Color from 'color'
import type { ConfigTheme } from './interfaces/theme'
import type { DefaultThemeType } from './interfaces/utils'
import { flattenThemeObject } from './utils/functions'

export interface OpacityValue { opacityValue: string, opacityVariable: string }

export type OpacityColor = ({ opacityValue, opacityVariable }: OpacityValue) => string

export interface Resolved {
  variants: { name: string, definition: string[] }[]
  utilities: Record<string, Record<string, any>>
  colors: Record<string, OpacityColor>
}

const parsedColorsCache: Record<string, number[]> = {}

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

    const flatColors = flattenThemeObject(colors) as Record<string, string>
    const flatLayout = layout ? mapKeys(layout, (value, key) => kebabCase(key)) : {}

    console.warn(flatColors, flatLayout)

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    })

    /**
     * Colors OpenUI
     */
    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue)
        return

      try {
        const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round(2).array()

        parsedColorsCache[colorValue] = parsedColor

        const [h, s, l, defaultAlphaValue] = parsedColor
        const openuiColorVariable = `--${prefix}-${colorName}`
        const openuiOpacityVariable = `--${prefix}-${colorName}-opacity`

        // set the css variable in "@layer utilities"
        resolved.utilities[selector]![openuiColorVariable] = `${h} ${s}% ${l}%`
        // if an alpha value was provided in the color definition, store it in a css variable
        if (typeof defaultAlphaValue === 'number')
          resolved.utilities[selector]![openuiOpacityVariable] = defaultAlphaValue.toFixed(2)

        // set the dynamic color in tailwind config theme.colors
        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
          if (!Number.isNaN(+opacityValue))
            return `hsl(var(${openuiColorVariable}) / ${opacityValue})`

          // if no opacityValue was provided (=it is not parsable to a number)
          // the nextuiOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5)) should have the priority
          // over the tw class based opacity(e.g. "bg-opacity-90")
          // This is how tailwind behaves as for v3.2.4
          if (opacityVariable)
            return `hsl(var(${openuiColorVariable}) / var(${openuiOpacityVariable}, var(${opacityVariable})))`

          return `hsl(var(${openuiColorVariable}) / var(${openuiOpacityVariable}, 1))`
        }
      }
      catch (error: any) {
        // eslint-disable-next-line no-console
        console.log('error', error?.message)
      }
    }
  }
  return resolved
}
