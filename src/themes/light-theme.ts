import { Theme, createTheme } from '@mui/material'
import { baseTheme } from './base-theme'
import { PRIMARY_COLOR } from './variables'

export const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    // text: {
    //   primary: '#3A64D8'
    // },
    // secondary: {
    //   main: '#fceed2',
    // },
    // info: {
    //   main: '#C0C8E5',
    // },
  },
})
