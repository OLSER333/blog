import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink, { customLinksClasses } from '../CustomLink/CustomLink'

import styles from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import Title, { titleColors } from '../UI/Title/Title'
import { ERoutes } from '../../routes/routes'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { Spin } from 'antd'
import { delToken, isValidToken, TOKEN } from '../../utils/tokenLogic'
import { useStorageWatch } from '../../hooks/useStorageWatch'
import { useAppDispatch, useAppSelector } from '../../redux'
import { loginUser, logoutUser } from '../../redux/commonSlice'
// import { Ipost, useGetPostsQuery } from '../../redux'

const Layout = () => {
  const dispatch = useAppDispatch()
  // useStorageWatch(TOKEN)
  // type NavLinkclassNameType = { isActive: boolean; isPending: boolean }
  // const isAuth = isValidToken()
  // const [isAuth, setIsAtuh] = useState(isValidToken())

  const { isAuth } = useAppSelector((state) => state.commonSlice)

  // console.log('isValid:', isAuth)
  // ==================================================================
  // const [numOfPost, setNumOfPost] = useState('1')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { data = [], isLoading } = useGetPostsQuery(numOfPost)

  function logoutWithRedirect() {
    console.log('logout yoг ')
    dispatch(logoutUser())
    delToken()
  }

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
              <CustomLink to={ERoutes.NEW_ARTICLE} customClass={customLinksClasses.GREEN_SMALL}>
                Create article
              </CustomLink>
              <CustomLink to={ERoutes.EDIT_USER}>
                <div className={styles.profileInfo}>
                  <p className={'profileName'}>John Doe</p>
                  <AvatarLarge src={avatar}></AvatarLarge>
                </div>
              </CustomLink>
              <CustomLink
                customLogic={() => logoutWithRedirect()}
                to={ERoutes.HOME}
                customClass={customLinksClasses.BLACK_BIG}
              >
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
