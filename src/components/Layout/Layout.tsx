import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink, { customLinksClasses } from '../CustomLink/CustomLink'

import cl from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar } from 'antd'
import Title, { titleColors } from '../Title/Title'

const Layout = () => {
  // type NavLinkclassNameType = { isActive: boolean; isPending: boolean }
  const isAuth = true

  return (
    <div className={cl.container}>
      <header className={cl.header}>
        <nav className={cl.nav}>
          <div>
            <CustomLink to={'/'}>
              <Title color={titleColors.BLACK}>Realworld Blog</Title>
            </CustomLink>
          </div>
          {!isAuth && (
            <div className={cl.singLinks}>
              <CustomLink to={'/login'} customClass={customLinksClasses.USUAL}>
                Sign In
              </CustomLink>
              <CustomLink to={'/new-user'} customClass={customLinksClasses.GREEN_BIG}>
                Sign Up
              </CustomLink>
            </div>
          )}
          {isAuth && (
            <div className={cl.singLinks}>
              <CustomLink to={'/new-article'} customClass={customLinksClasses.GREEN_SMALL}>
                Create article
              </CustomLink>
              <CustomLink to={'/works'}>
                <div className={cl.profileInfo}>
                  <Title color={titleColors.BLACK}>John Doe</Title>
                  <Avatar src={avatar}></Avatar>
                </div>
              </CustomLink>
              <CustomLink to={'/hobby'} customClass={customLinksClasses.BLACK_BIG}>
                Log Out
              </CustomLink>
            </div>
          )}
        </nav>
      </header>
      <div className={cl.contentContainer}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
