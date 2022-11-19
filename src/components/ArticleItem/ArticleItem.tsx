import React, { FC } from 'react'
import styles from './ArticleItem.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar, Button, Popconfirm } from 'antd'
import Title, { titleColors } from '../UI/Title/Title'
import Like from '../UI/Like/Like'
import Tag from '../UI/Tag/Tag'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { IArticle } from '../../models/IArticle'

interface IArticleItemProps {
  children: IArticle
}

const ArticleItem: FC<IArticleItemProps> = ({ children }) => {
  const {
    title,
    body,
    author,
    favorited,
    favoritesCount,
    slug,
    createdAt,
    tagList,
    updatedAt,
    description,
  } = children

  const editBtn = {
    color: ' var(--success-color)',
    border: '1px solid  var(--success-color)',
  }
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Title color={titleColors.BLUE}>{title}</Title>
          <Like favorited={favorited} favoritesCount={favoritesCount}></Like>
        </div>
        <Tag>{tagList[0]}</Tag>
      </div>
      <div className={styles.cardAuthor}>
        <div className={styles.authorInfo}>
          <p className={'profileName'}>{author.username}</p>
          <p className={styles.data}>{createdAt}</p>
        </div>
        <AvatarLarge src={author.image} />
      </div>
      <div className={styles.text}>{description}</div>
      <div className={styles.btns}>
        <Popconfirm
          title='Are you sure to delete this article?'
          okText='Yes'
          cancelText='No'
          placement={'right'}
        >
          <Button ghost danger>
            Delete
          </Button>
        </Popconfirm>
        <Button style={editBtn}>Edit</Button>
      </div>
    </div>
  )
}

export default ArticleItem
