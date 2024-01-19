import React, { Component } from 'react'

export class LifeCycleb extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'aru'
      }

      console.log('constructor b')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('shouldComponetupdate a')
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate a')
        return null
    }

    componentDidMount(){
        console.log('componetDidMount a')
    }

  render() {
     console.log('render b')
    return (
     <div><h1>LifeCycleb</h1>
     
     </div>
    )
  }
}

export default LifeCycleb