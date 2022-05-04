import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

const Styledbox = styled(Box)(({theme}) => ({
    display:"flex",
    gap:"2",
    flexDirection:"row",
    justifyContent:"space-between"
}))

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

      <Styledbox >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Styledbox>

      </Box>
      </ThemeProvider>
    </>
  )
}

export default Home