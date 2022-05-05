import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import { getCurrentuserData } from '../Redux/Home/CurrentUser/action'
import { getSideRepos } from '../Redux/Home/SideBarRepo/action'

const Styledbox = styled(Box)(({theme}) => ({
    display:"flex",
    gap:"2",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
}))

const Home = () => {

  const [val, setVal] = useState("")
  const {loggedUser} = useSelector(state=>state.logState);
  const [mode, setMode] = useState("light")
  const dispatch = useDispatch()

  const darkTheme = createTheme({
    palette : {
      mode:mode
    }
  })

  const getLoggedUserRepo = (user) => {
      fetch(`https://api.github.com/users/${user}/repos?page=1&per_page=2`)
      .then(res => res.json())
      .then(res => {
        dispatch(getSideRepos(res))
      })
  }

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${loggedUser}&page=1&per_page=2`)
    .then(res=>res.json())
    .then(res=>{
      dispatch(getCurrentuserData(res.items[0]))
      getLoggedUserRepo(loggedUser)
    })

  },[])

  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} sx={{padding:0, margin:0}}>
      <Navbar mode={mode} setMode={setMode} val={val} setVal={setVal}/>

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