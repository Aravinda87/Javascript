import { useState } from 'react'
import './App.css'
import Hooks1 from './components/Hooks1'
import HookCounter from './components/HookCounter'
import HookArray from './components/HookArray'
import Useeffect1 from './components/Useeffect1'
import HookMouse from './components/HookMouse'
import Mousecountainer from './components/Mousecountainer'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetch from './components/DataFetch'
import Complexreducer from './components/Complexreducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* usestate */}
      {/* <Hooks1/> */}
      {/* <HookCounter /> */}
      {/* <HookArray /> */}
    {/* useeffect */}
      {/* <Useeffect1/> */}
      {/* <HookMouse /> */}
      {/* <Mousecountainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetch /> */}
    {/* useContext */}
      <Complexreducer/>
    </>
  )
}

export default App
