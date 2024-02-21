import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { theme } from '../../theme/theme'

const URL = process.env.REACT_APP_PUBLIC_URL
const navItems = ['BLOGS', 'PROFILE']
const drawerWidth = 240

interface LayoutProps {
  children: React.ReactNode
}

export const LayoutContainer: React.FC<LayoutProps> = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const container =
    typeof window !== 'undefined' ? () => document.body : undefined

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography textAlign={{ xs: 'center', sm: 'left' }} flexGrow={1}>
              <Button
                href={`${URL}/`}
                sx={{
                  color: '#fff',
                  fontSize: 24,
                }}
              >
                カドブログ
              </Button>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                <Button
                  href={`${URL}/`}
                  sx={{
                    fontSize: 24,
                  }}
                >
                  カドブログ
                </Button>
              </Typography>
              <Divider />
              <List>
                {navItems.map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </nav>
        <Box component="main" mx="auto">
          <Toolbar />
          {props.children}
        </Box>
        <Box
          component="footer"
          bgcolor="primary.main"
          mt={4}
          p={2}
          color="white"
        >
          <Typography>カドブログ</Typography>
          <Typography variant="body2" align="center">
            &copy;KadoBloG 2024
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
