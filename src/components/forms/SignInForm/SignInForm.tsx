import React, { FC } from 'react'
import Title, { titleColors } from '../../UI/Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import { EFormInps, Inputs } from '../../UI/FormWindow/FormWindow'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import { Link } from 'react-router-dom'
import { ERoutes } from '../../../routes/routes'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserSignIn } from '../../../models/IUser'

interface SignInFormProps {
  onSignIn: (data: IUserSignIn) => void
}

const SignInForm: FC<SignInFormProps> = ({ onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onTouched' })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const forSignIn = {
      user: {
        email: data[EFormInps.EMAIL].toLowerCase().trim(),
        password: data[EFormInps.PASSWORD],
      },
    }
    await onSignIn(forSignIn)
  }

  return (
    <>
      <Title color={titleColors.BLACK}>Sign In</Title>
      <form className={'authForm'} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register(EFormInps.EMAIL, {
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
          name={EFormInps.EMAIL}
          placeholder={'Email address'}
        />

        <TextInput
          register={register(EFormInps.PASSWORD, {
            required: true,
            validate: (value) =>
              value.length > 5 && value.length < 41 ? true : FormErrorsMsg.from6to20,
          })}
          type={'password'}
          label={'Password'}
          errors={errors}
          name={EFormInps.PASSWORD}
          placeholder={'Password'}
        />

        <SubmitBtn>Login</SubmitBtn>
      </form>
      <span className={'formAgreement'}>
        Don’t have an account? <Link to={ERoutes.SIGN_UP}>Sign Up.</Link>
      </span>
    </>
  )
}

export default SignInForm
