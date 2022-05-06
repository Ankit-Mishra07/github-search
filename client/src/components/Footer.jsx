import { Favorite } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Box sx={{position:"fixed", bottom:"3px", textAlign:"center", width:"100%", fontSize:14, color:"#8FC9F8"}}>
        Made with <Favorite color="error" sx={{width:14,height:14, verticalAlign:"middle"}}/> by Ankit Mishra
    </Box>
    </>
  )
}

export default Footer