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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
  const [getUser] = useLazyGetUserQuery()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (getToken()) {
      getUser(null, true)
        .unwrap()
        .then((curUser) => {
          if (curUser) {
            dispatch(loginUser(curUser.user))
          }
        })
    }
  }, [])

  return (
    <>
      <ToastContainer
        position='top-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Routes>
        <Route path={ERoutes.HOME} element={<Layout />}>
          <Route index element={<Navigate to={ERoutes.ARTICLES} replace={true} />} />
          <Route path={ERoutes.ARTICLES} element={<Articles />} />
          <Route path={`${ERoutes.ARTICLES}/:slug`} element={<SingleArticle />} />
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
          <Route path={ERoutes.ANY} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
