import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography ,Link, styled} from '@mui/material'
import React from 'react'
import {GitHub} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { getRepoUser } from '../Redux/Home/SideBarRepo/action'
const ButtonBox = styled(Box)(({theme}) => ({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  width:"100%"
}))
const Feed = ({setFeedpage, feedpage}) => {
  const {feedData, feeduser} = useSelector(state=>state.feedState)
  const {repos, repouser} = useSelector(state=> state.reposState);
  const dispatch = useDispatch()
  return (
    <Box flex={2} sx={{position:"relative"}}>
        {
          feedData.map((el) => (
            <Card sx={{ minWidth: 320 , marginTop:3}}>
            <CardMedia
              component="img"
              alt={el.login}
              height="500"
              image={el.avatar_url || el.owner.avatar_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.login || el.name}
              </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
              <Button
              onClick={() => {
                dispatch(getRepoUser(el.login || el.name))
              }}
              >Repositories</Button>
              <Link href={el.html_url} underline="none" target="_blank" >
              <GitHub/>
              </Link>
            </CardActions>
          </Card>
          ))
        }

        <ButtonBox>
        <Button onClick={() => {

          setFeedpage(feedpage<=1 ? 1 : feedpage-1)
          }} disabled={feedpage===1?true:false}>Prev</Button>
        <Button
        onClick={() => {
          setFeedpage(feedpage+1)
        }}
        disabled={(feedData.length===0)?true:false}
        >Next</Button>
      </ButtonBox>
    </Box>
  )
}

export default Feed