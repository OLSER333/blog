import React, { FC } from 'react'
import styles from './TextInput.module.scss'
import { FieldError, FieldErrors, UseFormRegister } from 'react-hook-form'
import { ESignUpInps, Inputs } from '../FormWindow/FormWindow'

interface InputProps {
  type: string
  label: string
  placeholder: ESignUpInps | string
  register: any
  errors: FieldErrors<Inputs>
  name: ESignUpInps
}

const TextInput: FC<InputProps> = ({ type, label, register, errors, name, placeholder }) => {
  console.log(errors)
  const getClass = (hasError: FieldError | undefined) => (hasError ? styles.erroredInp : '')

  return (
    <div className={styles.elem}>
      <label className={styles.label}>{label}</label>
      <input
        className={`${styles.inp} ${getClass(errors[name])}`}
        {...register}
        placeholder={placeholder}
        type={type}
      />

      {errors[name] && (
        <span style={{ color: 'red' }}>
          {errors[name]?.message ? errors[name]?.message : 'This field is required'}
        </span>
      )}
    </div>
  )
}

export default TextInput
