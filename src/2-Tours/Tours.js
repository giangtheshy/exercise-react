import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <div className='tours-section'>
      <h2 className="title">Our Tours</h2>
      <div className="underscore"></div>
      <section className="tours-container">
        {tours.map(tour => {
          return <Tour tour={tour} key={tour.id} removeTour={removeTour} />
        })}
      </section>
    </div>
  )
}

export default Tours
