import React, { FC } from 'react'
import styles from './SignInUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
import SignInForm from '../../components/forms/SignInForm/SignInForm'
import { IUserSignIn, IUserSignInResponce } from '../../models/IUser'

import { useSignInMutation } from '../../redux/userApi'
import { setToken } from '../../utils/tokenLogic'
import { useAppDispatch } from '../../redux'
import { loginUser } from '../../redux/authSlice'
const SignInUser = () => {
  const dispatch = useAppDispatch()
  const [signIn, { data }] = useSignInMutation()
  const signInUser = async (dataForSign: IUserSignIn) => {
    const res = await signIn(dataForSign)
    console.log('here is your answ', res)

    if (res) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setToken(res.data.user.token)
      dispatch(loginUser())
      // надо navigate to locale from or to HOME
    }
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
