import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'

const Routing = () => {

  return (
    <>
    <Routes>
        <Route path="/" element={
        <PrivateRoute>
        <Login/>
        </PrivateRoute>
        }></Route>
        <Route path='/home' element={
        <Home />
        }></Route>
    </Routes>
    </>
  )
}

export default Routing