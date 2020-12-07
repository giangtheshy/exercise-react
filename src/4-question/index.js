import React from 'react'
import Question from './Question'
import data from './data'
const Index = () => {
  return (
    <>
      <h3 className='title-header'>Questions And Answers About Login</h3>
      {data.map(question => (
        <Question key={question.id} {...question} />
      ))}
    </>
  )
}

export default Index
