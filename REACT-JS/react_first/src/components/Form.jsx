import React, { Component } from 'react'

export class Form extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         username : '',
         email : '',
         topic : 'raji'
      }
    }

    handleusername = event => 
    {
        this.setState({
            username : event.target.value
        })
    }

    handelmail = event => 
    {
        this.setState({
            email : event.target.value 
        })
    }

    handleselect = event =>
    {
        this.setState({
            topic : event.target.value
        })
    }

    handelsubmit = (event) =>
    {
        alert(` ${this.state.username} ${this.state.email} ${this.state.topic} `)
    }

  render() {

    const {username,email,topic} = this.state

    return (
        <form onSubmit={this.handelsubmit}>
            <div>
                <label>username : </label>
                <input type='text' 
                 value={username}
                 onChange={this.handleusername}
                ></input>
            </div>
            <div>
                <label>email : </label>
                <input type='text' 
                 value={email}
                 onChange={this.handelmail}
                ></input>
            </div>
            <div>
                <label>select : </label>
                <select value={topic} onChange={this.handleselect} >
                    <option>aru</option>
                    <option>raji</option>
                    <option>sahana</option>
                    <option>nothing</option>
                </select>
            </div>
                <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form