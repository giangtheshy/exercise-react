import React, { useState } from 'react'

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className='tour-container'>
      <img src={tour.image} alt={tour.name} />
      <article className='desc'>
        <div className="tour-header">
          <h4>{tour.name}</h4>
          <p className="price">{tour.price}</p>
        </div>
        <div className="info">
          <p>{readMore ? tour.info : `${tour.info.substring(0, 200)} ... `}
            <button className="read-more" onClick={() => setReadMore(!readMore)}>{readMore ? 'ShowLess' : 'Read More'}</button>

          </p>

        </div>
        <button className="remove-tour" onClick={() => removeTour(tour.id)}>Not Interested</button>
      </article>
    </div>
  )
}

export default Tour
