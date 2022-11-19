import React, { FC } from 'react'
import styles from './SingleArticle.module.scss'
import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '../../redux'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { Spin } from 'antd'
import ReactMarkdown from 'react-markdown'

// interface SingleArticleProps {}
// : FC<SingleArticleProps>
const SingleArticle = () => {
  const params = useParams()
  console.log(params)
  const { isLoading, error, data } = useGetArticleQuery(params.slug)
  console.log('da', data)
  console.log(error)

  return (
    <>
      {error && <h1>EROROROROR</h1>}
      {isLoading && <Spin></Spin>}
      {data && (
        <div className={styles.singleArt}>
          {/* eslint-disable-next-line react/no-children-prop */}
          <ArticleCard showBody={true} item={data.article} />
        </div>
      )}
    </>
  )
}

export default SingleArticle
