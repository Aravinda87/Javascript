import React from 'react'
import './Mystyle.css'

const heading = {
    color : 'red',
    backgroundColor : 'blue'
}

function CssComponent(props) 
{
    let primary = props.primary ? "primary" : ""
  return (
    <div>
        <h1 className={`${primary} font_xl `} style={heading} >hii aru</h1>
    </div>
  )
}

export default CssComponent