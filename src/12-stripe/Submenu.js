import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { page, location, isOpenSub } = useGlobalContext()

  const subMenu = useRef(null)
  useEffect(() => {
    let container = subMenu.current
    container.style.left = `${location.center + 20}px`
    container.style.top = `${location.bottom}px`
    container.style.width = `${page.links.length * 10}rem`
  }, [location])
  return (
    <aside className={`${isOpenSub ? "sub-menu show" : "sub-menu"}`} ref={subMenu}>
      <h1>{page.page}</h1>
      <div className="links-container">
        <ul className="links">
          {page.links.map((link, index) => {
            return <li key={index}><a href={link.url}><span className="icon">{link.icon}</span>{link.label}</a></li>
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Submenu
