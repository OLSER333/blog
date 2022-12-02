import React, { FC } from 'react'
import styles from './Like.module.scss'
import like from '../../../assets/img/like.svg'
import activeLike from '../../../assets/img/active-like.svg'
import { useAppSelector } from '../../../redux'

interface ILikeProps {
  // changed: boolean or isAuth: ??
  favorited: boolean
  favoritesCount: number
  toggleLike: () => void
}

const Like: FC<ILikeProps> = ({ favorited, favoritesCount, toggleLike }) => {
  const { commonSlice } = useAppSelector((state) => state)
  const isAuth = commonSlice.userData.token
  return (
    <button
      className={`${styles.btn} ${!isAuth ? styles.disabled : ''}`}
      onClick={() => toggleLike()}
    >
      <img src={favorited && isAuth ? activeLike : like} alt='' />
      {favoritesCount}
    </button>
  )
}

export default Like
