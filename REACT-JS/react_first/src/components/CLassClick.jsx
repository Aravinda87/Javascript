import React, { Component } from 'react'

export class CLassClick extends Component {

    clickhandler(){
        console.log("hello aru")
    }

  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>click!</button>
      </div>
    )
  }
}

export default CLassClick