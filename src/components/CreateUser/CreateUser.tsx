import React from 'react'
import styles from './CreateUser.module.scss'
import FormWindow from '../UI/FormWindow/FormWindow'

// interface ICreateUserProps {}
// : FC<ICreateUserProps>
const CreateUser = () => {
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
      <FormWindow />
    </div>
  )
}

export default CreateUser
