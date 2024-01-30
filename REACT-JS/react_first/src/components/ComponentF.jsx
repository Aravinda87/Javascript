import React, { Component } from 'react'
import { UserConsumer } from './UserComponent'

 class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
            return <div>hello {username}</div>
          }}
    </UserConsumer>
    )
  }
}

export default ComponentF

