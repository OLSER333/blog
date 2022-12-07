import React, { FC, memo, useEffect } from 'react'
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
import {
  useAppSelector,
  useDelArticleMutation,
  useLikeArticleMutation,
  useUnlikeArticleMutation,
} from '../../redux'
import { loginUser, setCurArticlesPage } from '../../redux/commonSlice'
import { toast } from 'react-toastify'

interface IArticleItemProps {
  item: IArticleWithoutWrap
  showBody: boolean
}

const ArticleCard: FC<IArticleItemProps> = ({ item, showBody }) => {
  const navigate = useNavigate()
  const [delArticle, { error, isSuccess }] = useDelArticleMutation()
  const [likeArticle, { error: likeError }] = useLikeArticleMutation()
  const [unlikeArticle, { error: unlikeError }] = useUnlikeArticleMutation()
  const { userData } = useAppSelector((state) => state.commonSlice)
  const { title, body, author, favorited, favoritesCount, slug, createdAt, tagList, description } =
    item
  const dateArt = new Date(createdAt)

  useEffect(() => {
    if (isSuccess) {
      navigate(ERoutes.ARTICLES)
      toast.success('Successfully deleted!')
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      toast.error('Something went wrong! Try again.')
    }
  }, [error])

  const editBtn = {
    color: ' var(--success-color)',
    border: '1px solid  var(--success-color)',
  }

  const onDeleteArticle = () => {
    delArticle(slug)
    setCurArticlesPage(1)
  }

  const toggleLike = () => {
    if (!favorited) likeArticle(slug)
    else unlikeArticle(slug)
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <CustomLink to={`${ERoutes.ARTICLES}/${slug}`}>
            <Title color={titleColors.BLUE}>{title}</Title>
          </CustomLink>
          <Like
            favorited={favorited}
            favoritesCount={favoritesCount}
            toggleLike={toggleLike}
          ></Like>
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
          <CustomLink to={`${ERoutes.EDIT_ARTICLE}`} state={{ title, body, description, tagList }}>
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

export default memo(ArticleCard)
