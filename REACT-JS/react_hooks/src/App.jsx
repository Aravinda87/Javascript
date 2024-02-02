import React, { useState } from 'react'
import './App.css'
import Hooks1 from './components/Hooks1'
import HookCounter from './components/HookCounter'
import HookArray from './components/HookArray'
import Useeffect1 from './components/Useeffect1'
import HookMouse from './components/HookMouse'
import Mousecountainer from './components/Mousecountainer'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetch from './components/DataFetch'
import ComponentA from './components/ComponentA'
import UseReducer from './components/UseReducer'

export  const UserContext = React.createContext()
export  const ChannelContext = React.createContext()

function App() {
  

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
      {/* <UserContext.Provider value={'aru'} >
        <ChannelContext.Provider value={'raaji'}>
        <ComponentA/>
        </ChannelContext.Provider>
      </UserContext.Provider>  */}
    {/* useReducer */}
      {/* <UseReducer/> */}
    </>
  )
}

export default App