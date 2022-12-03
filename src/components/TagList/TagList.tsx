import React, { FC } from 'react'
import styles from './TagList.module.scss'
import EditTag from '../UI/EditTag/EditTag'

interface TagListProps {
  tags: string[]
  onAddTag: (newTag: string) => void
  onDelTag: (key: string) => void
}

const TagList: FC<TagListProps> = ({ tags, onDelTag, onAddTag }) => {
  return (
    <>
      {tags &&
        tags.map((el) => {
          return (
            <li key={el}>
              <EditTag withAdd={false} disabled={true} onDelTag={() => onDelTag(el)}>
                {el}
              </EditTag>
            </li>
          )
        })}
      <EditTag
        onAddTag={(newTagValue) => onAddTag(newTagValue)}
        withAdd={true}
        disabled={false}
      ></EditTag>
    </>
  )
}

export default TagList
