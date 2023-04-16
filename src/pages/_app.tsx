import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import { UiProvider } from '@/context/ui'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider as PreferredThemeProvider } from 'next-themes'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PreferredThemeProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </PreferredThemeProvider>
  )
}

export default appWithTranslation(App)
