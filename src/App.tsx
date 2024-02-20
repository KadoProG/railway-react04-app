import React from 'react'
import { HomePage } from './pages/HomePage'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
