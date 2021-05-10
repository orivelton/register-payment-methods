import { ButtonType } from '../../interfaces'
import styles from './Button.module.scss'

export default function Button({
  text,
  type = "button",
  onClick,
  disabled = false
}: ButtonType) {
  return(
    <button 
      type={type} 
      onClick={onClick}
      className={styles.btn}
      disabled={disabled}
    >
      {text}
    </button>
  )
}