import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {
  const navlinkstyle = ({isActive}) =>{
    return{
      fontweight : isActive ? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline',
    }
  }

  const auth = useAuth()
  return (
    <div> 
        <nav>
            <NavLink style={navlinkstyle} to='/'>Home</NavLink>
            <NavLink style={navlinkstyle} to='/about'>About</NavLink>
            <NavLink style={navlinkstyle} to='/products'>products</NavLink>
            <NavLink style={navlinkstyle} to='/profile'>profile</NavLink>
            {
              !auth.user && (
                <NavLink style={navlinkstyle} to='/login'>
                  login
                </NavLink>
              )
            }
        </nav>
    </div>
  )
}

export default Navbar