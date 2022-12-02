import React, { useEffect } from 'react'
import styles from './CreateUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
import { useSignInMutation, useSignUpMutation } from '../../redux/userApi'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux'
import { setToken } from '../../utils/tokenLogic'
import { loginUser } from '../../redux/commonSlice'
import { ERoutes } from '../../routes/routes'
import { IUserSignIn, IUserSignUp } from '../../models/IUser'
// interface ICreateUserProps {}
// : FC<ICreateUserProps>
const SignUpUser = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [signUp, { data, isSuccess, error }] = useSignUpMutation()
  useEffect(() => {
    if (isSuccess) {
      if (data) {
        setToken(data.user.token)
        dispatch(loginUser(data.user))
        navigate(ERoutes.ARTICLES)
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      console.log('here eroror', error)
    }
  }, [error])
  const signUpUser = async (dataForSign: IUserSignUp) => {
    signUp(dataForSign)
  }

  return (
    <div className={styles.CreateUser}>
      <FormWindow>
        <SignUpForm onSignUp={signUpUser} />
      </FormWindow>
    </div>
  )
}

export default SignUpUser
