import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isValidToken } from '../utils/tokenLogic'
// import { IUser } from '../api/types';

interface ISlice {
  isAuth: boolean
  curArticlesPage: number
  signInError: boolean
}

const initialState: ISlice = {
  // email: '',
  // username: '',
  // token: '',
  // bio: '' | undefined,
  // image: '',
  isAuth: isValidToken(),
  signInError: false,
  curArticlesPage: 1,
}

export const commonSlice = createSlice({
  initialState,
  name: 'commonSlice',
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false
    },
    loginUser: (state) => {
      // action: PayloadAction<boolean>
      state.isAuth = true
    },

    setCurArticlesPage: (state, action: PayloadAction<number>) => {
      state.curArticlesPage = action.payload
    },

    setSignInError: (state, action: PayloadAction<boolean>) => {
      state.signInError = action.payload
    },
  },
})

export default commonSlice.reducer

export const { logoutUser, loginUser, setCurArticlesPage } = commonSlice.actions
