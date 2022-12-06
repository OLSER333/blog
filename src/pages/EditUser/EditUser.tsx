import React, { useEffect } from 'react'
import styles from './EditUser.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import EditUserForm from '../../components/forms/EditUserForm/EditUserForm'
import { ERoutes } from '../../routes/routes'
import { usePutUserMutation } from '../../redux/userApi'
import { useNavigate } from 'react-router-dom'
import { IUserUpdate } from '../../models/IUser'
import { useAppDispatch } from '../../redux'
import { updateUserState } from '../../redux/commonSlice'

const EditUser = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [putUser, { data, isSuccess, error }] = usePutUserMutation()

  const updateUser = (newUser: IUserUpdate) => {
    console.log('newUser', newUser)
    putUser(newUser)
  }

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        console.log('want update', data)
        dispatch(updateUserState({ ...data.user }))
        navigate(ERoutes.ARTICLES)
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      console.log('here eroror', error)
    }
  }, [error])

  return (
    <FormWindow>
      <EditUserForm onEditUser={updateUser} />
    </FormWindow>
  )
}

export default EditUser
