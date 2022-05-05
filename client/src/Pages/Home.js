import { Box, createTheme, Stack, styled, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import { getCurrentuserData } from '../Redux/Home/CurrentUser/action'
import { getfeedData } from '../Redux/Home/Feed/action'
import { getSideRepos } from '../Redux/Home/SideBarRepo/action'

const Styledbox = styled(Box)(({theme}) => ({
    display:"flex",
    gap:"2",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
}))

const Home = () => {
  const [repopage, setRepopage] = useState(1)
  const [feedpage, setFeedpage] = useState(1)
  const [val, setVal] = useState("")
  const [mode, setMode] = useState("light")

  const {loggedUser} = useSelector(state=>state.logState);
  const {repos, repouser} = useSelector(state=> state.reposState);
  const {feeduser, feedData} = useSelector(state => state.feedState)

  const [myPic, setMyPic] = useState({})
  const dispatch = useDispatch()

  /// states for visibilities
  const [forSide, setForSide] = useState("none") 
  const [forRight, setForRight] = useState("none") 
  const [forFeed, setForFeed] = useState("block") 


  const darkTheme = createTheme({
    palette : {
      mode:mode
    }
  })

  const getLoggedUserRepo = (user) => {
      fetch(`https://api.github.com/users/${user}/repos?page=${repopage}&per_page=6`)
      .then(res => res.json())
      .then(res => {
        dispatch(getSideRepos(res))
      })
  }

  const handleUserProfile = (user) => {
    fetch(`https://api.github.com/users/${user}`)
    .then(res=>res.json())
    .then(res=>{
      dispatch(getCurrentuserData(res))
    })
  }



  useEffect(() => {
    handleUserProfile(loggedUser)
    fetch(`https://api.github.com/users/${loggedUser}`)
    .then(res=>res.json())
    .then(res=>{
      setMyPic(res)
    })
  },[])

  

  useEffect(() => {
    getLoggedUserRepo(repouser)
  },[repopage, repouser])



  useEffect(() => {
    fetch(`https://api.github.com/users/${loggedUser}/followers`)
    .then(res=>res.json())
    .then(res=>{
      dispatch(getfeedData(res))
    })
  },[])

  useEffect(() => {
    if(feeduser!=="") {
    fetch(`https://api.github.com/search/users?q=${feeduser}&page=${feedpage}&per_page=2`)
    .then(res=> res.json())
    .then(res => {
      dispatch(getfeedData(res.items))
      console.log('resfeed', res.items)
    })
    }
  },[feeduser, feedpage])
  
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"} sx={{padding:0, margin:0}}>
      <Navbar mode={mode} setMode={setMode} val={val} setVal={setVal} myPic={myPic}
      handleUserProfile={handleUserProfile}
      setForFeed={setForFeed}
      setForRight={setForRight}
      setForSide={setForSide}
      />

      <Styledbox >
        <Sidebar getLoggedUserRepo={getLoggedUserRepo} setRepopage={setRepopage} repopage={repopage}
        forSide={forSide}
        setForSide={setForSide}
        forRight={forRight}
        setForRight={setForRight}
        forFeed={forFeed}
        setForFeed={setForFeed}
        />
        <Feed feedpage={feedpage} setFeedpage={setFeedpage}
        handleUserProfile={handleUserProfile}
        forSide={forSide}
        setForSide={setForSide}
        forRight={forRight}
        setForRight={setForRight}
        forFeed={forFeed}
        setForFeed={setForFeed}
        />
        <Rightbar
            forSide={forSide}
            setForSide={setForSide}
            forRight={forRight}
            setForRight={setForRight}
            forFeed={forFeed}
            setForFeed={setForFeed}
        />
      </Styledbox>

      </Box>
      </ThemeProvider>
    </>
  )
}

export default Home