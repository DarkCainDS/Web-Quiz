import React from 'react'
import './Modal.css'


export const Modal = ({closeModal,isOpen ,children, scenario}) => {
  return (

    <div className={`modal ${isOpen && 'is-open'}`} >    {/*onClick={closeModal}*/}
        <div className={'modal-container-' + scenario}>
            <button className='modal-close' onClick={closeModal}>X</button>
            {children}
        </div>

    </div>
  )
}
