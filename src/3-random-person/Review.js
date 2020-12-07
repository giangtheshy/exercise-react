import React, { useState } from 'react'
import data from './data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'



const Review = () => {
  const [index, setIndex] = useState(0)
  const person = data[index]
  const checkIndex = (num) => {
    if (num < 0) {
      return data.length - 1
    }
    if (num > data.length - 1) {
      return 0
    }
    return num
  }
  const prevPerson = () => {
    let newIndex = index - 1;
    setIndex(checkIndex(newIndex))
  }
  const nextPerson = () => {
    let newIndex = index + 1;
    setIndex(checkIndex(newIndex))
  }
  const randomPerson = () => {
    let ranNum = Math.floor((Math.random() * data.length))
    if (ranNum === index) {
      ranNum = index + 1
    }
    setIndex(checkIndex(ranNum))
  }
  return (
    <div className='review-container'>
      <div className="img-container">
        <img src={person.image} alt={person.name} />
        <span className='icon-img'><FaQuoteRight /></span>
      </div>
      <h4 className='name'>{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="desc">{person.text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={() => prevPerson()}><FaChevronLeft /></button>
        <button className="next-btn" onClick={() => nextPerson()}><FaChevronRight /></button>
      </div>
      <button className="random" onClick={() => randomPerson()}>Surprise Me</button>
    </div>
  )
}

export default Review
