import type { LayoutTheme } from '@typings/theme'

export const baseTheme: LayoutTheme = {
  fontSize: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
  },
  radius: {
    small: 'calc(0.5rem - 2px)',
    medium: 'calc(0.5rem - 4px)',
    large: ' 0.5rem',
  },
  lineHeight: {
    small: '1.25rem',
    medium: '1.5rem',
    large: '1.75rem',
  },
  borderWidth: {
    small: '0.063rem',
    medium: '0.125rem',
    large: '0.188rem',
  },
  boxShadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0,0.23)',
    large: ' 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
  },
}

export const lightTheme: LayoutTheme = {}
export const darkTheme: LayoutTheme = {
  boxShadow: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    large: ' 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
  },
}
