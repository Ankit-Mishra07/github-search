import { Avatar, Typography , styled, Box} from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)( ({theme}) => ({
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      cursor:"pointer",
      color:"white",
      backgroundColor:"#000",
      marginBottom:5,
      borderRadius:5,
      padding:8,
      transition:"0.5s ease",
      "&:hover":{
        transform: "scale(1.06)"
      }
}))

const Cont = styled(Box)(({theme}) => ({
  width:"55%",
  [theme.breakpoints.down("md")] : {
    width:"80%"
  },

}))

const SearchData = ({Users, setVal}) => {

  const handleValue = (el) => {
    setVal(el)
  }
  return (
    <Cont>
  {
       Users.map((elem) => (

         <StyledBox key={elem.id} onClick={() => handleValue(elem.login)}>
             <Avatar src={elem.avatar_url}/>
             <Typography>{elem.login}</Typography>
         </StyledBox>
     ))
   } 
    </Cont>
  )
}

export default SearchData