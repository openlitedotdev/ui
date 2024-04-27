import type { LayoutTheme } from '../../interfaces/theme'

export const themes: LayoutTheme = {
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
  borderWidth: {
    small: '0.063rem',
    medium: '0.125rem',
    large: '0.188rem',
  },
  boxShadow: {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
}

export const themesDark: LayoutTheme = {
  boxShadow: {
    small: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    medium: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    large: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
}
