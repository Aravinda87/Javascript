import React, { Component } from 'react'

export class HoverCount extends Component {
  render() {
      const {count ,increment} = this.props
    return (
      <div>
        <h1 onMouseOver={increment}> hover {count} </h1>
      </div>
    )
  }
}

export default HoverCount