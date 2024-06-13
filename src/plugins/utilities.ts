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

export const DEFAULT_TRANSITION_DURATION = '250ms'

export default {
  /**
   * Transition utilities
   */
  '.transition-background': {
    'transition-property': 'background',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-colors-opacity': {
    'transition-property':
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-width': {
    'transition-property': 'width',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-height': {
    'transition-property': 'height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-size': {
    'transition-property': 'width, height',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-left': {
    'transition-property': 'left',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-opacity': {
    'transition-property': 'transform, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-background': {
    'transition-property': 'transform, background',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-colors': {
    ' transition-property':
      'transform, color, background, background-color, border-color, text-decoration-color, fill, stroke',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
  '.transition-transform-colors-opacity': {
    ' transition-property':
      'transform, color, background, background-color, border-color, text-decoration-color, fill, stroke, opacity',
    'transition-timing-function': 'ease',
    'transition-duration': DEFAULT_TRANSITION_DURATION,
  },
}
export const dataFocusVisibleClasses = [
  'outline-none',
  'data-[focus-visible=true]:z-10',
  'data-[focus-visible=true]:outline-2',
  'data-[focus-visible=true]:outline-focus',
  'data-[focus-visible=true]:outline-offset-2',
]

export const utilities = {}
