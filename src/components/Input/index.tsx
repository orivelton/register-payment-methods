import { InputCard } from '../../interfaces'
import styles from './Input.module.scss'

export default function Input({ register, label, maxLength, placeholder, required = true, pattern, name, errors, message }: InputCard) {
  return(
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input 
        id={name} 
        {...register(name, { required, pattern, maxLength })}
        type="text" 
        maxLength={maxLength}
        placeholder={placeholder} 
        className={`${styles.input} ${errors?.[name] && styles.input__error} ${true && styles.input__valid}` }
      />
      {errors?.[name] && <p className={styles.error}>{message}</p>}
    </div>
  )
}