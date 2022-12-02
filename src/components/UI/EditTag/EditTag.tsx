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

// !!!!!!! сделай проверку на уже существ. тег
const EditTag: FC<EditTagProps> = ({ children = '', withAdd, disabled, onAddTag, onDelTag }) => {
  // const inp = useRef<HTMLInputElement>(null)
  const [inpVal, setInpVal] = useState<string>(children)
  // const handleInp = () => {}
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
        // ref={inp}
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
