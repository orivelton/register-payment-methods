import { InputCard } from '../../interfaces'
import styles from './Input.module.scss'

export default function Input({ 
  register, 
  label, 
  maxLength, 
  placeholder, 
  pattern, 
  name, 
  errors, 
  message,
  autofocus = false,
  dirtyFields
}: InputCard) {
  return(
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input 
        id={name} 
        {...register(name, { required: true, pattern , maxLength})}
        type="text" 
        aria-invalid={!!errors?.[name]}
        data-dirty={dirtyFields?.[name]}
        maxLength={maxLength}
        placeholder={placeholder} 
        autoFocus={autofocus}
        className={styles.input}
        data-cy={name}
      />
      {errors?.[name] && <p className={styles.error}>{message}</p>}
    </div>
  )
}
