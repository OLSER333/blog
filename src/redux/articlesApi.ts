import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticle, IArticlesForRender, IArticleToCreate } from '../models/IArticle'
import { getToken } from '../utils/tokenLogic'
import { baseApi } from './api'
import { ERoutes } from '../routes/routes'

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
      providesTags: (res) =>
        res?.articles
          ? [
              ...res.articles.map(({ slug }) => ({
                type: 'Articles' as const,
                id: slug,
              })),
              { type: 'Articles', id: 'LIST' },
            ]
          : [{ type: 'Articles', id: 'LIST' }],
    }),

    getArticle: build.query<IArticle, string>({
      query: (slug) => `/articles/${slug !== '' ? slug : ''}`,
      providesTags: ['Details'],
    }),
    postArticle: build.mutation<IArticle, IArticleToCreate>({
      query: (body) => ({
        method: 'post',
        url: `${ERoutes.ARTICLES}/`,
        body,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),
    delArticle: build.mutation<null, string>({
      query: (slug) => ({
        url: `${ERoutes.ARTICLES}/${slug}`,
        method: 'delete',
      }),

      invalidatesTags: [{ type: 'Articles', id: 'LIST' }],
    }),
    likeArticle: build.mutation<IArticle, string>({
      query: (slug) => ({
        method: 'post',
        url: `${ERoutes.ARTICLES}/${slug}${ERoutes.TOGGLE_FAVORITE}`,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
    unlikeArticle: build.mutation<IArticle, string>({
      query: (slug) => ({
        method: 'delete',
        url: `${ERoutes.ARTICLES}/${slug}${ERoutes.TOGGLE_FAVORITE}`,
      }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, 'Details'],
    }),
  }),
})

export const {
  useGetArticleQuery,
  useLazyGetArticlesQuery,
  usePostArticleMutation,
  useDelArticleMutation,
  useLikeArticleMutation,
  useUnlikeArticleMutation,
} = articlesApi
