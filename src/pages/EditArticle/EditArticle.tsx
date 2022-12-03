import React, { FC, useEffect } from 'react'
import styles from './EditArticle.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePutArticleMutation } from '../../redux'
import { IArticleToCreate } from '../../models/IArticle'
import { ERoutes } from '../../routes/routes'

const EditArticle = () => {
  const location = useLocation()
  console.log('edit + state', location)

  const navigate = useNavigate()
  const [putArticle, { data, isSuccess, error }] = usePutArticleMutation()

  const editArticle = async (body: IArticleToCreate) => {
    console.log('for Edit', body)
    const slug = location.pathname.split('/')[2]
    await putArticle({ body, slug })
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
        <ArticleForm
          stateForEdit={location.state}
          onSubmitArticle={editArticle}
          title={'Edit article'}
        />
      </div>
    </FormWindow>
  )
}
export default EditArticle
