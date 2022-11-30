import React, { FC } from 'react'
import styles from './RequireAuth.module.scss'
import { AnyForChanging } from '../../types/anyForChanging'
import { Navigate, useLocation } from 'react-router-dom'
import { ERoutes } from '../../routes/routes'
import { isValidToken } from '../../utils/tokenLogic'
import { useGetUserQuery } from '../../redux/userApi'
import { useStorageWatch } from '../../hooks/useStorageWatch'

interface RequireAuthProps {
  children: AnyForChanging
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  // const { data, error } = useGetUserQuery()
  // if (!error) {
  // }
  useStorageWatch('lkj')

  const location = useLocation()
  if (!isValidToken()) {
    return (
      <>
        <Navigate to={ERoutes.SIGN_IN} state={{ from: location }} />
      </>
    )
  }

  return <> {children}</>
}

export default RequireAuth
