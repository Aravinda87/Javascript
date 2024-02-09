import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const navlinkstyle = ({isActive}) =>{
    return{
      fontweight : isActive ? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline'
    }
  }

  return (
    <div>
        <nav>
            <NavLink style={navlinkstyle} to='/'>Home</NavLink>
            <NavLink style={navlinkstyle} to='/about'>About</NavLink>
        </nav>
    </div>
  )
}

export default Navbar