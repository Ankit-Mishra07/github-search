import React, { useState } from "react";
import { Avatar, Box, Button} from "@mui/material";
import {Search, Send} from "@mui/icons-material"
import ReactTypingEffect from 'react-typing-effect';
import styles from '../styles/login.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { loggedSuccess, loginUsers } from "../Redux/Login/action";
import SearchData from "../components/SearchData";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const Login = () => {

  const [val, setVal] = useState("")
  const {Users, loggedUser} = useSelector(state => state.logState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = () => {
    if(val==="" || !val) return;
    
    fetch(`https://api.github.com/search/users?q=${val}&page=1&per_page=4`)
    .then(res => res.json())
    .then(res => {
        dispatch(loginUsers(res.items))
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(val==="")return;
    
    dispatch(loggedSuccess(val));
    if(loggedUser) {
      navigate("/home")
    }

  }
  return (
    <>
      <div className={styles.container}>
        <Box sx={{color:"whitesmoke", fontWeight:100, fontSize:16, marginBottom:10}}>
        <ReactTypingEffect
        text={["Welcome to GitHub User Search Details!"]}
        />
        </Box>

        
        <div className={styles.box}>
          
          <div className={styles.form_Box} >
            <form className={styles.form} onSubmit={e=>handleSubmit(e)}
            >   
                <span >
                <input className={styles.searchipt} value={val} type="text" onChange={(e) =>setVal(e.target.value)} />
                <Button onClick={handleSearch} style={{backgroundColor:"none", color:"white"}} endIcon={<Search />}></Button>
                
                </span>
                <Button style={{backgroundColor:"none", color:"white"}} type="submit" endIcon={<Send />}>Enter</Button>
            </form>


       {Users.length===0 &&<Box sx={{color:"whitesmoke", fontWeight:100, fontSize:16}}>
        <ReactTypingEffect
        text={["Please Enter Your GitHub Username !!"]}
      />
        </Box>
      }
      {
        Users.length>0 && <SearchData Users={Users} setVal={setVal}/>
      }

        </div>

        <Avatar alt="Remy Sharp" src="log.gif" sx={{ width: {lg:240, md:140,sm:100, xs:90}, height: {lg:240,md:140,sm:100, xs:90} }}/>
        </div>
      <Footer />

      </div>
    </>
  );
};


export default Login;
