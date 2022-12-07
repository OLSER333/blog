import React, { useEffect } from 'react'
import styles from './CreateUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
import { useSignUpMutation } from '../../redux/userApi'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux'
import { setToken } from '../../utils/tokenLogic'
import { loginUser } from '../../redux/commonSlice'
import { ERoutes } from '../../routes/routes'
import { IUserSignUp } from '../../models/IUser'
import { toast } from 'react-toastify'
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
        toast.success('Congratulations! You have created your account.')
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      console.log('here eroror', error)
      toast.error('Something went wrong! Try to reload.')
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
