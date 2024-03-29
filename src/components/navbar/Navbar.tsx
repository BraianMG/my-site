import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Slide,
  Toolbar,
  // useScrollTrigger,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { navItems } from '@/libs/constants'
import { useUI } from '@/hooks/useUI'
import Image from 'next/image'
import logo from '../../../public/img/logo.png'
import ToggleTheme from '../ui/ToggleTheme'
import useTranslation from 'next-translate/useTranslation'
import { LanguageSelector } from '../common/LanguageSelector'
import type { FC, PropsWithChildren, ReactElement } from 'react'
import styles from './navbar.module.scss'

interface Props {
  children: ReactElement
}

const HideOnScroll: FC<Props> = ({ children }) => {
  const trigger = false; // useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export const Navbar: FC<PropsWithChildren> = props => {
  const { t } = useTranslation('common')
  const { toggleSideMenu } = useUI()

  return (
    <HideOnScroll>
      <AppBar component='nav'>
        <Toolbar className={styles.toolbar}>
          <Link href='#' display='flex' alignItems='center'>
            <Image src={logo} alt='BMG logo' height={40} priority />
          </Link>

          <Box flex={1} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
