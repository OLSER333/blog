import React, { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetArticleQuery } from '../../redux'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { Spin } from 'antd'
import { ERoutes } from '../../routes/routes'
import ErrorAlert from '../../components/UI/ErrorAlert/ErrorAlert'
import { toast } from 'react-toastify'

const SingleArticle = () => {
  const params = useParams()
  const { isLoading, error, data } = useGetArticleQuery(`${(ERoutes.OFFSET_ARTICLES, params.slug)}`)

  return (
    <>
      {/* eslint-disable-next-line*/}
      {error && <ErrorAlert>{"Can't load article"}</ErrorAlert>}
      {isLoading && <Spin />}
      {data && <ArticleCard showBody={true} item={data.article} />}
    </>
  )
}

export default SingleArticle
