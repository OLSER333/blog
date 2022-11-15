import React, { FC, useState } from 'react'
import styles from './FormWindow.module.scss'
import Title, { titleColors } from '../../Title/Title'
import { FieldError, FieldErrorsImpl, SubmitHandler, useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'

// export enum EInputTypes {
//   TEXT = 'text',
//   EMAIL = 'email',
//   PASS = 'password',
// }
//
// export type inputTypes = EInputTypes.PASS | EInputTypes.TEXT | EInputTypes.EMAIL
//
// export interface IInputField {
//   label: string
//   placeholder: string
//   type: inputTypes
// }

// interface IFormWindowProps {
// title: string
// fields: IInputField[]
// submitBtn: string
// agreement?: boolean
// hasAccount: {
//   boolean:
// }
// }
// : FC<IFormWindowProps>

export enum EErrors {}

export enum ESignUpInps {
  USERNAME = 'Username',
  EMAIL = 'Email',
  PASSWORD = 'Password',
  CONFIRM_PASSWORD = 'ConfirmPass',
}

export type Inputs = {
  [ESignUpInps.USERNAME]: ESignUpInps.USERNAME
  [ESignUpInps.PASSWORD]: ESignUpInps.PASSWORD
  [ESignUpInps.CONFIRM_PASSWORD]: ESignUpInps.CONFIRM_PASSWORD
  [ESignUpInps.EMAIL]: ESignUpInps.EMAIL
  // exampleRequired: string
}

const FormWindow = () => {
  const {
    register,
    handleSubmit,

    // watch,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ mode: 'onTouched' })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const getSpanErr = (
    errors: Partial<
      FieldErrorsImpl<{
        Username: ESignUpInps.USERNAME
        Password: ESignUpInps.PASSWORD
        ConfirmPass: ESignUpInps.CONFIRM_PASSWORD
        Email: ESignUpInps.EMAIL
      }>
    >,
    nameInp: ESignUpInps,
  ) => {
    console.log(errors, nameInp)
    console.log('eee', errors[nameInp])
    return errors
  }

  // ==================================================================)

  return (
    <div className={styles.formWrap}>
      <div className={styles.formWindow}>
        <Title color={titleColors.BLACK}>Create new account</Title>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register(ESignUpInps.USERNAME, {
              required: true,
              validate: (value) =>
                value.length > 2 && value.length < 21 ? true : FormErrorsMsg.from3to20,
            })}
            type={'text'}
            label={'Username'}
            errors={errors}
            name={ESignUpInps.USERNAME}
            placeholder={'username'}
          />
          <Input
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

          <Input
            register={register(ESignUpInps.PASSWORD, {
              required: true,
              validate: (value) =>
                value.length > 5 && value.length < 41 ? true : FormErrorsMsg.from3to20,
            })}
            type={'password'}
            label={'Password'}
            errors={getSpanErr(errors, ESignUpInps.PASSWORD)}
            name={ESignUpInps.PASSWORD}
            placeholder={'password'}
          />
          <Input
            register={register(ESignUpInps.CONFIRM_PASSWORD, {
              required: true,
              validate: (value) =>
                value === String(getValues()[ESignUpInps.PASSWORD])
                  ? true
                  : FormErrorsMsg.confirmPass,
            })}
            type={'password'}
            label={'Confirm password'}
            errors={getSpanErr(errors, ESignUpInps.CONFIRM_PASSWORD)}
            name={ESignUpInps.CONFIRM_PASSWORD}
            placeholder={'confirm your password'}
          />
          <input type='submit' />
        </form>
        <button onClick={() => console.log(getValues())}>55555555555</button>
      </div>
    </div>
  )
}

export default FormWindow
