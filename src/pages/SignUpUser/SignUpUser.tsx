import React from 'react'
import styles from './CreateUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import SignUpForm from '../../components/forms/SignUpForm/SignUpForm'

// interface ICreateUserProps {}
// : FC<ICreateUserProps>
const SignUpUser = () => {
  // const fields: IInputField[] = [
  //   {
  //     type: EInputTypes.TEXT,
  //     label: 'Username',
  //     placeholder: 'Username',
  //   },
  //   {
  //     type: EInputTypes.EMAIL,
  //     label: 'Email address',
  //     placeholder: 'Email address',
  //   },
  //   {
  //     type: EInputTypes.PASS,
  //     label: 'Password',
  //     placeholder: 'Password',
  //   },
  //   {
  //     type: EInputTypes.PASS,
  //     label: 'Repeat Password',
  //     placeholder: 'Password',
  //   },
  // ]
  /*
  fields={fields}
        title={'Create new account'}
        agreement={true}
        showHasAccount={true, }
        submitBtn={'Create'}
   */
  return (
    <div className={styles.CreateUser}>
      <FormWindow>
        <SignUpForm />
      </FormWindow>
    </div>
  )
}

export default SignUpUser
