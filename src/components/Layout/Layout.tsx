import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink'

import cl from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar } from 'antd'

const Layout = () => {
  // type NavLinkclassNameType = { isActive: boolean; isPending: boolean }
  const isAuth = false

  return (
    <div className={cl.container}>
      <header>
        <nav className={cl.nav}>
          <div>
            <CustomLink to={'/'}>Realworld Blog</CustomLink>
          </div>
          {!isAuth && (
            <div className={cl.singLinks}>
              <CustomLink to={'/login'}>Sign In</CustomLink>
              <CustomLink to={'/new-user'}>Sign Up</CustomLink>
            </div>
          )}
          {isAuth && (
            <div>
              <CustomLink to={'/new-article'}>Create article</CustomLink>
              <CustomLink to={'/works'}>
                <div>
                  <span>John Doe</span>
                  <Avatar src={avatar}></Avatar>
                </div>
              </CustomLink>
              <CustomLink to={'/hobby'}>Log Out</CustomLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
