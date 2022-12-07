import React, { useEffect } from 'react'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import { usePostArticleMutation } from '../../redux'
import { IArticleToCreate } from '../../models/IArticle'
import { ERoutes } from '../../routes/routes'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from './CreateArticle.module.scss'

const CreateArticle = () => {
  const navigate = useNavigate()
  const [postArticle, { data, isSuccess, error }] = usePostArticleMutation()

  const createArticle = async (data: IArticleToCreate) => {
    await postArticle(data)
  }

  useEffect(() => {
    if (isSuccess) {
      if (data) {
        navigate(ERoutes.ARTICLES)
        toast.success('Your article has posted!')
      }
    }
  }, [isSuccess])
  useEffect(() => {
    if (error) {
      toast.error('Ooops! Something went wrong!')
    }
  }, [error])

  return (
    <FormWindow>
      <div className={styles.createArticle}>
        <ArticleForm title={'Create new article'} onSubmitArticle={createArticle} />
      </div>
    </FormWindow>
  )
}

export default CreateArticle
