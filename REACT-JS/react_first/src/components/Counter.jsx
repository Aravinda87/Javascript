import React, { Component, useCallback } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    countadd(){
        this.setState( x => ({count : x.count + 1 }),()=> console.log(this.state.count))
    }
    countadd5(){
        this.countadd()
        this.countadd()
        this.countadd()
        this.countadd()
        this.countadd()
    }
    
  render() {
    return (
      <div>
        count : {this.state.count}  <br />
        <button onClick={()=> this.countadd5()}>add</button> 
    </div>
    )
  }
}

export default Counter