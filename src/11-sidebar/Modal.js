import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Modal = () => {
  const { isOpenModal, closeModal } = useGlobalContext()
  return (
    <section className={`modal-overlay ${isOpenModal && 'show'}`}>
      <article className={`modal ${isOpenModal && 'show'}`}>
        <h1>Modal Context</h1>
        <button className="close-modal" onClick={closeModal}><FaTimes /></button>
      </article>
    </section>
  )
}
export default Modal
