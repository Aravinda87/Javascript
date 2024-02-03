import React, { useEffect } from 'react'

function UseCustomHook() {
    useEffect(() => {
        document.title = `count - ${count}`
    })
}

export default UseCustomHook