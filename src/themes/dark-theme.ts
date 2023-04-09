import { Theme, createTheme } from '@mui/material'
import { baseTheme } from './base-theme'

export const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5BA4B',
    },
    // secondary: {
    //   main: '#212529',
    // },
    // info: {
    //   main: '#fff',
    // },
  },
})
