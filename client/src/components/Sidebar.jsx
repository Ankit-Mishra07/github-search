import { Box, Button, Link, styled, Typography } from '@mui/material'
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {GitHub, ArrowCircleLeft} from '@mui/icons-material'
import { getRepoUser } from '../Redux/Home/SideBarRepo/action'

const StyledReposBox = styled(Box)(({theme}) => ({
  border : "1px solid lightgray",
  position:"relative",
  [theme.breakpoints.up("md")]:{
    height:400
  },
  height:400,
  borderRadius:theme.shape.borderRadius

}))
const ButtonBox = styled(Box)(({theme}) => ({
  position:"absolute",
  bottom:0,
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100%"
}))
const Sidebar = ({getLoggedUserRepo, setRepopage, repopage, forSide, setForSide, forRight, setForRight, forFeed, setForFeed}) => {
  const {repos, repouser} = useSelector(state=> state.reposState);
  const {loggedUser} = useSelector(state=>state.logState);
  const dispatch = useDispatch()
  return (
    <Box flex={1}
    p={2} 
    sx={{display:{xs:forSide,md:"block", lg:"block"}, height:{xs:"90vh", md:"inherit"}}}
    >
    
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:3}}>
    <Typography>{repouser}'s Repositories</Typography>
    {loggedUser!==repouser && <Button sx={{fontSize:10}}
    onClick={() => {
      dispatch(getRepoUser(loggedUser))
    }}
    >See Your Repositories</Button>}
    </Box>

    <StyledReposBox>
      {
        repos.map((el) => (
          <Link href={el.html_url} underline="none" target="_blank" key={el.id}>
          <Button variant="contained" sx={{width:"100%", marginBottom:"8px"}} endIcon={<GitHub />}>{el.name}</Button>
          </Link>
        ))
      }

      <ButtonBox>
        <Button onClick={() => {

          setRepopage(repopage<=1 ? 1 : repopage-1)
          }} disabled={repopage===1?true:false}>Prev</Button>
        <Button
        onClick={() => {
          setRepopage(repopage+1)
        }}
        disabled={(repos.length===0)?true:false}
        >Next</Button>
      </ButtonBox>

    </StyledReposBox>
    
        <Button sx={{ display:{xs:"block",md:"none", lg:"none"}}} 
        onClick={() => {
          setForFeed("block")
          setForRight("none")
          setForSide("none")
        }}
        ><ArrowCircleLeft/></Button>
    </Box>
  )
}

export default Sidebar