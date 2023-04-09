import NextLink from 'next/link'
import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { navItems } from '@/libs/constants'
import { useUI } from '@/hooks/useUI'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'
import ToggleTheme from './ToggleTheme'

export const Navbar = () => {
  const { toggleSideMenu } = useUI()

  return (
    <AppBar component='nav'>
      <Toolbar>
        <NextLink href='#' passHref>
          <Link display='flex' alignItems='center'>
            <Image src={logo} alt='BMG logo' height={40} />
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(item => (
            <Button
              key={item.href}
              component='a'
              href={item.href}
              sx={{ color: '#fff', textTransform: 'none' }}
            >
              {item.name}
            </Button>
          ))}
          <ToggleTheme />
        </Box>

        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={toggleSideMenu}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
