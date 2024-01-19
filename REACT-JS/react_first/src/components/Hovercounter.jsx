import React, { Component } from 'react'
import WithHoc from './WithHoc'

export class Hovercounter extends Component {
  render() {
    const {count,clickhandler} = this.props
    return (
      <div>
            <h1 onMouseOver={clickhandler}  >hover me {count}</h1>
      </div>
    )
  }
}

export default  WithHoc(Hovercounter)