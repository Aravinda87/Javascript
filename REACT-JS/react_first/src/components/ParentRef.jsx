import React, { Component } from 'react'
import ChildRef from './ChildRef'

 class ParentRef extends Component {
    constructor(props) {
      super(props)
        this.ParentRef = React.createRef()
    }
  render() {
    return (
      <div>
        <ChildRef ref={this.ParentRef} />
        <button onClick={() =>{ this.ParentRef.current.focus() }}>click</button>
      </div>
    )
  }
}

export default ParentRef