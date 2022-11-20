import React from 'react'
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

  return (
    <>
      <Routes>
        <Route path={ERoutes.HOME} element={<Layout />}>
          <Route index element={<Navigate to={ERoutes.ARTICLES} replace={true} />} />
          <Route path={ERoutes.ARTICLES} element={<Articles />} />
          <Route path={`${ERoutes.ARTICLES}/:slug`} element={<SingleArticle />} />
          <Route path={`${ERoutes.ARTICLES}/:offset`} element={<Articles />} />
          <Route path={ERoutes.SIGN_UP} element={<SignUpUser />} />
          <Route path={ERoutes.SIGN_IN} element={<SignInUser />} />
          <Route path={ERoutes.EDIT_USER} element={<EditUser />} />
          <Route path={ERoutes.NEW_ARTICLE} element={<CreateArticle />} />
          <Route path={ERoutes.EDIT_ARTICLE} element={<EditArticle />} />
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
