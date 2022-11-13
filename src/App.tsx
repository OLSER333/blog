import React from 'react'
import cl from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage'
import Articles from './components/Articles/Articles'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Articles />} />
          {/* <Route path={'/works'} element={<Works />} />*/}
          {/* <Route path={'/worksss'} element={<Navigate to={'/works'} replace state={'123'} />} />*/}
          {/* <Route path={'/works/:id'} element={<SingleWork />} />*/}
          {/* <Route path={'/works/:id/edit'} element={<EditWork />} />*/}
          {/* <Route path={'/hobby'} element={} />*/}
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
