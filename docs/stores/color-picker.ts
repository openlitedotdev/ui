import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Variant = 'default' | 'primary' | 'success' | 'warn' | 'error'

interface Theme {
  value: Variant
  label: string
}

interface ThemeStore {
  themes: Theme[]
  currentTheme: Variant
  setTheme: (theme: Variant) => void
}

const useThemeStore = create<ThemeStore>()(
  persist(
    set => ({
      themes: [
        { value: 'default', label: 'Default' },
        { value: 'primary', label: 'Primary' },
        { value: 'success', label: 'Success' },
        { value: 'warn', label: 'Warn' },
        { value: 'error', label: 'Error' },
      ],
      currentTheme: 'default',
      setTheme: (theme) => {
        set({ currentTheme: theme })
      },
    }),
    {
      name: 'open-theme',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useThemeStore
