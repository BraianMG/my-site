import { Theme, createTheme } from '@mui/material'
import localFont from 'next/font/local'

export const Objective = localFont({
  src: [
    {
      path: '../fonts/Objective-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Objective-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../fonts/Objective-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
})

export const SFSportsNightNSAlternate = localFont({
  src: '../fonts/SFSportsNightNSAlternate.ttf',
})

export const baseTheme: Theme = createTheme({
  typography: {
    allVariants: {
      ...Objective.style,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.common.white,
          borderRadius: '10px',
          height: '3rem',
        }),
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.palette.divider,
          borderRadius: '1rem',
          ':first-of-type': {
            borderRadius: '1rem',
          },
          ':last-of-type': {
            borderRadius: '1rem',
          },
          ':before': {
            display: 'none',
          },
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
          },
          '& input:-moz-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
          },
          '& input-ms-input-autofill': {
            WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
          },
        }),
      },
    },
  },
})
