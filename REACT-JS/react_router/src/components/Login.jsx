import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [user,setuser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate() 

    const handlelogin = () =>{
        auth.login(user)
        navigate('/')
    }

  return (
    <div>
        <div>
        username :{' '}
        <input type='text' onChange={(e) => setuser(e.target.value)}/>
        </div>
        <button onClick={handlelogin}>login</button>
    </div>
    )
}

export default Login