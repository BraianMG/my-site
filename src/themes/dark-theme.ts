import { Theme, createTheme } from '@mui/material'

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F5BA4B',
    },
    text: {
      primary: '#F5BA4B'
    },
    secondary: {
      main: '#3A64D8',
    },
    info: {
      main: '#fff',
    },
  },
})
