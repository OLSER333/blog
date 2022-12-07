import {
  IUserSignIn,
  IUserSignInResponce,
  IUserSignUp,
  IUserUpdate,
  IUserUpdateResponce,
} from '../models/IUser'
import { getToken } from '../utils/tokenLogic'
import { baseApi } from './api'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<IUserSignInResponce, IUserSignUp>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
    signIn: builder.mutation<IUserSignInResponce, IUserSignIn>({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
    putUser: builder.mutation<IUserUpdateResponce, IUserUpdate>({
      query: (body) => ({
        url: '/user',
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
    getUser: builder.query<IUserSignInResponce, null>({
      query: () => ({
        url: '/user',
        headers: { Authorization: `Bearer ${getToken()}` },
      }),
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation, useLazyGetUserQuery, usePutUserMutation } =
  userApi
