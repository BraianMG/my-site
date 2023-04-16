import { AppBar, Box, Button, IconButton, Link, Toolbar } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { navItems } from '@/libs/constants'
import { useUI } from '@/hooks/useUI'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'
import ToggleTheme from './ToggleTheme'
import useTranslation from 'next-translate/useTranslation'
import { LanguageSelector } from '../common/LanguageSelector'

export const Navbar = () => {
  const { t } = useTranslation('common')
  const { toggleSideMenu } = useUI()

  return (
    <AppBar component='nav'>
      <Toolbar>
        <Link href='#' display='flex' alignItems='center'>
          <Image src={logo} alt='BMG logo' height={40} priority />
        </Link>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map(item => (
            <Button
              key={item.href}
              component='a'
              href={item.href}
              sx={{ color: '#fff', textTransform: 'none' }}
            >
              {t(item.name)}
            </Button>
          ))}
          <LanguageSelector />
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
