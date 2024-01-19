import React from 'react'

function FunctionClick() {
    function clickit(){
        console.log("hii");
    }

  return (
    <div>
        <button onClick={clickit}>click!</button>
    </div>
  )

}

export default FunctionClick