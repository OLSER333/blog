import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getToken } from '../utils/tokenLogic'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Articles', 'Details'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.kata.academy/api',
    prepareHeaders: (headers) => {
      const token = getToken()
      if (token) headers.set('authorization', `Bearer ${getToken()}`)
    },
  }),
  endpoints: () => ({}),
})
