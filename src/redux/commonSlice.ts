import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getToken, isValidToken } from '../utils/tokenLogic'
import { IUser } from '../models/IUser'
// import { IUser } from '../api/types';

interface ISlice {
  // isAuth: boolean
  // signInError: boolean
  curArticlesPage: number
  userData: IUser
}

const initialState: ISlice = {
  // email: '',
  // username: '',
  // token: '',
  // bio: '' | undefined,
  // image: '',
  // signInError: false,
  curArticlesPage: 1,
  userData: {
    email: null,
    image: null,
    bio: null,
    token: getToken() ? getToken() : null,
    username: null,
  },
}

export const commonSlice = createSlice({
  initialState,
  name: 'commonSlice',
  reducers: {
    logoutUser: (state) => {
      state.userData = initialState.userData
    },
    loginUser: (state, action: PayloadAction<IUser>) => {
      // action: PayloadAction<boolean>
      state.userData = action.payload
    },

    setCurArticlesPage: (state, action: PayloadAction<number>) => {
      state.curArticlesPage = action.payload
    },

    // setSignInError: (state, action: PayloadAction<boolean>) => {
    //   state.signInError = action.payload
    // },
  },
})

export default commonSlice.reducer

export const { logoutUser, loginUser, setCurArticlesPage } = commonSlice.actions
