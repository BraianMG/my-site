import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import { navItems } from '@/libs/constants'
import { useUI } from '@/hooks/useUI'
import { Close as CloseIcon } from '@mui/icons-material'
import ToggleTheme from './ToggleTheme'

export const SideMenu = () => {
  const { isMenuOpen, toggleSideMenu } = useUI()

  return (
    <Box component='nav'>
      <Drawer
        open={isMenuOpen}
        anchor='top'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        onClose={toggleSideMenu}
      >
        <Box sx={{ width: '100vw' }}>
          <List sx={{ py: 5 }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ justifyContent: 'center' }}
                onClick={toggleSideMenu}
              >
                <CloseIcon />
              </ListItemButton>
            </ListItem>

            {navItems.map(item => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component='a'
                  href={item.href}
                  sx={{ textAlign: 'center' }}
                  onClick={toggleSideMenu}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemIcon sx={{ width: '100%', justifyContent: 'center' }}>
                <ToggleTheme />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}
