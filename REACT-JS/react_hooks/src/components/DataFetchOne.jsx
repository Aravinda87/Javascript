import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchOne() {

    const [loading,setloading] = useState(true)
    const [error,seterror] = useState('')
    const [post,setPosts] = useState({})

    useEffect(()=>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then( res => {
            setloading(false)
            setPosts(res.data)
            seterror('')
        })
        .catch(error => {
            setloading(false)
            setPosts({})
            seterror('error')
        })
    },[])

  return (
    <div>
        {loading ? 'loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchOne