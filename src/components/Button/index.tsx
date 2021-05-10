import { ButtonType } from '../../interfaces'
import styles from './Button.module.scss'

export default function Button({
  text,
  type,
  onClick,
  disabled = false,
  variant
}: ButtonType) {
  return(
    <button 
      type={type || 'button'} 
      onClick={onClick}
      className={`${styles.btn} ${variant === 'delete' && styles.btn__delete}`}
      disabled={disabled}
      data-cy={text}
    >
      {text}
    </button>
  )
}
