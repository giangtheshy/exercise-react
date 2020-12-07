import React, { useState } from 'react'
import data from './data'
import List from './List'

const Index = () => {
  const [people, setPeople] = useState(data)
  return (
    <section className='user-box'>
      <h3>{people.length} birthday today</h3>
      <List people={people} />
      <button className="clear" onClick={() => setPeople([])}>Clear All</button>
    </section>
  )
}

export default Index
