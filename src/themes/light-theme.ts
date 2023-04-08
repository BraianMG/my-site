import { Theme, createTheme } from '@mui/material'

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F5BA4B',
    },
    text: {
      primary: '#3A64D8'
    },
    secondary: {
      main: '#fceed2',
    },
    info: {
      main: '#C0C8E5',
    },
  },
})
