import { useContext } from 'react'
import type { OpenUIContextType } from './openui-context'
import { OpenUIContext } from './openui-context'

export function useOpenUIContext(): OpenUIContextType {
  const context = useContext(OpenUIContext)
  if (!context) {
    throw new Error('useOpenUIContext must be used within a OpenUIProvider')
  }
  return context
}
