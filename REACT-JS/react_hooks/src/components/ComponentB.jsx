import React, {useContext} from 'react'
import {UserContext , ChannelContext} from '../App'

function ComponentB() {
    const user = useContext(UserContext)
    const cahnnel = useContext(ChannelContext)
    return (
    <div>
        {user}-{cahnnel}
    </div>
  )
}

export default ComponentB