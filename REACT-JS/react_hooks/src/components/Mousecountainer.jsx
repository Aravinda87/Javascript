import React, { useState } from 'react'
import HookMouse from './HookMouse'

function Mousecountainer() {

    const [display,setdisplay] = useState(true)

  return (
    <div>
        <button onClick={() => setdisplay(!display)}>toggle click</button>
        {display && <HookMouse /> }
    </div>
  )
}

export default Mousecountainer