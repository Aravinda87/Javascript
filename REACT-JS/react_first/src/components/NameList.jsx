import React from 'react'

function NameList({nameprop}) {
  return (
    <div>
        <h1>{nameprop.name}{nameprop.age}{nameprop.skill}</h1>
    </div>
  )
}

export default NameList 