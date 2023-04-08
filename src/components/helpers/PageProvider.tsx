import { ThemeProvider as PreferredThemeProvider } from 'next-themes'
import { FC } from 'react'
import MUIThemeProvider from './MUIThemeProvider'

interface Props {
  children: React.ReactNode
}

const PageProvider: FC<Props> = ({ children }) => (
  <PreferredThemeProvider>
    <MUIThemeProvider>{children}</MUIThemeProvider>
  </PreferredThemeProvider>
)

export default PageProvider
