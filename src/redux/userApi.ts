import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'
import { ERoutes } from '../routes/routes'
import { IResponceError, IUserSignIn, IUserSignInResponce } from '../models/IUser'
import { getToken } from '../utils/tokenLogic'
// import { IError } from '../models/IError'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
    }),
    // IError
    signIn: builder.mutation<IUserSignInResponce, IUserSignIn>({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    getUser: builder.query<IUserSignInResponce | IResponceError, any>({
      query: () => ({
        url: '/user',
        headers: { Authorization: `Bearer ${getToken()}` },
      }),
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation, useGetUserQuery } = userApi
