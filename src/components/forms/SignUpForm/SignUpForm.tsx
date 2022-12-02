import React, { FC } from 'react'
import styles from './SignUpForm.module.scss'
import Title, { titleColors } from '../../UI/Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'
import { Divider } from 'antd'
import CheckBox from '../../UI/CheckBox/CheckBox'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import { Link } from 'react-router-dom'
import { ERoutes } from '../../../routes/routes'
import { EFormInps, Inputs } from '../../UI/FormWindow/FormWindow'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserSignUp } from '../../../models/IUser'

// interface SignUpFormProps {
// }
// : FC<SignUpFormProps>
interface SignUpFormProps {
  onSignUp: (data: IUserSignUp) => void
}

const SignUpForm: FC<SignUpFormProps> = ({ onSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ mode: 'onTouched' })
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const forSignUp = {
      user: {
        email: data[EFormInps.EMAIL],
        password: data[EFormInps.PASSWORD],
        username: data[EFormInps.USERNAME],
      },
    }
    // console.log('sign up data', forSignUp)
    onSignUp(forSignUp)
  }

  return (
    <>
      <Title color={titleColors.BLACK}>Create new account</Title>
      <form className={'authForm'} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register(EFormInps.USERNAME, {
            required: true,
            validate: (value) =>
              value.length > 2 && value.length < 21 ? true : FormErrorsMsg.from3to20,
          })}
          type={'text'}
          label={'Username'}
          errors={errors}
          name={EFormInps.USERNAME}
          placeholder={'Username'}
        />
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
        <TextInput
          register={register(EFormInps.CONFIRM_PASSWORD, {
            required: true,
            validate: (value) =>
              value === String(getValues()[EFormInps.PASSWORD]) ? true : FormErrorsMsg.confirmPass,
          })}
          type={'password'}
          label={'Repeat password'}
          errors={errors}
          name={EFormInps.CONFIRM_PASSWORD}
          placeholder={'Password'}
        />
        <Divider style={{ margin: 0 }} />
        <CheckBox
          errors={errors}
          label={'I agree to the processing of my personal information'}
          register={register(EFormInps.AGREEMENT, {
            required: FormErrorsMsg.agreement,
          })}
          name={EFormInps.AGREEMENT}
        />
        <SubmitBtn>Create</SubmitBtn>
      </form>
      <span className={'formAgreement'}>
        Already have an account? <Link to={ERoutes.SIGN_IN}>Sign In.</Link>
      </span>
    </>
  )
}

export default SignUpForm
