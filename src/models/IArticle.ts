import { IProfile } from './IProfile'

export interface IArticleToCreateWithoutWrap {
  title: 'string'
  description: 'string'
  body: 'string'
  tagList: string[]
}

export interface IArticleToCreate {
  article: {
    title: 'string'
    description: 'string'
    body: 'string'
    tagList: string[]
  }
}

export interface IArticle {
  article: {
    slug: string
    title: string
    description: string
    body: string
    tagList: string[]
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritesCount: number
    author: IProfile
  }
}

export interface IArticleWithoutWrap {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: IProfile
}

export interface IArticlesForRender {
  articles: IArticleWithoutWrap[]
  articlesCount: 0
}
