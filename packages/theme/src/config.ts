// ! Colors Generate
// ! [`openui`](https://github.com/open-ss-lab/ui).
// !
// ! This loop generate color scheme
// ! Inspired by [`nextui`](https://github.com/nextui-org/nextui)

import Color from 'color'
import kebabCase from 'lodash.kebabcase'
import mapKeys from 'lodash.mapkeys'
import type { ConfigTheme } from './interfaces/theme'
import type { DefaultThemeType, Resolved } from './interfaces/utils'
import { flattenThemeObject } from './utils/functions'

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
    const flatLayout = layout ? mapKeys(layout, (_, key) => kebabCase(key)) : {}

    resolved.variants.push({
      name: themeName,
      definition: [`&.${themeName}`, `&[data-theme='${themeName}']`],
    })

    for (const [colorName, colorValue] of Object.entries(flatColors)) {
      if (!colorValue)
        return

      try {
        const parsedColor = parsedColorsCache[colorValue] || Color(colorValue).hsl().round(2).array()

        parsedColorsCache[colorValue] = parsedColor

        const [h, s, l, defaultAlphaValue] = parsedColor

        const openuiColorVariable = `--${prefix}-${colorName}`
        const openuiOpacityVariable = `--${prefix}-${colorName}-opacity`

        resolved.utilities[selector]![openuiColorVariable] = `${h} ${s}% ${l}%`

        if (typeof defaultAlphaValue === 'number')
          resolved.utilities[selector]![openuiOpacityVariable] = defaultAlphaValue.toFixed(2)

        resolved.colors[colorName] = ({ opacityVariable, opacityValue }) => {
          if (!Number.isNaN(+opacityValue))
            return `hsl(var(${openuiColorVariable}) / ${opacityValue})`

          if (opacityVariable)
            return `hsl(var(${openuiColorVariable}) / var(${openuiOpacityVariable}, var(${opacityVariable})))`

          return `hsl(var(${openuiColorVariable}) / var(${openuiOpacityVariable}, 1))`
        }
      }
      catch (error) {
        console.error('error', (error as Error).message)
      }
    }

    for (const [key, value] of Object.entries(flatLayout)) {
      if (!value)
        return

      const layoutVariablePrefix = `--${prefix}-${key}`

      if (typeof value === 'object') {
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          const nestedLayoutVariable = `${layoutVariablePrefix}-${nestedKey}`

          resolved.utilities[selector]![nestedLayoutVariable] = nestedValue
        }
      }
      else {
        const formattedValue = layoutVariablePrefix.includes('opacity') && typeof value === 'number'
          ? value.toString().replace(/^0\./, '.')
          : value

        resolved.utilities[selector]![layoutVariablePrefix] = formattedValue
      }
    }
  }
  return resolved
}
