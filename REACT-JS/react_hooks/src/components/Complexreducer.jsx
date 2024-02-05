import React , {useReducer} from 'react'

const initialvalue = {
    firstvalue : 0,
    secondvalue : 10
}
 s
const reducer = (state,action) =>{
    switch(action.type)
    {
        case "increment" :
            return {...state ,firstvalue : state.firstvalue + action.value}
        case "decrement" :
            return {...state ,firstvalue : state.firstvalue - action.value}
        case "increment2" :
            return {...state ,secondvalue : state.secondvalue + action.value}
        case "decrement2" :
            return {...state ,secondvalue : state.secondvalue - action.value}
        case 'reset' :
            return initialvalue
    }
}

function Complexreducer() {
    const [count,dispatch] = useReducer(reducer,initialvalue)
  return (
    <div>
        <div> firstcount - {count.firstvalue} </div>
        <div> secoundaCount - {count.secondvalue} </div>

        <button onClick={() => dispatch({type :'increment',value : 1})}>
        increment
        </button >
        <button  onClick={() => dispatch({type :'decrement',value : 1})}>
        decrement
        </button>
        <button  onClick={() => dispatch({type :'increment2',value : 5})}>
        increment 
        </button>
        <button  onClick={() => dispatch({type :'decrement2',value : 5})}>
        decrement
        </button>
        <button  onClick={() => dispatch({type :'reset'})}>
        reset
        </button>
    </div>
  )
}

export default Complexreducer