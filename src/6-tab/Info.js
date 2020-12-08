import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Info = ({ job }) => {
  return (
    <>
      <h2 className="title">{job.title}</h2>
      <h2 className="company">{job.company}</h2>
      <p className="date">{job.dates}</p>
      <div className="duties">
        {job.duties.map((duty, index) => {
          return <div className="duty-center" key={index}>
            <button className="icon"><FaAngleDoubleRight /></button>
            <p className="duty">{duty}</p>
          </div>
        })}
      </div>
      <div className="btn-container">
        <button className="more-info">More Info</button>
      </div>
    </>
  )
}

export default Info
