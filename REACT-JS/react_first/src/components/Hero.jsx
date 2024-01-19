import React from 'react'

export default function Hero({heroname}) {
  if(heroname == 'joker'){
    throw new Error('Not A Hero!')
  }
  return (
    <div>
        <h1>
            {heroname}
        </h1>
    </div>
  )
}
