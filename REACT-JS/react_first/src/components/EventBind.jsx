import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : "hello"
      }
      this.eventhandler = this.eventhandler.bind(this)
    }
    eventhandler(){
        this.setState({
            message : "goodbye!"
        })
    }
  render() {
    return (
      <div>
            <p>{this.state.message}</p>
            <button onClick={this.eventhandler}>click!</button>
      </div>
    )
  }
}

export default EventBind