import {
  AppBar,
  Box,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'
import { theme } from '../../theme/theme'
import { LayoutClientMenu } from './LayoutClientMenu'

const URL = process.env.REACT_APP_PUBLIC_URL
const navItems = ['BLOGS', 'PROFILE']

interface LayoutProps {
  children?: React.ReactNode
}

export const LayoutContainer: React.FC<LayoutProps> = (props) => (
  <ThemeProvider theme={theme}>
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* CSRコンポーネント */}
          <LayoutClientMenu />

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

      <Box component="main" mx="auto">
        <Toolbar />

        {props.children}
      </Box>
      <Box component="footer" bgcolor="primary.main" mt={4} p={2} color="white">
        <Typography>カドブログ</Typography>
        <Typography variant="body2" align="center">
          &copy;KadoBloG 2024
        </Typography>
      </Box>
    </Box>
  </ThemeProvider>
)
