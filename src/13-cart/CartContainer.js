import React from 'react'
import { useGlobalContext } from './context'
import CartItem from './CartItem'
const CartContainer = () => {
  const { state: { cart, total }, clearItem } = useGlobalContext()
  return (
    <section className='cart-section'>
      {cart.length ? <><h1>Your Cart</h1>
        <div className="cart-container">
          {cart.map(item => {
            return <CartItem key={item.id} {...item} />
          })}
        </div>
        <div className="total-center">
          <h3>Total</h3>
          <p className="total">${total}</p>
        </div>
        <button className="clear-cart" onClick={clearItem}>Clear Cart</button></> : <div className='empty'><h1>Cart is Empty !</h1></div>}

    </section>
  )
}

export default CartContainer
