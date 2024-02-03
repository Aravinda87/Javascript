import React, { useEffect } from 'react'

function UseCustomHook(count) {
    useEffect(() => {
        document.title = `count - ${count}`
    },[count])
}

export default UseCustomHook