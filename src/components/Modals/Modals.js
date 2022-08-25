import React from 'react'
import { useModal } from '../Hooks/useModal'
import { Modal } from './Modal'

export const Modals = () => {
    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p> Hola este este es el primer modals</p>
                <img src='./assets/images/Cranky1.gif' alt='Hello Hackerman'/>
            </Modal>
        </div>
    )
}
