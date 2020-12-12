import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
const SingleCocktail = () => {
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)
  const { id } = useParams()
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0]
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ]
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        }
        setCocktail(newCocktail)
      } else {
        setCocktail(null)
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h1>No cocktail to display</h1>

  } else {
    const { name, image, info, category, glass, instructions, ingredients } = cocktail
    return (
      <section className="single-cocktail">
        <Link to='/' className="btn">BACK HOME</Link>
        <article className="cocktail-center">
          <h1 className="name">{name}</h1>
          <img src={image} alt={name} className="img" />
          <div className="detail">
            <p><span className="property">Name :</span> {name}</p>
            <p><span className="property">Category :</span> {category}</p>
            <p><span className="property">Info :</span> {info}</p>
            <p><span className="property">Glass :</span> {glass}</p>
            <p><span className="property">Instructions :</span> {instructions}</p>
            <p><span className="property">Ingredient :</span>
              {ingredients.map((item, index) => {
                return <span className="ingre" key={index}>{item}</span>
              })}
            </p>
          </div>
        </article>
      </section>
    )
  }
}

export default SingleCocktail
