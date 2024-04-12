import plugin from 'tailwindcss/plugin'
import { base, config, dark, ligth } from '@openui-org/theme'
import animate from 'tailwindcss-animate'

export const react = plugin(({ addBase }) => {
  addBase({
    '*': {
      '@apply border-border': {},
    },
    'body': {
      '@apply bg-background text-foreground': {},
      'font-feature-settings': '"rlig" 1, "calt" 1',
    },
  })
  addBase({ ...base })
  addBase({ ...ligth })
  addBase({ ...dark })
}, { ...config, plugin: [animate] })
