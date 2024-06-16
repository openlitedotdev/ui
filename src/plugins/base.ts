import type { LayoutTheme } from '@/types/theme'

export const baseTheme: LayoutTheme = {
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
  radius: {
    small: '2px',
    medium: '4px',
    large: '8px',
  },
  lineHeight: {
    small: '16px',
    medium: '20px',
    large: '24px',
  },
  borderWidth: {
    small: '1px',
    medium: '2px',
    large: '3px',
  },
  boxShadow: {
    small: '0px 2px 16px 0px rgba(0, 0, 0, 0.12)',
    medium: '0px 8px 24px 0px rgba(0, 0, 0, 0.16)',
    large: ' 0px 16px 48px -4px rgba(0, 0, 0, 0.24)',
  },
}

export const lightTheme: LayoutTheme = {}
export const darkTheme: LayoutTheme = {}
