import React, { useEffect, useState } from 'react'
import styles from './Articles.module.scss'
import { Button, Pagination, Spin } from 'antd'
// import 'antd/dist/antd.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

import { useGetArticlesQuery } from '../../redux'
import { IArticle } from '../../models/IArticle'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const Articles = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log('Articles location', location)
  // могу вытащить отсюда search 20 и запихнуть в useGetArticlesQuery
  // const [page, setPagPage] = useState<number>(
  //   location.search ? Number(location.search.replace(/\D/gi, '')) / 20 + 1 : 1,
  // )
  const [page, setPage] = useState(0)
  const limit = 10
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isLoading, data, error } = useGetArticlesQuery(page, limit)
  // useEffect(() => {
  //   getArticles(page, limit)
  // }, [page])
  //
  //

  // console.log(Number(location.search.replace(/\D/gi, '')))

  // const handlePagination = (page: number) => {
  //   console.log('page from pag', page)
  //   setPagPage(page)
  //   if (page > 1) {
  //     navigate(`?offset=${(page - 1) * 20}`)
  //   } else {
  //     navigate('')
  //   }
  // }
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
            current={page}
            onChange={(page) => setPage(page)}
            pageSize={10}
            total={data.articlesCount}
            showSizeChanger={false}
          />
        </>
      )}
    </>
  )
}
export default Articles
