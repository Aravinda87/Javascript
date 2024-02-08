import React from 'react'
import { connect } from 'react-redux'
import { buy_icecream } from '../redux'

function IcecreemContainer(props) {
  return (
    <div>
        <h1>no of Icecream - {props.noOficecreams}</h1>
        <button onClick={props.buy_icecream}>Click to buy</button>
    </div>
  )
}

const mapstatetoprops = state => {
    return{
        noOficecreams : state.icecream.noOficecreams
    }
}

const mapdispatchtoprops = dispatch => {
    return{
      buy_icecream : () => dispatch(buy_icecream())
    }
}

export default connect(
    mapstatetoprops,
    mapdispatchtoprops
)(IcecreemContainer)