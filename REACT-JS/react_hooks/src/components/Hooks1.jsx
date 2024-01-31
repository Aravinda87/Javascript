import React , {useState} from 'react'

function Hooks1() {

    const [count,setcount] = useState(0)

  return (
    <div>
        <button onClick={() => setcount(prevCount => prevCount + 5)}>count = {count}</button>
    </div>
  )
}

export default Hooks1