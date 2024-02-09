import './App.css'
import {Routes,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import OrderSummery from './components/OrderSummery'
import Nomatch from './components/Nomatch'

function App() {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='order' element={<OrderSummery/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </>
  )
}

export default App
