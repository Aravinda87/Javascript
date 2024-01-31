import { useState } from 'react'
import './App.css'
import Hooks1 from './components/Hooks1'
import HookCounter from './components/HookCounter'
import HookArray from './components/HookArray'
import Useeffect1 from './components/Useeffect1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hooks1/> */}
      {/* <HookCounter /> */}
      {/* <HookArray /> */}
      <Useeffect1/>
    </>
  )
}

export default App
