import { Box,Typography,List,ListItem,ListItemButton, ListItemIcon,ListItemText, Avatar, Button } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'
import {Business, LocationOn, Link, Twitter, Group} from '@mui/icons-material'

const Rightbar = () => {
  const {user} = useSelector(state=> state.curUserState)
  console.log("user", user)
  return (
    <Box flex={1} sx={{padding:3}} >
      <Typography fontWeight={200} sx={{textAlign:"center"}}>{user.login} Profile</Typography>

      <Box>
        <Avatar src={user.avatar_url} sx={{width:100, height:100, margin:"auto"}} />
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

    </Box>
  )
}

export default Rightbar