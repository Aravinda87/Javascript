import React, {useState,useEffect} from 'react'

function HookMouse() {

    const [x,setx] = useState(0)
    const [y,sety] = useState(0)


    const logmouseposition = e => {
        console.log("mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mouseover',logmouseposition)

        return () =>{
          console.log("component unmount")
          window.removeEventListener('mouseover',logmouseposition)
        }
        

    },[])

  return (
    <div>
        <h1> x - {x} , y - {y} </h1>
    </div>
  )
}

export default HookMouse