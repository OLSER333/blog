import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink, { customLinksClasses } from '../CustomLink/CustomLink'

import styles from './Layout.module.scss'
import avatar from '../../assets/img/avatar.png'
import { ERoutes } from '../../routes/routes'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { delToken } from '../../utils/tokenLogic'
import { useAppDispatch, useAppSelector } from '../../redux'
import { logoutUser } from '../../redux/commonSlice'
import { toast } from 'react-toastify'

const Layout = () => {
  const dispatch = useAppDispatch()
  const { userData } = useAppSelector((state) => state.commonSlice)

  function logoutWithRedirect() {
    delToken()
    dispatch(logoutUser())
    toast.info('You have logged out.')
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
          {!userData.token && (
            <div className={styles.singLinks}>
              <CustomLink to={ERoutes.SIGN_IN} customClass={customLinksClasses.USUAL}>
                Sign In
              </CustomLink>
              <CustomLink to={ERoutes.SIGN_UP} customClass={customLinksClasses.GREEN_BIG}>
                Sign Up
              </CustomLink>
            </div>
          )}
          {userData.token && (
            <div className={styles.singLinks}>
              <CustomLink to={ERoutes.NEW_ARTICLE} customClass={customLinksClasses.GREEN_SMALL}>
                Create article
              </CustomLink>
              <CustomLink to={ERoutes.EDIT_USER}>
                <div className={styles.profileInfo}>
                  <p className={'profileName'}>{userData.username}</p>
                  <AvatarLarge src={userData.image ? userData.image : avatar}></AvatarLarge>
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
