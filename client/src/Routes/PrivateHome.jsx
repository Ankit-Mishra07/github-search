import React from 'react'

const PrivateHome = () => {

    let {loggedUser} = useSelector(state => state.logState);
    if(loggedUser !== "") {
        return <Navigate to="/home" />
    }
  return children;

}

export default PrivateHome