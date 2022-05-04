import React, { useState } from "react";
import { Avatar, Box, Button, InputBase, styled , Typography} from "@mui/material";
import ReactTypingEffect from 'react-typing-effect';
import { searchUsername } from "../Fetch/fetch";
import styles from '../styles/login.module.css'
import {Search} from "@mui/icons-material"

const Login = () => {

  const [val, setVal] = useState("")

  let ide;
  const handleChange = (e) => {
    // console.log(val)
    if(e =="" || !e) return;
    if(ide) {clearTimeout(ide)}
    ide = setTimeout(() => {
      searchUsername(val)
    }, 10000)
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val)
  }
  return (
    <>
      <div className={styles.container}>
        <Box sx={{color:"whitesmoke", fontWeight:100, fontSize:16}}>
        <ReactTypingEffect
        text={["Welcome to GitHub User Search Details!"]}
        />
        </Box>

        
        <div className={styles.box}>
          
          <div className={styles.form_Box} >
            <form className={styles.form} onSubmit={e=>handleSubmit(e)}>
                <span>
                <input className={styles.searchipt} value={val} type="text" onChange={(e) => {
                  setVal(e.target.value)
                  handleChange(e.target.value)
                }} />
                <Search />
                </span>
                <Button style={{backgroundColor:"none", color:"white"}} type="submit">Enter</Button>
            </form>


        <Box sx={{color:"whitesmoke", fontWeight:100, fontSize:16}}>
        <ReactTypingEffect
        text={["Please Enter Your GitHub Username !!"]}
      />
        </Box>
      
        </div>

        <Avatar alt="Remy Sharp" src="log.gif" sx={{ width: {lg:240, md:140,sm:100}, height: {lg:240,md:140,sm:100} }}/>
        </div>
      </div>
    </>
  );
};


export default Login;
