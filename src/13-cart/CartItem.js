import React from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useGlobalContext } from './context'
const CartItem = ({ id, amount, img, price, title }) => {
  const { toggleAmount, removeItem } = useGlobalContext()
  return (
    <article className="cart-item">
      <div className="item-center">
        <img src={img} alt="phone" />
        <div className="item-detail">
          <h3 className="name">{title}</h3>
          <p className="price">${price}</p>
          <button className="remove" onClick={() => removeItem(id)}> remove</button>
        </div>
      </div>
      <div className="amount-center">
        <button className="increase" onClick={() => toggleAmount(id, 'inc')}><IoIosArrowUp /></button>
        <p className="amount">{amount}</p>
        <button className="decrease" onClick={() => toggleAmount(id, 'dec')}><IoIosArrowDown /></button>
      </div>
    </article>
  )
}

export default CartItem
