import { Box, createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette : {
      mode:mode
    }
  })
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} sx={{padding:0, margin:0}}>
      <Navbar mode={mode} setMode={setMode}/>
      </Box>
      </ThemeProvider>
    </>
  )
}

export default Home