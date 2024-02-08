import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buy_cakes } from '../redux'

function Newcakecontainer(props) {

    const [number,setnumber] = useState(1)

    return (
    <div>
        <h1>no of cakes - {props.noOfcakes}</h1>
        <input type='text' onChange={e => setnumber(e.target.value)} value={number} />
        <button onClick={ () => props.buy_cakes(number) }>Click {number} to buy</button>
    </div>
  )
}

const mapstatetoprops = state => {
    return{
        noOfcakes : state.cake.noOfcakes
    }
}

const mapdispatchtoprops = dispatch => {
    return{
      buy_cakes : number => dispatch(buy_cakes(number))
    }
}

export default connect(
    mapstatetoprops,
    mapdispatchtoprops
)(Newcakecontainer)