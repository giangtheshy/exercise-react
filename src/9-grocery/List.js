import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ list, removeItem, handleEdit }) => {
  return (
    <>
      {list.map(item => {
        return <article className="item-center" key={item.id}>
          <p className="item-title">{item.title}</p>
          <div className="btn-center">
            <button className="edit" onClick={() => handleEdit(item.id)}><FaEdit /></button>
            <button className="remove" onClick={() => removeItem(item.id)}><FaTrash /></button>
          </div>
        </article>
      })}
    </>
  )
}

export default List
