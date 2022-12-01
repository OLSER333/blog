import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle, IArticlesForRender, IArticleToCreate } from '../models/IArticle'
import { getToken } from '../utils/tokenLogic'
import { baseApi } from './api'

export interface getArticlesProps {
  limit: number
  page: number
}

export const articlesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getArticles: build.query<IArticlesForRender, getArticlesProps>({
      // query: (query) => `articles/${query && `?limit=${query}`}`,
      query: ({ limit = 5, page = 1 }) => ({
        url: '/articles/',
        params: {
          limit,
          offset: (page - 1) * limit,
        },
      }),
    }),

    getArticle: build.query<IArticle, string>({
      query: (slug) => `/articles/${slug !== '' ? slug : ''}`,
    }),
    postArticle: build.mutation<IArticle, IArticleToCreate>({
      query: (body) => ({
        method: 'post',
        url: '/articles/',
        body,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
    delArticle: build.query<any, string>({
      query: (slug) => ({
        url: `/articles/${slug}`,
        method: 'delete',
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
  }),
})

export const {
  useGetArticleQuery,
  useLazyGetArticlesQuery,
  usePostArticleMutation,
  useDelArticleQuery,
} = articlesApi
