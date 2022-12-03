import React, { FC, useState } from 'react'
import styles from './ArticleForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EFormInps, Inputs } from '../../UI/FormWindow/FormWindow'
import Title, { titleColors } from '../../UI/Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import TextareaInput from '../../UI/TextareaInput/TextareaInput'
import EditTag from '../../UI/EditTag/EditTag'
import { IArticleToCreate, IArticleToCreateWithoutWrap } from '../../../models/IArticle'
import { v4 } from 'uuid'
import TagList from '../../TagList/TagList'

interface ArticleFormProps {
  title: string
  onSubmitArticle?: (data: IArticleToCreate) => Promise<void>
  stateForEdit?: IArticleToCreateWithoutWrap
}

const ArticleForm: FC<ArticleFormProps> = ({ title, onSubmitArticle, stateForEdit }) => {
  console.log('stateForEdit in articleForm)', stateForEdit)
  const [tags, setTags] = useState<string[]>(stateForEdit?.tagList || [])
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ mode: 'onTouched' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    const dataForSubmit = {
      article: {
        ...data,
        tagList: tags,
      },
    }
    if (onSubmitArticle) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onSubmitArticle(dataForSubmit)
    }
  }

  const addTag = (newTag: string) => {
    if (newTag) {
      setTags((prev) => [...prev, newTag])
    }
  }
  const DelTag = (delTagKey: string) => {
    if (delTagKey) {
      setTags((prev) => prev.filter((tag) => tag !== delTagKey))
    }
  }

  return (
    <>
      <Title color={titleColors.BLACK}>{title}</Title>
      <form className={'authForm'} onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register(EFormInps.ART_TITLE, {
            required: true,
          })}
          type={'text'}
          label={'Title'}
          errors={errors}
          name={EFormInps.ART_TITLE}
          placeholder={'Title'}
          defValue={stateForEdit && stateForEdit.title}
        />
        <TextInput
          register={register(EFormInps.ART_SHORT_DESCR, {
            required: true,
          })}
          type={'text'}
          label={'Short description'}
          errors={errors}
          name={EFormInps.ART_SHORT_DESCR}
          placeholder={'Short description'}
          defValue={stateForEdit && stateForEdit.description}
        />
        <TextareaInput
          register={register(EFormInps.ART_TEXT, {
            required: true,
          })}
          label={'Text'}
          errors={errors}
          name={EFormInps.ART_TEXT}
          placeholder={'Text'}
          defValue={stateForEdit && stateForEdit.body}
        />

        <div>
          <label className={styles.tagsLabel}>Tags</label>
          <ul className={styles.editTagList}>
            <TagList
              tags={tags}
              onDelTag={(key) => DelTag(key)}
              onAddTag={(newTag) => addTag(newTag)}
            />
          </ul>
        </div>
        <SubmitBtn addStyles={style}>Send</SubmitBtn>
      </form>
    </>
  )
}

const style = {
  maxWidth: '320px',
}

export default ArticleForm
