import React from 'react'
import { Link, useMatch } from 'react-router-dom'

import styles from './CustomLink.module.scss'
import { AnyForChanging } from '../../types/anyForChanging'
import { useStorageWatch } from '../../hooks/useStorageWatch'
import { TOKEN } from '../../utils/tokenLogic'

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
  // state?: any
  customLogic?: () => void | undefined
}

const CustomLink = ({ children, to, customClass, customLogic, ...props }: IcustomLink) => {
  // const match = useMatch(to)
  //   <Link to={to} className={match ? 'active-router-link' : ''} {...props}>
  // useStorageWatch(TOKEN)

  const doWithRedirect = (fu: (() => void) | undefined) => {
    if (fu) fu()
  }
  return (
    <Link
      onClick={() => doWithRedirect(customLogic)}
      to={to}
      className={`${styles.common} ${customClass ? styles[customClass] : ''}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink
