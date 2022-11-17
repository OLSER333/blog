import React, { FC } from 'react'
import styles from './SubmitBtn.module.scss'
import { Button } from 'antd'

interface SubmitBtnProps {
  children: string
  addStyles?: any
}

const SubmitBtn: FC<SubmitBtnProps> = ({ children, addStyles }) => (
  <Button type={'primary'} style={addStyles} className={styles.submitBtn} htmlType='submit'>
    {children}
  </Button>
)

export default SubmitBtn
