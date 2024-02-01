import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetch() {

    const [post,setpost] = useState({})
    const [id ,setonid] = useState(1)
    const [idonclick , setidfrombuttonclick] = useState(1)
    
    useEffect(() =>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setpost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[idonclick])

  return (
    <div>
        <input type="text" value={id} />
        <button onClick={() => setidfrombuttonclick(id) }>click</button>
         <div>{post.title}</div>
        {/* <ul>
            {
             posts.map(post => <li key={post.id}>{post.title}</li>)   
            }
        </ul> */}
    </div>
  )
}

export default DataFetch