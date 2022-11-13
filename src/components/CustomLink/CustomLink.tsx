import React from 'react'
import { Link, useMatch } from 'react-router-dom'

interface IcustomLink {
  children: any
  to: string
}

const CustomLink = ({ children, to, ...props }: IcustomLink) => {
  const match = useMatch(to)
  return (
    <Link to={to} className={match ? 'active-router-link' : ''} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
