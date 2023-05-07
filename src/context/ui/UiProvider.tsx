import { FC, useReducer, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { UiContext, uiReducer } from './'
import { darkTheme, lightTheme } from '@/themes'
import { THEME } from '@/libs/constants'
import { ThemeProvider, CssBaseline } from '@mui/material'

export interface UiState {
  theme: string | undefined
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
  theme: undefined,
  isMenuOpen: false,
}

interface Props {
  children: React.ReactNode
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  useEffect(() => {
    resolvedTheme === THEME.light
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme)
  }, [resolvedTheme])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleTheme = () =>
    setTheme(resolvedTheme === THEME.light ? THEME.dark : THEME.light)

  const toggleSideMenu = () => dispatch({ type: '[UI] - ToggleMenu' })

  if (!mounted) return null

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <UiContext.Provider
        value={{
          ...state,
          theme: resolvedTheme,
          toggleTheme,
          toggleSideMenu,
        }}
      >
        {children}
      </UiContext.Provider>
    </ThemeProvider>
  )
}
