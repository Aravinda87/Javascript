import React, { Component } from 'react'
import axios from 'axios'
export class Https extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         errmsg : ''
      }
    }

    componentDidMount(){    

        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then( response =>{
            console.log(response)
            this.setState({
                posts : response.data
            })
        }).catch(error =>{
            // console.log(error)
            this.setState({
                errmsg : 'error retriving data'
            })
        })
    }

  render() {
    const {posts , errmsg} = this.state
    return (
      <div>

        list of data
        {
            posts.length ?
            posts.map(post =>   <div key={post.id}>{post.title}</div> ) :
            null
        }
        { errmsg ? <div>{errmsg}</div> : null }
      </div>
    )
  }
}

export default Https