import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api/' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => 'articles/',
    }),
  }),
})

export const { useGetArticlesQuery } = articlesApi
