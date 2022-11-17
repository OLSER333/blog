import React, { FC } from 'react'
import styles from './ArticleItem.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar, Button, Popconfirm } from 'antd'
import Title, { titleColors } from '../UI/Title/Title'
import Like from '../UI/Like/Like'
import Tag from '../UI/Tag/Tag'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'

interface IArticleItemProps {
  children: string
}

const ArticleItem: FC<IArticleItemProps> = () => {
  const editBtn = {
    color: ' var(--success-color)',
    border: '1px solid  var(--success-color)',
  }
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Title color={titleColors.BLUE}>Some article title</Title>
          <Like favorited={false} favoritesCount={12}></Like>
        </div>
        <Tag>SomeTag</Tag>
      </div>
      <div className={styles.cardAuthor}>
        <div className={styles.authorInfo}>
          <p className={'profileName'}>John Doe</p>
          <p className={styles.data}>March 5, 2020</p>
        </div>
        <AvatarLarge src={avatar} />
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </div>
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
