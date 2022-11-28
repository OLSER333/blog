import React, { FC } from 'react'
import styles from './ArticleCard.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar, Button, Popconfirm } from 'antd'
import Title, { titleColors } from '../UI/Title/Title'
import Like from '../UI/Like/Like'
import Tag from '../UI/Tag/Tag'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { IArticle } from '../../models/IArticle'
import CustomLink from '../CustomLink/CustomLink'
import ReactMarkdown from 'react-markdown'
import { ERoutes } from '../../routes/routes'
import { useParams } from 'react-router-dom'

interface IArticleItemProps {
  item: IArticle
  showBody: boolean
}

const ArticleCard: FC<IArticleItemProps> = ({ item, showBody }) => {
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
  } = item
  const dateArt = new Date(createdAt)

  const editBtn = {
    color: ' var(--success-color)',
    border: '1px solid  var(--success-color)',
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <CustomLink to={`${ERoutes.ARTICLES}/${slug}`}>
            <Title color={titleColors.BLUE}>{title}</Title>
          </CustomLink>
          <Like favorited={favorited} favoritesCount={favoritesCount}></Like>
        </div>
        {tagList && <Tag>{tagList[0]}</Tag>}
      </div>
      <div className={styles.cardAuthor}>
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{author.username}</p>
          <p className={styles.data}>{`${dateArt.toLocaleString('default', {
            month: 'long',
          })} ${dateArt.getDate()},${dateArt.getFullYear()}`}</p>
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
        <CustomLink to={ERoutes.EDIT_ARTICLE}>
          <Button style={editBtn}>Edit</Button>
        </CustomLink>
      </div>
      {showBody && (
        <div className={styles.body}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default ArticleCard
