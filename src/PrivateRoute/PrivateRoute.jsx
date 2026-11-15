import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    console.log(location)

    if(loading)
        return <span className="loading loading-spinner text-success"></span>

    else if(!user)
        return <Navigate to="/log-in" state={{from:location}}/>

  return children;
};

export default PrivateRoute;