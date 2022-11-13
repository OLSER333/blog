import React, { FC } from 'react'
import cl from './Like.module.scss'
import like from '../../../assets/img/like.svg'
import activeLike from '../../../assets/img/active-like.svg'

interface LikeProps {
  // changed: boolean or isAuth: ??
  favorited: boolean
  favoritesCount: number
}

const Like: FC<LikeProps> = ({ favorited, favoritesCount }) => {
  return (
    <button className={cl.btn}>
      <img src={favorited ? activeLike : like} alt='' />
      {favoritesCount}
    </button>
  )
}

export default Like
