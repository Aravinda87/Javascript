import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const orderplaced = useNavigate()

  return (
    <>
    <div>Home page</div>
    <button onClick={() => orderplaced('order')}>place order</button>
    </>
  )
}

export default Home