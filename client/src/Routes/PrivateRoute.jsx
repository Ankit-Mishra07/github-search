import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom'
const PrivateRoute = ({children}) => {
    let {loggedUser} = useSelector(state => state.logState);
    if(loggedUser !== "") {
      return <Navigate to="/home" />
      
    }
  return children;
}

export default PrivateRoute