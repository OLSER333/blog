import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
import Articles from './pages/Articles/Articles'
import SignUpUser from './pages/SignUpUser/SignUpUser'
import { ERoutes } from './routes/routes'
import SignInUser from './pages/SignInUser/SignInUser'
import EditUser from './pages/EditUser/EditUser'
import EditArticle from './pages/EditArticle/EditArticle'
import CreateArticle from './pages/CreateArticle/CreateArticle'
import SingleArticle from './pages/SingleArticle/SingleArticle'
import RequireAuth from './components/RequireAuth/RequireAuth'
import { useAppDispatch } from './redux'
import { useLazyGetUserQuery } from './redux/userApi'
import { getToken } from './utils/tokenLogic'
import { loginUser } from './redux/commonSlice'
import { IUser, IUserSignInResponce } from './models/IUser'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  // const nested = (
  //   <Routes>
  //     <Route index element={<Articles />} />
  //     <Route path={ERoutes.SIGN_UP} element={<SignUpUser />} />
  //     <Route path={ERoutes.SIGN_IN} element={<SignInUser />} />
  //     <Route path={ERoutes.EDIT_USER} element={<EditUser />} />
  //     {/* <Route path={ERoutes.NEW_USER} element={<SignUpUser />} />*/}
  //     {/* <Route path={'/works'} element={<Works />} />*/}
  //     {/* <Route path={'/worksss'} element={<Navigate to={'/works'} replace state={'123'} />} />*/}
  //     {/* <Route path={'/works/:id'} element={<SingleWork />} />*/}
  //     {/* <Route path={'/works/:id/edit'} element={<EditWork />} />*/}
  //     {/* <Route path={'/hobby'} element={} />*/}
  //     <Route path={ERoutes.ANY} element={<NotFoundPage />} />
  //   </Routes>
  // )
  // useStorageWatch(TOKEN)

  // 158 40 Asdrtyop+912

  const [getUser, { data }] = useLazyGetUserQuery()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (getToken()) {
      getUser(null, true)
        .unwrap()
        .then((curUser) => {
          console.log(curUser)
          if (curUser) {
            dispatch(loginUser(curUser.user))
          }
        })
    }
    // dispatch(loginUser())
  }, [])

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={ERoutes.HOME} element={<Layout />}>
          <Route index element={<Navigate to={ERoutes.ARTICLES} replace={true} />} />
          <Route path={ERoutes.ARTICLES} element={<Articles />} />
          <Route path={`${ERoutes.ARTICLES}/:slug`} element={<SingleArticle />} />
          <Route path={`${ERoutes.ARTICLES}/:offset`} element={<Articles />} />
          <Route path={ERoutes.SIGN_UP} element={<SignUpUser />} />
          <Route path={ERoutes.SIGN_IN} element={<SignInUser />} />

          <Route
            path={ERoutes.EDIT_USER}
            element={
              <RequireAuth>
                <EditUser />
              </RequireAuth>
            }
          />

          <Route
            path={ERoutes.NEW_ARTICLE}
            element={
              <RequireAuth>
                <CreateArticle />
              </RequireAuth>
            }
          />
          <Route
            path={`${ERoutes.ARTICLES}/:slug/${ERoutes.EDIT_ARTICLE}`}
            element={
              <RequireAuth>
                <EditArticle />
              </RequireAuth>
            }
          />
          {/* <Route path={ERoutes.NEW_USER} element={<SignUpUser />} />*/}
          {/* <Route path={'/works'} element={<Works />} />*/}
          {/* <Route path={'/worksss'} element={<Navigate to={'/works'} replace state={'123'} />} />*/}
          {/* <Route path={'/works/:id'} element={<SingleWork />} />*/}
          {/* <Route path={'/works/:id/edit'} element={<EditWork />} />*/}
          {/* <Route path={'/hobby'} element={} />*/}
          <Route path={ERoutes.ANY} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
