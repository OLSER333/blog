import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getToken } from '../utils/tokenLogic'
import { IUser } from '../models/IUser'

interface ISlice {
  curArticlesPage: number
  userData: IUser
}

const initialState: ISlice = {
  curArticlesPage: 1,
  userData: {
    email: null,
    image: null,
    bio: null,
    token: getToken() ? getToken() : null,
    username: null,
  },
}

const nullUser = {
  userData: {
    email: null,
    image: null,
    bio: null,
    token: null,
    username: null,
  },
}

export const commonSlice = createSlice({
  initialState,
  name: 'commonSlice',
  reducers: {
    logoutUser: (state) => {
      state.userData = nullUser.userData
    },
    loginUser: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload
    },

    setCurArticlesPage: (state, action: PayloadAction<number>) => {
      state.curArticlesPage = action.payload
    },

    updateUserState: (state, action: PayloadAction<IUser>) => {
      state.userData = action.payload
    },
  },
})

export default commonSlice.reducer

export const { logoutUser, loginUser, setCurArticlesPage, updateUserState } = commonSlice.actions
