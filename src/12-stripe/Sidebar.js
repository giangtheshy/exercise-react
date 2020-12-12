import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { closeSideBar, isOpenBar } = useGlobalContext()
  return (
    <aside className={`${isOpenBar ? 'sidebar-overlay show' : 'sidebar-overlay'}`}>
      <article className={`${isOpenBar ? 'side-bar show' : 'side-bar'}`}>
        <div className="links-container">
          {sublinks.map((link, index) => {
            return <div className="link-center" key={index}>
              <h3>{link.page}</h3>
              <ul className="links">
                {link.links.map((anchor, id) => {
                  return <li key={id}> <a href={anchor.url}><span className="icon">{anchor.icon}</span>{anchor.label}</a></li>
                })}
              </ul>
            </div>
          })}

        </div>
        <button className="close-btn" onClick={closeSideBar}><FaTimes /></button>
      </article>
    </aside>
  )
}

export default Sidebar
