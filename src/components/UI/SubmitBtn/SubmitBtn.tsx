import React, { FC } from 'react'
import styles from './SubmitBtn.module.scss'
import { Button } from 'antd'

interface SubmitBtnProps {
  children: string
}

const SubmitBtn: FC<SubmitBtnProps> = ({ children }) => (
  <Button type={'primary'} className={styles.submitBtn} htmlType='submit'>
    {children}
  </Button>
)

export default SubmitBtn
