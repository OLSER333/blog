import React, { FC } from 'react'
import styles from './ArticleItem.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar } from 'antd'
import Title, { titleColors } from '../Title/Title'
import Like from '../UI/Like/Like'
import Tag from '../UI/Tag/Tag'

interface ArticleItemProps {
  children: string
}

const ArticleItem: FC<ArticleItemProps> = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div>
          <Title color={titleColors.BLUE}>Some article title</Title>
          <Like favorited={false} favoritesCount={12}></Like>
        </div>
        <Tag>SomeTag</Tag>
      </div>
      <div className={styles.cardAuthor}>
        <div className={styles.authorInfo}>
          <p className={styles.name}>John Doe</p>
          <p className={styles.data}></p>
        </div>
        <Avatar src={avatar}></Avatar>
      </div>
    </div>
  )
}

export default ArticleItem