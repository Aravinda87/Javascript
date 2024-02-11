import './App.css'
import {Routes,Route} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import OrderSummery from './components/OrderSummery'
import Nomatch from './components/Nomatch'
import Products from './components/Products'
import {FeaturedProducts} from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import {Authprovider} from './components/auth'
import Login from './components/Login'
import {Profile} from './components/Profile'
import { Requiredauth } from './components/Requiredauth'

function App() {
  return (
    <Authprovider>
    <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='order' element={<OrderSummery/>}/>
        <Route path='products' element={<Products/>}>
            <Route path='featured' element={<FeaturedProducts/>}/>
            <Route path='new' element={<NewProducts/>}/>
        </Route>
        <Route path='users' element={<Users/>}>
          <Route path=':userid' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
        <Route path='profile' element={<Requiredauth><Profile/></Requiredauth>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
    </Authprovider>
  )
}

export default App