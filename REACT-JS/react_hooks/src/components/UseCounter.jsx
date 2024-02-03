import React, { useState } from 'react'

function UseCounter(initialvalue = 0) {

  
    const [count,setcount] = useState(initialvalue)

    const increment = () =>{
        setcount(count + 1)
    }
    const decrement = () =>{
        setcount(count - 1)
    }
    const reset = () =>{
        setcount(initialvalue)
    }

    return [count,increment,decrement,reset]

}

export default UseCounter