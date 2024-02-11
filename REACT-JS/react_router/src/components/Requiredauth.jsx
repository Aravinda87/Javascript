import { Children } from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./auth"

export const Requiredauth = ({children}) =>{
    const auth = useAuth()

    if(!auth.user)
    {
        return <Navigate to='/login' />
    }
    return children
}