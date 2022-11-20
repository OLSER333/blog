import React, { FC } from 'react'
import styles from './SingleArticle.module.scss'
import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '../../redux'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { Spin } from 'antd'
import ReactMarkdown from 'react-markdown'
import { ERoutes } from '../../routes/routes'

// interface SingleArticleProps {}
// : FC<SingleArticleProps>
const SingleArticle = () => {
  const params = useParams()
  console.log(params)
  const { isLoading, error, data } = useGetArticleQuery(`${(ERoutes.OFFSET_ARTICLES, params.slug)}`)
  console.log('da', data)
  console.log(error)

  return (
    <>
      {error && <h1>EROROROROR</h1>}
      {isLoading && <Spin></Spin>}
      {data && <ArticleCard showBody={true} item={data.article} />}
    </>
  )
}

export default SingleArticle
