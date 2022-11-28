import React from 'react'
import styles from './CreateUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'
// interface ICreateUserProps {}
// : FC<ICreateUserProps>
const SignUpUser = () => {
  return (
    <div className={styles.CreateUser}>
      <FormWindow>
        <SignUpForm />
      </FormWindow>
    </div>
  )
}

export default SignUpUser
