import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink, { customLinksClasses } from '../CustomLink/CustomLink'

import styles from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar } from 'antd'
import Title, { titleColors } from '../Title/Title'

const Layout = () => {
  // type NavLinkclassNameType = { isActive: boolean; isPending: boolean }
  const isAuth = false

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <CustomLink to={'/'}>
              <Title color={titleColors.BLUE}>Realworld Blog</Title>
            </CustomLink>
          </div>
          {!isAuth && (
            <div className={styles.singLinks}>
              <CustomLink to={'/login'} customClass={customLinksClasses.USUAL}>
                Sign In
              </CustomLink>
              <CustomLink to={'/new-user'} customClass={customLinksClasses.GREEN_BIG}>
                Sign Up
              </CustomLink>
            </div>
          )}
          {isAuth && (
            <div className={styles.singLinks}>
              <CustomLink to={'/new-article'} customClass={customLinksClasses.GREEN_SMALL}>
                Create article
              </CustomLink>
              <CustomLink to={'/works'}>
                <div className={styles.profileInfo}>
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

      <main className={styles.contentContainer}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
