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
        ...Objective.style
    }
  }
})
