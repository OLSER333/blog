import React, { FC } from 'react'
import styles from './ArticleForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EFormInps, Inputs } from '../../UI/FormWindow/FormWindow'
import Title, { titleColors } from '../../UI/Title/Title'
import TextInput from '../../UI/TextInput/TextInput'
import { FormErrorsMsg } from '../../../types/FormErrorsMsg'
import SubmitBtn from '../../UI/SubmitBtn/SubmitBtn'
import TextareaInput from '../../UI/TextareaInput/TextareaInput'
import EditTag from '../../UI/EditTag/EditTag'
import { IArticleToCreate } from '../../../models/IArticle'

interface ArticleFormProps {
  title: string
  onSubmitArticle?: (data: IArticleToCreate) => Promise<void>
}

const ArticleForm: FC<ArticleFormProps> = ({ title, onSubmitArticle }) => {
  const tags = ['I', 'love', 'Angelina']
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
    // eslint-disable-next-line no-debugger
    debugger
    if (onSubmitArticle) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onSubmitArticle(dataForSubmit)
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
        />
        <TextareaInput
          register={register(EFormInps.ART_TEXT, {
            required: true,
          })}
          label={'Text'}
          errors={errors}
          name={EFormInps.ART_TEXT}
          placeholder={'Text'}
        />

        <div>
          <label className={styles.tagsLabel}>Tags</label>
          <ul className={styles.editTagList}>
            {tags.map((el) => {
              return (
                <li key={el}>
                  <EditTag withAdd={false} disabled={true}>
                    {el}
                  </EditTag>
                </li>
              )
            })}
            <EditTag withAdd={true} disabled={false}>
              Tag
            </EditTag>
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
