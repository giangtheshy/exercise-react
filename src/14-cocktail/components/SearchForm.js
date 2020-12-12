import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')
  const handleChange = () => {
    setSearchTerm(searchValue.current.value)
  }
  useEffect(() => {
    searchValue.current.focus()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Search Your Favorite Cocktail
        </label>
        <input type="text" name="name" id="name" ref={searchValue} onChange={handleChange} />
      </form>
    </div>
  )
}

export default SearchForm
