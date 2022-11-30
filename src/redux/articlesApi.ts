import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle } from '../models/IArticle'
import { ERoutes } from '../routes/routes'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog.kata.academy/api' }),
  endpoints: (build) => ({
    getArticles: build.query({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: ({ limit = 5, page = 1 }) => ({
        url: '/articles/',
        params: {
          limit,
          offset: (page - 1) * limit,
        },
      }),
    }),

    getArticle: build.query({
      query: (slug) => `/articles/${slug !== '' ? slug : ''}`,
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleQuery } = articlesApi
