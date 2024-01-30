import React, { Component } from 'react'

export class ClickCount extends Component {
    render() {
          const {count ,increment} = this.props
    return (
      <div>
        <button onClick={increment}>click {count}</button>
      </div>
    )
  }
}

export default ClickCount