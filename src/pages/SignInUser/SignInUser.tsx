import React, { useEffect } from 'react'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignInForm from '../../components/forms/SignInForm/SignInForm'
import { IUserSignIn } from '../../models/IUser'

import { useSignInMutation } from '../../redux/userApi'
import { setToken } from '../../utils/tokenLogic'
import { useAppDispatch } from '../../redux'
import { loginUser } from '../../redux/commonSlice'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '../../routes/routes'
import { toast } from 'react-toastify'

const SignInUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signIn, { data, isSuccess, error }] = useSignInMutation()
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setToken(data.user.token)
        dispatch(loginUser(data.user))
        navigate(ERoutes.ARTICLES)
        toast.success('You have logged into your account.')
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      toast.error('Email or password is invalid.')
    }
  }, [error])
  const signInUser = async (dataForSign: IUserSignIn) => {
    signIn(dataForSign)
  }
  return (
    <div>
      <FormWindow>
        <SignInForm onSignIn={signInUser} />
      </FormWindow>
    </div>
  )
}

export default SignInUser
