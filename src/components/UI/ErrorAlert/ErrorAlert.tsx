import React from 'react'
import { Alert } from 'antd'

const ErrorAlert = ({ children = 'Description error' }: { children: string }) => {
  return <Alert message='Something wrong!' description={children} type='error' />
}

export default ErrorAlert
