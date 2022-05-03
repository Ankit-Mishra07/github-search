import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/home' element={<Home />}></Route>
    </Routes>
    </>
  )
}

export default Routing