import { configureStore } from '@reduxjs/toolkit'
import { articlesApi } from './articlesApi'
import { userApi } from './userApi'

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware, userApi.middleware),
})
