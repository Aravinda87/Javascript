import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin : true
      }
    }

  render() {

    return  this.state.isloggedin && <div>hii aru</div>

  }
}

export default UserGreeting