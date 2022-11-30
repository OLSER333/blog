import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isValidToken } from '../utils/tokenLogic'
// import { IUser } from '../api/types';

interface IAuth {
  isAuth: boolean
}

const initialState: IAuth = {
  // email: '',
  // username: '',
  // token: '',
  // bio: '' | undefined,
  // image: '',
  isAuth: isValidToken(),
}

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logoutUser: (state) => {
      state.isAuth = false
    },
    loginUser: (state) => {
      // action: PayloadAction<boolean>
      state.isAuth = true
    },
  },
})

export default userSlice.reducer

export const { logoutUser, loginUser } = userSlice.actions
