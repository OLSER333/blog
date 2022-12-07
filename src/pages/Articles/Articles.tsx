import React, { useEffect, useState } from 'react'
import styles from './Articles.module.scss'
import { Pagination, Spin } from 'antd'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

import { useAppDispatch, useAppSelector, useLazyGetArticlesQuery } from '../../redux'
import { setCurArticlesPage } from '../../redux/commonSlice'
import ErrorAlert from '../../components/UI/ErrorAlert/ErrorAlert'

const Articles = () => {
  const dispatch = useAppDispatch()
  const { curArticlesPage } = useAppSelector((state) => state.commonSlice)

  const [page, setPage] = useState(curArticlesPage)
  const limit = 10

  const [getArticles, { isLoading, data, error }] = useLazyGetArticlesQuery()

  const onPageChange = (page: number) => {
    setPage(page)
    dispatch(setCurArticlesPage(page))
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    getArticles({ page, limit }, true)
  }, [])
  useEffect(() => {
    getArticles({ page, limit }, true)
  }, [page])

  const hasData = !isLoading && !error && data

  return (
    <>
      {/* eslint-disable-next-line*/}
      {error && <ErrorAlert>{"Can't load articles"}</ErrorAlert>}
      {isLoading && <Spin></Spin>}
      {hasData && (
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
