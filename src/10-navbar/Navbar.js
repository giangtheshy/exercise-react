import React, { useState, useEffect, useRef } from 'react'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'


const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  useEffect(() => {
    if (showNav) {
      linksContainerRef.current.style.height = links.length * 3 + 'rem';
    } else {
      linksContainerRef.current.style.height = 0 + 'px';
    }
  }, [showNav])

  return (
    <div className="header-center">
      <div className="header">
        <img src={logo} alt="logo" />
        <button className='icon' onClick={() => setShowNav(!showNav)}><FaBars /></button>
      </div>
      <div className="nav-container" ref={linksContainerRef}>
        <ul className='links-container' ref={linksRef}>
          {links.map(link => {
            return <li key={link.id}><a href={link.url}>{link.text}</a></li>
          })}
        </ul>
        <ul className="social-container">
          {social.map(icon => {
            return <li key={icon.id}><a href={icon.url}>{icon.icon}</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
