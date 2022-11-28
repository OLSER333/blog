import React from 'react'
import { Link, useMatch } from 'react-router-dom'

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
}

const CustomLink = ({ children, to, customClass, ...props }: IcustomLink) => {
  // const match = useMatch(to)
  //   <Link to={to} className={match ? 'active-router-link' : ''} {...props}>
  return (
    <Link
      to={to}
      className={`${styles.common} ${customClass ? styles[customClass] : ''}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink
