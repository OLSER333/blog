import React, { FC } from 'react'
import styles from './Tag.module.scss'

interface ITagProps {
  children: string
}

const Tag: FC<ITagProps> = ({ children }) => <div className={styles.tag}>{children}</div>

export default Tag
