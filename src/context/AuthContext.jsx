import React, { createContext, useEffect, useState } from 'react';


export const authContext = createContext();



const AuthContext = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
       
         const fetchUser = async () =>{
            try{
                const response = await fetch(
                    "https://studyflow-backend-rho.vercel.app/api/auth/me",
            {

                    method: "GET",
                    headers:{
                         "Content-Type": "application/json"
                    },
                    credentials:"include",
                }
                );
             
                    const data = await response.json();
                    if(data.success)
                    {
                        setUser(data.data?.user)
                    }
                    else
                    {
                        setUser(null)
                    }
                        
            }
            catch(error){
             console.error("fetching error",error)
             setUser(null)
            }
            finally{
                setLoading(false)
            }
                  
         }
         fetchUser()
    },[])


    const authContextData = {
        user,setUser,loading
    }
    return <authContext.Provider value={authContextData}>{children}</authContext.Provider>

};

export default AuthContext;