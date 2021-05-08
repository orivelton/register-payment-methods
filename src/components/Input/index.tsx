import { InputCard } from '../../interfaces';

export default function Input({ register, label, maxLength, placeholder, required = true, pattern, name, errors, message }: InputCard) {
  return(
    <>
      <label htmlFor={name}>{label}</label>
      <input 
        id={name} 
        {...register(name, { required, pattern, maxLength })}
        type="text" 
        maxLength={maxLength}
        placeholder={placeholder} 
      />
      {errors?.[name] && <p>{message}</p>}
    </>
  )
}