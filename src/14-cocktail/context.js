import React, { useState, useEffect, useContext, useCallback } from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      if (data.drinks) {
        const newCocktails = data.drinks.map(item => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } = item
          return { id: idDrink, name: strDrink, info: strAlcoholic, glass: strGlass, image: strDrinkThumb }
        })
        setCocktails(newCocktails)
      } else {
        setCocktails([])
      }

      setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchData()
  }, [searchTerm, fetchData])
  return (
    <AppContext.Provider value={{ cocktails, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
