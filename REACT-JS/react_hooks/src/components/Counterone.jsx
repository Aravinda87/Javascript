import React from 'react'
import UseCounter from './UseCounter'

function Counterone() {
    const [count,increment,decrement,reset] = UseCounter()

  return (
    <div>
        <h1>count - {count}</h1>

        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counterone