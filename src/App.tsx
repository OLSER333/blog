import React from 'react'
import cl from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
import Articles from './components/Articles/Articles'
import SignUpUser from './components/CreateUser/SignUpUser'
import { ERoutes } from './routes/routes'
import SignInUser from './components/SignInUser/SignInUser'

const App = () => {
  return (
    <>
      <Routes>
        <Route path={ERoutes.HOME} element={<Layout />}>
          <Route index element={<Articles />} />
          <Route path={ERoutes.SIGN_UP} element={<SignUpUser />} />
          <Route path={ERoutes.SIGN_IN} element={<SignInUser />} />
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
