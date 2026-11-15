import React, { useContext } from 'react';
import {authContext} from "../context/AuthContext"

const useAuth = () => {
 const context = useContext(authContext)
 if(!context){
    throw new Error("There must be an error happened")
 }
 return context;
};

export default useAuth;



