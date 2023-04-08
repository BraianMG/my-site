import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import PageProvider from '../components/helpers/PageProvider'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  )
}
