import React from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { state: { amount } } = useGlobalContext()
  return (
    <header>
      <h1>UseReducer</h1>
      <button><FaCartArrowDown /><span className="amount">{amount}</span></button>
    </header>
  )
}

export default Navbar
