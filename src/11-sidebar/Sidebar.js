import React from 'react'
import { links, social } from './data'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

const Sidebar = () => {
  const { isOpenBar, closeBar } = useGlobalContext()
  return (
    <div className={`sidebar ${isOpenBar && 'show'}`}>
      <div className="header-sidebar">
        <img src={logo} alt="logo" />
        <button className="close-sidebar" onClick={closeBar}><FaTimes /></button>
      </div>
      <div className="links-container">
        <ul className="links">
          {links.map(link => {
            return <li key={link.id}><a href={link.url}><span className="icon">{link.icon}</span>{link.text}</a></li>
          })}
        </ul>
      </div>
      <div className="social-container">
        <ul className="socials">
          {social.map(social => {
            return <li key={social.id}><a href={social.url}>{social.icon}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
