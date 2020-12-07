import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className="question-container">
      <div className='question-center'>
        <p className="title">{title}</p>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? <FaMinus /> : <FaPlus />}</button>
      </div>
      <div className="info">
        {showInfo && <p>{info}</p>}
      </div>
    </div>
  )
}

export default Question
