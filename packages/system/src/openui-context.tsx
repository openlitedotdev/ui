import type { ReactNode } from 'react'
import { createContext } from 'react'

export interface OpenUIContextType {}

export const OpenUIContext = createContext<OpenUIContextType | null>(null)

export function OpenUIProvider({ children }: { children: ReactNode }) {
  return <OpenUIContext.Provider value={{}}>{children}</OpenUIContext.Provider>
}
