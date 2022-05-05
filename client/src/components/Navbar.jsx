import React, { useEffect, useState } from 'react'
import {AppBar, Box, styled,Toolbar, Avatar, Button} from '@mui/material'
import {GitHub, Search,DarkMode, LightMode} from '@mui/icons-material'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrentuserData } from '../Redux/Home/CurrentUser/action'
const StyledToolbar = styled(Toolbar) (({theme}) => ({
  display:"flex",
  justifyContent:"space-between"
}))
const StyledInput = styled("input")(({theme}) => ({
      outline:"none",
      border:"none",
      padding:6,
      fontSize:16,
      borderRadius:theme.shape.borderRadius,
      color:"#000"
}))
const Navbar = ({mode, setMode, val, setVal}) => {

  const {user, followers} = useSelector(state=>state.curUserState);
  const handleSearch = () => {
    console.log("handleSearch")
  }

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box>
            <GitHub />
          </Box>

          <Box variant="span" sx={{display:"flex", alignItems:"center"}}>
            <StyledInput placeholder='search...'
              onChange={(e)=>setVal(e.target.value)}
            />
            <Button
            variant="primary"
            ><Search/></Button>
          </Box>

          <Box sx={{display:"flex", gap:1}}>
            <Avatar sx={{width : 30, height:30}}
              src={user.avatar_url}
            />
                <Button
                 onClick={() => {
                  if (mode === 'light') {
                    setMode('dark');
                  } else {
                    setMode('light');
                  }
                }}
                variant="primary"
                >
                {mode === 'light' ? <DarkMode /> : <LightMode />}
                </Button>
          </Box>


          </StyledToolbar>
      </AppBar>
    </>
  )
}

export default Navbar