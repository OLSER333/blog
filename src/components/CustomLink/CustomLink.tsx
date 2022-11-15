import React from 'react'
import { Link, useMatch } from 'react-router-dom'

import styles from './CustomLink.module.scss'

export enum customLinksClasses {
  USUAL = 'usual',
  GREEN_BIG = 'greenBorderBig',
  GREEN_SMALL = 'greenBorderSmall',
  BLACK_BIG = 'blackBorderBig',
}

interface IcustomLink {
  children: any
  to: string
  customClass?: customLinksClasses
}

const CustomLink = ({ children, to, customClass, ...props }: IcustomLink) => {
  // const match = useMatch(to)
  //   <Link to={to} className={match ? 'active-router-link' : ''} {...props}>
  return (
    <Link to={to} className={customClass ? styles[customClass] : ''} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
