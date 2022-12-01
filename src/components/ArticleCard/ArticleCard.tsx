import React, { FC } from 'react'
import styles from './ArticleCard.module.scss'
import avatar from '../../assets/img/avatar.png'
import { Avatar, Button, Popconfirm } from 'antd'
import Title, { titleColors } from '../UI/Title/Title'
import Like from '../UI/Like/Like'
import Tag from '../UI/Tag/Tag'
import AvatarLarge from '../UI/AvatarLarge/AvatarLarge'
import { IArticle, IArticleWithoutWrap } from '../../models/IArticle'
import CustomLink from '../CustomLink/CustomLink'
import ReactMarkdown from 'react-markdown'
import { ERoutes } from '../../routes/routes'
import { useNavigate, useParams } from 'react-router-dom'
import { IProfile } from '../../models/IProfile'
import { v4 } from 'uuid'
import { useAppSelector, useLazyDelArticleQuery } from '../../redux'
import { setCurArticlesPage } from '../../redux/commonSlice'

interface IArticleItemProps {
  item: IArticleWithoutWrap
  showBody: boolean
}

const ArticleCard: FC<IArticleItemProps> = ({ item, showBody }) => {
  const navigate = useNavigate()
  const [delArticle, { isError }] = useLazyDelArticleQuery()
  const { userData } = useAppSelector((state) => state.commonSlice)
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

  const onDeleteArticle = () => {
    delArticle(slug, true)
    setCurArticlesPage(1)
    navigate(ERoutes.ARTICLES)
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
        <ul className={styles.tagList}>
          {tagList && tagList.map((tag) => <Tag key={v4()}>{tag}</Tag>)}
        </ul>
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
      {showBody && author.username === userData.username && (
        <div className={styles.btns}>
          <Popconfirm
            title='Are you sure to delete this article?'
            okText='Yes'
            cancelText='No'
            placement={'right'}
            onConfirm={() => onDeleteArticle()}
          >
            <Button ghost danger>
              Delete
            </Button>
          </Popconfirm>
          <CustomLink to={ERoutes.EDIT_ARTICLE}>
            <Button style={editBtn}>Edit</Button>
          </CustomLink>
        </div>
      )}
      {showBody && (
        <div className={styles.body}>
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default ArticleCard
