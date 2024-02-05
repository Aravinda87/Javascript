import React, { useEffect } from 'react'
import Uesinput from './Uesinput'

function UserForm() {

    const [firstname,firstbind,firstreset] = Uesinput('')
    const [lastname,bind,reset] = Uesinput('')

    const submithandler = e => {
        e.preventDefault()
        alert(`hello ${firstname} ${lastname}`)
        firstreset()
        reset()
    }

  return (
    <div>
        <form onSubmit={submithandler}>
            <h1>firstname</h1>
        <input type="text"  {...firstbind} />
            <h1>lastname</h1>
        <input type="text"  {...bind}/>
        <button>submit</button>
        </form>
    </div>
  )
}

export default UserForm