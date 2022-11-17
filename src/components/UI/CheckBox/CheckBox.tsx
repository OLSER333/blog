import React, { FC } from 'react'
import styles from './CheckBox.module.scss'
import { FieldError, FieldErrors } from 'react-hook-form'
import { EFormInps, Inputs } from '../FormWindow/FormWindow'
import { Checkbox } from 'antd'
import { v4 as uuid } from 'uuid'

interface ICheckBoxProps {
  label: string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
}

const CheckBox: FC<ICheckBoxProps> = ({ label, register, errors, name }) => {
  const getClass = (hasError: FieldError | undefined) => (hasError ? styles.erroredInp : '')
  //
  const uniqId = uuid()
  return (
    <div className={styles.elem}>
      <div className={styles.alignCheckbox}>
        <input
          type={'checkbox'}
          className={`${styles.inp} ${getClass(errors[name])}`}
          {...register}
          name={name}
          id={uniqId}
        />
        <label htmlFor={uniqId} className={styles.label}>
          {label}
        </label>
      </div>

      {errors[name] && (
        <span style={{ color: 'red' }}>
          {errors[name]?.message ? errors[name]?.message : 'This field is required'}
        </span>
      )}
    </div>
  )
}

export default CheckBox
