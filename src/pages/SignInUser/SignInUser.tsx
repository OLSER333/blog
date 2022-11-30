import React, { FC, useEffect } from 'react'
import styles from './SignInUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
import SignInForm from '../../components/forms/SignInForm/SignInForm'
import { IUserSignIn, IUserSignInResponce } from '../../models/IUser'

import { useSignInMutation } from '../../redux/userApi'
import { setToken } from '../../utils/tokenLogic'
import { useAppDispatch } from '../../redux'
import { loginUser } from '../../redux/commonSlice'
import { useNavigate } from 'react-router-dom'
import { ERoutes } from '../../routes/routes'
const SignInUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signIn, { data, isSuccess, error }] = useSignInMutation()
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setToken(data.user.token)
        dispatch(loginUser())
        navigate(ERoutes.ARTICLES)
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      console.log('here eroror', error)
    }
  }, [error])
  const signInUser = async (dataForSign: IUserSignIn) => {
    signIn(dataForSign)

    // .unwrap()
    // .then((res) => {

    // setToken(res.data.user.token)
    // dispatch(loginUser())
    // navigate(ERoutes.ARTICLES)
    // })
    // .catch((error) => console.error('rejected', error))
    // let res
    // try {
    //   res = await signIn(dataForSign)
    //   console.log('here is your answ', res)
    //
    //   if (res) {
    //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //     // @ts-ignore
    //     setToken(res.data.user.token)
    //     dispatch(loginUser())
    //     navigate(ERoutes.ARTICLES)
    //     return true
    //     // надо navigate to locale from or to HOME
    //   }
    // } catch (e) {
    //   console.log('your error ', e)
    //   console.log('your error answ', res)
    //   return res.e
    // }
  }
  return (
    <div>
      <FormWindow>
        <SignInForm onSignIn={signInUser} />
      </FormWindow>
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  )
}

export default SignInUser
