import React , {useState , useEffect} from 'react'

function Useeffect1() {

    const [count , setcount] =  useState(0)

    useEffect(() => {
      document.title = `you clicked ${count} times `
    })

  return (
    <div>
        <button onClick={() => setcount( count + 1 ) }>count : {count}</button>
    </div>
  )
}

export default Useeffect1