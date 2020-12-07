import React, { useState, useEffect } from 'react'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  const fetchTour = async () => {
    try {
      setLoading(true)
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTour()
  }, [])
  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours)
  }
  if (loading) {
    return <h1 className="loading">Loading ...</h1>
  }
  if (tours.length === 0) {
    return <div className="not-tour">
      <h2>Not find tour</h2>
      <button className="refresh-tour" onClick={() => setTours(() => fetchTour())}>Refresh</button>
    </div>
  }
  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  )
}

export default Index
