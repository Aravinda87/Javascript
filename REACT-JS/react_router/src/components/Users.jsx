import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
  const [searchparams,setsearchparams] = useSearchParams()
  const showactiveUsers = searchparams.get('filter') === 'active'
  return (
    <>
    <div>User1</div>
    <div>User1</div>
    <div>User1</div>
    <Outlet/>

    <button onClick={() =>  ({filter: 'active'})}>active users</button>
    <button onClick={() => setsearchparams({})}>reset</button>

    {
      showactiveUsers ? <h2>showing active users</h2> : <h2>showallUsers</h2>
    }
    </>
  )
}

export default Users