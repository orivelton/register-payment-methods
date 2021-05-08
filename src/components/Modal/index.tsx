import { useState } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ children, handleClose }) {
  return(
    <>
      <div className={styles.overlay} onClick={() => { handleClose(false) }}></div>
      <div className={styles.modal}>
      <button className={styles.modal__close} onClick={() => { handleClose(false) }}>X</button>
        {children}
      </div>
    </>
  )
}