import React, { useReducer, useState } from 'react'
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
import CompoA from './components/CompoA'
import DataFetchOne from './components/DataFetchOne'
import DataFetchTwo from './components/DataFetchTwo'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import Counterone from './components/Counterone'
import Countertwo from './components/Countertwo'
import UserForm from './components/UserForm'



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
      {/* <UserContext.Provider value={{countState : count ,countDispatch : dispatch}}>
        count - {count    }
        <CompoA/>
        <CompoD/>
        <CompoF/> 
      </UserContext.Provider> */}
      {/* <DataFetchOne/> */}
      {/* <DataFetchTwo/>       not solved */}
    {/* custom hooks */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo/> */}
      {/* <Counterone/> */}
      {/* <Countertwo/> */}
      {/* <UserForm/>           not solved */}
    </>
  )
}

export default App