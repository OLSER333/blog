import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return <div>This page not exist. {<Link to='/'>Go home</Link>}</div>
}

export default NotFoundPage
