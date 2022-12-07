import React, { FC } from 'react'
import Title, { titleColors } from '../../UI/Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import { EFormInps, Inputs } from '../../UI/FormWindow/FormWindow'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUserUpdate } from '../../../models/IUser'
import { useAppSelector } from '../../../redux'

interface IEditUserFormProps {
  onEditUser: (newUser: IUserUpdate) => void
}

const EditUserForm: FC<IEditUserFormProps> = ({ onEditUser }) => {
  const { userData } = useAppSelector((state) => state.commonSlice)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onTouched' })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onEditUser({
      user: {
        email: data[EFormInps.EMAIL].toLowerCase().trim(),
        username: data[EFormInps.USERNAME].trim(),
        password: data[EFormInps.PASSWORD],
        image: data[EFormInps.AVATAR_PATH].trim(),
      },
    })
  }

  return (
    <>
      <Title color={titleColors.BLACK}>Edit Profile</Title>
      <form className={'authForm'} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register(EFormInps.USERNAME, {
            required: true,
          })}
          type={'text'}
          label={'Username'}
          errors={errors}
          name={EFormInps.USERNAME}
          placeholder={'Username'}
          defValue={userData.username ? userData.username : ''}
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
          defValue={userData.email ? userData.email : ''}
        />

        <TextInput
          register={register(EFormInps.PASSWORD, {
            required: true,
            validate: (value) =>
              value.length > 5 && value.length < 41 ? true : FormErrorsMsg.from6to20,
          })}
          type={'password'}
          label={'New password'}
          errors={errors}
          name={EFormInps.PASSWORD}
          placeholder={'New password'}
        />

        <TextInput
          register={register(EFormInps.AVATAR_PATH, {
            required: true,
            pattern: {
              value:
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
              message: 'Incorrect address',
            },
          })}
          type={'text'}
          label={'Avatar image'}
          errors={errors}
          name={EFormInps.AVATAR_PATH}
          placeholder={'Avatar image (url)'}
          defValue={userData.image ? userData.image : ''}
        />

        <SubmitBtn>Save</SubmitBtn>
      </form>
    </>
  )
}

export default EditUserForm
