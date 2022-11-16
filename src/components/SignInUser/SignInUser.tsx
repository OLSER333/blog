import React, { FC } from 'react'
import styles from './SignInUser.module.scss'
import FormWindow from '../UI/FormWindow/FormWindow'
import SignUpForm from '../forms/SignUpForm/SignUpForm'
import SignInForm from '../forms/SignInForm/SignInForm'

const SignInUser = () => (
  <div>
    <FormWindow>
      <SignInForm />
    </FormWindow>
  </div>
)

export default SignInUser
