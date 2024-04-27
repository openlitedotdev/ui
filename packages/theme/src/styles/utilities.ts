export function baseStyles(prefix: string) {
  return {
    color: `hsl(var(--${prefix}-foreground))`,
    backgroundColor: `hsl(var(--${prefix}-background))`,
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
