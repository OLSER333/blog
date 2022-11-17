import React, { FC } from 'react'
import styles from './EditTag.module.scss'
import { Button } from 'antd'

interface EditTagProps {
  children: string
  withAdd: boolean
  disabled: boolean
}

// !!!!!!! сделай проверку на уже существ. тег
const EditTag: FC<EditTagProps> = ({ children, withAdd, disabled }) => {
  return (
    <div className={styles.editTag}>
      <input
        readOnly={disabled}
        type='text'
        className={`${disabled ? styles.disableFocus : ''} ${styles.inp}`}
        placeholder={children}
      />
      {withAdd ? (
        <Button ghost type={'primary'}>
          Add Tag
        </Button>
      ) : (
        <Button danger>Delete</Button>
      )}
    </div>
  )
}

export default EditTag
