import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <nav>
        <Link to='new'>new</Link>
        <Link to='featured'>featured</Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Products