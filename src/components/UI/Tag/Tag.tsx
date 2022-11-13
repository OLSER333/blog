import React, { FC } from 'react'
import styles from './Tag.module.scss'

interface TagProps {
  children: string
}

const Tag: FC<TagProps> = ({ children }) => <div className={styles.tag}>{children}</div>

export default Tag
