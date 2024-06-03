export function baseStyles(prefix: string) {
  return {
    color: `hsl(var(--${prefix}-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-background))`,
  }
}

export function tailwind(prefix: string) {
  return {
    fontSize: {
      small: [`var(--${prefix}-font-size-small)`, `var(--${prefix}-line-height-small)`],
      medium: [`var(--${prefix}-font-size-medium)`, `var(--${prefix}-line-height-medium)`],
      large: [`var(--${prefix}-font-size-large)`, `var(--${prefix}-line-height-large)`],
    },
    borderRadius: {
      small: `var(--${prefix}-radius-small)`,
      medium: `var(--${prefix}-radius-medium)`,
      large: `var(--${prefix}-radius-large)`,
    },
    borderWidth: {
      small: `var(--${prefix}-border-width-small)`,
      medium: `var(--${prefix}-border-width-medium)`,
      large: `var(--${prefix}-border-width-large)`,
    },
    boxShadow: {
      small: `var(--${prefix}-box-shadow-small)`,
      medium: `var(--${prefix}-box-shadow-medium)`,
      large: `var(--${prefix}-box-shadow-large)`,
    },
  }
}

export const dataFocusVisibleClasses = [
  'outline-none',
  'data-[focus-visible=true]:z-10',
  'data-[focus-visible=true]:outline-2',
  'data-[focus-visible=true]:outline-focus',
  'data-[focus-visible=true]:outline-offset-2',
]

export const utilities = {}
