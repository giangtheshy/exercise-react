import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="nav">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <ul className="links">
        <li>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='link'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
