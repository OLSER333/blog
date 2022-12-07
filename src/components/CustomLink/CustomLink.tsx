import React from 'react'
import { Link } from 'react-router-dom'

import styles from './CustomLink.module.scss'
import { AnyForChanging } from '../../types/anyForChanging'

export enum customLinksClasses {
  USUAL = 'usual',
  GREEN_BIG = 'greenBorderBig',
  GREEN_SMALL = 'greenBorderSmall',
  BLACK_BIG = 'blackBorderBig',
}

interface IcustomLink {
  children: AnyForChanging
  to: string
  customClass?: customLinksClasses
  customLogic?: () => void | undefined
  state?: any
}

const CustomLink = ({ children, to, customClass, customLogic, state, ...props }: IcustomLink) => {
  const doWithRedirect = (fu: (() => void) | undefined) => {
    if (fu) fu()
  }
  return (
    <Link
      onClick={() => doWithRedirect(customLogic)}
      to={to}
      className={`${styles.common} ${customClass ? styles[customClass] : ''}`}
      {...props}
      state={state}
    >
      {children}
    </Link>
  )
}

export default CustomLink
