import React, { useEffect, useState } from 'react'
import styles from './Articles.module.scss'
import { Alert, Button, Pagination, Spin } from 'antd'
// import 'antd/dist/antd.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

import { useAppDispatch, useAppSelector, useLazyGetArticlesQuery } from '../../redux'
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { setCurArticlesPage } from '../../redux/commonSlice'
import ErrorAlert from '../../components/UI/ErrorAlert/ErrorAlert'

const Articles = () => {
  const dispatch = useAppDispatch()
  const { curArticlesPage } = useAppSelector((state) => state.commonSlice)
  // const navigate = useNavigate()
  // const location = useLocation()
  // console.log('Articles location', location)
  // могу вытащить отсюда search 20 и запихнуть в useGetArticlesQuery
  // const [page, setPagPage] = useState<number>(
  //   location.search ? Number(location.search.replace(/\D/gi, '')) / 20 + 1 : 1,
  // )
  const [page, setPage] = useState(curArticlesPage)
  const limit = 10

  const [getArticles, { isLoading, data, error }] = useLazyGetArticlesQuery()

  const onPageChange = (page: number) => {
    setPage(page)
    dispatch(setCurArticlesPage(page))
  }
  useEffect(() => {
    getArticles({ page, limit }, true)
  }, [])
  useEffect(() => {
    if (page === 1) {
      getArticles({ page, limit })
    } else {
      getArticles({ page, limit }, true)
    }
  }, [page])
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
      {/* eslint-disable-next-line*/}
      {error && <ErrorAlert>{"Can't load articles"}</ErrorAlert>}
      {isLoading && <Spin></Spin>}
      {data && (
        <>
          <ul className={styles.list}>
            {data.articles.map((article) => (
              <ArticleCard showBody={false} key={article.slug} item={article}></ArticleCard>
            ))}
          </ul>
          <Pagination
            current={page}
            onChange={(page) => onPageChange(page)}
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
