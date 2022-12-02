import React, { FC } from 'react'
import styles from './TagList.module.scss'
import EditTag from '../UI/EditTag/EditTag'
import { v4 } from 'uuid'
import { ITag } from '../forms/ArticleForm/ArticleForm'

interface TagListProps {
  tags: ITag[]
  onAddTag: (newTag: string) => void
  onDelTag: (key: string) => void
}

const TagList: FC<TagListProps> = ({ tags, onDelTag, onAddTag }) => {
  return (
    <>
      {tags &&
        tags.map((el: ITag) => {
          return (
            <li key={el.key}>
              <EditTag withAdd={false} disabled={true} onDelTag={() => onDelTag(el.key)}>
                {el.value}
              </EditTag>
            </li>
          )
        })}
      <EditTag
        key={v4()}
        onAddTag={(newTagValue) => onAddTag(newTagValue)}
        withAdd={true}
        disabled={false}
      ></EditTag>
    </>
  )
}

export default TagList
