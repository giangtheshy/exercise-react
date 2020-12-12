import React, { useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initial = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial)
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const data = await response.json()
    dispatch({ type: 'GET_DATA', payload: data })
  }
  useEffect(() => {
    fetchData()
  }, [])
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const clearItem = () => {
    dispatch({ type: 'CLEAR' })
  }
  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' })
  }, [state.cart])
  return (
    <AppContext.Provider value={{ state, toggleAmount, removeItem, clearItem }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
