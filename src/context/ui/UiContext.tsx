import { createContext } from 'react'

interface ContextProps {
  theme: string | undefined
  toggleTheme: () => void
  isMenuOpen: boolean
  toggleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
