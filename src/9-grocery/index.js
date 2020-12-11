import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}

const Index = () => {
  const [value, setValue] = useState('')
  const [list, setList] = useState(getLocalStorage('list'))
  const [alert, setAlert] = useState({ show: false, type: 'success', msg: 'Item added' })
  const [editing, setEditing] = useState(false)
  const [idEditing, setIdEditing] = useState(0)


  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      showAlert(true, 'danger', 'Please Enter Item!')
    } else if (value && editing) {
      const newList = list.map(item => {
        if (item.id === idEditing) {
          return { id: idEditing, title: value }
        }
        return item
      })
      setList(newList)
      setValue('')
      showAlert(true, 'success', 'Edit Success !')
      setEditing(false)
    } else {
      const item = { title: value, id: new Date().getTime().toString() }
      setList([...list, item])
      setValue('')
      showAlert(true, 'success', 'Item Added !')
    }

  }
  const removeItem = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
    showAlert(true, 'danger', 'Item Removed')
  }
  const handleEdit = (id) => {
    const item = list.find(item => item.id === id)
    setEditing(true)
    setValue(item.title)
    setIdEditing(id)
  }

  return (
    <>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="input">Grocery Bud</label>
        <div>
          <input type="text" name="input" placeholder="e.g. eggs" id="input" value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="submit">{editing ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      <section className="items-container">
        <List list={list} removeItem={removeItem} handleEdit={handleEdit} />
        {list.length > 0 && <button className="clear" onClick={() => { setList([]); showAlert(true, 'danger', 'Clear all item') }}>Clear Items</button>}

      </section>
    </>
  )
}

export default Index
