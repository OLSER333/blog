import React, { FC, useEffect } from 'react'
import styles from './EditArticle.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import { useNavigate } from 'react-router-dom'
import { usePostArticleMutation } from '../../redux'
import { IArticleToCreate } from '../../models/IArticle'
import { ERoutes } from '../../routes/routes'

const EditArticle = () => (
  // const navigate = useNavigate()
  // const [postArticle, { data, isSuccess, error }] = usePostArticleMutation()
  //
  // const editArticle = async (data: IArticleToCreate) => {
  //   const a = {
  //     article: {
  //       data,
  //     },
  //   }
  //   // eslint-disable-next-line no-debugger
  //   debugger
  //   console.log('for Create', a)
  //   // await postArticle({
  //   //   article: {
  //   //     data,
  //   //   },
  //   // })
  // }
  //
  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data) {
  //       navigate(ERoutes.ARTICLES)
  //     }
  //   }
  // }, [isSuccess])
  // useEffect(() => {
  //   if (error) {
  //     console.log('here eroror', error)
  //   }
  // }, [error])

  <FormWindow>
    <div style={{ width: '940px' }}>
      <ArticleForm title={'Edit article'} />
    </div>
  </FormWindow>
)

export default EditArticle
