import { useTheme } from 'next-themes'
import React from 'react'
import { FC } from 'react'
import { Box, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { THEME } from '../../../libs/constants'
import styles from './toggleTheme.module.scss'

export const ToggleTheme: FC = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () =>
    setTheme(resolvedTheme === THEME.light ? THEME.dark : THEME.light)

  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color='inherit'>
        {resolvedTheme === THEME.dark ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}

export default ToggleTheme
