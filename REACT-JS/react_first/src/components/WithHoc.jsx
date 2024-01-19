import React from "react";

const WithHoc = OriginalComponent => {

    class WithHoc extends React.Component {

        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          clickhandler = () => {
              this.setState(prevState => {
                 return { count : prevState.count + 1 }
              })
          }

          render(){

            return(
                <OriginalComponent 
                    count = {this.state.count}
                    clickhandler = {this.clickhandler}
                />
            )

          }
    }
    return WithHoc
}

export default WithHoc