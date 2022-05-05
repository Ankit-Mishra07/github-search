import { Box,Typography,List,ListItem,ListItemButton, ListItemIcon,ListItemText, Avatar, Button } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'
import {Business, LocationOn, Link, Twitter, Group, ArrowCircleLeft} from '@mui/icons-material'

const Rightbar = ({forSide, setForSide, forRight, setForRight, forFeed, setForFeed}) => {
  const {user} = useSelector(state=> state.curUserState)
  return (
    <Box flex={1} sx={{padding:3, display:{xs:forRight,md:"block", lg:"block"},height:{xs:"90vh", md:"inherit"}}}>
      <Typography fontWeight={200} sx={{textAlign:"center"}}>{user.login} Profile</Typography>

      <Box>
        <Avatar src={user.avatar_url} sx={{width:100, height:100, margin:"auto"}} />
        <Typography fontWeight={400} sx={{textAlign:"center"}}>{user.bio}</Typography>
        <Button  startIcon={<Group />} 
        sx={{textTransform:"lowercase", fontSize:14,width:"100%"}}
        >{user.followers}followers - {user.following}following
        </Button>
        <List>
          {user.company &&
          <ListItem disablePadding>
            <ListItemButton component="a" href={user.html_url} target="_blank">
              <ListItemIcon>
                  <Business />
              </ListItemIcon>
              <ListItemText primary={user.company} />
            </ListItemButton>
          </ListItem>
          }
          
          {user.location &&
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                  <LocationOn />
              </ListItemIcon>
              <ListItemText primary={user.location} />
            </ListItemButton>
          </ListItem>
          }
          
          {user.blog && 
          <ListItem disablePadding>
            <ListItemButton component="a" href={user.blog} target="_blank">
              <ListItemIcon>
                  <Link />
              </ListItemIcon>
              <ListItemText primary="Website" />
            </ListItemButton>
          </ListItem>
          }

          {user.twitter_username &&
          <ListItem disablePadding>
            <ListItemButton component="a" href={"https://twitter.com/" + user.twitter_username} target="_blank">
              <ListItemIcon>
                  <Twitter />
              </ListItemIcon>
              <ListItemText primary={user.twitter_username} />
            </ListItemButton>
          </ListItem>
          }
          </List>
      </Box>
        <Button sx={{ display:{xs:"block",md:"none", lg:"none"}}} onClick={() => {
          setForFeed("block")
          setForRight("none")
          setForSide("none")
        }}><ArrowCircleLeft/></Button>

    </Box>
  )
}

export default Rightbar