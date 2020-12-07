import React from 'react'

const List = ({ people }) => {
  return (
    <div>
      {people.map(person => {
        return <div className="person-container" key={person.id}>
          <img src={person.image} alt={person.name} />
          <div className="info-person">
            <h3 className="name-person">{person.name}</h3>
            <p className="age-person">{person.age} years</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default List
