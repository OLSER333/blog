import React, { FC } from 'react'
import styles from './SignInUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
import SignInForm from '../../components/forms/SignInForm/SignInForm'

const SignInUser = () => (
  <div>
    <FormWindow>
      <SignInForm />
    </FormWindow>
  </div>
)

export default SignInUser
