import {  createContext, useContext, useState } from "react";

const Authcontext = createContext(null)

export const Authprovider = ({children}) => {
    const [user,setuser] = useState(null)
        const login = () =>{
            setuser(user)
        }
        const logout = () =>{
            setuser(null)
        }
        return (<Authcontext.Provider value={{user,login,logout}}>
            {children}
        </Authcontext.Provider>)
}
export const useAuth = () =>{
    return useContext(Authcontext)
}