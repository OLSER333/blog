import React, { FC } from 'react'
import styles from './SignInForm.module.scss'
import Title, { titleColors } from '../../Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import { ESignUpInps, Inputs } from '../../UI/FormWindow/FormWindow'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'
import { Divider } from 'antd'
import CheckBox from '../../UI/CheckBox/CheckBox'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import { Link } from 'react-router-dom'
import { ERoutes } from '../../../routes/routes'
import { SubmitHandler, useForm } from 'react-hook-form'

// interface SignInFormProps {
//   children: any
// }
// : FC<SignInFormProps>

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ mode: 'onTouched' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <>
      <Title color={titleColors.BLACK}>Create new account</Title>
      <form className={'authForm'} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register(ESignUpInps.EMAIL, {
            required: true,
            pattern: {
              value:
                // eslint-disable-next-line no-control-regex
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: FormErrorsMsg.email,
            },
          })}
          type={'text'}
          label={'Email'}
          errors={errors}
          name={ESignUpInps.EMAIL}
          placeholder={'Email address'}
        />

        <TextInput
          register={register(ESignUpInps.PASSWORD, {
            required: true,
            validate: (value) =>
              value.length > 5 && value.length < 41 ? true : FormErrorsMsg.from6to20,
          })}
          type={'password'}
          label={'Password'}
          errors={errors}
          name={ESignUpInps.PASSWORD}
          placeholder={'Password'}
        />

        <SubmitBtn>Login</SubmitBtn>
      </form>
      <span className={'formAgreement'}>
        Don’t have an account? <Link to={ERoutes.SIGN_IN}>Sign Up.</Link>
      </span>
    </>
  )
}

export default SignInForm
