import Image from 'next/image'
import { ReactElement } from 'react'
import styles from './Modal.module.scss'

type ModalType = {
  children: ReactElement,
  handleClose: Function | any
}

export default function Modal({ children, handleClose }: ModalType): ReactElement {
  return(
    <>
      <div className={styles.overlay} onClick={() => { handleClose(false) }}></div>
      <div className={styles.modal}>
      <button className={styles.modal__close} onClick={() => { handleClose(false) }}>
        <Image src="/images/close.svg" alt="Close modal" width={15} height={15} />
      </button>
      {children}
      </div>
    </>
  )
}