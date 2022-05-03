const StyledBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    justifyContent :"center",
    height:"100vh",
    width:"100vw",
    backgroundColor:"#24292F"
  })
  const LoginBox= styled(Box)(({theme}) => ({
    display:"flex", alignItems:"center", justifyContent:"space-around",
    width:"80%",
    [theme.breakpoints.down("md")]:{
      flexDirection:"column-reverse",
      width:"100%"
    }
  }))
  // const Input = {
  //   color:"white",
  //   border:"none",
  //   borderBottom:"1px solid white",
  //   padding:"10px",
  //   paddingBottom:"15px",
  //   paddingLeft:"0",
  //   background:"none",
  //   width:"70%",
  //   outline:"none",
  //   fontSize:"16px",

  // }
  const Form = {
    display:"flex",
    alignItems:"center"

  }
  const Search = styled("div")(({theme}) => ({
    borderRadius:theme.shape.borderRadius,
    border:"none",
    borderBottom:"1px solid white",
    padding:"10px",
    paddingBottom:"15px",
    paddingLeft:"0",
    background:"none",
    width:"70%",
    outline:"none",
    fontSize:"16px",

  }))
