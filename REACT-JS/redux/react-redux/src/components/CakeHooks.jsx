import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_cakes } from '../redux'
function CakeHooks() {

    const dispatch = useDispatch()
    const noOfcakes = useSelector(state => state.cake.noOfcakes)

  return (
    <div>
        <h1>no of cakes - {noOfcakes} </h1>
        <button onClick = {() => dispatch(buy_cakes())} >Click to buy</button>
    </div>
  )
}

export default CakeHooks