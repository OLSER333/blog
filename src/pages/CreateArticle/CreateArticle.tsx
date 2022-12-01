import React, { FC, useEffect } from 'react'
import styles from './CreateArticle.module.scss'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import { usePostArticleMutation } from '../../redux'
import { IArticleToCreate, IArticleToCreateWithoutWrap } from '../../models/IArticle'
import { ERoutes } from '../../routes/routes'
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {
  const navigate = useNavigate()
  const [postArticle, { data, isSuccess, error }] = usePostArticleMutation()

  const createArticle = async (data: IArticleToCreate) => {
    // eslint-disable-next-line no-debugger
    console.log('for Create', data)

    await postArticle(data)
  }

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        navigate(ERoutes.ARTICLES)
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      console.log('here eroror', error)
    }
  }, [error])

  return (
    <FormWindow>
      <div style={{ width: '940px' }}>
        <ArticleForm title={'Create new article'} onSubmitArticle={createArticle} />
      </div>
    </FormWindow>
  )
}

export default CreateArticle
