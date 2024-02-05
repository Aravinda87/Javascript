import React, { useEffect, useState } from 'react'
import UseCustomHook from './UseCustomHook'

function DocTitleOne() {

    const [count,setcount] = useState(0)

    UseCustomHook(count)

  return (
    <div>
        <button onClick={() => setcount(count + 1)}>count - {count}</button>
    </div>
  )
}

export default DocTitleOne