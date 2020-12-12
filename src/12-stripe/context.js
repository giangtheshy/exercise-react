import React, { useContext, useState } from 'react'
import data from './data'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [isOpenSub, setIsOpenSub] = useState(false)
  const [isOpenBar, setIsOpenBar] = useState(false)
  const [page, setPage] = useState({ page: '', links: [] })
  const [location, setLocation] = useState({ center: '', location: '' })

  const openSideBar = () => {

    setIsOpenBar(true)
  }
  const closeSideBar = () => {
    setIsOpenBar(false)
  }
  const openSubMenu = (text, { center, bottom }) => {
    setIsOpenSub(true)
    let tempPage = data.find(item => item.page === text)
    setPage(tempPage)
    setLocation({ center, bottom })
  }
  const closeSubMenu = () => {
    setIsOpenSub(false)
  }

  return (
    <AppContext.Provider value={{
      isOpenBar,
      isOpenSub,
      closeSideBar,
      openSideBar,
      closeSideBar,
      openSubMenu,
      closeSubMenu,
      page,
      location
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppProvider }
