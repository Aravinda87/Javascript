import React, {useContext} from 'react'

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