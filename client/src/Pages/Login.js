import React, { useState } from "react";
import { Avatar, Box, Button} from "@mui/material";
import {Search, Send} from "@mui/icons-material"
import ReactTypingEffect from 'react-typing-effect';
import styles from '../styles/login.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { loginUsers } from "../Redux/Login/action";
import SearchData from "../components/SearchData";
const Login = () => {

  const [val, setVal] = useState("")
  const {Users} = useSelector(state => state.logState)
  const dispatch = useDispatch()

  const handleSearch = () => {
    if(val==="" || !val) return;
    
    fetch(`https://api.github.com/search/users?q=${val}&page=1&per_page=4`)
    .then(res => res.json())
    .then(res => {
        dispatch(loginUsers(res.items))
        console.log("redux",Users)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
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


       {Users.length==0 &&<Box sx={{color:"whitesmoke", fontWeight:100, fontSize:16}}>
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
      </div>
    </>
  );
};


export default Login;
