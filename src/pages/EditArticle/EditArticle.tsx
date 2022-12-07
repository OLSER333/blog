import React, { useEffect } from 'react'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePutArticleMutation } from '../../redux'
import { IArticleToCreate } from '../../models/IArticle'
import { toast } from 'react-toastify'
import styles from './EditArticle.module.scss'
const EditArticle = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [putArticle, { data, isSuccess, error }] = usePutArticleMutation()

  const editArticle = async (body: IArticleToCreate) => {
    const slug = location.pathname.split('/')[2]
    await putArticle({ body, slug })
  }

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        navigate(-1)
        toast.success('Article has edited!')
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      toast.error('Something went wrong! Try again.')
    }
  }, [error])

  return (
    <FormWindow>
      <div className={styles.editArticle}>
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
