import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { SideMenu } from '../ui/SideMenu'
import { Hero } from '../hero/Hero'
import { Box } from '@mui/material'

export const Header = () => {
  return (
    <Box component='header' id="back-to-top-anchor">
      <Navbar />

      <SideMenu />

      <Hero />
    </Box>
  )
}
