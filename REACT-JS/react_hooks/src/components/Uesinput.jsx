import React, { useState } from 'react'

function Uesinput(initialvalue) {
  
    const [value,setvalue] = useState(initialvalue)
    
    const  reset = () => {
        setvalue(initialvalue)
    }
    const bind = {
        value ,
        onChange : e => {
            setvalue(e.target.value)
        }
    }
     
    return [value,reset,bind]

}

export default Uesinput