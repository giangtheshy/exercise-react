import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'
import Loading from './Loading'
const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  return (
    <section className='cocktails-section'>
      <h2 className="title">CocktailList</h2>
      {cocktails.length > 0 ? <div className="cocktails-container">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div> : <div className="cocktails-container"><h1 className='error'>Not Matching Cocktail !!</h1></div>}

    </section>
  )
}

export default CocktailList
