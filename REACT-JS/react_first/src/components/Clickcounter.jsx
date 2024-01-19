import React, { Component } from 'react'
import WithHoc from './WithHoc'

export class Clickcounter extends Component {

  render() {
    const {count,clickhandler} = this.props
    return (
      <div>
        <button onClick={clickhandler} >aru click {count} s</button>
      </div>
    )
  }
}

export default WithHoc(Clickcounter)