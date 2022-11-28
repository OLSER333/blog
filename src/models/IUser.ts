export interface IUserSignIn {
  user: {
    email: string
    password: string
  }
}

export interface IUserSignInResponce {
  data: {
    user: {
      email: string
      username: string
      token: string
      bio?: 'string'
      image?: 'string'
    }
  }
}
export type IUserSignInRequest = (dataForSign: IUserSignIn) => IUserSignInResponce
export interface IResponceError {
  errors: {
    body: ['string']
  }
}
