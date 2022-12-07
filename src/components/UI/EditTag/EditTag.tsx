import React, { FC, useState } from 'react'
import styles from './EditTag.module.scss'
import { Button } from 'antd'

interface EditTagProps {
  children?: string
  withAdd: boolean
  disabled: boolean
  onAddTag?: (newTag: string) => void
  onDelTag?: () => void
}

const EditTag: FC<EditTagProps> = ({ children = '', withAdd, disabled, onAddTag, onDelTag }) => {
  const [inpVal, setInpVal] = useState<string>(children)
  const addWithClean = () => {
    if (onAddTag) {
      onAddTag(inpVal)
      setInpVal('')
    }
  }
  return (
    <div className={styles.editTag}>
      <input
        readOnly={disabled}
        value={inpVal}
        onInput={(e) => setInpVal(e.currentTarget.value)}
        type='text'
        className={`${disabled ? styles.disableFocus : ''} ${styles.inp}`}
        placeholder={children}
      />
      {withAdd ? (
        <Button ghost type={'primary'} onClick={onAddTag && (() => addWithClean())}>
          Add Tag
        </Button>
      ) : (
        <Button danger onClick={onDelTag && (() => onDelTag())}>
          Delete
        </Button>
      )}
    </div>
  )
}

export default EditTag
