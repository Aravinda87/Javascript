import React , {useState , useEffect} from 'react'

function Useeffect1() {

    const [count , setcount] =  useState(0)
    const [name,setname] = useState('')

    useEffect(() => {
      console.log('updating doc title')
      document.title = `you clicked ${count} times `
    },[count])

  return (
    <div>
      <input type="text" name='name' value={name} onChange={e => setname(e.target.value)} />
        <button onClick={() => setcount( count + 1 ) }>count : {count}</button>
    </div>
  )
}

export default Useeffect1