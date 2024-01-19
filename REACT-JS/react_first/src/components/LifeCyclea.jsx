import React, { Component } from 'react'
import LifeCycleb from './LifeCycleb'

export class LifeCyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'aru'
      }

      console.log('constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('shouldComponetupdate a')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate a')
        return null
    }

    componentDidMount(){
        console.log('componetDidMount a')
    }

    changemethod(){
        this.setState({
            name : 'raji'
        })
    }

  render() {
     console.log('render')
    return (
     <div>
        <h1>LifeCycleA</h1>
        <button onClick={this.changemethod} >click!</button>
        <LifeCycleb />
     </div>
    )
  }
}

export default LifeCyclea