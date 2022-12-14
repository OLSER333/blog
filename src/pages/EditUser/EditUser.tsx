import React, { useEffect } from 'react'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import EditUserForm from '../../components/forms/EditUserForm/EditUserForm'
import { ERoutes } from '../../routes/routes'
import { usePutUserMutation } from '../../redux/userApi'
import { useNavigate } from 'react-router-dom'
import { IUserUpdate } from '../../models/IUser'
import { useAppDispatch } from '../../redux'
import { updateUserState } from '../../redux/commonSlice'
import { toast } from 'react-toastify'
import getErrorTxt, { IErrorUserData } from '../../utils/getErrorTxt'

const EditUser = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const [putUser, { data, isSuccess, error }] = usePutUserMutation()

  const updateUser = (newUser: IUserUpdate) => {
    putUser(newUser)
  }

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        dispatch(updateUserState({ ...data.user }))
        navigate(ERoutes.ARTICLES)
        toast.success('Your profile has been updated.')
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      toast.warning(getErrorTxt(error as IErrorUserData))
    }
  }, [error])

  return (
    <FormWindow>
      <EditUserForm onEditUser={updateUser} />
    </FormWindow>
  )
}

export default EditUser
