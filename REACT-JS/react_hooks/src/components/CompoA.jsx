import React, { useContext } from 'react'
// import { UserContext } from '../App'
function CompoA() {
    const usercontext = useContext(UserContext)
   return (
    <div>
        component A
        <button onClick={() => usercontext.countDispatch('increment')}>increment</button>
        <button onClick={() => usercontext.countDispatch('decriment')}>decriment</button>
        <button onClick={() => usercontext.countDispatch('reset')}>reset</button>
    </div>
  )
}

export default CompoA