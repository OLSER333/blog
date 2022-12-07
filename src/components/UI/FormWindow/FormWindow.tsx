import React, { FC } from 'react'
import styles from './FormWindow.module.scss'

export enum EFormInps {
  USERNAME = 'Username',
  EMAIL = 'Email',
  PASSWORD = 'Password',
  CONFIRM_PASSWORD = 'ConfirmPass',
  AGREEMENT = 'Agreement',
  AVATAR_PATH = 'Avatar image (url)',
  // below - article
  ART_TITLE = 'title',
  ART_SHORT_DESCR = 'description',
  ART_TEXT = 'body',
}

export type Inputs = {
  [EFormInps.USERNAME]: EFormInps.USERNAME
  [EFormInps.PASSWORD]: EFormInps.PASSWORD
  [EFormInps.CONFIRM_PASSWORD]: EFormInps.CONFIRM_PASSWORD
  [EFormInps.EMAIL]: EFormInps.EMAIL
  [EFormInps.AGREEMENT]: EFormInps.AGREEMENT
  [EFormInps.AVATAR_PATH]: EFormInps.AVATAR_PATH
  [EFormInps.ART_TITLE]: EFormInps.ART_TITLE
  [EFormInps.ART_SHORT_DESCR]: EFormInps.ART_SHORT_DESCR
  [EFormInps.ART_TEXT]: EFormInps.ART_TEXT
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
