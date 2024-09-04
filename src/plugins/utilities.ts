export function baseStyles(prefix: string) {
  return {
    color: `hsl(var(--${prefix}-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-background))`,
  }
}

export function tailwind(prefix: string) {
  return {
    fontSize: {
      small: `var(--${prefix}-font-size-small)`,
      medium: `var(--${prefix}-font-size-medium)`,
      large: `var(--${prefix}-font-size-large)`,
    },
    borderRadius: {
      small: `var(--${prefix}-radius-small)`,
      medium: `var(--${prefix}-radius-medium)`,
      large: `var(--${prefix}-radius-large)`,
    },
  }
}

export const DEFAULT_TRANSITION_DURATION = '250ms'
