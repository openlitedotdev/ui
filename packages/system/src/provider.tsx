import type { ProviderContextProps } from './create-provider'
import { ProviderContext } from './create-provider'

export interface OpenUIProviderProps extends ProviderContextProps {
  children: React.ReactNode
}

export const OpenUIProvider: React.FC<OpenUIProviderProps> = ({ children }) => {
  return (
    <ProviderContext value={{}}>
      {children}
    </ProviderContext>
  )
}
