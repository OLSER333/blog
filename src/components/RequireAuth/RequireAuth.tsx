import React, { FC } from 'react'
import { AnyForChanging } from '../../types/anyForChanging'
import { Navigate, useLocation } from 'react-router-dom'
import { ERoutes } from '../../routes/routes'
import { isValidToken } from '../../utils/tokenLogic'
import { toast } from 'react-toastify'

interface RequireAuthProps {
  children: AnyForChanging
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation()
  if (!isValidToken()) {
    toast.info('Need logged in')
    return (
      <>
        <Navigate to={ERoutes.SIGN_IN} state={{ from: location }} />
      </>
    )
  }

  return <> {children}</>
}

export default RequireAuth
