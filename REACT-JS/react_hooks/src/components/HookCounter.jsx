import React , {useState} from 'react'

function HookCounter() {

    const [name,setname] = useState({firstname : "" , lastname : ""})

  return (
    <div>
        <input type="text" name='firstname' value={name.firstname} onChange={e => setname({ ...name, firstname : e.target.value } )}/>
        <input type="text" name='firstname' value={name.lastname} onChange={e => setname({ ...name, lastname: e.target.value })}/>
        <h1>First name = {name.firstname}</h1>
        <h1>Last name = {name.lastname}</h1>
    </div>
  )
}

export default HookCounter