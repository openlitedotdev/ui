import { flatten } from 'flat'

export function removeDefaultKeys<T extends object>(obj: T) {
  const newObj = {}

  for (const key in obj) {
    if (key.endsWith('-DEFAULT')) {
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      newObj[key.replace('-DEFAULT', '')] = obj[key]
      continue
    }
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    newObj[key] = obj[key]
  }

  return newObj
}

/**
 *
 * Flatten theme object and remove default keys
 *
 * @param obj theme object
 * @returns object with flattened keys
 */
export function flattenThemeObject<TTarget>(obj: TTarget) {
  return removeDefaultKeys(
    flatten(obj, {
      safe: true,
      delimiter: '-',
    }) as object,
  )
}
/**
 * Determines if the theme is a base theme
 *
 * @param theme string
 * @returns "light" | "dark
 */
export const isBaseTheme = (theme: string) => theme === 'light' || theme === 'dark'
