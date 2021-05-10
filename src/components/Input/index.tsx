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
  valid,
  autofocus = false
}: InputCard) {
  return(
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input 
        id={name} 
        {...register(name, { required, pattern, maxLength })}
        type="text" 
        aria-invalid={errors?.[name] ? "true" : "false"}
        maxLength={maxLength}
        placeholder={placeholder} 
        autoFocus={autofocus}
        className={`${styles.input} ${errors?.[name] && styles.input__error} ${valid && styles.input__valid}` }
        data-cy={name}
      />
      {errors?.[name] && <p className={styles.error}>{message}</p>}
    </div>
  )
}