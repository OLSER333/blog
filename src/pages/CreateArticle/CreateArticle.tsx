import React, { FC } from 'react'
import styles from './CreateArticle.module.scss'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'
import FormWindow from '../../components/UI/FormWindow/FormWindow'

const CreateArticle = () => (
  <FormWindow>
    <div style={{ width: '940px' }}>
      <ArticleForm title={'Create new article'} />
    </div>
  </FormWindow>
)

export default CreateArticle
