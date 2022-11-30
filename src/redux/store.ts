import { configureStore } from '@reduxjs/toolkit'
import { articlesApi } from './articlesApi'
import { userApi } from './userApi'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import commonSlice from './commonSlice'

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    commonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware, userApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
