import { InputCard } from '../../interfaces'
import styles from './Input.module.scss'

export default function Input({ 
  register, 
  label, 
  maxLength, 
  placeholder, 
  required = true, 
  pattern, 
  name, 
  errors, 
  message,
  autofocus = false
}: InputCard) {
  return(
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input 
        id={name} 
        {...register(name, { required, pattern: {
          value: pattern,
          message: message
        }, maxLength })}
        type="text" 
        aria-invalid={!!errors?.[name]}
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