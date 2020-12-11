import React from 'react'
import { useGlobalContext } from './context'

const Hero = () => {
  const value = useGlobalContext();
  console.log(value);
  return (
    <div>

    </div>
  )
}

export default Hero
