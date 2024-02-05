import React ,{useReducer} from 'react'

const initialState = 0
const reducer = (state ,action) => {
    switch(action)
    {
        case 'increment' :
            return state + 1
        case 'decriment' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state
    }
}
function UseReducer() {

    const [count, dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        count = {count}

        <button onClick={() => dispatch('increment')}>increment</button>
        <button onClick={() => dispatch('decriment')}>decriment</button>
        <button onClick={() => dispatch('reset')}>reset</button>

    </div>
  )
}

export default UseReducer