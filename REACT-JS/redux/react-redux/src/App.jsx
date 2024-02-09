import './App.css'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './redux/store'
import React from 'react'
import CakeHooks from './components/CakeHooks'
import IcecreemContainer from './components/IcecreemContainer'
import Newcakecontainer from './components/Newcakecontainer'
import Itemcontainer from './components/Itemcontainer'
import UserContainer from './components/UserContainer'

function App() {

  return (
    <>
    <Provider store={store}>
      <div className="App">
        {/* <Itemcontainer />  
        <CakeContainer/>
        <CakeHooks/>
        <IcecreemContainer/>
        <Newcakecontainer/> */}
        <UserContainer/>

      </div>
    </Provider>
    </>
  )

}


export default App