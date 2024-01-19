import React, { PureComponent } from 'react'

// state is a object which is privatly maintaind in the comonent
// state is what is render in the browser
// state is change within the component setState

class Welcome extends PureComponent{
    constructor(){
        super()
        this.state = {
            message : 'hello aru'
        }
        }
        changemessage(){
            this.setState({
                message: 'hello raji'
            }) 
        }
        
    
    render(){
        console.log('render')
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changemessage()}>click!</button>
            </>
        )
    }
}
export default Welcome