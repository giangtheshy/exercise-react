import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenBar, setIsOpenBar] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
  const openBar = () => {
    setIsOpenBar(true)
  }
  const closeBar = () => {
    setIsOpenBar(false)
  }

  return (
    <AppContext.Provider value={{ isOpenModal, isOpenBar, openModal, closeModal, openBar, closeBar }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
