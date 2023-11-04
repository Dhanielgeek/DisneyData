import React from 'react'
import Hero from './Hero'
import Card from './Card'
import Movies from './data.json'

const Conditional = () => {
  return (
    <div>
        <Hero/>
        <Card mov={Movies}/>
    </div>
  )
}

export default Conditional