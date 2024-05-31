import { createContext } from './context'

export interface ProviderContextProps {}

export const [ProviderContext, useProviderContext] = createContext<ProviderContextProps>({
  name: 'ProviderContext',
  strict: false,
})
