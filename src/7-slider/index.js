import React, { useState, useEffect } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import data from './data'


const Index = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const length = people.length - 1
    if (index < 0) {
      setIndex(length)
    }
    if (index > length) {
      setIndex(0)
    }
  }, [index])
  useEffect(() => {
    const clear = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => {
      clearInterval(clear)
    }
  }, [index])
  return (
    <>
      <h1 className="title"><span>/</span>Reviews</h1>
      <section className="review-container">
        {people.map((person, personIndex) => {
          let position = 'next-slide'
          if (personIndex === index) {
            position = 'active'
          }
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'last-slide'
          }
          return <div className={`person-container ${position}`} key={person.id}>
            <img src={person.image} alt={person.name} />
            <h4 className="name">{person.name}</h4>
            <p className="job">{person.title}</p>
            <p className="quote">{person.quote}</p>
            <FaQuoteRight className='icon-quote' />
          </div>
        })}
        <button className="prev-btn" onClick={() => setIndex(index - 1)}><FiChevronLeft /></button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}><FiChevronRight /></button>
      </section>

    </>
  )
}

export default Index
