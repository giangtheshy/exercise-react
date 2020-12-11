import React, { useContext } from 'react'
import { useGlobalContext } from './Context'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  const { openBar, openModal } = useGlobalContext()
  return (
    <main className='home-page'>
      <button className='open-bar-btn' onClick={openBar}><FaBars /></button>
      <button className="open-modal-btn" onClick={openModal}>SHOW MODAL</button>

    </main>
  )
}

export default Home
