import React, { FC } from 'react'
import styles from './Like.module.scss'
import like from '../../../assets/img/like.svg'
import activeLike from '../../../assets/img/active-like.svg'

interface ILikeProps {
  // changed: boolean or isAuth: ??
  favorited: boolean
  favoritesCount: number
}

const Like: FC<ILikeProps> = ({ favorited, favoritesCount }) => {
  return (
    <button className={styles.btn}>
      <img src={favorited ? activeLike : like} alt='' />
      {favoritesCount}
    </button>
  )
}

export default Like
