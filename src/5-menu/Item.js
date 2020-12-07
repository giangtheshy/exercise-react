import React from 'react'

const Item = ({ img, title, price, desc }) => {
  return (
    <div className="item-container">
      <img src={img} alt={title} />
      <div className="item-center">
        <div className="center-header">
          <h3 className="title">{title}</h3>
          <p className="price">${price}</p>
        </div>
        <div className="item-desc">
          {desc}
        </div>

      </div>
    </div>
  )
}

export default Item
