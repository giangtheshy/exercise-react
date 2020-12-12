import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="cocktail-center">
      <img src={image} alt={name} />
      <div className="detail">
        <h1 className='name'>{name}</h1>
        <h4 className='glass'>{glass}</h4>
        <p className='info'>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          DETAILS
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
