import React from 'react'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useGlobalContext } from './context'

const Index = () => {
  const { state: { loading } } = useGlobalContext()
  if (loading) {
    return <section className="loading">
      <h1>Loading ...</h1>
    </section>
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  )
}

export default Index
