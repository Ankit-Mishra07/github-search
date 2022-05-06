import React, { useEffect, useState } from 'react'
import {AppBar, Box, styled,Toolbar, Avatar, Button, Badge} from '@mui/material'
import {GitHub, Search,DarkMode, LightMode, Assessment} from '@mui/icons-material'
import {useDispatch, useSelector} from 'react-redux'
import { getCurrentuserData } from '../Redux/Home/CurrentUser/action'
import { getFeedUser } from '../Redux/Home/Feed/action'
import { getRepoUser } from '../Redux/Home/SideBarRepo/action'
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
      color:"#000",
      width:"100%"
}))
const Navbar = ({mode, setMode, val, setVal, myPic, handleUserProfile, setForFeed, setForRight, setForSide}) => {

  const {user, followers} = useSelector(state=>state.curUserState);
  const {loggedUser} = useSelector(state=>state.logState);
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(getFeedUser(val))
    setForFeed("block")
    setForRight("none")
    setForSide("none")
  }

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Box>
            <GitHub />
          </Box>

          <Box variant="span" sx={{display:"flex", alignItems:"center", width:{xs:"50%",sm:"35%"}}}>
            <StyledInput placeholder='search...'
              onChange={(e)=>setVal(e.target.value)}
            />
            <Button
            variant="primary"
            onClick={() => {
              handleSearch()
            }}
            ><Search/></Button>
          </Box>

          <Box sx={{display:"flex", gap:1, alignItems:"center"}}>
            <Avatar sx={{width : 30, height:30, cursor:"pointer"}}
              src={myPic.avatar_url}
              onClick={() => {
                handleUserProfile(loggedUser)
                setForFeed("none")
                setForRight("block")
                setForSide("none")
              }}
            />
          <Badge badgeContent={myPic.public_repos} color="error" sx={{ display:{xs:"block",md:"none", lg:"none"}, cursor:"pointer"}} >
            <Assessment     
            onClick={() => {
            dispatch(getRepoUser(loggedUser))
            setForFeed("none")
            setForRight("none")
            setForSide("block")
            }}/>
          </Badge>
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

          <Box>

          </Box>
      </AppBar>
    </>
  )
}

export default Navbar