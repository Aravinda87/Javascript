import React, { Component } from 'react'
import NameList from './NameList'

export class Mapmethod extends Component {
  render() {

    let list = [
        {
            id: 1,
            name:'aru',
            age:'22',
            skill:'react'
        },
        {
            id: 2,
            name:'raji',
            age:'22',
            skill:'react'
        },
        {
            id: 3,
            name:'sahana',
            age:'22',
            skill:'react'
        }
    ]
    let splitlist = list.map(nameprop => <NameList key={nameprop.name} nameprop={nameprop}/>)

    return (
      <div>{splitlist}</div>
    )
  }
}

export default Mapmethod