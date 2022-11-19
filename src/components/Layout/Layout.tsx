import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink, { customLinksClasses } from '../CustomLink/CustomLink'

import styles from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import Title, { titleColors } from '../UI/Title/Title'
import { ERoutes } from '../../routes/routes'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { Spin } from 'antd'
// import { Ipost, useGetPostsQuery } from '../../redux'

const Layout = () => {
  // type NavLinkclassNameType = { isActive: boolean; isPending: boolean }
  const isAuth = true

  // ==================================================================
  // const [numOfPost, setNumOfPost] = useState('1')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { data = [], isLoading } = useGetPostsQuery(numOfPost)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <CustomLink to={ERoutes.HOME}>
              <h2 className={styles.navLogo}>Realworld Blog</h2>
            </CustomLink>
          </div>
          {!isAuth && (
            <div className={styles.singLinks}>
              <CustomLink to={ERoutes.SIGN_IN} customClass={customLinksClasses.USUAL}>
                Sign In
              </CustomLink>
              <CustomLink to={ERoutes.SIGN_UP} customClass={customLinksClasses.GREEN_BIG}>
                Sign Up
              </CustomLink>
            </div>
          )}
          {isAuth && (
            <div className={styles.singLinks}>
              <CustomLink to={ERoutes.EDIT_ARTICLE} customClass={customLinksClasses.GREEN_SMALL}>
                EDIT article
              </CustomLink>
              <CustomLink to={ERoutes.NEW_ARTICLE} customClass={customLinksClasses.GREEN_SMALL}>
                Create article
              </CustomLink>
              <CustomLink to={ERoutes.EDIT_USER}>
                <div className={styles.profileInfo}>
                  <p className={'profileName'}>John Doe</p>
                  <AvatarLarge src={avatar}></AvatarLarge>
                </div>
              </CustomLink>
              <CustomLink to={ERoutes.HOME} customClass={customLinksClasses.BLACK_BIG}>
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
