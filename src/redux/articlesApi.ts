import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'
import { ERoutes } from '../routes/routes'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: (query) => `/articles/${query !== 0 ? ERoutes.OFFSET_ARTICLES + query : ''}`,
    }),
    getArticle: builder.query({
      query: (slug) => `/articles/${slug !== '' ? slug : ''}`,
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleQuery } = articlesApi
