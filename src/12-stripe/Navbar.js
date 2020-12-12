import React from 'react'
import { FaBars } from 'react-icons/fa'
import logo from './images/logo.svg'
import { useGlobalContext } from './context'


const Navbar = () => {
  const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext()


  const handleMouseOver = (e) => {
    const text = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom
    openSubMenu(text, { center, bottom })

  }
  const handleMouseOverNav = (e) => {
    if (e.target.classList.contains("nav-bar")) {
      console.log(e.target);
      closeSubMenu()
    }
  }
  return (
    <article className="nav-bar" onMouseOver={handleMouseOverNav}>
      <div className='img-container'>
        <img src={logo} alt="logo" />
      </div>
      <div className="links-container">
        <button className="btn" onMouseOver={handleMouseOver}>products</button>
        <button className="btn" onMouseOver={handleMouseOver}>developers</button>
        <button className="btn" onMouseOver={handleMouseOver}>company</button>
      </div>
      <button className="sign-in">Sign in</button>
      <button className="open-bar" onClick={openSideBar}><FaBars /></button>
    </article>
  )
}

export default Navbar
