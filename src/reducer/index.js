import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import {reducer} from './reducer.js'


const defaultState = {
  people: [],
  isOpenModal: false,
  modalContent: 'Hello'
}
const InDex = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    if(name){
      dispatch({type:'ADD',payload:name})
      setName('')
    }else{
      dispatch({type:'NOT_VALUE'})
    }
  }
  const removeItem = (id) => {
    dispatch({type:'DELETE',payload:id})
  }
  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }
  return (
    <div className="main">
      {state.isOpenModal && <Modal modalContent={state.modalContent} close={closeModal}/>}
      <form onSubmit={(e)=>submitHandler(e)}>
        <div className="form">
          <input type="text" name="namePeople" value={name} onChange={(e) => setName(e.target.value)} />
          <button type="submit">Add</button>
        </div>
      </form>
      <div className="people-container">
        {state.people.map(person => {
          return <div className="person" key={person.id}> 
            <h3>{person.name}</h3>
            <button className="remove-btn" onClick={()=>removeItem(person.id)}>remove</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default InDex
