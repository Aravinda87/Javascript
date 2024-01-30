import React, { Component } from 'react'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import CLassClick from './components/CLassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import Mapmethod from './components/Mapmethod'
import CssComponent from './components/CssComponent'
import Form from './components/Form'
import LifeCyclea from './components/LifeCyclea'
import ParentRef from './components/ParentRef'
import Hero from './components/Hero'
import ErrorBoundry from './components/ErrorBoundry'
import Clickcounter from './components/Clickcounter'
import Hovercounter from './components/Hovercounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import ClickCount from './components/ClickCount'
import HoverCount from './components/HoverCount'
import { Userprovider } from './components/UserComponent'
import ComponentC from './components/ComponentC'

export class App extends Component {

  render() {
    return (
      <div>
        {/* props */}
        {/* <Greet name="aru" heroname="batman"> */}
        {/* <h2>hello batman</h2> */}
        {/* </Greet> */}
        {/* <Greet name="raji" heroname="diana" /> */}
        {/* <Greet name="sahana" heroname="scarlet" /> */}
        {/* <Welcome /> */}
        {/* <Counter/> */}
        {/* <FunctionClick/> */}
        {/* <CLassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <Mapmethod /> */}
        {/* <CssComponent primary={true}/> */}
        {/* <Form /> */}
        {/* <LifeCyclea /> */}
        {/* <ParentRef /> */}
        {/* <ErrorBoundry >
        <Hero heroname={'joker'} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroname={'batman'} />
        </ErrorBoundry>
        <ErrorBoundry>
        <Hero heroname={'superman'} />
        </ErrorBoundry> */}
        {/* <Clickcounter /> */}
        {/* <Hovercounter /> */}
        {/* <ClickCounterTwo
         render = {(count,increment) => (
           <ClickCount count={count} increment={increment}/>
           )}
          /> */}
          {/* <ClickCounterTwo
         render = {(count,increment) => (
           <HoverCount count={count} increment={increment}/>
           )}
          /> */}
        
        <Userprovider value ="aru">
          <ComponentC /> 
        </Userprovider>

      </div>
    )
  }
}

export default App