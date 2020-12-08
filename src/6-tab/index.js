import React, { useState, useEffect } from 'react'
import Info from './Info'

const url = 'https://course-api.com/react-tabs-project'
const Index = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)


  const fetchJobs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchJobs()
  }, [])
  if (loading) {
    return <section className="loading">
      <h1>Loading ...</h1>
    </section>
  }
  const job = jobs[value]
  return (
    <>
      <h1>Experience</h1>
      <div className="underline"></div>
      <section>
        <article className="companies-btn">
          {jobs.map((job, index) => {
            return <button className={`company-btn ${index === value && 'active'}`} key={job.id} onClick={() => setValue(index)}>{job.company}</button>
          })}
        </article>
        <article className="info-container">
          <Info job={job} />
        </article>
      </section>
    </>
  )
}

export default Index
