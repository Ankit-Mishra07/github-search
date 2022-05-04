import React, { useEffect, useState } from 'react'
import {AppBar, Box, styled,Toolbar, Avatar, Button} from '@mui/material'
import {GitHub, Search} from '@mui/icons-material'
import {useSelector} from 'react-redux'
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
      color:theme.palette.text.primary
}))
const Navbar = () => {
  const [val, setVal] = useState("")
  const {loggedUser} = useSelector(state=>state.logState);
  const handleSearch = () => {
    console.log("handleSearch")
  }
  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${loggedUser}&page=1&per_page=2`)
    .then(res=>res.json())
    .then(res=>{
      console.log("res", res)
    })
  },[])
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

          <Box>
            <Avatar sx={{width : 30, height:30}}

            />
          </Box>

          </StyledToolbar>
      </AppBar>
    </>
  )
}

export default Navbar