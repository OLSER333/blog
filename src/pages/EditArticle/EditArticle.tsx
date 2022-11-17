import React, { FC } from 'react'
import styles from './EditArticle.module.scss'
import FormWindow from '../../components/UI/FormWindow/FormWindow'
import ArticleForm from '../../components/forms/ArticleForm/ArticleForm'

const EditArticle = () => (
  <FormWindow>
    <div style={{ width: '940px' }}>
      <ArticleForm title={'Edit article'} />
    </div>
  </FormWindow>
)

export default EditArticle
