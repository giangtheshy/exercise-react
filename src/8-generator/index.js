import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const Index = () => {
  const [color, setColor] = useState('')
  const [list, setList] = useState(new Values('#f15025').all(10))
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      console.log(error);
      setError(true)
    }
  }
  return (
    <>
      <section className="header">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="color">Color Generator</label>
          <input type="text" name='color' id='color' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' className={error && 'error'} />
          <button type='submit' className="btn">Submit</button>
        </form>
      </section>
      <section className="colors-container">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hex={color.hex} />
        })}
      </section>
    </>
  )
}

export default Index
