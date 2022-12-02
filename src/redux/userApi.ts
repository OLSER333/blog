import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'
import { ERoutes } from '../routes/routes'
import { IResponceError, IUserSignIn, IUserSignInResponce, IUserSignUp } from '../models/IUser'
import { getToken } from '../utils/tokenLogic'
import { baseApi } from './api'
// import { IError } from '../models/IError'

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<IUserSignInResponce, IUserSignUp>({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
    // IError
    signIn: builder.mutation<IUserSignInResponce, IUserSignIn>({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
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

export const { useSignUpMutation, useSignInMutation, useGetUserQuery, useLazyGetUserQuery } =
  userApi
