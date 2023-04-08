import { useTheme } from 'next-themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme, lightTheme } from '../../themes'
import { FC, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const MUIThemeProvider: FC<Props> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme)
  }, [resolvedTheme])

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MUIThemeProvider
