import React from 'react'
import { connect } from 'react-redux'
import { buy_cakes } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h1>no of cakes - {props.noOfcakes}</h1>
        <button onClick={props.buy_cakes}>Click to buy</button>
    </div>
  )
}

const mapstatetoprops = state => {
    return{
        noOfcakes : state.noOfcakes
    }
}

const mapdispatchtoprops = dispatch => {
    return{
      buy_cakes : () => dispatch(buy_cakes())
    }
}

export default connect(
    mapstatetoprops,
    mapdispatchtoprops
)(CakeContainer)