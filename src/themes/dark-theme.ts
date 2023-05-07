import { Theme, createTheme } from '@mui/material'
import { baseTheme } from './base-theme'
import { PRIMARY_COLOR } from './variables'

export const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_COLOR,
    },
    // secondary: {
    //   main: '#212529',
    // },
    // info: {
    //   main: '#fff',
    // },
  },
})
