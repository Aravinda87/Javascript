import React, { useEffect, useState } from 'react'

function DocTitleTwo() {

    const [count,setcount] = useState(0)


  return (
    <div>
        <button onClick={() => setcount(count + 1)}>count - {count}</button>
    </div>
  )
}

export default DocTitleTwo