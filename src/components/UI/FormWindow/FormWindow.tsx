import React, { FC } from 'react'
import styles from './FormWindow.module.scss'
import SignUpForm from '../../forms/SignUpForm/SignUpForm'

export enum ESignUpInps {
  USERNAME = 'Username',
  EMAIL = 'Email',
  PASSWORD = 'Password',
  CONFIRM_PASSWORD = 'ConfirmPass',
  AGREEMENT = 'Agreement',
}

export type Inputs = {
  [ESignUpInps.USERNAME]: ESignUpInps.USERNAME
  [ESignUpInps.PASSWORD]: ESignUpInps.PASSWORD
  [ESignUpInps.CONFIRM_PASSWORD]: ESignUpInps.CONFIRM_PASSWORD
  [ESignUpInps.EMAIL]: ESignUpInps.EMAIL
  [ESignUpInps.AGREEMENT]: ESignUpInps.AGREEMENT
}

export interface IFormWindow {
  children: JSX.Element
}

const FormWindow: FC<IFormWindow> = ({ children }) => {
  return (
    <div className={styles.formWrap}>
      <div className={styles.formWindow}>{children}</div>
    </div>
  )
}

export default FormWindow
