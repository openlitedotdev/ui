import type { Config } from 'tailwindcss'
import { dark, error, primary, secondary, success, warn } from './colors'
import { boxShadow } from './box-shadows'
import { borderRadius } from './radius'
import { container } from './screens'

export const config: Config = {
  content: [],
  darkMode: ['class'],
  theme: {
    container,
    extend: {
      colors: {
        success,
        primary,
        secondary,
        warn,
        dark,
        error,
      },
      boxShadow,
      borderRadius,
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
