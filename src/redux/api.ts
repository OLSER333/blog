import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../utils/tokenLogic'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.kata.academy/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getToken()
      if (token) headers.set('authorization', `Bearer ${getToken()}`)
    },
  }),
  endpoints: (build) => ({}),
})
