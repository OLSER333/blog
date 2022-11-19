import React, { useState } from 'react'
import styles from './Articles.module.scss'
import { Button, Pagination, Spin } from 'antd'
// import 'antd/dist/antd.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

import { useGetArticlesQuery } from '../../redux'
import { IArticle } from '../../models/IArticle'

const Articles = () => {
  const [pagPage, setPagPage] = useState<number>(0)
  const { isLoading, data, error } = useGetArticlesQuery(pagPage * 20)
  console.log(data)

  return (
    <>
      {error && <h1>EROROROROR</h1>}
      {isLoading && <Spin></Spin>}
      {data && (
        <>
          <ul className={styles.list}>
            {data.articles.map((el: IArticle) => (
              <ArticleCard showBody={false} key={el.slug} item={el}></ArticleCard>
            ))}
          </ul>
          <Pagination
            onChange={(page) => setPagPage(page - 1)}
            pageSize={20}
            total={data.articlesCount}
            showSizeChanger={false}
          />
        </>
      )}
    </>
  )
}

export default Articles
