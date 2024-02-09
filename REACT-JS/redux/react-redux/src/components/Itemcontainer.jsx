import React from 'react'
import { connect } from 'react-redux'
import { buy_cakes, buy_icecream } from '../redux'

function Itemcontainer(props) {
  return (
    <div>
        <h1>no of cakes - {props.item}</h1>
        <button onClick={props.buyitem}>click</button>
    </div>
  )
}

const mapstatetoprops = (state,ownprops) => {
    const itemstate = ownprops.cake ? state.cake.noOfcakes : state.icecream.noOficecreams
    return {
        item : itemstate
    }
}


const mapdispatchtoprops = (dispatch,ownprops) => {
    const buyitemfunc = ownprops.cake ? () => dispatch(buy_cakes()) : () => dispatch(buy_icecream()) 
    return {
        buyitem : buyitemfunc
    }
}

export default connect(mapstatetoprops,mapdispatchtoprops)(Itemcontainer)