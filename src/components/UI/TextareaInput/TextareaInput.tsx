import React, { FC } from 'react'
import { FieldError, FieldErrors } from 'react-hook-form'
import styles from './TextareaInput.module.scss'
import { EFormInps, Inputs } from '../FormWindow/FormWindow'

interface InputProps {
  label: string
  placeholder: EFormInps | string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
  defValue?: string
}

const TextareaInput: FC<InputProps> = ({
  label,
  register,
  errors,
  name,
  placeholder,
  defValue,
}) => {
  console.log(errors)
  const getClass = (hasError: FieldError | undefined) => (hasError ? styles.erroredInp : '')

  return (
    <div className={styles.elem}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={`${styles.inp} ${getClass(errors[name])}`}
        {...register}
        placeholder={placeholder}
        defaultValue={defValue ? defValue : ''}
      />

      {errors[name] && (
        <span style={{ color: 'red' }}>
          {errors[name]?.message ? errors[name]?.message : 'This field is required'}
        </span>
      )}
    </div>
  )
}

export default TextareaInput
