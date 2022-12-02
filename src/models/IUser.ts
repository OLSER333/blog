export interface IUserSignUp {
  user: {
    email: string
    username: string
    password: string
  }
}

export interface IUserSignIn {
  user: {
    email: string
    password: string
  }
}

export interface IUser {
  email: string | null
  username: string | null
  token: string | null
  bio?: string | null
  image?: string | null
}

export interface IUserSignInResponce {
  user: IUser
}
export type IUserSignInRequest = (dataForSign: IUserSignIn) => IUserSignInResponce
export interface IResponceError {
  errors: {
    body: string[]
  }
}
