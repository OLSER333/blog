import React from 'react'
import styles from './Articles.module.scss'
import { Button, Pagination, Spin } from 'antd'
// import 'antd/dist/antd.css'
import ArticleItem from '../../components/ArticleItem/ArticleItem'

import { useGetArticlesQuery } from '../../redux'
import { IArticle } from '../../models/IArticle'

const Articles = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isLoading, data } = useGetArticlesQuery()
  console.log(data)

  return (
    <>
      {isLoading && <Spin></Spin>}
      {data && (
        <ul className={styles.list}>
          {data.articles.map((el: IArticle) => (
            <ArticleItem key={el.slug}>{el}</ArticleItem>
          ))}
        </ul>
      )}
      <Pagination />
    </>
  )
}

export default Articles
