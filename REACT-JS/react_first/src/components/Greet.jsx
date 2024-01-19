import React from 'react'

const Greet = (props) => {
    const {name,heroname} =  props
    return(<div>
        <h1>wolcome {name} aka {heroname}</h1>
        {/* {children} */}
    </div>
)}

export default Greet