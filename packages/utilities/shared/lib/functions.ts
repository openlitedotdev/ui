import type { CamelToPascal } from './lib'

export function toKebabCase(string: string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

export function toPascalCase<T extends string>(string: T): CamelToPascal<T> {
  const camelCase = string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase())

  return (camelCase.charAt(0).toUpperCase() + camelCase.slice(1)) as CamelToPascal<T>
}

export function mergeClasses<ClassType = string | undefined | null>(...classes: ClassType[]) {
  return classes
    .filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index
    })
    .join(' ')
}
