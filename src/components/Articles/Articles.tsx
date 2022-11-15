import React from 'react'
import styles from './Articles.module.scss'
import { Pagination } from 'antd'
import ArticleItem from '../ArticleItem/ArticleItem'

// interface IArticlesProps {
//
// }

const Articles = () => {
  const arts = ['1', '2', '3']
  return (
    <>
      <ul className={styles.list}>
        {arts.map((el) => {
          return (
            <li key={el}>
              <ArticleItem>el</ArticleItem>
            </li>
          )
        })}
      </ul>
      <Pagination />
    </>
  )
}

export default Articles
