import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Parent : "parent"
      }
      this.greethandler = this.greethandler.bind(this);
    }

    greethandler(chilsdname){
        alert(`hello ${this.state.Parent} from ${chilsdname} `)
    }

  render() {
    return (
      <div>
        <ChildComponent greethandler ={this.greethandler} />
      </div>
    )
  }
}

export default ParentComponent