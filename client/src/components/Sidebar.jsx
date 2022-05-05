import { Box, Button, Link, styled, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {GitHub} from '@mui/icons-material'
const StyledReposBox = styled(Box)(({theme}) => ({
  border : "1px solid lightgray",
  position:"relative",
  [theme.breakpoints.up("md")]:{
    height:400
  }
}))
const ButtonBox = styled(Box)(({theme}) => ({
  position:"absolute",
  bottom:0,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100%"
}))
const Sidebar = () => {
  const {repos, repouser} = useSelector(state=> state.reposState);
  const {loggedUser} = useSelector(state=>state.logState);

  return (
    <Box flex={1}
    p={2} sx={{}}>
    
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:3}}>
    <Typography>{repouser}'s Repositories</Typography>
    {loggedUser!==repouser && <Button sx={{fontSize:10}}>See Your Repositories</Button>}
    </Box>

    <StyledReposBox>
      {
        repos.map((el) => (
          <Link href={el.html_url} underline="none" target="_blank">
          <Button variant="contained" sx={{width:"100%", marginBottom:"2px"}} endIcon={<GitHub />}>{el.name}</Button>
          </Link>
        ))
      }

      <ButtonBox>
        <Button>Prev</Button>
        <Button>Next</Button>
      </ButtonBox>

    </StyledReposBox>
    

    </Box>
  )
}

export default Sidebar